import React from 'react';
import { Button, styled } from '@mui/material';

const FilterButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'black',
//   color: theme.palette.common.white,
  color : 'white',
  border : '0px',
  height: '40px', // Adjust the height as needed
  width: '120px', // Adjust the width as needed
  '&:hover': {
    backgroundColor: '#4BC7CF',
  },
}));

const Filter = ({ selectedFilter, onSelectFilter, data }) => {
    const handleFilter = (filter) => {
      onSelectFilter(filter);
    };
  
    return (
      <div>
        <FilterButton
          variant={selectedFilter === 'All' ? 'contained' : 'outlined'}
          onClick={() => handleFilter('All')}
          sx={{ marginRight: '8px' }}
        >
          All
        </FilterButton>
        <FilterButton
          variant={selectedFilter === 'Open' ? 'contained' : 'outlined'}
          onClick={() => handleFilter('Open')}
          sx={{ marginRight: '8px' }}
        >
          Open
        </FilterButton>
        <FilterButton
          variant={selectedFilter === 'Pending' ? 'contained' : 'outlined'}
          onClick={() => handleFilter('Pending')}
          sx={{ marginRight: '8px' }}
        >
          Pending
        </FilterButton>
        <FilterButton
          variant={selectedFilter === 'Resolved' ? 'contained' : 'outlined'}
          onClick={() => handleFilter('Resolved')}
          sx={{ marginRight: '8px' }}
        >
          Resolved
        </FilterButton>
        <FilterButton
          variant={selectedFilter === 'Completed' ? 'contained' : 'outlined'}
          onClick={() => handleFilter('Completed')}
        >
          Completed
        </FilterButton>
      </div>
    );
  };
  
  export default Filter;