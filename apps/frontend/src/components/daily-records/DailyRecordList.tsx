import React from 'react';
import { List, Datagrid, DateField, ReferenceField, TextField, EditButton, ShowButton, BooleanField, TopToolbar, CreateButton } from 'react-admin';

const DailyRecordListActions = () => {
  return (
    <TopToolbar>
      <CreateButton label="Nuevo Registro Diario" />
    </TopToolbar>
  );
};

const FullNameField = ({ source }) => {
  const record = useRecordContext();
  return <span>{record?.firstName} {record?.lastName}</span>;
};

const CustomBooleanField = ({ source }) => {
  const record = useRecordContext();
  return (
    <span>
      {record?.attendance ? '✅ Sí' : '❌ No'}
    </span>
  );
};

export const DailyRecordList = () => {
  return (
    <List actions={<DailyRecordListActions />}>
      <Datagrid rowClick="show">
        <DateField source="date" label="Fecha" />
        
        <ReferenceField 
          source="patientId" 
          reference="patients"
          label="Paciente"
        >
          <FullNameField />
        </ReferenceField>
        
        <ReferenceField 
          source="professionalId" 
          reference="professionals"
          label="Profesional"
        >
          <TextField source="name" />
        </ReferenceField>
        
        <ReferenceField 
          source="patientTherapyId" 
          reference="patient-therapies"
          label="Terapia"
        >
          <TextField source="therapyId" />
        </ReferenceField>
        
        <CustomBooleanField source="attendance" label="Asistió" />
        <TextField source="notes" label="Notas" />
        
        <EditButton />
        <ShowButton />
      </Datagrid>
    </List>
  );
};