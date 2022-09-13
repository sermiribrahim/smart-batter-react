import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { Divider } from "@mui/material";
import DatePicker from "@mui/lab/DatePicker";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
  p: 4
};

export default function DeviceUsersModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [editData, setEditData] = React.useState({
    serial_no: "",
    device_model_name: "",
    status: "",
    current_user: ""
  });

  const onChangeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setEditData((prevState) => {
      if (name === "img") {
        value = e.target.files[0];
      }
      return {
        ...prevState,
        [name]: value
      };
    });
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        sx={{
          bgcolor: "#191C24",
          color: "#fff",
          boxShadow: "2px 2px 5px 0px #000",
          width: "15%",
          "&:hover": {
            backgroundColor: "#191C24",
            color: "#fff"
          }
        }}
      >
        + New Model
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add New Device Model
          </Typography>
          <Divider sx={{ marginBottom: "20px" }} />
          <TextField
            id="outlined-basic"
            label="SI NO"
            variant="outlined"
            name="serial_no"
            sx={{ width: "335px", marginBottom: "20px" }}
            onChange={onChangeHandler}
            value={editData.serial_no}
          />
          <TextField
            id="outlined-basic"
            label="Device Modal Name"
            variant="outlined"
            name="device_model_name"
            sx={{ width: "335px", marginBottom: "20px" }}
            onChange={onChangeHandler}
            value={editData.device_model_name}
          />
          <TextField
            id="outlined-basic"
            label="Status"
            variant="outlined"
            name="status"
            sx={{ width: "335px", marginBottom: "20px" }}
            onChange={onChangeHandler}
            value={editData.status}
          />
          <TextField
            id="outlined-basic"
            label="Current User"
            variant="outlined"
            name="current_user"
            sx={{ width: "335px", marginBottom: "20px" }}
            onChange={onChangeHandler}
            value={editData.current_user}
          />

          {/* <Button
            variant="contained"
            component="label"
            // sx={{ display: "block" }}
          >
            Choose Image
            <input type="file" hidden />
          </Button> */}

          {/* <input
            type="file"
            name="img"
            onChange={onChangeHandler}
            style={{ marginBottom: "20px" }}
          /> */}
          <Button
            variant="contained"
            component="label"
            onClick={() => {
              props.saveDeviceModel(editData);
              handleClose();
            }}
          >
            Save
          </Button>
        </Box>
      </Modal>
    </>
  );
}
