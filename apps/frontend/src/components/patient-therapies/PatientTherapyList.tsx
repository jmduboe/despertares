import React from 'react';
import { List, Datagrid, DateField, ReferenceField, TextField, EditButton, ShowButton, CreateButton, TopToolbar, useRecordContext } from 'react-admin';

const PatientTherapyListActions = () => {
  return (
    <TopToolbar>
      <CreateButton label="Nueva Asignación" />
    </TopToolbar>
  );
};

const FullNameField = ({ source }) => {
  const record = useRecordContext();
  return <span>{record?.firstName} {record?.lastName}</span>;
};

export const PatientTherapyList = () => {
  return (
    <List actions={<PatientTherapyListActions />}>
      <Datagrid rowClick="show">
        <ReferenceField 
          source="patientId" 
          reference="patients"
          label="Paciente"
        >
          <FullNameField />
        </ReferenceField>
        
        <ReferenceField 
          source="therapyId" 
          reference="therapies"
          label="Terapia"
        >
          <TextField source="name" />
        </ReferenceField>
        
        <ReferenceField 
          source="professionalId" 
          reference="professionals"
          label="Profesional"
        >
          <TextField source="name" />
        </ReferenceField>
        
        <DateField source="startDate" label="Inicio" />
        <DateField source="endDate" label="Fin" />
        
        <EditButton />
        <ShowButton />
      </Datagrid>
    </List>
  );
};