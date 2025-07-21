import React from 'react';
import './GenericItemsPage.css';

import { GenericDetailSidebar } from '../genericDetailsSideBar';
import { GenericItemsList } from '../genericItemsList';
import { selectStoreLabel } from '../../store/storeSlice';
import { useSelector } from 'react-redux';

export const GenericItemsPage: React.FC = () => {
  const storeLabel = useSelector(selectStoreLabel);

  return (
    <div className="App">
      <h1 className="storeLabel">{storeLabel}</h1>
      <GenericItemsList />
      <GenericDetailSidebar />
    </div>
  );
};
