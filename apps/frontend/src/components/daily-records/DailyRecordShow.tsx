import React from 'react';
import { 
  Show, 
  SimpleShowLayout, 
  DateField, 
  ReferenceField, 
  TextField, 
  BooleanField,
  useRecordContext
} from 'react-admin';

const FullNameField = ({ source }) => {
  const record = useRecordContext();
  return <span>{record?.firstName} {record?.lastName}</span>;
};

const AttendanceBadge = ({ source }) => {
  const record = useRecordContext();
  return (
    <span 
      style={{
        backgroundColor: record?.attendance ? '#10b981' : '#ef4444',
        color: 'white',
        padding: '4px 8px',
        borderRadius: '4px',
        fontSize: '12px'
      }}
    >
      {record?.attendance ? 'ASISTIÓ' : 'AUSENTE'}
    </span>
  );
};

export const DailyRecordShow = () => {
  return (
    <Show>
      <SimpleShowLayout>
        <DateField source="date" label="Fecha de la Sesión" />
        
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
          label="Asignación de Terapia"
        >
          <TextField source="therapyId" />
        </ReferenceField>
        
        <AttendanceBadge source="attendance" label="Asistencia" />
        
        <TextField source="notes" label="Notas de la Sesión" />
      </SimpleShowLayout>
    </Show>
  );
};