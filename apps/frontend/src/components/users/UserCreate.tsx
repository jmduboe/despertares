import React from 'react';
import { Create, SimpleForm, TextInput, SelectInput, BooleanInput, PasswordInput } from 'react-admin';

const userRoles = [
  { id: 'ADMIN', name: 'Administrador' },
  { id: 'COORDINATOR', name: 'Coordinador' },
  { id: 'PROFESSIONAL', name: 'Profesional' },
  { id: 'ASSISTANT', name: 'Asistente' },
];

export const UserCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="email" label="Email" type="email" fullWidth />
        <PasswordInput source="password" label="Contraseña" />
        <SelectInput 
          source="role" 
          label="Rol" 
          choices={userRoles}
          defaultValue="PROFESSIONAL"
        />
        <BooleanInput source="active" label="Activo" defaultValue={true} />
      </SimpleForm>
    </Create>
  );
};