import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
// import { makeStyles } from "@m/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
// import Grid from "@mui/material/Grid";
// import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { mainListItems } from "./ListItems";
// import Chart from "./Chart";
// import Deposits from "./Deposits";
// import Orders from "./Order";
// import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@mui/material/Avatar";
import AccountMenu from "./AccountMenu";
import TextField from "@mui/material/TextField";
import {
  Button,
  Card,
  CardContent,
  InputAdornment,
  SvgIcon
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
// import { DashboardNavbar } from "./DashboardNavbar";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="#GIR">
        Generation Infinite Machines
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    bgColor: "#000",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9)
      }
    })
  }
}));

const mdTheme = createTheme();

function DashboardContent(props) {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="absolute"
          open={open}
          sx={{
            background: "#FFF"
          }}
        >
          <Toolbar
            sx={{
              pr: "24px" // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" })
              }}
            >
              <MenuIcon style={{ color: "#000" }} />
            </IconButton>
            <Typography
              component="h6"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
              className="Head"
              style={{
                display: "flex",
                justifyContent: "left",
                alignItem: "center",
                color: "#000",
                fontWeight: "600"
              }}
            >
              {/* <Logo /> */}
              {/* <img src="image.jpg" alt="logo" /> */}
              <Box
                component="img"
                alt="Logo"
                src="https://uploads.codesandbox.io/uploads/user/abf47ece-3a60-4b01-a4e0-d0c33268bc30/dIk5-image.png"
              />
            </Typography>
            <TextField
              size="small"
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
              variant="filled"
              className="input-field"
            />
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon style={{ color: "#000" }} />
              </Badge>
            </IconButton>
            {/* <Avatar
              alt="j"
              src="/broken-image.jpg"
              sx={{ width: 24, height: 24, marginLeft: "20px" }}
            /> */}
            <AccountMenu />
          </Toolbar>
        </AppBar>
        {/* <DashboardNavbar /> */}
        <div
          style={{
            background: "#F4F5FA"
          }}
        >
          <Drawer variant="permanent" open={open}>
            <Toolbar
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                px: [1],
                background: "#F4F5FA"
              }}
            >
              <IconButton onClick={toggleDrawer}>
                <ChevronLeftIcon style={{ color: "#000" }} />
              </IconButton>
            </Toolbar>
            {/* <Divider /> */}
            <List
              sx={{
                background: "#F4F5FA"
              }}
            >
              {mainListItems}
            </List>
            {/* <Divider /> */}
            {/* <List>{secondaryListItems}</List> */}
          </Drawer>
        </div>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
            bgcolor: "#ddd"
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            {props.children}
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard(props) {
  return <DashboardContent {...props} />;
}
