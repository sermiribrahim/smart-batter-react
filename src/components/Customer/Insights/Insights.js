import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import styles from "./Insights.module.css";
import OneLineCard from "../../../Reuseable/Cards/OneLineCard";
import BarChart from "../../../Reuseable/Chart/BarChart";
import TableSmall from "../../../Reuseable/Table/TableSmall";
import ErrorIcon from "@mui/icons-material/Error";
import PieChart from "../../../Reuseable/Chart/PieChart";

export default function Insights() {
  return (
    <>
      <Box className={styles.mainDiv}>
        <Box sx={{ flexGrow: 1, marginBottom: 5 }}>
          <Grid container spacing={2}>
            <OneLineCard
              styles={styles}
              size="3"
              icon={false}
              title="Under Warranty"
              content="234 days remaining"
              contentType="text"
            />
            <OneLineCard
              styles={styles}
              size="4"
              icon={true}
              iconComponent={<ErrorIcon />}
              title="Blade about to expire"
              content="View"
              contentType="button"
            />
            <OneLineCard
              styles={styles}
              size="5"
              icon={false}
              title="Send an alert to elanthamilan's phone"
              content="Write"
              contentType="button"
            />
          </Grid>
        </Box>
        <Box sx={{ flexGrow: 1, marginBottom: 3 }}>
          <Grid container spacing={2}>
            {/* Grid is inside BarChart */}
            <BarChart />
            <Grid item xs={5}>
              <OneLineCard
                styles={styles}
                size="12"
                head="1234567"
                title="Total No. of Shedules"
                content="View"
                contentType="button"
              />
              <br />
              <OneLineCard
                styles={styles}
                size="12"
                head="2L"
                title="Average Batter Preparation"
                content="View"
                contentType="button"
              />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <TableSmall />
            </Grid>
            <Grid item xs={4}>
              <TableSmall />
            </Grid>
            <Grid item xs={4}>
              <TableSmall />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ flexGrow: 1, marginTop: 3 }}>
          <Grid container>
            <Grid item xs={6}>
              <PieChart />
            </Grid>
            <Grid item xs={3}>
              <TableSmall />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
