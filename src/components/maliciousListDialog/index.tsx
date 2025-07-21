import {
  Dialog,
  DialogTitle,
  IconButton,
  DialogContent,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from 'react';
import { api } from '../../api';

interface props {
  endpointId: string;
  onClose: () => void;
}

export const MaliciousListDialog: React.FC<props> = ({
  endpointId,
  onClose,
}) => {
  const [maliciousList, setMaliciousList] = useState<string[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const maliciousListFromServer: string[] =
          await api.getMaliciousList(endpointId);
        setMaliciousList(maliciousListFromServer);
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, []);

  return (
    <Dialog open={!!endpointId} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>
        {`Endpoint #${endpointId}`}
        <IconButton
          onClick={onClose}
          edge="end"
          aria-label="close"
          sx={{ position: 'absolute', right: 15, top: 10 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        {maliciousList.length ? (
          <List>
            {maliciousList.map((item, i) => (
              <ListItem key={i}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        ) : (
          <Typography>No malicious entries.</Typography>
        )}
      </DialogContent>
    </Dialog>
  );
};
