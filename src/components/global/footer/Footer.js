import { Box, Container, Grid } from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { NavLink } from "react-router-dom";
const Footer = () => {
  const footer1 = [
    { lable: "Haute Couture", to: "/" },
    { lable: "Fashion", to: "/" },
    { lable: "High Jewellery", to: "/" },
    { lable: "Fine Jewellery", to: "/" },
    { lable: "Watches", to: "/" },
    { lable: "Eyewear", to: "/" },
    { lable: "Fragrance", to: "/" },
    { lable: "Makeup", to: "/" },
    { lable: "Skincare", to: "/" },
    { lable: "Sitemap", to: "/" },
  ];

  const footer2 = [
    { lable: "My Account", to: "/" },
    { lable: "Care & Services", to: "/" },
    { lable: "FAQ", to: "/" },
  ];

  const footer3 = [
    { lable: "Find a Boutique", to: "/" },
    { lable: "Appointments with CHANEL", to: "/" },
  ];

  const footer4 = [
    { lable: "Careers", to: "/" },
    { lable: "Legal", to: "/" },
    { lable: "Privacy", to: "/" },
    { lable: "Report to Society", to: "/" },
    { lable: "Fighting Counterfeits", to: "/" },
    { lable: "Financial Results", to: "/" },
  ];
  return (
    <>
      <Box
        sx={{
          p: "80px 0 30px 0",
          backgroundColor: "#000",
          mt: "100px",
          color: "white",
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ borderBottom: "1px solid #76767675" }}>
            <Grid container justifyContent="center">
              <Grid
                item
                xs={12}
                sx={{
                  textAlign: "center",
                  fontSize: "35px",
                  fontWeight: "600",
                  pb: "100px",
                }}
              >
                BLISS BOUTIQ
              </Grid>
              <Grid
                item
                lg={3}
                sm={6}
                xs={12}
                sx={{
                  height: "100%",
                  my: { xs: "30px", lg: "0px" },
                  justifyContent: { sm: "center" },
                  display: "flex",
                }}
              >
                <Box>
                  <Box sx={{ fontWeight: "600", mb: "15px" }}>
                    EXPLORE BLISS BOUTIQ.COM
                  </Box>
                  {footer1.map((val, ind) => (
                    <NavLink to={val.to} style={{ color: "unset" }}>
                      <Box
                        key={ind}
                        sx={{
                          color: "textLightGray",
                          letterSpacing: "-0.7px",
                          cursor: "pointer",
                          fontSize: "15px",
                          display: "block",
                          mb: "10px",
                          "&:hover": {
                            textDecoration: "underline",
                          },
                        }}
                      >
                        {val.lable}
                      </Box>
                    </NavLink>
                  ))}
                </Box>
              </Grid>
              <Grid
                item
                lg={3}
                sm={6}
                xs={12}
                sx={{
                  height: "100%",
                  my: { xs: "30px", lg: "0px" },
                  justifyContent: { sm: "center" },
                  display: "flex",
                }}
              >
                <Box>
                  <Box sx={{ fontWeight: "600", mb: "15px" }}>
                    ONLINE SERVICES
                  </Box>
                  {footer2.map((val, ind) => (
                    <NavLink to={val.to}>
                      <Box
                        key={ind}
                        sx={{
                          color: "textLightGray",
                          letterSpacing: "-0.7px",
                          cursor: "pointer",
                          fontSize: "15px",
                          display: "block",
                          mb: "10px",
                          "&:hover": {
                            textDecoration: "underline",
                          },
                        }}
                      >
                        {val.lable}
                      </Box>
                    </NavLink>
                  ))}
                </Box>
              </Grid>
              <Grid
                item
                lg={3}
                sm={6}
                xs={12}
                sx={{
                  my: { xs: "30px", lg: "0px" },
                  height: "100%",
                  justifyContent: { sm: "center" },
                  display: "flex",
                }}
              >
                <Box>
                  <Box sx={{ fontWeight: "600", mb: "15px" }}>
                    BOUTIQUE SERVICES
                  </Box>
                  {footer3.map((val, ind) => (
                    <NavLink to={val.to}>
                      <Box
                        key={ind}
                        sx={{
                          color: "textLightGray",
                          letterSpacing: "-0.7px",
                          cursor: "pointer",
                          fontSize: "15px",
                          display: "block",
                          mb: "10px",
                          "&:hover": {
                            textDecoration: "underline",
                          },
                        }}
                      >
                        {val.lable}
                      </Box>
                    </NavLink>
                  ))}
                </Box>
              </Grid>
              <Grid
                item
                lg={3}
                sm={6}
                xs={12}
                sx={{
                  my: { xs: "30px", lg: "0px" },
                  justifyContent: { sm: "center" },
                  display: "flex",
                }}
              >
                <Box>
                  <Box sx={{ fontWeight: "600", mb: "15px" }}>
                    THE HOUSE OF BLISS BOUTIQ
                  </Box>
                  {footer3.map((val, ind) => (
                    <NavLink to={val.to}>
                      {" "}
                      <Box
                        key={ind}
                        sx={{
                          color: "textLightGray",
                          letterSpacing: "-0.7px",
                          cursor: "pointer",
                          fontSize: "15px",
                          display: "block",
                          mb: "10px",
                          "&:hover": {
                            textDecoration: "underline",
                          },
                        }}
                      >
                        {val.lable}
                      </Box>
                    </NavLink>
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Grid
            container
            sx={{
              my: "30px",
            }}
          >
            <Grid
              item
              xs={12}
              sm={7}
              sx={{
                display: "flex",
                justifyContent: { xs: "center", sm: "start" },
              }}
            >
              <Box
                className="fs-13"
                sx={{
                  color: "textGray",
                  marginRight: "5px",
                  textWrap: "nowrap",
                }}
              >
                Change location and language
              </Box>
              <Box className="fs-13" sx={{ textWrap: "nowrap" }}>
                India-English
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={5}
              sx={{
                display: "flex",
                justifyContent: { sm: "end", xs: "center" },
                mt: { xs: "20px", sm: "0" },
              }}
            >
              <InstagramIcon sx={{ color: "textGray", marginLeft: "15px",transition:".4s",cursor:"pointer","&:hover":{
                color:"white"
              } }} />
              <FacebookIcon sx={{ color: "textGray", marginLeft: "15px" ,transition:".4s",cursor:"pointer","&:hover":{
                color:"white"
              }}} />
              <YouTubeIcon sx={{ color: "textGray", marginLeft: "15px" ,transition:".4s",cursor:"pointer","&:hover":{
                color:"white"
              }}} />
              <LinkedInIcon sx={{ color: "textGray", marginLeft: "15px" ,transition:".4s",cursor:"pointer","&:hover":{
                color:"white"
              }}} />
            </Grid>
          </Grid>
          <Box
            className="fs-14"
            sx={{ textAlign: { xs: "center", sm: "start" } }}
          >
            CHANEL (INDIA) PRIVATE LIMITED, 5th Floor, Unit No. 505 &506,
            World-Mark 3, Hospitality District, IGIA, New Delhi, 110037, INDIA
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Footer;