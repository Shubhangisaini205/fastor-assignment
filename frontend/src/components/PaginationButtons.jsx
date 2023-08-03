import React from 'react';
import { ButtonGroup, Button } from '@chakra-ui/react';

function PaginationButtons({ currentPage, totalPages, onPageChange }) {
  const getPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <ButtonGroup mt={4}>
      {getPageNumbers().map((pageNumber) => (
        <Button
          key={pageNumber}
          onClick={() => handlePageChange(pageNumber)}
          colorScheme={pageNumber === currentPage ? 'teal' : 'gray'}
        >
          {pageNumber}
        </Button>
      ))}
    </ButtonGroup>
  );
}

export default PaginationButtons;
