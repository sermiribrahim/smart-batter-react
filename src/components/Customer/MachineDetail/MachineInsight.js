import { Link, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import styles from "../Insights/Insights.module.css";
import OneLineCard from "../../../Reuseable/Cards/OneLineCard";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const MachineInsight = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary
  }));
  return (
    <>
      <Typography className="row typo">
        <CircleIcon color="success" fontSize="small" sx={{ mr: 1 }} />
        Machine is pluggedin
      </Typography>
      <Box className={styles.mainDiv}>
        <Box sx={{ flexGrow: 1, marginBottom: 5, mt: 2 }}>
          <Grid container spacing={2}>
            <OneLineCard
              styles={styles}
              size="3"
              icon={false}
              title="Purchase on"
              content="09.03.2022"
              contentType="text"
            />
            <OneLineCard
              styles={styles}
              size="4"
              icon={false}
              title="Under Warranty"
              content="234 days remaining"
              contentType="text"
            />
            <OneLineCard
              styles={styles}
              size="5"
              icon={false}
              title="Send a OTA update to the machine"
              content="Select"
              contentType="button"
            />
          </Grid>
        </Box>
      </Box>
      <Box sx={{ flexGrow: 1, marginBottom: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={7}>
            <Item>
              <div>
                <Typography variant="body2">
                  Raw material currently available
                </Typography>
              </div>
              <div className="row raw-material">
                <Typography variant="h6" component="h6" fontWeight="bold">
                  1233g
                </Typography>
                <Typography variant="h6" component="h6" fontWeight="bold">
                  346g
                </Typography>
                <Typography variant="h6" component="h6" fontWeight="bold">
                  140g
                </Typography>
                <Typography variant="h6" component="h6" fontWeight="bold">
                  3334l
                </Typography>
              </div>
              <div className="row recipe ">
                <Typography variant="body2">Rice</Typography>
                <Typography variant="body2">Dal</Typography>
                <Typography variant="body2">Flattened Rice</Typography>
                <Typography variant="body2">Water</Typography>
              </div>
            </Item>
          </Grid>

          <OneLineCard
            styles={styles}
            size="5"
            head="1234567"
            title="Total No. of Shedules"
            content="View"
            contentType="button"
          />
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1, marginBottom: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Item>
              <h4 className="machine-status">Machine Health Status</h4>
              <div className="row raw-material">
                <Typography variant="h6" component="h6" fontWeight="bold">
                  67%
                </Typography>

                <Typography variant="h6" component="h6" fontWeight="bold">
                  10%
                </Typography>
                <Typography variant="h6" component="h6" fontWeight="bold">
                  57%
                </Typography>
                <Typography variant="h6" component="h6" fontWeight="bold">
                  50%
                </Typography>
                <Typography variant="h6" component="h6" fontWeight="bold">
                  70%
                </Typography>
                <Typography variant="h6" component="h6" fontWeight="bold">
                  80%
                </Typography>
                <Typography variant="h6" component="h6" fontWeight="bold">
                  95%
                </Typography>
              </div>
              <div className="row recipe ">
                <Link variant="body2" sx={{ color: "#000" }}>
                  Grinding motor
                </Link>
                <Link variant="body2" sx={{ color: "#000" }}>
                  Grinding motor
                </Link>
                <Link variant="body2" sx={{ color: "#000" }}>
                  Grinding motor
                </Link>
                <Link variant="body2" sx={{ color: "#000" }}>
                  Grinding motor
                </Link>
                <Link variant="body2" sx={{ color: "#000" }}>
                  Grinding motor
                </Link>
                <Link variant="body2" sx={{ color: "#000" }}>
                  Grinding motor
                </Link>
                <Link variant="body2" sx={{ color: "#000" }}>
                  Grinding motor
                </Link>
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1, marginBottom: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Item>
              <Typography variant="h3" component="h3" sx={{ mt: 4, mb: 4 }}>
                134MB
              </Typography>
              <Typography
                className="data-use"
                variant="h6"
                component="h6"
                sx={{ mt: 4, mb: 4 }}
              >
                Data Usage by machine
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={5}>
            <Item>
              <div style={{ width: "100%" }}>
                <label className="Machine-location">
                  Machine's current location
                </label>
                <iframe
                  width="100%"
                  height="150"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                >
                  <a href="https://www.gps.ie/marine-gps/">marine gps</a>
                </iframe>
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default MachineInsight;
