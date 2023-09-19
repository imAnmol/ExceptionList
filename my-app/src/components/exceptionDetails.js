// ExceptionDetails.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ExceptionDetails = () => {
  const { id } = useParams(); 

  // Fetch exception details based on the ID
  const [exceptionDetails, setExceptionDetails] = useState(null);

  useEffect(() => {
    // Fetch exception details based on the ID and set them in state
    // You can make an API request here or fetch the data in any way you prefer
  }, [id]);

//   if (!exceptionDetails) {
//     // Handle the loading state or error state
//     return <div>{id}</div>;
//   }

  return (
    <div>
      
      <h1>Exception Details for ID: {id}</h1>

      
    </div>
  );
};

export default ExceptionDetails;
