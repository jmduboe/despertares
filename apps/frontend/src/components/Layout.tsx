import React from 'react';
import { Layout as RaLayout } from 'react-admin';
import { AppBar } from './AppBar';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <RaLayout appBar={AppBar}>
      {children}
    </RaLayout>
  );
};