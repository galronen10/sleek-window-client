import React, { useEffect } from 'react';
import { GenericItemsPage } from '../genericItemsPage';
import { useAppDispatch } from '../../hooks';
import { stopLoading, setStoreData } from '../../store/storeSlice';
import { setItems } from '../../store/CatalogSlice';
import { StoreToggle } from '../storeToggle';
import { storeConfigMap, configStoreList } from '../../config/configMap';

export const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const { detailsConfig, displayConfig, items, storeLabel } =
      storeConfigMap[configStoreList[0]];
    dispatch(
      setStoreData({
        detailsConfig,
        displayConfig,
        storeLabel,
      }),
    );
    dispatch(setItems(items));
    dispatch(stopLoading());
  }, []);

  return (
    <>
      <StoreToggle />
      <GenericItemsPage />;
    </>
  );
};
