import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AddIcon from "@mui/icons-material/Add";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// import TextField from "@mui/material/TextField";
// import AdapterDateFns from "@mui/lab/AdapterDateFns";
//import InputField from "../../Reuseable/TextField/InputField";
import ButtonGroup from "@mui/material/ButtonGroup";
// import Button from "@mui/material/Button";
import DoneIcon from '@mui/icons-material/Done';
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4
};

export default function CreateExtend(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [value, setValue] = React.useState(null);

  const [Reason, setReason] = React.useState("");

  const handleChange = (event) => {
    setReason(event.target.value);
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="outlined"
        startIcon={<AddIcon />}
        sx={{ m: 2 }}
      >
        {props.buttonName}
        Start
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Extend the warranty
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, mb: 2 }}>
            REASON
          </Typography>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Select a reason</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={Reason}
              label="Select a reason"
              onChange={handleChange}
            >
              <MenuItem value={10}>Hi</MenuItem>
              <MenuItem value={20}>Hello</MenuItem>
              <MenuItem value={30}>Hey</MenuItem>
              <MenuItem value={40}>Oye!!</MenuItem>
            </Select>
          </FormControl>

          <Typography id="modal-modal-description" sx={{ mt: 2, mb: 2 }}>
            NO OF MONTHS
          </Typography>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Select no of months</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={Reason}
              label="Select no of months"
              onChange={handleChange}
            >
              <MenuItem value={10}>3Months</MenuItem>
              <MenuItem value={20}>6Months</MenuItem>
              <MenuItem value={30}>9Months</MenuItem>
              <MenuItem value={40}>12Months</MenuItem>
            </Select>
          </FormControl>

         

          <div className="row buttonmodal">
            <ButtonGroup disableElevation variant="outlined">
              
              <Button color="error">Cancel</Button>
              <Button color="success" variant="contained" startIcon={<DoneIcon />}>Start</Button>
            </ButtonGroup>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
