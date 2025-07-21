import React from 'react';
import { statusColorMap, type Endpoint } from '../../types';
import { Typography, Card, CardContent, CardActionArea } from '@mui/material';
import { grey } from '@mui/material/colors';

interface props {
  endpoint: Endpoint;
  onClick: (id: string) => void;
}
export const EndpointsCard: React.FC<props> = ({ endpoint, onClick }) => {
  const handleClick = () => {
    onClick(endpoint.id);
  };

  return (
    <Card
      sx={{
        borderLeft: `6px solid ${statusColorMap[endpoint.status]}`,
        backgroundColor: grey[50],
      }}
    >
      <CardActionArea onClick={handleClick}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Endpoint #{endpoint.id}
          </Typography>
          <Typography>Malicious Count: {endpoint.maliciousCount}</Typography>
          <Typography color="textSecondary">
            Status: {endpoint.status}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
