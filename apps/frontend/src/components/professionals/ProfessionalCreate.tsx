import React from 'react';
import { Create, SimpleForm, TextInput, BooleanInput } from 'react-admin';

export const ProfessionalCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="name" label="Nombre" fullWidth />
        <TextInput source="email" label="Email" type="email" fullWidth />
        <BooleanInput source="active" label="Activo" defaultValue={true} />
      </SimpleForm>
    </Create>
  );
};