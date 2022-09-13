import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  Typography
} from "@mui/material";
import { Search as SearchIcon } from "../../assets/icons/search";
import { Upload as UploadIcon } from "../../assets/icons/upload";
import { Download as DownloadIcon } from "../../assets/icons/download";
import Action from "../../Reuseable/Action";

export const CustomerListToolbar = (props) => (
  <Box {...props}>
    <Box
      sx={{
        alignItems: "center",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        m: -1
      }}
    >
      <Typography sx={{ m: 1, color: "#000" }} variant="h4">
        Customer
      </Typography>
      {/* <Box sx={{ m: 1 }}>
        <Button
          startIcon={<UploadIcon fontSize="small" />}
          sx={{ mr: 1, color: "#191C24", borderRadius: "5px" }}
        >
          Import
        </Button>
        <Button
          startIcon={<DownloadIcon fontSize="small" />}
          sx={{ mr: 1, color: "#191C24", borderRadius: "5px" }}
        >
          Export
        </Button>
        <Button
          color="primary"
          variant="contained"
          sx={{
            background: "#FF52B2",
            "&:hover": {
              background: "#FF52B2"
            }
          }}
        >
          Add Customers
        </Button>
      </Box> */}
    </Box>
    <Box sx={{ mt: 3 }}>
      <Card>
        <CardContent>
          <Box
            sx={{
              maxWidth: 500
            }}
            className="action"
          >
            <div className="row action-inner">
              <TextField
                fullWidth
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
                variant="standard"
                className="input-field"
              />
              <Action />
            </div>
          </Box>
          {/* <br />
          <div className="row main-header">
            <Link to="" className="header0">
              Insight
            </Link>
            <Link to="" className="header1">
              Customer Details
            </Link>
            <Link to="" className="header2">
              Insight
            </Link>
            <Link to="" className="header3">
              Insight
            </Link>
            <Link to="" className="header4">
              Insight
            </Link>
            <Link to="" className="header5">
              Insight
            </Link>
            <Link to="" className="header6">
              Insight
            </Link>
            <Link to="" className="header7">
              Insight
            </Link>
          </div> */}
        </CardContent>
      </Card>
    </Box>
  </Box>
);
