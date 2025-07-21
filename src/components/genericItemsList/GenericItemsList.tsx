import React, { useEffect, useState } from 'react';
import './GenericItemsList.css';
import { useSelector } from 'react-redux';
import { Box, CircularProgress, Pagination } from '@mui/material';
import { FilterSortBar } from '../filterSortBar';
import { GenericStoreCard } from '../genericStoreCard';
import { selectFilteredItems } from '../../store/CatalogSlice';
import { itemsPerPage } from '../../types';
import { selectIsLoading } from '../../store/storeSlice';

export const GenericItemsList: React.FC = () => {
  const [selectedPage, setSelectedPage] = useState<number>(1);
  const isLoading = useSelector(selectIsLoading);
  const items = useSelector(selectFilteredItems);

  const pageCount = Math.ceil(items.length / itemsPerPage);

  useEffect(() => {
    setSelectedPage(1);
  }, [items]);
  const selectPageNum = (_: unknown, page: number) => {
    setSelectedPage(page);
  };

  const itemsForPage = () => {
    const start = (selectedPage - 1) * itemsPerPage;

    return items.slice(start, start + itemsPerPage);
  };

  return isLoading ? (
    <Box
      sx={{
        height: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <CircularProgress size={48} />
    </Box>
  ) : (
    <>
      <FilterSortBar />
      <div className="catalog">
        {itemsForPage().map((item, idx: number) => (
          <GenericStoreCard key={idx} item={item} />
        ))}
      </div>
      <Pagination
        page={selectedPage}
        count={pageCount}
        onChange={selectPageNum}
        color="primary"
        sx={{ alignSelf: 'center', display: 'flex', justifyContent: 'center' }}
      />
    </>
  );
};
