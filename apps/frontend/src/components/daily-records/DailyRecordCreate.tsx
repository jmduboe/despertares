import React from 'react';
import { Create, SimpleForm, DateInput, TextInput, BooleanInput, useRedirect, useNotify, useLocation } from 'react-admin';

export const DailyRecordCreate = () => {
  const location = useLocation();
  const redirect = useRedirect();
  const notify = useNotify();
  
  // Obtener valores predefinidos del state
  const preloadedValues = location.state?.record || {};

  const onSuccess = () => {
    notify('Registro diario creado exitosamente');
    redirect('show', 'patient-therapies', preloadedValues.patientTherapyId);
  };

  return (
    <Create 
      mutationOptions={{ onSuccess }}
      transform={(data) => ({
        ...data,
        ...preloadedValues, // Merge con valores predefinidos
        patientId: preloadedValues.patientId || data.patientId,
      })}
    >
      <SimpleForm 
        defaultValues={{
          ...preloadedValues,
          date: preloadedValues.date || new Date().toISOString().split('T')[0],
          attendance: preloadedValues.attendance !== undefined ? preloadedValues.attendance : true,
        }}
      >
        {/* Campos ocultos con valores predefinidos */}
        <TextInput 
          source="patientTherapyId" 
          type="hidden" 
          defaultValue={preloadedValues.patientTherapyId}
        />
        <TextInput 
          source="patientId" 
          type="hidden" 
          defaultValue={preloadedValues.patientId}
        />
        <TextInput 
          source="professionalId" 
          type="hidden" 
          defaultValue={preloadedValues.professionalId}
        />

        {/* Campos visibles */}
        <DateInput 
          source="date" 
          label="Fecha de la Sesión"
          validate={[required()]}
        />
        
        <BooleanInput 
          source="attendance" 
          label="¿Asistió el paciente?"
        />
        
        <TextInput 
          source="notes" 
          label="Notas de la Sesión"
          multiline
          rows={3}
        />
      </SimpleForm>
    </Create>
  );
};