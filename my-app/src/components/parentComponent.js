import React, { useState } from 'react';
import Filter from './filter';
import TableComponent from './tableComponent';

function ParentComponent() {
  const [assigning, setAssigning] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleRefreshIcon = () => {
    setAssigning(false); 
    setSearchTerm('');   
  };

  return (
    <div>
      <Filter onRefresh={handleRefreshIcon} />
      <TableComponent assigning={assigning} searchTerm={searchTerm} />
    </div>
  );
}

export default ParentComponent;
