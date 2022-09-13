import * as React from "react";
import { Link } from "react-router-dom";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import PeopleIcon from "@mui/icons-material/People";
// import BarChartIcon from "@mui/icons-material/BarChart";
// import LayersIcon from "@mui/icons-material/Layers";
// import AssignmentIcon from "@mui/icons-material/Assignment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";

export const mainListItems = (
  <div className="sidebar-main">
    <Link to="customer" style={{ color: "#000", textDecoration: "none" }}>
      <ListItem button>
        <ListItemIcon>
          <AccountCircleIcon style={{ color: "#000" }} />
        </ListItemIcon>
        <ListItemText primary="Customer" />
      </ListItem>
    </Link>
    <Link to="machine" style={{ color: "#000", textDecoration: "none" }}>
      <ListItem button>
        <ListItemIcon>
          <ImportantDevicesIcon style={{ color: "#000" }} />
        </ListItemIcon>
        <ListItemText primary="Machine" />
      </ListItem>
    </Link>
    <Link to="recipe" style={{ color: "#000", textDecoration: "none" }}>
      <ListItem button>
        <ListItemIcon>
          <RestaurantIcon style={{ color: "#000" }} />
        </ListItemIcon>
        <ListItemText primary="Recipe" />
      </ListItem>
    </Link>
    <Link to="analytics" style={{ color: "#000", textDecoration: "none" }}>
      <ListItem button>
        <ListItemIcon>
          <AnalyticsOutlinedIcon style={{ color: "#000" }} />
        </ListItemIcon>
        <ListItemText primary="Analytics" />
      </ListItem>
    </Link>
    <Link
      to="service-Warranty"
      style={{ color: "#000", textDecoration: "none" }}
    >
      <ListItem button>
        <ListItemIcon>
          <HomeRepairServiceIcon style={{ color: "#000" }} />
        </ListItemIcon>
        <ListItemText primary="Service & Warranty" />
      </ListItem>
    </Link>
    <Link to="otaupdate" style={{ color: "#000", textDecoration: "none" }}>
      <ListItem button>
        <ListItemIcon>
          <UpgradeIcon style={{ color: "#000" }} />
        </ListItemIcon>
        <ListItemText primary="OTA updates" />
      </ListItem>
    </Link>
    <Link to="orders" style={{ color: "#000", textDecoration: "none" }}>
      <ListItem button>
        <ListItemIcon>
          <ShoppingCartIcon style={{ color: "#000" }} />
        </ListItemIcon>
        <ListItemText primary="Orders" />
      </ListItem>
    </Link>
    <Link to="inventory" style={{ color: "#000", textDecoration: "none" }}>
      <ListItem button>
        <ListItemIcon>
          <Inventory2OutlinedIcon style={{ color: "#000" }} />
        </ListItemIcon>
        <ListItemText primary="Inventory" />
      </ListItem>
    </Link>
    <Link
      to="customerservice"
      style={{ color: "#000", textDecoration: "none" }}
    >
      <ListItem button>
        <ListItemIcon>
          <SupportAgentIcon style={{ color: "#000" }} />
        </ListItemIcon>
        <ListItemText primary="Customer Service" />
      </ListItem>
    </Link>
    <Link to="access_control" style={{ color: "#000", textDecoration: "none" }}>
      <ListItem button>
        <ListItemIcon>
          <AccessibilityNewIcon style={{ color: "#000" }} />
        </ListItemIcon>
        <ListItemText primary="Access Control" />
      </ListItem>
    </Link>
    <Link to="settings" style={{ color: "#000", textDecoration: "none" }}>
      <ListItem button>
        <ListItemIcon>
          <SettingsApplicationsIcon style={{ color: "#000" }} />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItem>
    </Link>
    {/* <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Integrations" />
    </ListItem> */}
  </div>
);

// export const secondaryListItems = (
//   <div>
//     <ListSubheader inset>Saved reports</ListSubheader>
//     <ListItem button>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Current month" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Last quarter" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Year-end sale" />
//     </ListItem>
//   </div>
// );
