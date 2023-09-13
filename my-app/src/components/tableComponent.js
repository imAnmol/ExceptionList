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
} from '@mui/material';

import Pagination from './pagination'; // Import your Pagination component

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
  color: theme.palette.text.primary,
  borderBottom: `1px solid ${theme.palette.divider}`,
  fontWeight: 'bold',
  position: 'sticky',
  top: 0,
  zIndex: 1,
}));

const Card = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  borderRadius: theme.spacing(1),
  marginBottom: theme.spacing(2),
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
}));

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

const TableComponent = ({ data }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
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
                {headers.map((header) => (
                  <StyledTableCell key={header}>{header}</StyledTableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{
                      backgroundColor:
                        index % 2 === 0
                          ? 'rgba(255, 255, 255, 0.1)'
                          : 'rgba(255, 255, 255, 0.05)',
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
