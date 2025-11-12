import React from 'react';
import { Edit, SimpleForm, TextInput, DateInput, ReferenceInput, SelectInput, BooleanInput } from 'react-admin';

export const PatientEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="firstName" label="Nombre" fullWidth />
        <TextInput source="lastName" label="Apellido" fullWidth />
        <DateInput source="birthDate" label="Fecha de Nacimiento" />
        <TextInput source="healthInsurance" label="Obra Social" />
        <TextInput source="schoolShift" label="Turno Escolar" />
        <TextInput source="notes" label="Notas" multiline rows={3} />
      </SimpleForm>
    </Edit>
  );
};