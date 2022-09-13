import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
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

import PreferedRecipe from "../../components/Recipe/PreferedRecipe";
import CustomerFed from "../../components/Recipe/CustomerFed";
import TextField from "@mui/material/TextField";
import Action from "../../Reuseable/Action";
import RecipeModal from "../../Reuseable/Modal/RecipeModal";
import FilterListIcon from "@mui/icons-material/FilterList";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        background: "#F8FAFC",
        padding: "20px",
        borderRadius: "5px"
      }}
    >
      <div className="row threebutton">
        <h2 className="machine-heading">Recipe</h2>
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
        <RecipeModal />
      </div>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Prefered Recipe" {...a11yProps(0)} />
          <Tab label="Customer Fed Recipe" {...a11yProps(1)} />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <PreferedRecipe />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CustomerFed />
      </TabPanel>
    </Box>
  );
}
