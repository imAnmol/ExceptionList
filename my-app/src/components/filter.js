import React from 'react';
import { Button, styled } from '@mui/material';
import {useState} from 'react';

const FilterButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'black',
//   color: theme.palette.common.white,
  color : 'white',
  border : '0px',
  height: '40px', // Adjust the height as needed
  width: '180px', // Adjust the width as needed
  backgroundColor: '#1AB4B3',
  '&:hover': {
    backgroundColor: '#4BC7CF',
  },
}));



const Filter = ({onSelectFilter, data }) => {
    
    const [selectedFilter, setSelectedFilter] = useState('All');

    const getStatusCount = (status) => {
        if (status === 'All') {
          return data.length;
        } else {
          return data.filter((exception) => exception.status === status).length;
        }
      };

    const handleFilter = (filter) => {
        setSelectedFilter(filter);
        onSelectFilter(filter); // Pass the selected filter to the parent component
      };
  
    return (
      <div>
        <FilterButton
          variant={selectedFilter === 'All' ? 'contained' : 'outlined'}
          onClick={() => handleFilter('All')}
          sx={{ marginRight: '8px' }}
        >
          All ({getStatusCount('All')})
        </FilterButton>
        <FilterButton
          variant={selectedFilter === 'Open' ? 'contained' : 'outlined'}
          onClick={() => handleFilter('Open')}
          sx={{ marginRight: '8px' }}
        >
          Open ({getStatusCount('Open')})
        </FilterButton>
        <FilterButton
          variant={selectedFilter === 'Pending' ? 'contained' : 'outlined'}
          onClick={() => handleFilter('Pending')}
          sx={{ marginRight: '8px' }}
        >
          Pending ({getStatusCount('Pending')})
        </FilterButton>
        <FilterButton
          variant={selectedFilter === 'Resolved' ? 'contained' : 'outlined'}
          onClick={() => handleFilter('Resolved')}
          sx={{ marginRight: '8px' }}
        >
          Resolved ({getStatusCount('Resolved')})
        </FilterButton>
        <FilterButton
          variant={selectedFilter === 'Closed' ? 'contained' : 'outlined'}
          onClick={() => handleFilter('Closed')}
        >
          Closed ({getStatusCount('Closed')})
        </FilterButton>
      </div>
    );
  };
  
  export default Filter;