import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TableComponent from './tableComponent'; // Import your TableComponent

function ExceptionList() {
  const [exceptions, setExceptions] = useState([]);

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

  return (
    <div>
      {/* <h1>Exception List</h1> */}
      <TableComponent data={exceptions} /> {/* Pass the fetched data as a prop */}
      {console.log(exceptions)}
    </div>
  );
}

export default ExceptionList;
