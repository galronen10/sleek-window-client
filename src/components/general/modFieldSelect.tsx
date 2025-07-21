import React, { useMemo } from 'react';
import type { IGenericModifyConfig } from '../../types';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

interface props {
  selectedOption: string;
  modConfig: IGenericModifyConfig;
  onChange: (value: string) => void;
  isFilter?: boolean;
}

export const ModFieldSelect: React.FC<props> = ({
  selectedOption: value,
  modConfig,
  onChange,
  isFilter = false,
}) => {
  const optionsArray = useMemo(
    () => (modConfig ? Object.keys(modConfig) : []),
    [modConfig],
  );
  const label = useMemo(() => `${isFilter ? 'Filter' : 'Sort'} by`, [isFilter]);

  return (
    <FormControl size="small" sx={{ minWidth: 140 }}>
      <InputLabel>{label}</InputLabel>
      <Select
        value={value}
        label={label}
        onChange={(e) => onChange(e.target.value)}
      >
        <MenuItem value="">None</MenuItem>
        {optionsArray.map((optKey) => (
          <MenuItem key={optKey} value={optKey}>
            {modConfig[optKey]?.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
