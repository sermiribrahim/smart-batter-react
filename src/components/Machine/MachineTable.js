import { useState, useEffect } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import PropTypes from "prop-types";
// import { format } from "date-fns";
import Typography from "@mui/material/Typography";
import { InputAdornment, SvgIcon } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {
  // Avatar,
  Box,
  Card,
  Button,
  TablePagination
} from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

import TableWithActions from "../../Reuseable/Table/TableWithActions";
import FilterListIcon from "@mui/icons-material/FilterList";
import Action from "../../Reuseable/Action";
import TextField from "@mui/material/TextField";
import CreateExtend from "../../Reuseable/Modal/CreateExtend";
//import Filter from "../../../mui/Reuseable/Filter";
//import { DataGrid, GridToolbar } from '@mui/x-data-grid';
// import Filter from "../../Reuseable/Filter";

const MachineTable = ({ saveUser }) => {
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(30);
  const [page, setPage] = useState(0);
  const headings = [
    "Machine Id",
    "Customer Id",
    "Customer Name",
    "Last Scheduled",
    "Manufactured On",
    "Macufactured By",
    "Health",
    "Machine Status"
  ];
  const dataType = "machine";
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    // fetch("https://smart-batter.herokuapp.com/api/users")
    //   .then((res) => res.json())
    //   .then((json) => setCustomers(json))
    //   .catch((e) => console.log(e));
    const machines = [
      {
        id: "m1",
        machine_id: "m1",
        customer_id: "c112423423",
        customer_name: "jagadish",
        last_scheduled: "22/02/2022",
        manufactured_on: "12/02/2022",
        manufactured_by: "machine pvt ltd",
        health: "99%",
        status: "Good"
      },
      {
        id: "m2",
        machine_id: "m1",
        customer_id: "c112423423",
        customer_name: "Sanjay",
        last_scheduled: "22/02/2022",
        manufactured_on: "12/02/2022",
        manufactured_by: "machine pvt ltd",
        health: "99%",
        status: "Good"
      },
      {
        id: "m3",
        machine_id: "m1",
        customer_id: "c112423423",
        customer_name: "Auswin",
        last_scheduled: "22/02/2022",
        manufactured_on: "12/02/2022",
        manufactured_by: "machine pvt ltd",
        health: "99%",
        status: "Good"
      },
      {
        id: "m4",
        machine_id: "m1",
        customer_id: "c112423423",
        customer_name: "franklin",
        last_scheduled: "22/02/2022",
        manufactured_on: "12/02/2022",
        manufactured_by: "machine pvt ltd",
        health: "99%",
        status: "Good"
      },
      {
        id: "m5",
        machine_id: "m1",
        customer_id: "c112423423",
        customer_name: "Mounika",
        last_scheduled: "22/02/2022",
        manufactured_on: "12/02/2022",
        manufactured_by: "machine pvt ltd",
        health: "99%",
        status: "Good"
      }
    ];
    setCustomers(machines);
  }, []);
  // const headings = [
  //   "Schedule Id",
  //   "Schedule Date",
  //   "Schedule Time",
  //   "Recipe",
  //   "Amount",
  //   "Time Taken",
  //   "Scheduled From",
  //   "Status"
  // ];
  // const dataType = "schedule";

  const handleSelectAll = (event) => {
    let newSelectedCustomerIds;

    if (event.target.checked) {
      newSelectedCustomerIds = customers.map((customer) => customer.id);
    } else {
      newSelectedCustomerIds = [];
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedCustomerIds.indexOf(id);
    let newSelectedCustomerIds = [];

    if (selectedIndex === -1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds,
        id
      );
    } else if (selectedIndex === 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(1)
      );
    } else if (selectedIndex === selectedCustomerIds.length - 1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(0, selectedIndex),
        selectedCustomerIds.slice(selectedIndex + 1)
      );
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card>
      <div className="row threebutton">
        <h2 className="machine-heading"> Machine</h2>

        <TextField
          sx={{ mr: 2 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SvgIcon color="action" fontSize="small">
                  <SearchIcon />
                </SvgIcon>
              </InputAdornment>
            )
          }}
          placeholder="Search cust Name, Cust ID,Machine ID"
          variant="outlined"
          className="input-field"
        />
        <Button
          variant="contained"
          color="primary"
          startIcon={<FilterListIcon />}
        >
          Filter
        </Button>

        <Action sx={{ mr: 2 }} />
      </div>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 500 }}>
          <TableWithActions
            values={customers}
            limit={limit}
            headings={headings}
            dataType={dataType}
          />
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={customers.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

MachineTable.propTypes = {
  customers: PropTypes.array.isRequired
};

export default MachineTable;
