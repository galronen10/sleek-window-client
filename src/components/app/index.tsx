import React from 'react';
import { AppBarDisplay } from '../appBarDisplay';
import { EndpointsDisplay } from '../endpointsDisplay';

export const App: React.FC = () => {
  return (
    <>
      <AppBarDisplay />
      <EndpointsDisplay />
    </>
  );
};
