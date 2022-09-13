import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import OneLineCard from "../../Reuseable/Cards/OneLineCard";
import styles from "../Customer/Insights/Insights.module.css";
import { Link, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import RecipeUsage from "../../Reuseable/RecipeUsage";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import * as React from "react";
const RecipeProfile = () => {
  const Item = styled(Paper)(({ theme }) => ({
    ackgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary
  }));
  const navigate = useNavigate();
  // const RecipeProfile = () => {
  //   const [value, setValue] = React.useState(0);
  //   const navigate = useNavigate();
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
        <Box className={styles.mainDiv}>
          <Box
            sx={{
              flexGrow: 1,
              marginBottom: 5,
              background: "#F8FAFC",
              padding: "20px",
              borderRadius: "5px"
            }}
          >
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={12}>
                    <Item
                      sx={{ borderRadius: 0, borderBottom: "1px solid #ccc" }}
                    >
                      <Typography
                        align="center"
                        fontWeight="bold"
                        sx={{ mb: 3 }}
                      >
                        Recipe Consistency
                      </Typography>
                      <div className="row raw-material">
                        <Typography
                          variant="h6"
                          component="h6"
                          fontWeight="bold"
                        >
                          67%
                        </Typography>

                        <Typography
                          variant="h6"
                          component="h6"
                          fontWeight="bold"
                        >
                          10%
                        </Typography>
                        <Typography
                          variant="h6"
                          component="h6"
                          fontWeight="bold"
                        >
                          57%
                        </Typography>
                        <Typography
                          variant="h6"
                          component="h6"
                          fontWeight="bold"
                        >
                          50%
                        </Typography>
                      </div>
                      <div className="row recipe ">
                        <Link variant="body2" sx={{ color: "#000" }}>
                          Rice
                        </Link>
                        <Link variant="body2" sx={{ color: "#000" }}>
                          Dal
                        </Link>
                        <Link variant="body2" sx={{ color: "#000" }}>
                          Flattend rice
                        </Link>
                        <Link variant="body2" sx={{ color: "#000" }}>
                          Water
                        </Link>
                      </div>
                    </Item>
                  </Grid>
                  <Grid item xs={5} sx={{ borderRadius: 0 }}>
                    <Item
                      sx={{ borderRadius: 0, borderBottom: "1px solid #ccc" }}
                    >
                      <div className="row raw-material">
                        <Typography variant="body2">Soaking time</Typography>
                      </div>
                      <div className="row recipe ">
                        <Typography
                          variant="h6"
                          component="h6"
                          fontWeight="bold"
                        >
                          50 min
                        </Typography>
                      </div>
                    </Item>
                  </Grid>
                  <Grid item xs={3}>
                    <Item
                      sx={{ borderRadius: 0, borderBottom: "1px solid #ccc" }}
                    >
                      <div className="row raw-material">
                        <Typography variant="body2">Fermentation</Typography>
                      </div>
                      <div className="row recipe ">
                        <Typography
                          variant="h6"
                          component="h6"
                          fontWeight="bold"
                        >
                          Low ph
                        </Typography>
                      </div>
                    </Item>
                  </Grid>
                  <Grid item xs={4}>
                    <Item
                      sx={{ borderRadius: 0, borderBottom: "1px solid #ccc" }}
                    >
                      <div className="row raw-material">
                        <Typography variant="body2">Grainy</Typography>
                      </div>
                      <div className="row recipe ">
                        <Typography
                          variant="h6"
                          component="h6"
                          fontWeight="bold"
                        >
                          value
                        </Typography>
                      </div>
                    </Item>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
          <RecipeUsage />
        </Box>
      </Box>
    </>
  );
};
// };

export default RecipeProfile;
