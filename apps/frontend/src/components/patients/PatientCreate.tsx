import React from 'react';
import { Create, SimpleForm, TextInput, DateInput, SelectInput } from 'react-admin';

const schoolShifts = [
  { id: 'mañana', name: 'Mañana' },
  { id: 'tarde', name: 'Tarde' },
  { id: 'doble turno', name: 'Doble Turno' },
];

export const PatientCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="firstName" label="Nombre" fullWidth />
        <TextInput source="lastName" label="Apellido" fullWidth />
        <DateInput source="birthDate" label="Fecha de Nacimiento" />
        <TextInput source="healthInsurance" label="Obra Social" />
        <SelectInput 
          source="schoolShift" 
          label="Turno Escolar" 
          choices={schoolShifts}
        />
        <TextInput source="notes" label="Notas" multiline rows={3} />
      </SimpleForm>
    </Create>
  );
};