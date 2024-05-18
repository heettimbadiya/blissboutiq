import { useTheme } from "@emotion/react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { ErrorMessage, Field, Formik, Form } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import HistoryIcon from "@mui/icons-material/History";
import StarIcon from "@mui/icons-material/Star";

const Login_form = () => {
  const [showPassword, setShowPassword] = useState(false);
  const theme = useTheme();

  const handleShow = () => {
    setShowPassword(!showPassword);
  };

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .matches(/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/, "Invalid email address")
      .required("Enter a valid email"),
    password: Yup.string().required("Enter a valid password"),
  });

  const handleSubmit = (values, actions) => {
    console.log(values);
  };

  return (
    <Box>
      <Grid container display={"flex"} justifyContent={"center"}>
        <Grid
          item
          md={9}
          sx={{
            width: "100%",
            margin: "0px 20px",
          }}
        >
          <Box textAlign={"center"}>
            <Typography
              className="lato"
              sx={{
                padding: { xs: "36px 0px", md: "56px 0px" },
                fontSize: { xs: "38px", md: "52px" },
                borderBottom: "1px solid #CCCCCC",
                fontWeight: "900",
              }}
            >
              MY ACCOUNT
            </Typography>
          </Box>
          <Grid container my={3} spacing={5}>
            <Grid item xs={12} md={6}>
              <Box
                bgcolor={theme.palette.liteGrayBack}
                sx={{
                  padding: { xs: "10px 25px", md: "10px 45px" },
                  height: "100%",
                }}
              >
                <Box>
                  <Typography
                    className="lato"
                    sx={{
                      fontSize: { xs: "24px", md: "32px" },
                      fontWeight: "800",
                      margin: "26px 0px ",
                    }}
                  >
                    LOGIN
                  </Typography>
                </Box>
                <Box sx={{ margin: "14px 0px" }}>
                  <Typography
                    component="p"
                    sx={{ fontSize: "14px", padding: "14px 0px" }}
                  >
                    Please enter your e-mail address and password.
                  </Typography>
                </Box>
                <Box>
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                  >
                    {({ isSubmitting }) => (
                      <Form>
                        <Field
                          as={TextField}
                          fullWidth
                          margin="normal"
                          label="Email"
                          variant="outlined"
                          name="email"
                          helperText={
                            <ErrorMessage className="ErrorColor" name="email" />
                          }
                        />
                        <Typography sx={{ position: "relative" }}>
                          <Field
                            as={TextField}
                            fullWidth
                            margin="normal"
                            label="Password"
                            type={showPassword ? "text" : "password"}
                            variant="outlined"
                            name="password"
                            helperText={
                              <ErrorMessage
                                className="ErrorColor"
                                name="password"
                              />
                            }
                          />
                          {showPassword ? (
                            <VisibilityOff
                              onClick={handleShow}
                              sx={{
                                position: "absolute",
                                top: "45%",
                                transform: "translateY(-50%)",
                                right: "3%",
                                cursor: "pointer",
                              }}
                            />
                          ) : (
                            <Visibility
                              onClick={handleShow}
                              sx={{
                                position: "absolute",
                                top: "45%",
                                transform: "translateY(-50%)",
                                right: "3%",
                                cursor: "pointer",
                              }}
                            />
                          )}
                        </Typography>
                        <Box display="flex" justifyContent="end" my={3}>
                          <Button
                            type="submit"
                            variant="contained"
                            disabled={isSubmitting}
                            sx={{
                              textTransform: "unset",
                              border: "1px solid black",
                              padding: "12px 88px",
                              fontSize: "16px",
                              fontWeight: "500",
                              borderRadius: "0px",
                              backgroundColor: "#000000",
                              color: theme.palette.common.white,
                              "&:hover": {
                                backgroundColor: "#ffffff",
                                color: theme.palette.common.black,
                              },
                            }}
                          >
                            Login
                          </Button>
                        </Box>
                        {/* <Box display="flex" justifyContent="end" my={3}>
                        <a
                          style={{
                            fontSize: "14px",
                            textDecoration: "undarline",
                          }}
                        >
                          Forgot your password?
                        </a>
                      </Box> */}
                      </Form>
                    )}
                  </Formik>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                bgcolor={theme.palette.common.black}
                color={theme.palette.common.white}
                sx={{
                  padding: { xs: "10px 25px", md: "10px 45px" },
                  height: "100%",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    margin: "26px 0px ",
                    fontSize: { xs: "24px", md: "32px" },
                    fontWeight: "700",
                  }}
                  gutterBottom
                >
                  Create an Account
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{ fontSize: "18px", fontWeight: "500" }}
                >
                  Create an account to enjoy all the benefits of our registered
                  customers.
                </Typography>
                <Box
                  sx={{
                    textAlign: "left",
                    margin: "0 auto 100px auto",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "8px",
                    }}
                  >
                    <FavoriteIcon sx={{ marginRight: "8px" }} />
                    <Typography>Save your favourites across devices</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "8px",
                    }}
                  >
                    <AccessTimeIcon sx={{ marginRight: "8px" }} />
                    <Typography>
                      Save time at checkout for future orders
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "8px",
                    }}
                  >
                    <HistoryIcon sx={{ marginRight: "8px" }} />
                    <Typography>
                      Manage your purchases and returns in your order history
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "8px",
                    }}
                  >
                    <StarIcon sx={{ marginRight: "8px" }} />
                    <Typography>
                      Become a{" "}
                      <Typography
                        variant="span"
                        underline="hover"
                        color="inherit"
                        sx={{ fontWeight: "bold" }}
                      >
                        HUGO BOSS EXPERIENCE
                      </Typography>{" "}
                      member to profit from special offers
                    </Typography>
                  </Box>
                </Box>
                <Box my={3}>
                  <Button
                    type="submit"
                    sx={{
                      width: "100%",
                      textTransform: "unset",
                      border: "1px solid black",
                      padding: "12px 88px",
                      fontSize: "16px",
                      fontWeight: "500",
                      borderRadius: "0px",
                      backgroundColor: "#ffffff",
                      color: theme.palette.common.black,
                      "&:hover": {
                        backgroundColor: "#ffffff",
                        color: theme.palette.common.black,
                      },
                    }}
                  >
                    Login
                  </Button>
                </Box>
                <Box
                  sx={{ marginTop: "1rem" }}
                  display={"flex"}
                  justifyContent={"end"}
                >
                  <Typography
                    href="#"
                    underline="hover"
                    color={theme.palette.common.white}
                    sx={{
                      fontSize: "14px",
                    }}
                  >
                    I registered in a store and want to activate my account
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login_form;
