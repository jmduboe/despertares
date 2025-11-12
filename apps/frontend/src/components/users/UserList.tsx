import React from 'react';
import { List, Datagrid, TextField, EmailField, BooleanField, SelectField, EditButton, ShowButton } from 'react-admin';

const userRoles = [
  { id: 'ADMIN', name: 'Administrador' },
  { id: 'COORDINATOR', name: 'Coordinador' },
  { id: 'PROFESSIONAL', name: 'Profesional' },
  { id: 'ASSISTANT', name: 'Asistente' },
];

export const UserList = () => {
  return (
    <List>
      <Datagrid rowClick="show">
        <EmailField source="email" label="Email" />
        <SelectField 
          source="role" 
          label="Rol" 
          choices={userRoles}
        />
        <BooleanField source="active" label="Activo" />
        <EditButton />
        <ShowButton />
      </Datagrid>
    </List>
  );
};