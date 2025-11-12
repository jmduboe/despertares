import React from 'react';
import { Create, SimpleForm, TextInput } from 'react-admin';

export const TherapyCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="name" label="Nombre de Terapia" fullWidth />
      </SimpleForm>
    </Create>
  );
};