// ParentComponent.js
import React, { useState } from 'react';
import Filter from './filter';
import TableComponent from './tableComponent';

const ParentComponent = () => {
  const [selectedFilter, setSelectedFilter] = useState('ALL'); // Default filter

  const data = [
    {
      no: 1,
      exceptionId: 'EX-123',
      tradeId: 'TRADE-456',
      counterparty: 'ABC Corp',
      tradeDate: '2023-09-12',
      exceptionType: 'Error',
      status: 'Open',
      priority: 'High',
      description: 'This is an exception description.',
      createdBy: 'John Doe',
      createdAt: '2023-09-12 10:30 AM',
    },
    {
      no: 2,
      exceptionId: 'EX-124',
      tradeId: 'TRADE-457',
      counterparty: 'XYZ Inc',
      tradeDate: '2023-09-13',
      exceptionType: 'Warning',
      status: 'Resolved',
      priority: 'Medium',
      description: 'Another exception description.',
      createdBy: 'Jane Smith',
      createdAt: '2023-09-13 11:45 AM',
    },
    {
      no: 3,
      exceptionId: 'EX-125',
      tradeId: 'TRADE-458',
      counterparty: 'LMN Ltd',
      tradeDate: '2023-09-14',
      exceptionType: 'Error',
      status: 'Pending',
      priority: 'Low',
      description: 'A third exception description.',
      createdBy: 'Bob Johnson',
      createdAt: '2023-09-14 09:15 AM',
    },
    {
      no: 4,
      exceptionId: 'EX-126',
      tradeId: 'TRADE-459',
      counterparty: 'PQR Ltd',
      tradeDate: '2023-09-15',
      exceptionType: 'Error',
      status: 'Closed',
      priority: 'High',
      description: 'Yet another exception description.',
      createdBy: 'Alice Brown',
      createdAt: '2023-09-15 02:00 PM',
    },
    {
      no: 5,
      exceptionId: 'EX-127',
      tradeId: 'TRADE-460',
      counterparty: 'DEF Inc',
      tradeDate: '2023-09-16',
      exceptionType: 'Warning',
      status: 'Open',
      priority: 'Medium',
      description: 'Description of another exception.',
      createdBy: 'Eve White',
      createdAt: '2023-09-16 09:30 AM',
    },
    {
      no: 6,
      exceptionId: 'EX-128',
      tradeId: 'TRADE-461',
      counterparty: 'GHI Ltd',
      tradeDate: '2023-09-17',
      exceptionType: 'Error',
      status: 'Resolved',
      priority: 'Low',
      description: 'Description of a resolved exception.',
      createdBy: 'Charlie Green',
      createdAt: '2023-09-17 03:45 PM',
    },
    {
      no: 7,
      exceptionId: 'EX-129',
      tradeId: 'TRADE-462',
      counterparty: 'JKL Corp',
      tradeDate: '2023-09-18',
      exceptionType: 'Error',
      status: 'Pending',
      priority: 'High',
      description: 'Description of a pending exception.',
      createdBy: 'David Black',
      createdAt: '2023-09-18 11:15 AM',
    },
    {
      no: 8,
      exceptionId: 'EX-130',
      tradeId: 'TRADE-463',
      counterparty: 'MNO Inc',
      tradeDate: '2023-09-19',
      exceptionType: 'Error',
      status: 'Closed',
      priority: 'Medium',
      description: 'Description of a closed exception.',
      createdBy: 'Grace Brown',
      createdAt: '2023-09-19 01:45 PM',
    },
    {
      no: 9,
      exceptionId: 'EX-131',
      tradeId: 'TRADE-464',
      counterparty: 'STU Ltd',
      tradeDate: '2023-09-20',
      exceptionType: 'Warning',
      status: 'Open',
      priority: 'Low',
      description: 'Another open exception description.',
      createdBy: 'Hannah White',
      createdAt: '2023-09-20 10:00 AM',
    },
    {
      no: 10,
      exceptionId: 'EX-132',
      tradeId: 'TRADE-465',
      counterparty: 'VWX Corp',
      tradeDate: '2023-09-21',
      exceptionType: 'Error',
      status: 'Resolved',
      priority: 'High',
      description: 'Description of a resolved exception.',
      createdBy: 'Ivy Green',
      createdAt: '2023-09-21 02:30 PM',
    },
  ];
  

  const onSelectFilter = (filter) => {
    setSelectedFilter(filter);

    // Apply filtering logic here based on the selected filter
  };

  return (
    <div>
      <Filter selectedFilter={selectedFilter} setSelectedFilter = {setSelectedFilter} onSelectFilter={onSelectFilter} data={data} />
      <TableComponent data={data} />
      {/* Rest of the component */}
    </div>
  );
};

export default ParentComponent;
