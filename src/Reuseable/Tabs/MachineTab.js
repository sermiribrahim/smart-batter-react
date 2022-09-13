import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MachineInsight from "../../components/Customer/MachineDetail/MachineInsight";
import MachineAnalytics from "../../components/Customer/MachineDetail/MachineAnalytics";
import MachinePart from "../../components/Customer/MachineDetail/MachinePart";

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
    <Box sx={{ width: "100%" }}>
      <h2 className="machinedetail-heading">Machine Detail - SBMHE2949</h2>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Insight" {...a11yProps(0)} />
          <Tab label="Analytics" {...a11yProps(1)} />
          <Tab label="Parts Health Status" {...a11yProps(2)} />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <MachineInsight />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <MachineAnalytics />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <MachinePart />
      </TabPanel>
    </Box>
  );
}
