// Filter.js
import React, { useState } from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Button,
  Box,
  styled,
} from '@mui/material';

const StyledFormControl = styled(FormControl)({
    Width: 30,
    Height: 30,
  marginRight: 16,
});

const StyledSelect = styled(Select)(({ theme }) => ({
    Width: 30,
    Height: 30,
    marginTop: 16,
    padding: '3px', 
    border: '1px solid #ccc',
    borderRadius: '4px',
    backgroundColor: 'white',
    '& .MuiSelect-select': {
      height: '25px', 
      Width: '30px',
      padding: '3px', 
    },
  }));

const StyledButton = styled(Button)({
  marginTop: 16,
  height : 37,
  backgroundColor: '#4BC7CF',
  color: 'white',
  padding: '10px 20px',
  '&:hover': {
    backgroundColor: '#4BC7CF',
  },
});

const Filter = ({ onSelectFilter, onSortAscending , data }) => {
  const [selectedStatus, setSelectedStatus] = useState('Status');
  const [selectedPriority, setSelectedPriority] = useState('Priority');
  const [selectedCreatedAt, setSelectedCreatedAt] = useState('All');
  const [selectedCreatedBy, setSelectedCreatedBy] = useState('All');
  

  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
  };

  const handlePriorityChange = (event) => {
    setSelectedPriority(event.target.value);
  };

  const handleCreatedAtChange = (event) => {
    setSelectedCreatedAt(event.target.value);
  };

  const handleCreatedByChange = (event) => {
    setSelectedCreatedBy(event.target.value);
  };

  const applyFilters = () => {
    
    const filters = {
      status: selectedStatus,
      priority: selectedPriority,
      createdAt: selectedCreatedAt,
      createdBy: selectedCreatedBy,
    };
    if(filters.priority === 'Sort'){
        filters.priority= 'All';
        onSelectFilter(filters);
        onSortAscending(); 
    }
    else{
        onSelectFilter(filters);
    }
    
    
  };

  console.log('c');

  return (
    <div>
      <StyledFormControl>
        
        <StyledSelect value={selectedStatus} onChange={handleStatusChange}>
        <MenuItem value="Status" disabled>Status</MenuItem>
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Open">Open</MenuItem>
          <MenuItem value="Resolved">Resolved</MenuItem>
          <MenuItem value="Pending">Pending</MenuItem>
          <MenuItem value="Closed">Closed</MenuItem>
        </StyledSelect>
      </StyledFormControl>

      <StyledFormControl>
        <StyledSelect value={selectedPriority} onChange={handlePriorityChange}>
          <MenuItem value="Priority" disabled>Priority</MenuItem>
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="1">1 (Very High)</MenuItem>
          <MenuItem value="2">2 (High)</MenuItem>
          <MenuItem value="3">3 (Medium)</MenuItem>
          <MenuItem value="4">4 (Low)</MenuItem>
          <MenuItem value="5">5 (Very Low)</MenuItem>
          <MenuItem value="Sort">Sort</MenuItem>
        </StyledSelect>
      </StyledFormControl>


      <StyledButton variant="contained" onClick={applyFilters}>
        Apply Filters
      </StyledButton>
    </div>
  );
};

export default Filter;
