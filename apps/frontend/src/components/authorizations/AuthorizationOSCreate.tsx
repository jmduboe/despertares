import React from 'react';
import { Create, SimpleForm, NumberInput, DateInput, useRedirect, useNotify, useLocation } from 'react-admin';

export const AuthorizationOSCreate = () => {
  const location = useLocation();
  const redirect = useRedirect();
  const notify = useNotify();
  
  const preloadedValues = location.state?.record || {};

  const onSuccess = () => {
    notify('Autorización creada exitosamente');
    redirect('show', 'patient-therapies', preloadedValues.patientTherapyId);
  };

  return (
    <Create 
      mutationOptions={{ onSuccess }}
      transform={(data) => ({
        ...data,
        ...preloadedValues,
      })}
    >
      <SimpleForm defaultValues={preloadedValues}>
        {/* Campos ocultos */}
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

        {/* Campos visibles */}
        <NumberInput 
          source="totalSessions" 
          label="Total de Sesiones Autorizadas"
          validate={[required()]}
          min={1}
        />
        
        <DateInput 
          source="validFrom" 
          label="Válido Desde"
          validate={[required()]}
        />
        
        <DateInput 
          source="validTo" 
          label="Válido Hasta"
          validate={[required()]}
        />
        
        <NumberInput 
          source="consumedSessions" 
          label="Sesiones Consumidas"
          defaultValue={0}
          min={0}
        />
      </SimpleForm>
    </Create>
  );
};