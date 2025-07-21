import {
  createSelector,
  createSlice,
  type PayloadAction,
} from '@reduxjs/toolkit';
import type {
  IGenericCatalogItemConfig,
  IGenericItemConfig,
  IGenericStoreItem,
} from '../types';
import type { RootState } from './index';

type StoreState = {
  displayConfig: IGenericCatalogItemConfig;
  detailsConfig: IGenericItemConfig;
  storeLabel: string;
  selectedItem: IGenericStoreItem | null;
  isLoading: boolean;
};

const defaultLabelGenerator = () => '';
const initialState: StoreState = {
  detailsConfig: {
    labelGenerator: defaultLabelGenerator,
    propertyDisplayList: [],
  },
  displayConfig: {
    sortConfig: {},
    filterConfig: {},
    labelGenerator: defaultLabelGenerator,
    propertyDisplayList: [],
  },
  selectedItem: null,
  storeLabel: '',
  isLoading: true,
};

export const storeSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    setStoreData: (
      _,
      action: PayloadAction<
        Pick<StoreState, 'detailsConfig' | 'displayConfig' | 'storeLabel'>
      >,
    ) => ({ ...initialState, ...action.payload }),
    setSelectedItem: (state, action: PayloadAction<IGenericStoreItem>) => {
      state.selectedItem = action.payload;
    },
    clearSelectedItem: (state) => {
      state.selectedItem = null;
    },
    stopLoading: (state) => {
      state.isLoading = false;
    },
  },
});

export const { clearSelectedItem, setSelectedItem, setStoreData, stopLoading } =
  storeSlice.actions;

// Root selector
const selectStore = (state: RootState) => state.store;

// 👉 selectedItem
export const selectSelectedItem = createSelector(
  [selectStore],
  (store) => store.selectedItem,
);

// 👉 selectedItem
export const selectIsLoading = createSelector(
  [selectStore],
  (store) => store.isLoading,
);

// 👉 storeLabel
export const selectStoreLabel = createSelector(
  [selectStore],
  (store) => store.storeLabel,
);

//
// --- displayConfig selectors ---
//
export const selectDisplayConfig = createSelector(
  [selectStore],
  (store) => store.displayConfig,
);

export const selectCardDisplayConfig = createSelector(
  [selectDisplayConfig],
  (config) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { sortConfig, filterConfig, ...cardDisplayConfig } = config;

    return cardDisplayConfig;
  },
);

export const selectSortConfig = createSelector(
  [selectDisplayConfig],
  (config) => config.sortConfig,
);

export const selectFilterConfig = createSelector(
  [selectDisplayConfig],
  (config) => config.filterConfig,
);

//
// --- detailsConfig selectors ---
//
export const selectDetailsConfig = createSelector(
  [selectStore],
  (store) => store.detailsConfig,
);

export default storeSlice.reducer;
