import React from 'react';
import { List, Datagrid, TextField, DateField, BooleanField, EditButton, ShowButton, useTranslate } from 'react-admin';

export const PatientList = () => {
  const translate = useTranslate();

  return (
    <List>
      <Datagrid rowClick="show">
        <TextField source="firstName" label={translate('resources.patients.fields.firstName')} />
        <TextField source="lastName" label={translate('resources.patients.fields.lastName')} />
        <DateField source="birthDate" label={translate('resources.patients.fields.birthDate')} />
        <TextField source="healthInsurance" label={translate('resources.patients.fields.healthInsurance')} />
        <TextField source="schoolShift" label={translate('resources.patients.fields.schoolShift')} />
        <BooleanField source="active" label={translate('resources.patients.fields.active')} />
        <EditButton />
        <ShowButton />
      </Datagrid>
    </List>
  );
};