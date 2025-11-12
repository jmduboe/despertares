import React from 'react';
import { Edit, SimpleForm, TextInput, SelectInput, BooleanInput, PasswordInput } from 'react-admin';

const userRoles = [
  { id: 'ADMIN', name: 'Administrador' },
  { id: 'COORDINATOR', name: 'Coordinador' },
  { id: 'PROFESSIONAL', name: 'Profesional' },
  { id: 'ASSISTANT', name: 'Asistente' },
];

export const UserEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="email" label="Email" type="email" fullWidth disabled />
        <PasswordInput source="password" label="Nueva Contraseña" />
        <SelectInput 
          source="role" 
          label="Rol" 
          choices={userRoles}
        />
        <BooleanInput source="active" label="Activo" />
      </SimpleForm>
    </Edit>
  );
};