import React from 'react';
import { Edit, SimpleForm, ReferenceInput, SelectInput, DateInput, required, useRedirect, useNotify } from 'react-admin';

export const PatientTherapyEdit = () => {
  const redirect = useRedirect();
  const notify = useNotify();

  const onSuccess = () => {
    notify('Asignación de terapia actualizada exitosamente');
    redirect('list', 'patient-therapies');
  };

  return (
    <Edit mutationOptions={{ onSuccess }}>
      <SimpleForm>
        <ReferenceInput 
          source="patientId" 
          reference="patients"
          validate={[required()]}
        >
          <SelectInput 
            optionText={(choice) => `${choice.firstName} ${choice.lastName}`}
            label="Paciente"
          />
        </ReferenceInput>

        <ReferenceInput 
          source="therapyId" 
          reference="therapies"
          validate={[required()]}
        >
          <SelectInput optionText="name" label="Tipo de Terapia" />
        </ReferenceInput>

        <ReferenceInput 
          source="professionalId" 
          reference="professionals"
          validate={[required()]}
        >
          <SelectInput optionText="name" label="Profesional Asignado" />
        </ReferenceInput>

        <DateInput 
          source="startDate" 
          label="Fecha de Inicio"
          validate={[required()]}
        />
        <DateInput 
          source="endDate" 
          label="Fecha de Fin"
          validate={[required()]}
        />
      </SimpleForm>
    </Edit>
  );
};