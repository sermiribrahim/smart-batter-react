import { useState, useEffect } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import PropTypes from "prop-types";
import { InputAdornment, SvgIcon } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {
  // Avatar,
  Box,
  Card,
  Button,
  TablePagination
} from "@mui/material";
import TableWithActions from "../../../Reuseable/Table/TableWithActions";
import FilterListIcon from "@mui/icons-material/FilterList";
import Action from "../../../Reuseable/Action";
import TextField from "@mui/material/TextField";
import Filter from "../../../Reuseable/Filter";

const UserReports = ({ saveUser }) => {
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(30);
  const [page, setPage] = useState(0);
  const headings = [
    "REPORT ID ",
    "CREATED ON",
    "CATEGORY",
    "SUB CATEGORY",
    "SUBJECT",
    "PHOTO",
    "STATUS"
  ];
  const dataType = "basic";
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch("https://smart-batter.herokuapp.com/api/users")
      .then((res) => res.json())
      .then((json) => setCustomers(json))
      .catch((e) => console.log(e));
  }, []);
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

UserReports.propTypes = {
  customers: PropTypes.array.isRequired
};
export default UserReports;
