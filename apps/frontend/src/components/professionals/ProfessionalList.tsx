import React from 'react';
import { List, Datagrid, TextField, EmailField, BooleanField, EditButton, ShowButton, ReferenceField } from 'react-admin';

export const ProfessionalList = () => {
  return (
    <List>
      <Datagrid rowClick="show">
        <TextField source="name" label="Nombre" />
        <EmailField source="email" label="Email" />
        <ReferenceField source="userId" reference="users" label="Usuario">
          <TextField source="email" />
        </ReferenceField>
        <BooleanField source="active" label="Activo" />
        <EditButton />
        <ShowButton />
      </Datagrid>
    </List>
  );
};