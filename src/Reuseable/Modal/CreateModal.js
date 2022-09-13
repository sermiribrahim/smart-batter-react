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
import InputField from "../../Reuseable/TextField/InputField";
import ButtonGroup from "@mui/material/ButtonGroup";
// import Button from "@mui/material/Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",

  boxShadow: 24,
  p: 4
};

export default function CreateModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [value, setValue] = React.useState(null);

  const [idly, setIdly] = React.useState("");

  const handleChange = (event) => {
    setIdly(event.target.value);
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="contained"
        startIcon={<AddIcon />}
        sx={{ m: 2 }}
      >
        {props.buttonName}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create Schedule
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, mb: 2 }}>
            SELECT RECIPE
          </Typography>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Idly</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={idly}
              label="Idly"
              onChange={handleChange}
            >
              <MenuItem value={10}>Dosa</MenuItem>
              <MenuItem value={20}>IDIAPPAM</MenuItem>
              <MenuItem value={30}>Puttu</MenuItem>
              <MenuItem value={40}>Paniyaram</MenuItem>
            </Select>
          </FormControl>

          <Typography id="modal-modal-description" sx={{ mt: 2, mb: 2 }}>
            BATTER AMOUNT
          </Typography>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">500g</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={idly}
              label="500g"
              onChange={handleChange}
            >
              <MenuItem value={10}>500g</MenuItem>
              <MenuItem value={20}>1000g</MenuItem>
              <MenuItem value={30}>1500g</MenuItem>
            </Select>
          </FormControl>

          <Typography id="modal-modal-description" sx={{ mt: 2, mb: 2 }}>
            DATE
          </Typography>

          <InputField name="" vari="outlined" type="date" />

          <Typography id="modal-modal-description" sx={{ mt: 2, mb: 2 }}>
            TIME
          </Typography>

          <InputField name="" vari="outlined" type="time" />

          <div className="row buttonmodal">
            <ButtonGroup disableElevation variant="outlined">
              <Button color="success">Save</Button>
              <Button color="error">Cancel</Button>
            </ButtonGroup>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
