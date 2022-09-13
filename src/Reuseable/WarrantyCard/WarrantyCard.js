import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import OneLineCard from "../../../Reuseable/Cards/OneLineCard";
import styles from "../../Customer/Insights/Insights.module.css";
const Warranty = (props) => {
  return (
    <>
      <typography>Component based</typography>

      <Box sx={{ flexGrow: 1, marginBottom: 5 }}>
        <Grid container spacing={2}>
          <OneLineCard
            styles={styles}
            size="2.4"
            icon={false}
            title="Under Warranty"
            content="234 days remaining"
            contentType="text"
          />
          <OneLineCard styles={styles} size="2.4" title="Actuator" content="" />
          <OneLineCard
            styles={styles}
            size="2.4"
            title="Send an alert to elanthamilan's phone"
          />
          <OneLineCard
            styles={styles}
            size="2.4"
            title="Send an alert to elanthamilan's phone"
          />
          <OneLineCard
            styles={styles}
            size="2.4"
            title="Send an alert to elanthamilan's phone"
          />
        </Grid>
      </Box>
    </>
  );
};

export default Warranty;
