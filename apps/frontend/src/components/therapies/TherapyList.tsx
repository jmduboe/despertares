import React from 'react';
import { List, Datagrid, TextField, EditButton, ShowButton, ReferenceField } from 'react-admin';

export const TherapyList = () => {
  return (
    <List>
      <Datagrid rowClick="show">
        <TextField source="name" label="Nombre de Terapia" />
        <EditButton />
        <ShowButton />
      </Datagrid>
    </List>
  );
};