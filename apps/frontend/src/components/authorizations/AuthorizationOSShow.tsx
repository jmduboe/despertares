import React from 'react';
import { 
  Show, 
  SimpleShowLayout, 
  DateField, 
  ReferenceField, 
  TextField, 
  NumberField,
  useRecordContext
} from 'react-admin';

const FullNameField = ({ source }) => {
  const record = useRecordContext();
  return <span>{record?.firstName} {record?.lastName}</span>;
};

const SessionsProgressCard = ({ source }) => {
  const record = useRecordContext();
  const total = record?.totalSessions || 0;
  const consumed = record?.consumedSessions || 0;
  const remaining = total - consumed;
  const percentage = total > 0 ? (consumed / total) * 100 : 0;
  
  return (
    <div style={{
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      padding: '16px',
      backgroundColor: '#f9fafb'
    }}>
      <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: '600' }}>
        Progreso de Sesiones
      </h4>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
        <span>Consumidas: {consumed}</span>
        <span>Total: {total}</span>
      </div>
      <div style={{ 
        width: '100%', 
        height: '12px', 
        backgroundColor: '#e5e7eb', 
        borderRadius: '6px',
        overflow: 'hidden'
      }}>
        <div style={{ 
          width: `${percentage}%`, 
          height: '100%', 
          backgroundColor: percentage > 80 ? '#ef4444' : percentage > 50 ? '#f59e0b' : '#10b981',
          transition: 'width 0.3s ease'
        }} />
      </div>
      <div style={{ 
        textAlign: 'center', 
        marginTop: '8px', 
        fontSize: '12px',
        color: percentage > 80 ? '#ef4444' : percentage > 50 ? '#f59e0b' : '#10b981',
        fontWeight: '600'
      }}>
        {remaining} sesiones restantes ({Math.round(percentage)}% usado)
      </div>
    </div>
  );
};

export const AuthorizationOSShow = () => {
  return (
    <Show>
      <SimpleShowLayout>
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
          label="Asignación de Terapia"
        >
          <TextField source="therapyId" />
        </ReferenceField>
        
        <DateField source="validFrom" label="Válido Desde" />
        <DateField source="validTo" label="Válido Hasta" />
        
        <SessionsProgressCard source="sessions" label="Progreso de Sesiones" />
      </SimpleShowLayout>
    </Show>
  );
};