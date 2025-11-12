import React from 'react';
import { Create, SimpleForm, ReferenceInput, SelectInput, DateInput, required, useRedirect, useNotify } from 'react-admin';

export const PatientTherapyCreate = () => {
  const redirect = useRedirect();
  const notify = useNotify();

  const onSuccess = () => {
    notify('Asignación de terapia creada exitosamente');
    redirect('list', 'patient-therapies');
  };

  return (
    <Create mutationOptions={{ onSuccess }}>
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
    </Create>
  );
};