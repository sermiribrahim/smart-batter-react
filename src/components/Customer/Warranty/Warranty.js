import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import OneLineCard from "../../../Reuseable/Cards/OneLineCard";
import styles from "../../Customer/Insights/Insights.module.css";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
const Warranty = () => {
  const Item = styled(Paper)(({ theme }) => ({
    ackgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary
  }));
  return (
    <>
      <Box className={styles.mainDiv}>
        <Box sx={{ flexGrow: 1, marginBottom: 3 }}>
          {/* Grid is inside BarChart */}
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <OneLineCard
                sm={6}
                lg={2}
                md={2}
                styles={styles}
                size="12"
                head="Machine warranty"
                title="365 days more"
                content="12.09.2019 - 12.09.2020"
              />
            </Grid>
          </Grid>
        </Box>

        <Typography align="left" fontWeight="bold" sx={{ mb: 3 }}>
          Component based
        </Typography>

        <Box sx={{ flexGrow: 1, marginBottom: 5 }}>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={3}>
                  <Item
                    sx={{ borderRadius: 0, borderBottom: "1px solid #ccc" }}
                  >
                    <div className="row raw-material">
                      <Typography variant="body2">Actuator</Typography>
                    </div>
                    <div className="row recipe ">
                      <Typography variant="h6" component="h6" fontWeight="bold">
                        124 days
                      </Typography>
                    </div>
                    <div className="row recipe ">
                      <Typography variant="body2">
                        12.09.2019 - 12.09.2020
                      </Typography>
                    </div>
                  </Item>
                </Grid>
                <Grid item xs={3} sx={{ borderRadius: 0 }}>
                  <Item
                    sx={{ borderRadius: 0, borderBottom: "1px solid #ccc" }}
                  >
                    <div className="row raw-material">
                      <Typography variant="body2">Grinding motor</Typography>
                    </div>
                    <div className="row recipe ">
                      <Typography variant="h6" component="h6" fontWeight="bold">
                        124 days
                      </Typography>
                    </div>
                    <div className="row recipe ">
                      <Typography variant="body2">
                        12.09.2019 - 12.09.2020
                      </Typography>
                    </div>
                  </Item>
                </Grid>
                <Grid item xs={3}>
                  <Item
                    sx={{ borderRadius: 0, borderBottom: "1px solid #ccc" }}
                  >
                    <div className="row raw-material">
                      <Typography variant="body2">Motor shaft</Typography>
                    </div>
                    <div className="row recipe ">
                      <Typography variant="h6" component="h6" fontWeight="bold">
                        124 days
                      </Typography>
                    </div>
                    <div className="row recipe ">
                      <Typography variant="body2">
                        12.09.2019 - 12.09.2020
                      </Typography>
                    </div>
                  </Item>
                </Grid>
                <Grid item xs={3}>
                  <Item
                    sx={{ borderRadius: 0, borderBottom: "1px solid #ccc" }}
                  >
                    <div className="row raw-material">
                      <Typography variant="body2">Grinding blade</Typography>
                    </div>
                    <div className="row recipe ">
                      <Typography variant="h6" component="h6" fontWeight="bold">
                        09 days
                      </Typography>
                    </div>
                    <div className="row recipe ">
                      <Typography variant="body2">
                        12.09.2019 - 12.09.2020
                      </Typography>
                    </div>
                  </Item>
                </Grid>
                <Grid item xs={3}>
                  <Item
                    sx={{ borderRadius: 0, borderBottom: "1px solid #ccc" }}
                  >
                    <div className="row raw-material">
                      <Typography variant="body2">Water pump</Typography>
                    </div>
                    <div className="row recipe ">
                      <Typography variant="h6" component="h6" fontWeight="bold">
                        124 days
                      </Typography>
                    </div>
                    <div className="row recipe ">
                      <Typography variant="body2">
                        12.09.2019 - 12.09.2020
                      </Typography>
                    </div>
                  </Item>
                </Grid>
                <Grid item xs={3}>
                  <Item
                    sx={{ borderRadius: 0, borderBottom: "1px solid #ccc" }}
                  >
                    <div className="row raw-material">
                      <Typography variant="body2">Component 6</Typography>
                    </div>
                    <div className="row recipe ">
                      <Typography variant="h6" component="h6" fontWeight="bold">
                        124 days
                      </Typography>
                    </div>
                    <div className="row recipe ">
                      <Typography variant="body2">
                        12.09.2019 - 12.09.2020
                      </Typography>
                    </div>
                  </Item>
                </Grid>
                <Grid item xs={3}>
                  <Item
                    sx={{ borderRadius: 0, borderBottom: "1px solid #ccc" }}
                  >
                    <div className="row raw-material">
                      <Typography variant="body2">Component 7</Typography>
                    </div>
                    <div className="row recipe ">
                      <Typography variant="h6" component="h6" fontWeight="bold">
                        124 days
                      </Typography>
                    </div>
                    <div className="row recipe ">
                      <Typography variant="body2">
                        12.09.2019 - 12.09.2020
                      </Typography>
                    </div>
                  </Item>
                </Grid>
                <Grid item xs={3}>
                  <Item
                    sx={{ borderRadius: 0, borderBottom: "1px solid #ccc" }}
                  >
                    <div className="row raw-material">
                      <Typography variant="body2">Component 8</Typography>
                    </div>
                    <div className="row recipe ">
                      <Typography variant="h6" component="h6" fontWeight="bold">
                        124 days
                      </Typography>
                    </div>
                    <div className="row recipe ">
                      <Typography variant="body2">
                        12.09.2019 - 12.09.2020
                      </Typography>
                    </div>
                  </Item>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <div className="row buttonmodal">
          <Button variant="text" startIcon={<AddIcon />}>
            More
          </Button>
        </div>
      </Box>

      <Typography align="left" fontWeight="bold" sx={{ mb: 3 }}>
        Electrical & Electronics
      </Typography>

      <Box sx={{ flexGrow: 1, marginBottom: 5 }}>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Grid container spacing={0}>
              <Grid item xs={3}>
                <Item sx={{ borderRadius: 0, borderBottom: "1px solid #ccc" }}>
                  <div className="row raw-material">
                    <Typography variant="body2">Board Relay</Typography>
                  </div>
                  <div className="row recipe ">
                    <Typography variant="h6" component="h6" fontWeight="bold">
                      124 days
                    </Typography>
                  </div>
                  <div className="row recipe ">
                    <Typography variant="body2">
                      12.09.2019 - 12.09.2020
                    </Typography>
                  </div>
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item sx={{ borderRadius: 0, borderBottom: "1px solid #ccc" }}>
                  <div className="row raw-material">
                    <Typography variant="body2">Adruino mega</Typography>
                  </div>
                  <div className="row recipe ">
                    <Typography variant="h6" component="h6" fontWeight="bold">
                      124 days
                    </Typography>
                  </div>
                  <div className="row recipe ">
                    <Typography variant="body2">
                      12.09.2019 - 12.09.2020
                    </Typography>
                  </div>
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item sx={{ borderRadius: 0, borderBottom: "1px solid #ccc" }}>
                  <div className="row raw-material">
                    <Typography variant="body2">Node MCU</Typography>
                  </div>
                  <div className="row recipe ">
                    <Typography variant="h6" component="h6" fontWeight="bold">
                      124 days
                    </Typography>
                  </div>
                  <div className="row recipe ">
                    <Typography variant="body2">
                      12.09.2019 - 12.09.2020
                    </Typography>
                  </div>
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item sx={{ borderRadius: 0, borderBottom: "1px solid #ccc" }}>
                  <div className="row raw-material">
                    <Typography variant="body2">Board relay</Typography>
                  </div>
                  <div className="row recipe ">
                    <Typography variant="h6" component="h6" fontWeight="bold">
                      09 days
                    </Typography>
                  </div>
                  <div className="row recipe ">
                    <Typography variant="body2">
                      12.09.2019 - 12.09.2020
                    </Typography>
                  </div>
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item sx={{ borderRadius: 0, borderBottom: "1px solid #ccc" }}>
                  <div className="row raw-material">
                    <Typography variant="body2">Board Relay 1</Typography>
                  </div>
                  <div className="row recipe ">
                    <Typography variant="h6" component="h6" fontWeight="bold">
                      124 days
                    </Typography>
                  </div>
                  <div className="row recipe ">
                    <Typography variant="body2">
                      12.09.2019 - 12.09.2020
                    </Typography>
                  </div>
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item sx={{ borderRadius: 0, borderBottom: "1px solid #ccc" }}>
                  <div className="row raw-material">
                    <Typography variant="body2">Board Relay 2</Typography>
                  </div>
                  <div className="row recipe ">
                    <Typography variant="h6" component="h6" fontWeight="bold">
                      124 days
                    </Typography>
                  </div>
                  <div className="row recipe ">
                    <Typography variant="body2">
                      12.09.2019 - 12.09.2020
                    </Typography>
                  </div>
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item sx={{ borderRadius: 0, borderBottom: "1px solid #ccc" }}>
                  <div className="row raw-material">
                    <Typography variant="body2">Board Relay 3</Typography>
                  </div>
                  <div className="row recipe ">
                    <Typography variant="h6" component="h6" fontWeight="bold">
                      124 days
                    </Typography>
                  </div>
                  <div className="row recipe ">
                    <Typography variant="body2">
                      12.09.2019 - 12.09.2020
                    </Typography>
                  </div>
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item sx={{ borderRadius: 0, borderBottom: "1px solid #ccc" }}>
                  <div className="row raw-material">
                    <Typography variant="body2">Board Relay 4</Typography>
                  </div>
                  <div className="row recipe ">
                    <Typography variant="h6" component="h6" fontWeight="bold">
                      124 days
                    </Typography>
                  </div>
                  <div className="row recipe ">
                    <Typography variant="body2">
                      12.09.2019 - 12.09.2020
                    </Typography>
                  </div>
                </Item>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <div className="row buttonmodal">
        <Button variant="text" startIcon={<AddIcon />}>
          More
        </Button>
      </div>
    </>
  );
};

export default Warranty;
