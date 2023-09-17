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
  Input,
  Box,

} from '@mui/material';

import Stack from "@mui/material/Stack";
import CheckIcon from "@mui/icons-material/Check";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import ConstructionIcon from "@mui/icons-material/Construction";
import axios from 'axios';


import Pagination from './pagination'; 
import Header from './header';

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

const SearchBar = styled(Input)(({ theme }) => ({
  width: '100%',
  marginBottom: theme.spacing(2),
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

const TableComponent = ({ data , updateData}) => {
  const [tableData, setTableData] = useState(data);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState('');
  const [status, setStatus] = useState('Open');
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedExceptionId, setSelectedExceptionId] = useState(null);
  const [assigning, setAssigning] = useState(false);
  const [selectedException, setSelectedException] = useState(null);
  const [showAssignedPopup, setShowAssignedPopup] = useState(false);


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

  const handleExceptionClick = (exception) => {
    setSelectedException(exception);
  };

  const handleAssignedClick = () => {

    setShowAssignedPopup(true);
    setTimeout(() => {
      setShowAssignedPopup(false);
    }, 2000); 
  };

  const handleAssignClick = (exceptionId) => {
    setSelectedExceptionId(exceptionId);
    setAssigning(true);
  };

  const handleAssign = (userID) => {
    setSelectedUserId(userID);
    console.log(`Assigned exception ${selectedExceptionId} to user with ID:  ${userID}`);
  
    setAssigning(false);
    setSearchTerm('');

    const dataToSend = {
      exceptionId: selectedExceptionId, 
      userId: userID, 
    };

    axios
    .post('http://localhost:8081/api/assign-exception', dataToSend)
    .then((response) => {
     
      console.log('Assignment successful', response.data);
      setTableData(data);
    })
    .catch((error) => {

      console.error('Assignment failed', error);
    });
    
    updateData(data);
    
  };

  const headers = Object.keys(data[0]);

  return (
    <div>
      
      <Card>
      {selectedException && (
        <Header exception={selectedException} />
      )}
      </Card>

      
      <Card>
      {assigning && (<div><SearchBar
          placeholder="Search for users"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          
        />
        <Box mb={2}>
              <b>Select a user to assign the exception:</b>
            </Box>
            </div>)
      }

        
        
          <div>
            
            {searchTerm &&  <ul>
              {data
                .filter((user) =>
                  user.exceptionId.includes(searchTerm)
                )
                .map((user) => (
                  
                  <li key={user.exceptionId}>
                    
                    <Button
                      variant="outlined"
                      onClick={() => handleAssign(user.exceptionId)}
                    >
                      {user.exceptionId}
                    </Button>
                  </li>
                ))}
            </ul>}
            
          </div>
        
      </Card>
  

      <Card>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                {headers.map((header) => (
                  <StyledTableCell key={header}>{header.toUpperCase()}</StyledTableCell>
                  
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
                      if (header === 'exceptionId') {
                  
                  return (
                    <TableCell key={header}>
                      <button
                        onClick={() => handleExceptionClick(row)}
                        style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
                      >
                        {row[header]} 

                      </button>
                    </TableCell>
                  );
                      }

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
                      else if (header === 'action') {
                      
                        return (
                          <TableCell key={header}>
                            {row[header] === 'Assigned' ? <React.Fragment><Button
                              variant="contained"
                              color="primary"
                              // startIcon={<CheckIcon />}
                              onClick={handleAssignedClick}
                            > {row[header]}
                                  </Button>
                                   {showAssignedPopup && <div className="popup">Already assigned</div>} </React.Fragment> :
                               
                            (
                              <Button
                              variant="contained"
                              color="secondary"
                              startIcon={<CheckIcon />}
                              onClick={() => handleAssignClick(row.exceptionId)}
                            >
                              {row[header]}
                            </Button>
                            )}
                            
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
