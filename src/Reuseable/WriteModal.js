import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Checkbox from "@mui/material/Checkbox";
// import InputLabel from "@mui/material/InputLabel";
import InputField from "../Reuseable/TextField/InputField";
import { FormGroup } from "@mui/material";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import ButtonGroup from "@mui/material/ButtonGroup";
// import Button from "@mui/material/Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4
};

export default function WriteModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} variant="outlined">
        Write
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Send an alert
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            For Update
          </Typography>

          <div className="row">
            <div className="row">
              <Checkbox />
              Notification
            </div>
            <div className="row">
              <Checkbox />
              SMS
            </div>
          </div>
          <FormGroup sx={{ mt: 2 }}>
            <InputField
              name="Subject"
              vari="outlined"
              type="text"
              sx={{ mt: 2 }}
            />
          </FormGroup>
          <FormGroup sx={{ mt: 2 }}>
            <textarea
              id="text"
              name="text"
              placeholder="Message"
              className="textarea"
              rows="5"
              cols="40"
            ></textarea>
          </FormGroup>
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
