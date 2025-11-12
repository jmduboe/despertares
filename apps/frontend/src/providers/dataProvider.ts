import { fetchUtils } from 'react-admin';
import { DataProvider } from 'react-admin';

const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

const httpClient = async (url: string, options: any = {}) => {
  const token = localStorage.getItem('token');
  
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
  }

  if (token) {
    options.headers.set('Authorization', `Bearer ${token}`);
  }

  return fetchUtils.fetchJson(url, options);
};

export const dataProvider: DataProvider = {
  getList: async (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    
    const query = {
      page: page - 1,
      size: perPage,
      sort: field,
      order: order,
      filter: JSON.stringify(params.filter),
    };

    const url = `${apiUrl}/${resource}?${new URLSearchParams(query as any).toString()}`;
    
    const { json } = await httpClient(url);

    return {
      data: json.data || json,
      total: json.total || json.length,
    };
  },

  getOne: async (resource, params) => {
    const url = `${apiUrl}/${resource}/${params.id}`;
    const { json } = await httpClient(url);
    
    return {
      data: json,
    };
  },

  getMany: async (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    const url = `${apiUrl}/${resource}?${new URLSearchParams(query as any).toString()}`;
    const { json } = await httpClient(url);
    
    return {
      data: json.data || json,
    };
  },

  getManyReference: async (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    
    const query = {
      page: page - 1,
      size: perPage,
      sort: field,
      order: order,
      filter: JSON.stringify({
        ...params.filter,
        [params.target]: params.id,
      }),
    };

    const url = `${apiUrl}/${resource}?${new URLSearchParams(query as any).toString()}`;
    const { json } = await httpClient(url);
    
    return {
      data: json.data || json,
      total: json.total || json.length,
    };
  },

  update: async (resource, params) => {
    const url = `${apiUrl}/${resource}/${params.id}`;
    const { json } = await httpClient(url, {
      method: 'PATCH',
      body: JSON.stringify(params.data),
    });
    
    return {
      data: json,
    };
  },

  updateMany: async (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    const url = `${apiUrl}/${resource}?${new URLSearchParams(query as any).toString()}`;
    const { json } = await httpClient(url, {
      method: 'PATCH',
      body: JSON.stringify(params.data),
    });
    
    return {
      data: json,
    };
  },

  create: async (resource, params) => {
    const url = `${apiUrl}/${resource}`;
    const { json } = await httpClient(url, {
      method: 'POST',
      body: JSON.stringify(params.data),
    });
    
    return {
      data: json,
    };
  },

  delete: async (resource, params) => {
    const url = `${apiUrl}/${resource}/${params.id}`;
    const { json } = await httpClient(url, {
      method: 'DELETE',
    });
    
    return {
      data: json,
    };
  },

  deleteMany: async (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    const url = `${apiUrl}/${resource}?${new URLSearchParams(query as any).toString()}`;
    const { json } = await httpClient(url, {
      method: 'DELETE',
    });
    
    return {
      data: json,
    };
  },
};