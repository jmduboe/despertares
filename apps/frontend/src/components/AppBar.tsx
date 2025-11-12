import React from 'react';
import { AppBar as RaAppBar, UserMenu, Logout } from 'react-admin';
import { Box, Typography } from '@mui/material';

export const AppBar = (props: any) => {
  return (
    <RaAppBar {...props} userMenu={<UserMenu />}>
      <Box flex="1">
        <Typography variant="h6" color="inherit">
          Despertares - Centro Terapéutico
        </Typography>
      </Box>
    </RaAppBar>
  );
};