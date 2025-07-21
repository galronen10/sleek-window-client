import React from 'react';
import './GenericStoreCard.css';
import type { IGenericStoreItem } from '../../types';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../hooks';
import {
  selectCardDisplayConfig,
  setSelectedItem,
} from '../../store/storeSlice';

interface props {
  item: IGenericStoreItem;
}

export const GenericStoreCard: React.FC<props> = ({ item }) => {
  const cardDisplayConfig = useSelector(selectCardDisplayConfig);
  const dispatch = useAppDispatch();

  const onClick = () => {
    dispatch(setSelectedItem(item));
  };

  return (
    <div
      className="item-card clickable"
      onClick={onClick}
      tabIndex={0}
      role="button"
    >
      <h2>{cardDisplayConfig.labelGenerator(item)}</h2>

      {cardDisplayConfig.propertyDisplayList.map((propDisplay, idx) => {
        const dataDisplay: string =
          propDisplay.displayFormatter?.(item[propDisplay.key]) ??
          item[propDisplay.key];
        return <p key={idx}>{`${propDisplay.label}: ${dataDisplay}`}</p>;
      })}

      <span className="price-badge">${item.price.toLocaleString()}</span>
    </div>
  );
};
