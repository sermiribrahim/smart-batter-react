import { Link, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import styles from "../Insights/Insights.module.css";
import OneLineCard from "../../../Reuseable/Cards/OneLineCard";

import Paper from "@mui/material/Paper";
import PieChart from "../../../Reuseable/Chart/PieChart";
const MachineAnalytics = () => {
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
          <Grid item xs={6}>
            <Item>
              <div className="row">
                <Typography variant="h6" component="h6" fontWeight="bold">
                  133334456.5kg
                </Typography>
              </div>
              <div className="row">
                <Typography>Total amount of battter prepared</Typography>
              </div>
              <div className="row">
                <Typography>(+2.02%)</Typography>
              </div>
            </Item>
          </Grid>
          <br />
          <Grid item xs={6}>
            <Item>
              <div className="row Analytics-main">
                <Typography>12344kg</Typography>
                <Typography>8865kg</Typography>
                <Typography>120kg</Typography>
                <Typography>2345l</Typography>
              </div>
              <div className="row Analytics-main">
                <Typography variant="body2">Rice</Typography>
                <Typography variant="body2">Dal</Typography>
                <Typography variant="body2">Flattened Rice</Typography>
                <Typography variant="body2">Water</Typography>
              </div>
              <div className="row Analytics-main">
                <Typography variant="body2">(-5.02 %)</Typography>
                <Typography variant="body2">(+2.02 %)</Typography>
                <Typography variant="body2">(+1.07 %)</Typography>
                <Typography variant="body2">(-2.02 %)</Typography>
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1, marginBottom: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Item>
              <div className="row Analytics-main">
                <Typography variant="h6" component="h6" fontWeight="bold">
                  900
                </Typography>
              </div>
              <div className="row Analytics-main">
                <Typography variant="body2">No of Usage</Typography>
              </div>
              <div className="row Analytics-main">
                <Typography variant="body2">(-2.02 %)</Typography>
              </div>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <div className="row Analytics-main">
                <Typography variant="h6" component="h6" fontWeight="bold">
                  9246hrs
                </Typography>
              </div>
              <div className="row Analytics-main">
                <Typography variant="body2">
                  Total No.of hours preparing batter
                </Typography>
              </div>
              <div className="row Analytics-main">
                <Typography variant="body2">(-2.02 %)</Typography>
              </div>
            </Item>
          </Grid>
          <br />
          <Grid item xs={4}>
            <Item>
              <div className="row Analytics-main">
                <Typography variant="h6" component="h6" fontWeight="bold">
                  244436hrs
                </Typography>
              </div>
              <div className="row Analytics-main">
                <Typography variant="body2">
                  Total No.of hours machine was ON
                </Typography>
              </div>
              <div className="row Analytics-main">
                <Typography variant="body2">(-2.02 %)</Typography>
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1, marginBottom: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Item>
              <div className="row Analytics-main">
                <Typography variant="h6" component="h6" fontWeight="bold">
                  344
                </Typography>
              </div>
              <div className="row Analytics-main">
                <Typography variant="body2">Schedules Cancelled</Typography>
              </div>
              <div className="row Analytics-main">
                <Typography variant="body2">(-2.02 %)</Typography>
              </div>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <div className="row Analytics-main">
                <Typography variant="h6" component="h6" fontWeight="bold">
                  1.4GB
                </Typography>
              </div>
              <div className="row Analytics-main">
                <Typography variant="body2">Data Usage by machine</Typography>
              </div>
              <div className="row Analytics-main">
                <Typography variant="body2">(-2.02 %)</Typography>
              </div>
            </Item>
          </Grid>
          <br />
          <Grid item xs={5}>
            <div className="row">
              <PieChart />
            </div>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1, marginBottom: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Item>
              <Typography>Scheduled time</Typography>
            </Item>
          </Grid>
          <br />
          <Grid item xs={4}>
            <Item>
              <Typography variant="body2">Scheduled days</Typography>
            </Item>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1, marginBottom: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Item>
              <Typography>Most used recipe</Typography>
              <div className="row">
                <Typography variant="body2">Idly</Typography>
                <Typography variant="body2">321</Typography>
                <Typography variant="body2">(-2.02%)</Typography>
                <Typography variant="body2">Dosa</Typography>
                <Typography variant="body2">256</Typography>
                <Typography variant="body2">(-2.02%)</Typography>
                <Typography variant="body2">Vada</Typography>
                <Typography variant="body2">150</Typography>
                <Typography variant="body2">(-2.02%)</Typography>
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default MachineAnalytics;
