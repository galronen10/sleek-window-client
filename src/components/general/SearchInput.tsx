import { TextField } from '@mui/material';
import React from 'react';

type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
};

export const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
}) => {
  return (
    <TextField
      size="small"
      variant="outlined"
      label="filter value"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
