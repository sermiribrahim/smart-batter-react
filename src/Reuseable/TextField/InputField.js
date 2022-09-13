import TextField from "@mui/material/TextField";

const InputField = (props) => {
  return (
    <>
      <TextField
        fullWidth
        id="outlined-basic"
        label={props.name}
        variant={props.vari}
        type={props.type}
      />
    </>
  );
};

export default InputField;
