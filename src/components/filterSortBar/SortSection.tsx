import React from 'react';
import { ModFieldSelect } from '../general/modFieldSelect';
import { useSelector } from 'react-redux';
import { setSortField, selectSortField } from '../../store/catalogSlice';
import { selectSortConfig } from '../../store/storeSlice';
import { useAppDispatch } from '../../hooks';

export const SortSection: React.FC = () => {
  const sortData = useSelector(selectSortField);
  const sortConfig = useSelector(selectSortConfig);
  const dispatch = useAppDispatch();

  const onSortFieldChange = (field: string) => {
    dispatch(setSortField(field));
  };

  return (
    <ModFieldSelect
      selectedOption={sortData}
      modConfig={sortConfig}
      onChange={onSortFieldChange}
    />
  );
};
