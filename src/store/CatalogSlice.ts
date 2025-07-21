import {
  createSelector,
  createSlice,
  type PayloadAction,
} from '@reduxjs/toolkit';
import { type IGenericStoreItem } from '../types';
import type { RootState } from './index';
import { selectSortConfig } from './storeSlice';

type CatalogState = {
  items: IGenericStoreItem[];
  sortField: string;
  page: number;
  filter: {
    field: string;
    value: string;
  };
};

const initialState: CatalogState = {
  filter: { field: '', value: '' },
  items: [],
  page: 1,
  sortField: '',
};

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setItems: (_, action: PayloadAction<IGenericStoreItem[]>) => ({
      ...initialState,
      items: action.payload,
    }),
    setSortField: (state, action: PayloadAction<string>) => {
      state.sortField = action.payload;
    },
    setFilterField: (state, action: PayloadAction<string>) => {
      state.filter = { ...state.filter, field: action.payload };
    },
    setFilterValue: (state, action: PayloadAction<string>) => {
      state.filter = { ...state.filter, value: action.payload };
    },
    clearFilters: (state) => ({ ...initialState, items: state.items }),
  },
});

export const {
  clearFilters,
  setFilterField,
  setFilterValue,
  setSortField,
  setItems,
} = catalogSlice.actions;

const selectCatalogState = (state: RootState) => state.catalog;

export const selectItems = createSelector(
  [selectCatalogState],
  (catalog) => catalog.items,
);

export const selectSortField = createSelector(
  [selectCatalogState],
  (catalog) => catalog.sortField,
);

export const selectFilter = createSelector(
  [selectCatalogState],
  (catalog) => catalog.filter,
);

export const selectFilteredItems = createSelector(
  [selectItems, selectFilter, selectSortField, selectSortConfig],
  (items, filter, sortField, sortConfig) => {
    const itemForDisplay =
      filter.value && filter.field
        ? items.filter((item) =>
            item[filter.field]
              .toLowerCase()
              .includes(filter.value.toLowerCase()),
          )
        : [...items];

    if (sortField) itemForDisplay.sort(sortConfig[sortField]!.optionFunc);

    return itemForDisplay;
  },
);

export default catalogSlice.reducer;
