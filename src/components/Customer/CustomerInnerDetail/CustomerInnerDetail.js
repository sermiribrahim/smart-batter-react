import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import InputField from "../../../Reuseable/TextField/InputField";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";

export default function CustomerInnerDetail() {
  const Input = styled("input")({
    display: "none"
  });
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <p className="Customer-heading">Customer photo</p>

            <Avatar
              alt="Remy Sharp"
              src="/images/man.png"
              className="avatar"
              sx={{ width: 100, height: 100 }}
            />
            <label htmlFor="contained-button-file">
              <Input
                accept="image/*"
                id="contained-button-file"
                multiple
                type="file"
              />
              <div className="Upload-image">
                <Button variant="contained" component="span" sx={{ mb: 2 }}>
                  <CloudUploadIcon sx={{ mr: 2 }} /> Upload a new image
                </Button>
              </div>
            </label>

            <InputField name="First Name" vari="outlined" type="text" />
            <br />
            <br />
            <InputField name="Last Name" vari="outlined" type="text" />
            <br />
            <br />
            <InputField name="Email" vari="outlined" type="email" />
            <br />
            <br />
            <InputField name="Phonenumber" vari="outlined" type="tel" />
            <br />
            <br />
            <InputField name="Address" vari="outlined" type="text" />
            <br />
            <br />
            <InputField name="Assigned Machine" vari="outlined" type="text" />
            <br />
            <br />
            <InputField name="" vari="outlined" type="date" />
            <br />
            <br />
          </Grid>
          <Grid item xs={6}>
            <FormControl
              variant="outlined"
              sx={{ marginBottom: "30px", width: "100%" }}
            >
              <InputLabel id="demo-simple-select-standard-label">
                Add a Location
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                // value={age}
                // onChange={handleChange}
                label="Machine Location"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="B.E Marine Engineering">Chennai</MenuItem>
                <MenuItem value="B.sc Nautical Science">Mumbai</MenuItem>
                <MenuItem value="Diploma In Nautical Science">
                  Bangalore
                </MenuItem>
                <MenuItem value="Trainee Marine Engineer">Hyderabad</MenuItem>
                <MenuItem value="General Purpose Rating">
                  Andra pradesh
                </MenuItem>
              </Select>
            </FormControl>
            <div style={{ width: "100%" }}>
              <label className="Machine-location">
                Machine's current location
              </label>
              <iframe
                width="100%"
                height="300"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              >
                <a href="https://www.gps.ie/marine-gps/">marine gps</a>
              </iframe>
            </div>
            <br />
            <InputField name="Mobile model " vari="outlined" type="text" />
            <br />
            <br />
            <InputField name="Device Id" vari="outlined" type="text" />
            <br />
            <br />
            <InputField name="Os version" vari="outlined" type="text" />
            <br />
            <br />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
