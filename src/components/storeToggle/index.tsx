import { ToggleButton, ToggleButtonGroup, Box } from '@mui/material';
import { useAppDispatch } from '../../hooks';
import { useState } from 'react';
import { configStoreList, storeConfigMap } from '../../config/configMap';
import { setStoreData, stopLoading } from '../../store/storeSlice';
import { setItems } from '../../store/CatalogSlice';

export const StoreToggle: React.FC = () => {
  const [selectedStore, setSelectedStore] = useState<string>(
    configStoreList[0],
  );

  const dispatch = useAppDispatch();

  const handleChange = (_: React.MouseEvent<HTMLElement>, newValue: string) => {
    if (newValue !== null) {
      const { detailsConfig, displayConfig, items, storeLabel } =
        storeConfigMap[newValue];

      dispatch(
        setStoreData({
          detailsConfig,
          displayConfig,
          storeLabel,
        }),
      );
      dispatch(setItems(items));
      setSelectedStore(newValue);
      dispatch(stopLoading());
    }
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 16,
        right: 16,
        zIndex: 1000,
        bgcolor: 'background.paper',
        p: 1,
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <ToggleButtonGroup
        value={selectedStore}
        exclusive
        onChange={handleChange}
        color="primary"
        size="small"
      >
        {configStoreList.map((configKey, index) => (
          <ToggleButton value={configKey} key={index}>
            {configKey}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Box>
  );
};
