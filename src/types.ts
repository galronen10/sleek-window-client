import { red, orange, green } from '@mui/material/colors';

export const endpointStatusEnum = {
  stable: 'stable',
  unstable: 'unstable',
  inactive: 'inactive',
};

export type EEndpointStatus = keyof typeof endpointStatusEnum;

export interface Endpoint {
  id: string;
  maliciousCount: number;
  status: EEndpointStatus;
}

export const statusColorMap: Record<EEndpointStatus, string> = {
  stable: green[500],
  unstable: orange[500],
  inactive: red[500],
};
