'use client';

import React from 'react';
import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import { dataProvider } from './providers/dataProvider';
import { authProvider } from './providers/authProvider';
import { PatientList } from './components/patients/PatientList';
import { PatientEdit } from './components/patients/PatientEdit';
import { PatientCreate } from './components/patients/PatientCreate';
import { ProfessionalList } from './components/professionals/ProfessionalList';
import { ProfessionalEdit } from './components/professionals/ProfessionalEdit';
import { ProfessionalCreate } from './components/professionals/ProfessionalCreate';
import { TherapyList } from './components/therapies/TherapyList';
import { TherapyEdit } from './components/therapies/TherapyEdit';
import { TherapyCreate } from './components/therapies/TherapyCreate';
import { UserList } from './components/users/UserList';
import { UserEdit } from './components/users/UserEdit';
import { UserCreate } from './components/users/UserCreate';
import { PatientTherapyList } from './components/patient-therapies/PatientTherapyList';
import { PatientTherapyEdit } from './components/patient-therapies/PatientTherapyEdit';
import { PatientTherapyCreate } from './components/patient-therapies/PatientTherapyCreate';
import { PatientTherapyShow } from './components/patient-therapies/PatientTherapyShow';
import { DailyRecordList } from './components/daily-records/DailyRecordList';
import { DailyRecordEdit } from './components/daily-records/DailyRecordEdit';
import { DailyRecordCreate } from './components/daily-records/DailyRecordCreate';
import { DailyRecordShow } from './components/daily-records/DailyRecordShow';
import { AuthorizationOSList } from './components/authorizations/AuthorizationOSList';
import { AuthorizationOSEdit } from './components/authorizations/AuthorizationOSEdit';
import { AuthorizationOSCreate } from './components/authorizations/AuthorizationOSCreate';
import { AuthorizationOSShow } from './components/authorizations/AuthorizationOSShow';
import { Dashboard } from './components/Dashboard';
import { Layout } from './components/Layout';
import { theme } from './theme';
import { LoginPage } from './components/LoginPage';

export default function App() {
  return (
    <Admin
      dataProvider={dataProvider}
      authProvider={authProvider}
      dashboard={Dashboard}
      layout={Layout}
      theme={theme}
      loginPage={LoginPage}
      basename="/"
    >
      <Resource
        name="patients"
        list={PatientList}
        edit={PatientEdit}
        create={PatientCreate}
        show={ShowGuesser}
      />
      <Resource
        name="professionals"
        list={ProfessionalList}
        edit={ProfessionalEdit}
        create={ProfessionalCreate}
        show={ShowGuesser}
      />
      <Resource
        name="therapies"
        list={TherapyList}
        edit={TherapyEdit}
        create={TherapyCreate}
        show={ShowGuesser}
      />
      <Resource
        name="users"
        list={UserList}
        edit={UserEdit}
        create={UserCreate}
        show={ShowGuesser}
      />
      <Resource
        name="patient-therapies"
        list={PatientTherapyList}
        edit={PatientTherapyEdit}
        create={PatientTherapyCreate}
        show={PatientTherapyShow}
      />
      <Resource
        name="daily-records"
        list={DailyRecordList}
        edit={DailyRecordEdit}
        create={DailyRecordCreate}
        show={DailyRecordShow}
      />
      <Resource
        name="authorizations"
        list={AuthorizationOSList}
        edit={AuthorizationOSEdit}
        create={AuthorizationOSCreate}
        show={AuthorizationOSShow}
      />
      <Resource name="reports" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
    </Admin>
  );
}