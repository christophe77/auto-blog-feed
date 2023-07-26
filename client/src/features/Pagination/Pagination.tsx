import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import './pagination.css';
import Typography from '@mui/material/Typography';
import usePagination from './usePagination';

export default function PaginationComponent() {
  const { page, pageCount, handleChangePage } = usePagination();
  return (
    <>
    <div className='paginationMarginTop' />
    <div className='paginationContainer'>
      <Stack spacing={2} className='pagination'>
        <Typography>Page: {page}</Typography>
        <Pagination
          count={pageCount}
          page={page}
          onChange={handleChangePage}
          variant='outlined'
          color='primary'
        />
      </Stack>
    </div>
    </>
  );
}
