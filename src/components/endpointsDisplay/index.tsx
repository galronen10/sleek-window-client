import React, { useEffect, useMemo, useState } from 'react';
import { type Endpoint } from '../../types';
import {
  Container,
  Box,
  CircularProgress,
  Grid,
  Pagination,
  Typography,
} from '@mui/material';
import { api } from '../../api';
import { EndpointsCard } from '../endpointCard';
import { MaliciousListDialog } from '../maliciousListDialog';

const ITEMS_PER_PAGE = 25;

export const EndpointsDisplay: React.FC = () => {
  const [endpoints, setEndpoints] = useState<Endpoint[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedEndpointId, setSelectedEndpointId] = useState<string | null>(
    null,
  );
  const [selectedPage, setSelectedPage] = useState<number>(1);

  const pageCount = useMemo(
    () => Math.ceil(endpoints.length / ITEMS_PER_PAGE),
    [endpoints],
  );

  const paginationText = useMemo(() => {
    const startIndex = (selectedPage - 1) * ITEMS_PER_PAGE;
    return `Showing ${startIndex + 1}-${Math.min(startIndex + ITEMS_PER_PAGE, endpoints.length)} of ${endpoints.length}`;
  }, [endpoints.length, selectedPage]);

  const selectPageNum = (_: unknown, page: number) => {
    setSelectedPage(page);
  };

  const endpointsForPage: Endpoint[] = useMemo(() => {
    const start = (selectedPage - 1) * ITEMS_PER_PAGE;

    return endpoints.slice(start, start + ITEMS_PER_PAGE);
  }, [endpoints, selectedPage]);

  useEffect(() => {
    const getData = async () => {
      try {
        const endpointList: Endpoint[] = await api.getAll();
        setEndpoints(endpointList);
        setLoading(false);
        setSelectedPage(1);
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
          <>
            <Grid container spacing={2}>
              {endpointsForPage.map((endpoint) => (
                <Grid key={endpoint.id} sx={{ width: 200 }}>
                  <EndpointsCard onClick={selectEndpoint} endpoint={endpoint} />
                </Grid>
              ))}
            </Grid>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mt={2}
            >
              <Typography variant="body2">{paginationText}</Typography>
              <Pagination
                page={selectedPage}
                count={pageCount}
                onChange={selectPageNum}
                color="primary"
              />
            </Box>
          </>
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
