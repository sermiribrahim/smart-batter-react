import { Link, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import styles from "../../../";
import OneLineCard from "../Reuseable/Cards/OneLineCard";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import styles from "../components/Customer/Insights/Insights.module.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import TimeLine from "../Reuseable/TimeLine";

const RecipeModel = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary
  }));
  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          width: "100%",
          background: "#F8FAFC",
          padding: "20px",
          borderRadius: "5px"
        }}
      >
        <Box
          className={styles.customerDetails}
          sx={{ borderBottom: 1, borderColor: "divider" }}
        >
          {/* <Card>
          <CardContent> */}

          <h1
            className={styles.customerHeading}
            style={{ textAlign: "left", fontSize: "18px" }}
          >
            <ArrowBackIosIcon
              onClick={() => navigate(-1)}
              style={{ fontSize: "16px", marginBottom: "-1px" }}
            />{" "}
            Preferd recipe-Rice
          </h1>
        </Box>
        <div
          className="row"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <Typography className="row typo" sx={{ mt: 1 }}>
            Scheduled Detail&nbsp;:&nbsp;SCHUS1933 - Madurai Idly | 1500g |
            10:00AM | 12/09/2022
          </Typography>
          <Typography sx={{ mt: 1 }}>
            {" "}
            Datas based on the time of particular scheduled
          </Typography>
        </div>
        <div className="row">
          <Box sx={{ flexGrow: 1, marginBottom: 3, mt: 2 }}>
            <Grid container>
              <Grid item xs={4}>
                <Item>
                  <Typography
                    style={{
                      textAlign: "justify",
                      borderBottom: "1px solid #ccc"
                    }}
                    variant="body2"
                    fontWeight="bold"
                  >
                    Scheduled from Mobile at:
                    <p>12:00 pm | 12/04/2022</p>
                  </Typography>
                  <Typography
                    style={{ textAlign: "justify" }}
                    variant="body2"
                    fontWeight="bold"
                  >
                    Served at:
                    <p>12:00 pm | 12/04/2022</p>
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={8}>
                <Item>
                  <Typography variant="body2" fontWeight="bold">
                    Schedule timeline
                  </Typography>
                  <TimeLine />
                </Item>
              </Grid>
            </Grid>
          </Box>
        </div>
        <Box className={styles.mainDiv}>
          <Box sx={{ flexGrow: 1, marginBottom: 5, mt: 2 }}></Box>
        </Box>
        <Box sx={{ flexGrow: 1, marginBottom: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
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
            <Grid item xs={6}>
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
        {/* card */}
        <Box sx={{ flexGrow: 1, marginBottom: 8 }}>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={2}>
                  <Item
                    sx={{ borderRadius: 0, borderBottom: "1px solid #ccc" }}
                  >
                    <div className="row recipe ">
                      <Typography variant="h6" component="h6" fontWeight="bold">
                        Good
                      </Typography>
                    </div>
                    <div className="row recipe ">
                      <Typography variant="body2">Water Quality</Typography>
                    </div>
                  </Item>
                </Grid>
                <Grid item xs={2} sx={{ borderRadius: 0 }}>
                  <Item
                    sx={{ borderRadius: 0, borderBottom: "1px solid #ccc" }}
                  >
                    <div className="row recipe ">
                      <Typography variant="h6" component="h6" fontWeight="bold">
                        Good
                      </Typography>
                    </div>
                    <div className="row recipe ">
                      <Typography variant="body2">
                        Internet Connection
                      </Typography>
                    </div>
                  </Item>
                </Grid>
                <Grid item xs={2}>
                  <Item
                    sx={{ borderRadius: 0, borderBottom: "1px solid #ccc" }}
                  >
                    <div className="row recipe ">
                      <Typography variant="h6" component="h6" fontWeight="bold">
                        145 ml
                      </Typography>
                    </div>
                    <div className="row recipe ">
                      <Typography variant="body2">Rejected Waste</Typography>
                    </div>
                  </Item>
                </Grid>
                <Grid item xs={2}>
                  <Item
                    sx={{ borderRadius: 0, borderBottom: "1px solid #ccc" }}
                  >
                    <div className="row recipe ">
                      <Typography variant="h6" component="h6" fontWeight="bold">
                        23 V
                      </Typography>
                    </div>
                    <div className="row recipe ">
                      <Typography variant="body2">Average Voltage</Typography>
                    </div>
                  </Item>
                </Grid>
                <Grid item xs={2}>
                  <Item
                    sx={{ borderRadius: 0, borderBottom: "1px solid #ccc" }}
                  >
                    <div className="row recipe ">
                      <Typography variant="h6" component="h6" fontWeight="bold">
                        7C
                      </Typography>
                    </div>
                    <div className="row recipe ">
                      <Typography variant="body2">Batter Temp</Typography>
                    </div>
                  </Item>
                </Grid>
                <Grid item xs={2}>
                  <Item
                    sx={{ borderRadius: 0, borderBottom: "1px solid #ccc" }}
                  >
                    <div className="row recipe ">
                      <Typography variant="h6" component="h6" fontWeight="bold">
                        7C
                      </Typography>
                    </div>
                    <div className="row recipe ">
                      <Typography variant="body2">Atmospheric Temp</Typography>
                    </div>
                  </Item>
                </Grid>
                <Grid item xs={4}>
                  <Item
                    sx={{ borderRadius: 0, borderBottom: "1px solid #ccc" }}
                  >
                    <div className="row recipe ">
                      <Typography variant="h6" component="h6" fontWeight="bold">
                        NGK Apartments
                      </Typography>
                    </div>
                    <div className="row recipe ">
                      <Typography variant="body2">MachineLocation</Typography>
                    </div>
                  </Item>
                </Grid>
                <Grid item xs={2}>
                  <Item
                    sx={{ borderRadius: 0, borderBottom: "1px solid #ccc" }}
                  >
                    <div className="row recipe ">
                      <Typography variant="h6" component="h6" fontWeight="bold">
                        Latitude
                      </Typography>
                    </div>
                    <div className="row recipe ">
                      <Typography variant="body2">Longitude</Typography>
                    </div>
                  </Item>
                </Grid>
                <Grid item xs={2}>
                  <Item
                    sx={{ borderRadius: 0, borderBottom: "1px solid #ccc" }}
                  >
                    <div className="row recipe ">
                      <Typography variant="h6" component="h6" fontWeight="bold">
                        1Units
                      </Typography>
                    </div>
                    <div className="row recipe ">
                      <Typography variant="body2">
                        Total Power Consumption
                      </Typography>
                    </div>
                  </Item>
                </Grid>
                <Grid item xs={2}>
                  <Item
                    sx={{ borderRadius: 0, borderBottom: "1px solid #ccc" }}
                  >
                    <div className="row recipe ">
                      <Typography variant="h6" component="h6" fontWeight="bold">
                        7C
                      </Typography>
                    </div>
                    <div className="row recipe ">
                      <Typography variant="body2">
                        Grinding Motor temp
                      </Typography>
                    </div>
                  </Item>
                </Grid>
                <Grid item xs={2}>
                  <Item
                    sx={{ borderRadius: 0, borderBottom: "1px solid #ccc" }}
                  >
                    <div className="row recipe ">
                      <Typography variant="h6" component="h6" fontWeight="bold">
                        23db
                      </Typography>
                    </div>
                    <div className="row recipe ">
                      <Typography variant="body2">Sound</Typography>
                    </div>
                  </Item>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default RecipeModel;
