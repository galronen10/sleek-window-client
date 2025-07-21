import React, { useEffect, useState } from 'react';
import { type Endpoint } from '../../types';
import { Container, Box, CircularProgress, Grid } from '@mui/material';
import { api } from '../../api';
import { EndpointsCard } from '../endpointCard';
import { MaliciousListDialog } from '../maliciousListDialog';

export const EndpointsDisplay: React.FC = () => {
  const [endpoints, setEndpoints] = useState<Endpoint[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedEndpointId, setSelectedEndpointId] = useState<string | null>(
    null,
  );

  useEffect(() => {
    const getData = async () => {
      try {
        const endpointList: Endpoint[] = await api.getAll();
        setEndpoints(endpointList);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    getData();
  }, []);

  const selectEndpoint = (id: string) => {
    setSelectedEndpointId(id);
  };

  const onDialogClose = () => {
    setSelectedEndpointId(null);
  };

  return (
    <>
      <Container sx={{ mt: 4 }}>
        {loading ? (
          <Box display="flex" justifyContent="center" mt={4}>
            <CircularProgress />
          </Box>
        ) : (
          <Grid container spacing={2}>
            {endpoints.map((endpoint) => (
              <Grid key={endpoint.id}>
                <EndpointsCard onClick={selectEndpoint} endpoint={endpoint} />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
      {selectedEndpointId && (
        <MaliciousListDialog
          endpointId={selectedEndpointId}
          onClose={onDialogClose}
        />
      )}
    </>
  );
};
