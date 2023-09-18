import React, { useEffect, useState } from "react";
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
  Drawer
} from "@mui/material";

import CheckIcon from "@mui/icons-material/Check";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import ConstructionIcon from "@mui/icons-material/Construction";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import SendIcon from "@mui/icons-material/Send";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";

import { ToastContainer, toast } from "react-toastify";

import axios from "axios";
import Pagination from "./pagination";
import MiniDrawer from "./sidebar";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: "rgba(255, 255, 255, 0.2)",
  color: theme.palette.text.primary,
  borderBottom: `1px solid ${theme.palette.divider}`,
  fontWeight: "bold",
  position: "sticky",
  top: 0,
  zIndex: 1,
}));

const Card = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  borderRadius: theme.spacing(1),
  marginBottom: theme.spacing(2),
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(10px)",
}));

const SearchBar = styled(Input)(({ theme }) => ({
  width: "100%",
  marginBottom: theme.spacing(2),
}));

const getStatusButtonProps = (status) => {
  switch (status) {
    case "Open":
      return { color: "#A5F1F5", label: "Open", icon: <SearchIcon /> };
    case "Closed":
      return { color: "#167e65", label: "Closed", icon: <CloseIcon /> };
    case "Resolved":
      return { color: "#5c5cff", label: "Resolved", icon: <ConstructionIcon />};
    case "Pending":
      return { color: "#FFF4DF", label: "Pending", icon: <BorderColorIcon /> };

    default:
      return { color: "transparent", label: status };
  }
};

const TableComponent = ({ data, updateData , assignProp , searchProp }) => {
  const [tableData, setTableData] = useState(data);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedExceptionId, setSelectedExceptionId] = useState(null);
  const [assigning, setAssigning] = useState(false);
  const [selectedException, setSelectedException] = useState(null);
  const [showAssignedPopup, setShowAssignedPopup] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (showAssignedPopup) {
      toast("Already assigned!", {
        autoClose: 2000,
      });
    }
  }, [showAssignedPopup]);

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

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleAssignedClick = () => {
    setAssigning(false);
    setShowAssignedPopup(true);
    setSearchTerm();
    setTimeout(() => {
      setShowAssignedPopup(false);
    }, 2000);
  };

  const handleAssignClick = (exceptionId) => {
    setSelectedExceptionId(exceptionId);
    setAssigning(true);
    setShowAssignedPopup(false);
  };

  const handleAssign = (userID) => {
    setSelectedUserId(userID);
    console.log(
      `Assigned exception ${selectedExceptionId} to user with ID:  ${userID}`
    );

    setAssigning(false);
    setSearchTerm();

    const dataToSend = {
      exceptionId: selectedExceptionId,
      userId: userID,
    };

    axios
      .post("http://localhost:8081/api/assign-exception", dataToSend)
      .then((response) => {
        console.log("Assignment successful", response.data);
        setTableData(data);
      })
      .catch((error) => {
        console.error("Assignment failed", error);
      });

    updateData(data);
  };

  const handleSearchClear = () => {
    
    setSearchTerm();
    setAssigning(false);
    updateData(data);
  };



  console.log('b');

  let headers = Object.keys(data[0]);
  const columnsToExclude = ["description", "updatedBy", "updatedAt"];
  headers = headers.filter((header) => !columnsToExclude.includes(header));

  return (
    <div>
      {/* <Card>
        {selectedException && <Header exception={selectedException} />}
      </Card> */}

        {/* <button onClick={toggleSidebar} style={{marginTop : '10px'  }}>Toggle Sidebar</button> */}
        <Drawer
        anchor="left"
        open={isSidebarOpen}
        onClose={toggleSidebar}
        variant="temporary"
        ModalProps={{ keepMounted: true }}
        onClick={toggleSidebar} 
      >
        <MiniDrawer/>
        </Drawer>

      <Card>
        {assigning && (
          <div style={{marginTop : '7px'}}>
            <Box mb={2}>
              <b>Select a user to assign the exception:</b>
            </Box>

            <div style={{ display: "flex", alignItems: "center" }}>
            <SearchBar
              placeholder="Search for users"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <IconButton onClick={handleSearchClear} size="small">
              <ClearIcon />
            </IconButton>
            </div>
            
          </div>
        )}

        <div>
          {searchTerm && (
            <ul>
              {data
                .filter((user) => user.exceptionId.includes(searchTerm))
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
            </ul>
          )}
        </div>
      </Card>

      <Card>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                {headers.map((header) => (
                  <StyledTableCell key={header}>
                    {header.toUpperCase()}
                  </StyledTableCell>
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
                          ? "rgba(255, 255, 255, 0.1)"
                          : "rgba(255, 255, 255, 0.05)",
                    }}
                  >
                    {headers.map((header) => {
                      if (header === "exceptionId") {
                        return (
                          <TableCell key={header}>
                            <button
                              onClick={() => handleExceptionClick(row)}
                              style={{
                                background: "transparent",
                                border: "none",
                                cursor: "pointer",
                              }}
                            >
                              {row[header]}
                            </button>
                          </TableCell>
                        );
                      }

                      if (header === "status") {
                        const { color, label, icon } = getStatusButtonProps(
                          row[header]
                        );
                        return (
                          <TableCell key={header}>
                            <Button
                              variant="text"
                              startIcon={icon}
                              style={{ backgroundColor: 'white', color: "black" }}
                            >
                              {label}
                            </Button>
                          </TableCell>
                        );
                      } else if (header === "action") {
                        return (
                          <TableCell key={header}>
                            {row[header] === "Assigned" ? (
                              <React.Fragment>
                                <Button
                                  variant="contained"
                                  color="primary"
                                  startIcon={<CheckIcon />}
                                  onClick={handleAssignedClick}
                                >
                                  {row[header]}
                                </Button>
                              </React.Fragment>
                            ) : (
                              <Button
                                variant="contained"
                                color="secondary"
                                startIcon={<SendIcon />}
                                onClick={() =>
                                  handleAssignClick(row.exceptionId)
                                }
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
