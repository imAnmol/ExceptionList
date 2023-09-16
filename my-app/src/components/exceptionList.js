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

  const populateExceptions = () => {
    axios.get('http://localhost:8081/api/exception').then(
      (response) => {
        console.log(response.data);
        setExceptions(response.data);
        setFilteredData(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
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

  return (
    <div>
      <Filter onSelectFilter={applyFilters} data={exceptions} />
      <TableComponent data={filteredData} />
    </div>
  );
}

export default ExceptionList;
