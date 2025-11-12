import React from 'react';
import { List, Datagrid, DateField, ReferenceField, TextField, NumberField, EditButton, ShowButton, TopToolbar, CreateButton, useRecordContext } from 'react-admin';

const AuthorizationListActions = () => {
  return (
    <TopToolbar>
      <CreateButton label="Nueva Autorización" />
    </TopToolbar>
  );
};

const FullNameField = ({ source }) => {
  const record = useRecordContext();
  return <span>{record?.firstName} {record?.lastName}</span>;
};

const SessionsProgress = ({ source }) => {
  const record = useRecordContext();
  const total = record?.totalSessions || 0;
  const consumed = record?.consumedSessions || 0;
  const remaining = total - consumed;
  const percentage = total > 0 ? (consumed / total) * 100 : 0;
  
  return (
    <div style={{ minWidth: '120px' }}>
      <div>{consumed}/{total} sesiones</div>
      <div style={{ 
        width: '100%', 
        height: '8px', 
        backgroundColor: '#e5e7eb', 
        borderRadius: '4px',
        marginTop: '4px'
      }}>
        <div style={{ 
          width: `${percentage}%`, 
          height: '100%', 
          backgroundColor: percentage > 80 ? '#ef4444' : percentage > 50 ? '#f59e0b' : '#10b981',
          borderRadius: '4px'
        }} />
      </div>
      <div style={{ fontSize: '11px', color: '#6b7280' }}>
        {remaining} restantes
      </div>
    </div>
  );
};

export const AuthorizationOSList = () => {
  return (
    <List actions={<AuthorizationListActions />}>
      <Datagrid rowClick="show">
        <ReferenceField 
          source="patientId" 
          reference="patients"
          label="Paciente"
        >
          <FullNameField />
        </ReferenceField>
        
        <ReferenceField 
          source="patientTherapyId" 
          reference="patient-therapies"
          label="Terapia"
        >
          <TextField source="therapyId" />
        </ReferenceField>
        
        <DateField source="validFrom" label="Válido Desde" />
        <DateField source="validTo" label="Válido Hasta" />
        
        <SessionsProgress source="sessions" label="Progreso de Sesiones" />
        
        <EditButton />
        <ShowButton />
      </Datagrid>
    </List>
  );
};