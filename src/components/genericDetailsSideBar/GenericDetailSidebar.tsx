import React, { useState } from 'react';
import './GenericDetailSidebar.css';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../hooks';
import {
  selectSelectedItem,
  selectDetailsConfig,
  clearSelectedItem,
} from '../../store/storeSlice';

const ANIMATION_DURATION = 250; // ms

export const GenericDetailSidebar: React.FC = () => {
  const [closing, setClosing] = useState(false);
  const selectedItem = useSelector(selectSelectedItem);
  const detailsConfig = useSelector(selectDetailsConfig);
  const dispatch = useAppDispatch();

  if (selectedItem === null) return <></>;

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setClosing(false);
      dispatch(clearSelectedItem());
    }, ANIMATION_DURATION);
  };

  return (
    <div
      className={`sidebar-overlay${closing ? ' closing' : ''}`}
      onClick={handleClose}
    >
      <aside
        className={`item-detail-sidebar${closing ? ' closing' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={handleClose}>
          &times;
        </button>
        <h2>{detailsConfig.labelGenerator(selectedItem)}</h2>
        <div className="item-detail-info">
          {detailsConfig.propertyDisplayList.map((propDisplay, idx) => {
            const dataDisplay: string =
              propDisplay.displayFormatter?.(selectedItem[propDisplay.key]) ??
              selectedItem[propDisplay.key];

            return (
              <p key={idx}>
                <strong>{propDisplay.label}:</strong> {dataDisplay}
              </p>
            );
          })}
        </div>
        <p className="item-description">{selectedItem.description}</p>
      </aside>
    </div>
  );
};
