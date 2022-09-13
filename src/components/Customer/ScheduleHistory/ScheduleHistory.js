import { useState, useEffect } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import PropTypes from "prop-types";
// import { format } from "date-fns";
import {
  // Avatar,
  Box,
  Card,
  Button,
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
import TableWithActions from "../../../Reuseable/Table/TableWithActions";
//import Button from '@mui/material/Button';
import FilterListIcon from "@mui/icons-material/FilterList";
import Action from "../../../Reuseable/Action";
import AddIcon from "@mui/icons-material/Add";
import CreateModal from "../../../Reuseable/Modal/CreateModal";

const ScheduleHistory = ({ saveUser }) => {
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(30);
  const [page, setPage] = useState(0);
  const headings = [
    "Schedule Id",
    "Schedule Date",
    "Schedule Time",
    "Recipe",
    "Amount",
    "Time Taken",
    "Scheduled From",
    "Status"
  ];
  const dataType = "schedulehistory";
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    // fetch("https://smart-batter.herokuapp.com/api/users")
    //   .then((res) => res.json())
    //   .then((json) => setCustomers(json))
    //   .catch((e) => console.log(e));
    const schedules = [
      {
        id: "s1",
        schedule_id: "wqwcqw",
        schedule_date: "20/02/2022",
        schedule_time: "10:00",
        recipe: "idly",
        amount: "10%",
        time_taken: " 10:00",
        scheduled_from: "20/02/2022 10:00",
        status: "scheduled"
      },
      {
        id: "s2",
        schedule_id: "wqwcqw",
        schedule_date: "20/02/2022",
        schedule_time: "10:00",
        recipe: "idly",
        amount: "10%",
        time_taken: " 10:00",
        scheduled_from: "20/02/2022 10:00",
        status: "scheduled"
      },
      {
        id: "s3",
        schedule_id: "wqwcqw",
        schedule_date: "20/02/2022",
        schedule_time: "10:00",
        recipe: "idly",
        amount: "10%",
        time_taken: " 10:00",
        scheduled_from: "20/02/2022 10:00",
        status: "scheduled"
      },
      {
        id: "s4",
        schedule_id: "wqwcqw",
        schedule_date: "20/02/2022",
        schedule_time: "10:00",
        recipe: "idly",
        amount: "10%",
        time_taken: " 10:00",
        scheduled_from: "20/02/2022 10:00",
        status: "scheduled"
      },
      {
        id: "s5",
        schedule_id: "wqwcqw",
        schedule_date: "20/02/2022",
        schedule_time: "10:00",
        recipe: "idly",
        amount: "10%",
        time_taken: " 10:00",
        scheduled_from: "20/02/2022 10:00",
        status: "scheduled"
      }
    ];
    setCustomers(schedules);
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
        <Button
          variant="contained"
          color="primary"
          startIcon={<FilterListIcon />}
        >
          Filter
        </Button>

        <Action sx={{ mr: 2 }} />

        <CreateModal buttonName="Create" />
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

ScheduleHistory.propTypes = {
  customers: PropTypes.array.isRequired
};

export default ScheduleHistory;
