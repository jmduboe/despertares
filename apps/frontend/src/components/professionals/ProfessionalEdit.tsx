import React from 'react';
import { Edit, SimpleForm, TextInput, ReferenceInput, SelectInput, BooleanInput } from 'react-admin';

const userRoles = [
  { id: 'ADMIN', name: 'Administrador' },
  { id: 'COORDINATOR', name: 'Coordinador' },
  { id: 'PROFESSIONAL', name: 'Profesional' },
  { id: 'ASSISTANT', name: 'Asistente' },
];

export const ProfessionalEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="name" label="Nombre" fullWidth />
        <TextInput source="email" label="Email" type="email" fullWidth />
        <ReferenceInput source="userId" reference="users" label="Usuario Asociado">
          <SelectInput optionText="email" />
        </ReferenceInput>
        <BooleanInput source="active" label="Activo" />
      </SimpleForm>
    </Edit>
  );
};