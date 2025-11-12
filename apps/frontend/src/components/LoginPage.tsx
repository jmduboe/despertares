import React from 'react';
import { Login, TextInput, PasswordInput, required } from 'react-admin';

export const LoginPage = () => {
  return (
    <Login>
      <TextInput
        source="email"
        label="Email"
        type="email"
        validate={[required()]}
        fullWidth
      />
      <PasswordInput
        source="password"
        label="Contraseña"
        validate={[required()]}
        fullWidth
      />
    </Login>
  );
};