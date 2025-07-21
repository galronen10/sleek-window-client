import { configureStore } from '@reduxjs/toolkit';
import catalogSlice from './CatalogSlice';
import storeSlice from './storeSlice';

export const store = configureStore({
  reducer: {
    catalog: catalogSlice,
    store: storeSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these paths in actions and state
        ignoredPaths: [
          'store.detailsConfig.labelGenerator',
          'store.displayConfig.labelGenerator',
          'store.detailsConfig.propertyDisplayList',
          'store.displayConfig.propertyDisplayList',
        ],
        ignoredActionPaths: [
          'payload.detailsConfig.labelGenerator',
          'payload.displayConfig.labelGenerator',
          'store.detailsConfig.propertyDisplayList',
          'store.displayConfig.propertyDisplayList',
        ],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
