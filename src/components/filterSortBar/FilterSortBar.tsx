import React from 'react';
import { Stack, Button } from '@mui/material';
import { FilterSection } from './FilterSection';
import { SortSection } from './SortSection';
import { useAppDispatch } from '../../hooks';
import { clearFilters } from '../../store/catalogSlice';

export const FilterSortBar: React.FC = () => {
  const dispatch = useAppDispatch();

  const clearAll = () => {
    dispatch(clearFilters());
  };

  return (
    <Stack
      direction="row"
      spacing={2}
      alignItems="center"
      justifyContent="center"
      sx={{ flexWrap: 'wrap', padding: 3 }}
    >
      <FilterSection />
      <SortSection />
      <Button variant="outlined" color="error" onClick={clearAll}>
        Clear Filters
      </Button>
    </Stack>
  );
};
