import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

const ComponentCard = (props) => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary
  }));
  return (
    <>
      <Grid item xs={props.size}>
        <Item sx={{ borderRadius: 0, borderBottom: "1px solid #ccc" }}>
          <div className="row raw-material">
            <Typography variant="body2">{props.head}</Typography>
          </div>
          <div className="row recipe ">
            <Typography variant="h6" component="h6" fontWeight="bold">
              {props.content1}
            </Typography>
            <Typography variant="h6" component="h6" fontWeight="bold">
              {props.content2}
            </Typography>
            <Typography variant="h6" component="h6" fontWeight="bold">
              {props.content3}
            </Typography>
          </div>
          <div className="row recipe ">
            <Typography variant="body2"> {props.contentName1}</Typography>
            <Typography variant="body2"> {props.contentName2}</Typography>
            <Typography variant="body2"> {props.contentName3}</Typography>
          </div>
        </Item>
      </Grid>
    </>
  );
};

export default ComponentCard;
