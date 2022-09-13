import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import ComponentCard from "../../../Reuseable/Cards/ComponentCard";
import Button from "@mui/material/Button";

const MachinePart = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary
  }));
  return (
    <>
      <Box sx={{ flexGrow: 1, marginBottom: 3 }}>
        <Grid container spacing={2}>
          <h4 className="machinepart">Component Based</h4>
          <Grid container>
            <ComponentCard
              size="4"
              head="Grinding motor"
              content1="2334hrs"
              content2="124"
              content3="45%"
              contentName1="usage"
              contentName2="Days more to die"
              contentName3="Remaining"
            />
            <ComponentCard
              size="4"
              head="Grinding motor"
              content1="2334hrs"
              content2="124"
              content3="45%"
              contentName1="usage"
              contentName2="Days more to die"
              contentName3="Remaining"
            />
            <ComponentCard
              size="4"
              head="Grinding motor"
              content1="2334hrs"
              content2="124"
              content3="45%"
              contentName1="usage"
              contentName2="Days more to die"
              contentName3="Remaining"
            />
            <ComponentCard
              size="4"
              head="Grinding motor"
              content1="2334hrs"
              content2="124"
              content3="45%"
              contentName1="usage"
              contentName2="Days more to die"
              contentName3="Remaining"
            />
            <ComponentCard
              size="4"
              head="Grinding motor"
              content1="2334hrs"
              content2="124"
              content3="45%"
              contentName1="usage"
              contentName2="Days more to die"
              contentName3="Remaining"
            />
            <ComponentCard
              size="4"
              head="Grinding motor"
              content1="2334hrs"
              content2="124"
              content3="45%"
              contentName1="usage"
              contentName2="Days more to die"
              contentName3="Remaining"
            />
          </Grid>
        </Grid>
        <div className="compontentbased-button">
          <Button variant="outlined">+ more</Button>
        </div>
        <Grid container spacing={2} sx={{ mt: 4 }}>
          <h4 className="machinepart">Electrical & Electronic</h4>
          <Grid container>
            <ComponentCard
              size="4"
              head="Board Relay"
              content1="2334hrs"
              content2="124"
              content3="45%"
              contentName1="usage"
              contentName2="Days more to die"
              contentName3="Remaining"
            />
            <ComponentCard
              size="4"
              head="Component X"
              content1="2334hrs"
              content2="124"
              content3="45%"
              contentName1="usage"
              contentName2="Days more to die"
              contentName3="Remaining"
            />
            <ComponentCard
              size="4"
              head="Component Y"
              content1="2334hrs"
              content2="124"
              content3="45%"
              contentName1="usage"
              contentName2="Days more to die"
              contentName3="Remaining"
            />
            <ComponentCard
              size="4"
              head="Component Z"
              content1="2334hrs"
              content2="124"
              content3="45%"
              contentName1="usage"
              contentName2="Days more to die"
              contentName3="Remaining"
            />
            <ComponentCard
              size="4"
              head="Node MCU"
              content1="2334hrs"
              content2="124"
              content3="45%"
              contentName1="usage"
              contentName2="Days more to die"
              contentName3="Remaining"
            />
            <ComponentCard
              size="4"
              head="Grinding motor"
              content1="2334hrs"
              content2="124"
              content3="45%"
              contentName1="usage"
              contentName2="Days more to die"
              contentName3="Remaining"
            />
          </Grid>
        </Grid>
        <div className="compontentbased-button">
          <Button variant="outlined">+ more</Button>
        </div>
      </Box>
    </>
  );
};
export default MachinePart;
