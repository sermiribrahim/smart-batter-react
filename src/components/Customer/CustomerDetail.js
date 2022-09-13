import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
// import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Insights from "./Insights/Insights";
import { useNavigate } from "react-router-dom";
import CustomerInnerDetail from "./CustomerInnerDetail/CustomerInnerDetail";
import ScheduleHistory from "./ScheduleHistory/ScheduleHistory";
// import { Card, CardContent } from "@mui/material";
import styles from "./CustomerDetail.module.css";
// import "../../";
import MachineDetail from "./MachineDetail/MachineDetail";
import Warranty from "./Warranty/Warranty";
import Purchases from "./Purchases/Purchases";
import Recipes from "./Recipes/Recipes";
import Complaints from "./Complaints/Complaints";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "../.././styles.css";
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
        <Box
          sx={{ p: 3, background: "#F8FAFC", borderRadius: 5, marginTop: 2 }}
        >
          {children}
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

const CustomerDetail = () => {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        className={styles.customerDetails}
        sx={{ borderBottom: 1, borderColor: "divider" }}
      >
        {/* <Card>
          <CardContent> */}

        <h1 className={styles.customerHeading}>
          <ArrowBackIosIcon
            onClick={() => navigate(-1)}
            style={{ fontSize: "16px" }}
          />{" "}
          Customer - Lisa Ann
        </h1>
        <div className="tabs" sx={{ background: "#ccc" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              className={styles.tabs0}
              // sx={{ background: "#fff" }}
              label="Insights"
              {...a11yProps(0)}
            />
            <Tab
              className={styles.tabs1}
              label="Customer Detail"
              {...a11yProps(1)}
            />
            <Tab
              className={styles.tabs2}
              label="Schedule History"
              {...a11yProps(2)}
            />
            <Tab
              className={styles.tabs3}
              label="Machine Detail"
              {...a11yProps(3)}
            />
            <Tab className={styles.tabs4} label="Warranty" {...a11yProps(4)} />
            <Tab className={styles.tabs5} label="Purchases" {...a11yProps(5)} />
            <Tab className={styles.tabs6} label="Recipes" {...a11yProps(6)} />
            <Tab
              className={styles.tabs7}
              label="Complaints"
              {...a11yProps(7)}
            />
          </Tabs>
        </div>
      </Box>
      <TabPanel value={value} index={0}>
        <Insights />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CustomerInnerDetail />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ScheduleHistory />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <MachineDetail />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Warranty />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Purchases />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Recipes />
      </TabPanel>
      <TabPanel value={value} index={7}>
        <Complaints />
      </TabPanel>
    </Box>
    //   </CardContent>
    // </Card>
  );
};

export default CustomerDetail;
