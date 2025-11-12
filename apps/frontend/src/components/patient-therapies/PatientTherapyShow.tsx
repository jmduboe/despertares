import React from 'react';
import { 
  Show, 
  SimpleShowLayout, 
  DateField, 
  ReferenceField, 
  TextField, 
  TabbedShowLayout, 
  Tab, 
  ReferenceManyField, 
  Datagrid,
  EditButton,
  CreateButton,
  useShowContext,
  TopToolbar,
  BooleanField
} from 'react-admin';
import { DailyRecordCreate } from '../daily-records/DailyRecordCreate';
import { AuthorizationOSCreate } from '../authorizations/AuthorizationOSCreate';

// Toolbar personalizado con botones de crear
const PatientTherapyShowActions = () => {
  const { record } = useShowContext();
  
  return (
    <TopToolbar>
      <CreateButton 
        resource="daily-records"
        state={{ record: { 
          patientTherapyId: record?.id, 
          patientId: record?.patientId,
          professionalId: record?.professionalId,
          date: new Date().toISOString().split('T')[0]
        }}}
        label="Nuevo Registro Diario"
      />
      <CreateButton 
        resource="authorizations"
        state={{ record: { 
          patientTherapyId: record?.id, 
          patientId: record?.patientId 
        }}}
        label="Nueva Autorización"
      />
    </TopToolbar>
  );
};

const FullNameField = ({ source }) => {
  const record = useRecordContext();
  return <span>{record?.firstName} {record?.lastName}</span>;
};

const AttendanceField = ({ source }) => {
  const record = useRecordContext();
  return (
    <BooleanField 
      source={source} 
      record={{ ...record, attendance: record?.attendance ? 'Sí' : 'No' }}
      label="Asistió"
    />
  );
};

export const PatientTherapyShow = () => {
  return (
    <Show actions={<PatientTherapyShowActions />}>
      <TabbedShowLayout>
        <Tab label="Información General">
          <ReferenceField source="patientId" reference="patients" label="Paciente">
            <FullNameField />
          </ReferenceField>
          
          <ReferenceField source="therapyId" reference="therapies" label="Terapia">
            <TextField source="name" />
          </ReferenceField>
          
          <ReferenceField source="professionalId" reference="professionals" label="Profesional">
            <TextField source="name" />
          </ReferenceField>
          
          <DateField source="startDate" label="Fecha Inicio" />
          <DateField source="endDate" label="Fecha Fin" />
        </Tab>
        
        <Tab label="Registros Diarios">
          <ReferenceManyField 
            reference="daily-records" 
            target="patientTherapyId"
            label="Asistencias"
            pagination={<Pagination />}
            perPage={10}
          >
            <Datagrid>
              <DateField source="date" label="Fecha" />
              <AttendanceField source="attendance" label="Asistió" />
              <TextField source="notes" label="Notas" />
              <EditButton />
            </Datagrid>
          </ReferenceManyField>
        </Tab>
        
        <Tab label="Autorizaciones">
          <ReferenceManyField 
            reference="authorizations" 
            target="patientTherapyId"
            label="Obras Sociales"
            pagination={<Pagination />}
            perPage={10}
          >
            <Datagrid>
              <TextField source="totalSessions" label="Sesiones Totales" />
              <TextField source="consumedSessions" label="Sesiones Consumidas" />
              <DateField source="validFrom" label="Válido Desde" />
              <DateField source="validTo" label="Válido Hasta" />
              <EditButton />
            </Datagrid>
          </ReferenceManyField>
        </Tab>
      </TabbedShowLayout>
    </Show>
  );
};