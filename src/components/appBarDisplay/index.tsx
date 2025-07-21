import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

export const AppBarDisplay: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant="h6">window threat display</Typography>
      </Toolbar>
    </AppBar>
  );
};
