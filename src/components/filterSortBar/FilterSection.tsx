import React from 'react';
import { ModFieldSelect } from '../general/modFieldSelect';
import { SearchInput } from '../general/SearchInput';
import { useSelector } from 'react-redux';

import { selectFilterConfig } from '../../store/storeSlice';
import { useAppDispatch } from '../../hooks';
import {
  selectFilter,
  setFilterField,
  setFilterValue,
} from '../../store/catalogSlice';

export const FilterSection: React.FC = () => {
  const filterData = useSelector(selectFilter);
  const filterConfig = useSelector(selectFilterConfig);
  const dispatch = useAppDispatch();

  const onFilterTextChange = (text: string) => {
    dispatch(setFilterValue(text));
  };

  const onFilterFieldChange = (field: string) => {
    dispatch(setFilterField(field));
  };

  return (
    <>
      <SearchInput value={filterData.value} onChange={onFilterTextChange} />
      <ModFieldSelect
        selectedOption={filterData.field}
        modConfig={filterConfig}
        onChange={onFilterFieldChange}
        isFilter
      />
    </>
  );
};
