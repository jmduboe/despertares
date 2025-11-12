import React from 'react';
import { Edit, SimpleForm, DateInput, TextInput, BooleanInput, useRedirect, useNotify } from 'react-admin';

export const DailyRecordEdit = () => {
  const redirect = useRedirect();
  const notify = useNotify();

  const onSuccess = () => {
    notify('Registro diario actualizado exitosamente');
    redirect('list', 'daily-records');
  };

  return (
    <Edit mutationOptions={{ onSuccess }}>
      <SimpleForm>
        <DateInput 
          source="date" 
          label="Fecha de la Sesión"
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
    </Edit>
  );
};