// ExceptionList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TableComponent from './tableComponent';
import Filter from './filter';

function ExceptionList() {
  const [exceptions, setExceptions] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({
    status: 'All',
    priority: 'All',
    createdAt: 'All',
    createdBy: 'All',
  });

  var populateExceptions = () => {
    axios.get('http://localhost:8081/api/exception').then(
      (response) => {
        console.log('A');
        setExceptions(response.data);
        setFilteredData(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const updateData = (newData) => {
    setFilteredData(newData);
  };

  useEffect(() => {
    populateExceptions();
  }, []);

  const applyFilters = (filters) => {
    setSelectedFilters(filters);
    const filteredData = exceptions.filter((exception) => {
      return (
        (filters.status === 'All' || filters.status === 'Status' || exception.status === filters.status) &&
        (filters.priority === 'All' || filters.priority === 'Priority' || exception.priority === filters.priority) &&
        (filters.createdAt === 'All' || exception.createdAt === filters.createdAt) &&
        (filters.createdBy === 'All' || exception.createdBy === filters.createdBy)
      );
    });
    setFilteredData(filteredData);
  };

  const handleSortAscending = () => {
    const sortedData = [...filteredData]; 
    sortedData.sort((a, b) => {
      return a.priority - b.priority;
    });
    setFilteredData(sortedData);
  };



  return (
    <div>
      <Filter onSelectFilter={applyFilters} onSortAscending={handleSortAscending} data={exceptions} />
      <TableComponent data={filteredData} updateData={updateData} />
    </div>
  );
}

export default ExceptionList;
