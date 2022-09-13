import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import PropTypes from "prop-types";
// import { format } from "date-fns";
import {
  // Avatar,
  Box,
  Card,
  // Checkbox,
  // Table,
  // TableBody,
  // TableCell,
  // TableHead,
  TablePagination
  // TableRow,
  // Typography
} from "@mui/material";
// import { getInitials } from "../../utils/getInitials";
// import OptionsDropDown from "../../Reuseable/OptionsDropDown";
// import UserEditModal from "../../Reuseable/UserEditModal";
import TableWithActions from "../../Reuseable/Table/TableWithActions";

const CustomerListResults = ({ customers, saveUser }) => {
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(30);
  const [page, setPage] = useState(0);
  const headings = ["Name", "Email", "Phone", "Devices", "Actions"];
  const dataType = "basic";
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
      <PerfectScrollbar>
        <Box sx={{ minWidth: 400 }}>
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

CustomerListResults.propTypes = {
  customers: PropTypes.array.isRequired
};

export default CustomerListResults;
