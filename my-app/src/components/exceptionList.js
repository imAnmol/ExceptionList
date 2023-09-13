import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TableComponent from './tableComponent';
import Filter from './filter';

function ExceptionList() {
  const [exceptions, setExceptions] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('All');

  const populateExceptions = () => {
    axios.get('http://localhost:8081/api/exception').then(
      (response) => {
        console.log(response.data);
        setExceptions(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  useEffect(() => {
    populateExceptions();
  }, []);

  const filterData = () => {
    if (selectedFilter === 'All') {
      return exceptions;
    } else {
      return exceptions.filter((exception) => exception.status === selectedFilter);
    }
  };

  return (
    <div>
      <Filter onSelectFilter={setSelectedFilter} data={exceptions} /> {/* Pass the callback function */}
      <TableComponent data={filterData()} /> {/* Pass the filtered data */}
    </div>
  );
}

export default ExceptionList;
