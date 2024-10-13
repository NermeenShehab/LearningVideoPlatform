import React, { FC, useState } from 'react';
import './Pagination.scss';
import { Pagination } from '@mui/material';


interface PaginationProps {
  currentPage: number;
  totalPages: number;
 }

const PaginationComponent: FC<PaginationProps> = ({
  currentPage=1,
  totalPages,
}) => {
  const [page, setPage] = useState(1);


  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <div className='Pagination d-flex d-justify-center mn-t-2 ' data-testid='Pagination'>
      <Pagination
        count={totalPages}
        page={page}
        onChange={handlePageChange}
        shape="circular"
        color="primary"

      />
    </div>
  );
};



export default PaginationComponent;
