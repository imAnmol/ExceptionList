import React, { useState } from 'react';
import {
  Table,
  TableContainer,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  Button,
  Paper,
  styled,
  TablePagination,
} from '@mui/material';

import Pagination from './pagination';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.2)', // Semi-transparent white background
  color: theme.palette.text.primary,
  borderBottom: `1px solid ${theme.palette.divider}`,
  fontWeight: 'bold',
  position: 'sticky',
  top: 0, // Sticky table header
  zIndex: 1, // Ensure it stays on top
}));

const Card = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  borderRadius: theme.spacing(1),
  marginBottom: theme.spacing(2),
  backgroundColor: 'rgba(255, 255, 255, 0.1)', // Semi-transparent white background for the card
  backdropFilter: 'blur(10px)', // Apply blur for the glassmorphism effect
}));

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
  return formattedDate;
};

// Example usage:
const tradeDate = '2022-05-22'; // Replace with your date
const formattedTradeDate = formatDate(tradeDate); // Formatted date: "May 22, 2022"


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


const rowsPerPageOptions = [5, 10, 25]; // Define the number of rows per page options
const getStatusButtonProps = (status) => {
  switch (status) {
    case 'Open':
      return { color: '#A5F1F5', label: 'Open' };
    case 'Closed':
      return { color: '#FFFFF3', label: 'Closed' };
    case 'Pending':
      return { color: '#FFF4DF', label: 'Pending' };
    case 'Resolved':
      return { color: '#9FE2BF', label: 'Resolved' };
    default:
      return { color: 'transparent', label: status };
  }
};


const TableComponent = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0]); // Initial rows per page

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset page to the first page when changing rows per page
  };

  if (data.length === 0) {
    return null;
  }

  const headers = Object.keys(data[0]);

  return (
    <div>
    <Card>
      <TableContainer component={Paper}>
        <Table>
        <TableHead>
                <TableRow>
                  <StyledTableCell>No.</StyledTableCell>
                  <StyledTableCell>Exception ID</StyledTableCell>
                  <StyledTableCell>Trade ID</StyledTableCell>
                  <StyledTableCell>Counterparty</StyledTableCell>
                  <StyledTableCell>Trade Date</StyledTableCell>
                  <StyledTableCell>Exception Type</StyledTableCell>
                  <StyledTableCell>Status</StyledTableCell>
                  <StyledTableCell>Priority</StyledTableCell>
                  <StyledTableCell>Description</StyledTableCell>
                  <StyledTableCell>Created By</StyledTableCell>
                  <StyledTableCell>Created At</StyledTableCell>
                </TableRow>
              </TableHead>

          <TableBody>
            {/* Render table rows based on the current page and rows per page */}
            {(data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)).map((row, index) => (
              <TableRow
                key={index}
                sx={{
                  backgroundColor:
                    index % 2 === 0 ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.05)',
                }}
              >
                {headers.map((header) => {
                  if (header === 'status') {
                    const { color, label } = getStatusButtonProps(row[header]);
                    return (
                      <TableCell key={header}>
                        <Button
                          variant="contained"
                          style={{ backgroundColor: color, color: 'black' }}
                        >
                          {label}
                        </Button>
                      </TableCell>
                    );
                  } else if (header === 'Trade Date') {
                    return (
                      <TableCell key={header}>
                        {formatDate(row[header])}
                      </TableCell>
                    );
                  }
                  return <TableCell key={header}>{row[header]}</TableCell>;
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>



    </Card>

        <Pagination
        page={page}
        rowsPerPage={rowsPerPage}
        totalItems={data.length}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

      </div>
  );
};

export default TableComponent;


