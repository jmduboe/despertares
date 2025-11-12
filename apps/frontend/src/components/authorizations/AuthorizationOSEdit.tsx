import React from 'react';
import { Edit, SimpleForm, NumberInput, DateInput, useRedirect, useNotify } from 'react-admin';

export const AuthorizationOSEdit = () => {
  const redirect = useRedirect();
  const notify = useNotify();

  const onSuccess = () => {
    notify('Autorización actualizada exitosamente');
    redirect('list', 'authorizations');
  };

  return (
    <Edit mutationOptions={{ onSuccess }}>
      <SimpleForm>
        <NumberInput 
          source="totalSessions" 
          label="Total de Sesiones Autorizadas"
          min={1}
        />
        
        <DateInput 
          source="validFrom" 
          label="Válido Desde"
        />
        
        <DateInput 
          source="validTo" 
          label="Válido Hasta"
        />
        
        <NumberInput 
          source="consumedSessions" 
          label="Sesiones Consumidas"
          min={0}
        />
      </SimpleForm>
    </Edit>
  );
};