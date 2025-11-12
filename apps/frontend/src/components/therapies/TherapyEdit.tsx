import React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';

export const TherapyEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="name" label="Nombre de Terapia" fullWidth />
      </SimpleForm>
    </Edit>
  );
};