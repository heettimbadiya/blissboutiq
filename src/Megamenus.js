import React from "react";
import { Box, Container, Grid } from "@mui/material";
import megamenu1 from "./assets/images/header/megamenu/10558235410462-MEGAMENU_DEF-Desktop_VDEF.avif";
import megamenu2 from "./assets/images/header/megamenu/megamenu2.avif";
import megamenu3 from "./assets/images/header/megamenu/megamenu3.avif";
import megamenu4 from "./assets/images/header/megamenu/megamenu4.avif";
import megamenu5 from "./assets/images/header/megamenu/megamenu5.avif";
import megamenu6 from "./assets/images/header/megamenu/megamenu6.avif";
import megamenu7 from "./assets/images/header/megamenu/megamenu7.avif";

const fullMegamenu1 = (
  <Container maxWidth="xl">
    <Box>
      <Grid container columnSpacing={4} justifyContent={{ xl: "center" }}>
        <Grid item xl={2} xs={12}>
          <Box mt={{ xs: "20px", xl: "0" }}>
            <Box sx={{ width: "216px", height: "290px" }}>
              <img src={megamenu1} alt="megamenu img1" />
            </Box>
            <Box>
              <Box
                className="fs-11"
                sx={{
                  transition: "0.4s",
                  cursor: "pointer",
                  fontWeight: "bold",
                  mt: "15px",
                  pb: "8px",
                  display: "inline-block",
                  borderBottom: "1px solid transparent",
                  "&:hover": {
                    borderBottom: "1px solid black",
                  },
                }}
              >
                FASHION HOME <i class="fa-solid fa-angle-right"></i>
              </Box>{" "}
              <br />
              <Box
                className="fs-11"
                sx={{
                  transition: "0.4s",
                  cursor: "pointer",
                  fontWeight: "bold",
                  mt: "15px",
                  pb: "8px",
                  display: "inline-block",
                  borderBottom: "1px solid transparent",
                  "&:hover": {
                    borderBottom: "1px solid black",
                  },
                }}
              >
                THE CHANEL HANDBAG <i class="fa-solid fa-angle-right"></i>
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item xl={2} xs={12}>
          <Box mt={{ xs: "30px", xl: "0" }}>
            <Box sx={{ fontWeight: "bold", color: "black" }} className="fs-14">
              LETEST SHOWS
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Cruise 2024/25
              <Box
                color="textGray"
                className="fs-12"
                sx={{ mt: { xl: "20px", xs: "10px" } }}
              >
                Available in boutiques from November 2024
              </Box>
            </Box>

            <Box
              sx={{ fontWeight: "500", color: "black", mt: "20px" }}
              className="fs-14"
            >
              Fall-Winter 2024/25
              <Box color="textGray" className="fs-12" sx={{ mt: "10px" }}>
                Available in boutiques from September 2024
              </Box>
            </Box>

            <Box
              sx={{ fontWeight: "500", color: "black", mt: "20px" }}
              className="fs-14"
            >
              2023/24 Metiers d'art
              <Box color="textGray" className="fs-12" sx={{ mt: "10px" }}>
                Available in boutiques in June 2024
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item xl={2} xs={12}>
          <Box mt={{ xs: "30px", xl: "0" }}>
            <Box sx={{ fontWeight: "bold", color: "black" }} className="fs-14">
              IN BOUTIQUES
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Spring-Summer 2024
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Spring-Summer 2024 Pre-Collection
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              The Cruise 2023/24 Collection
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              The Iconic Handbag - The Campaign
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Ready-To-Wear
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Handbags
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Shoes
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Costume Jewellery
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Small Leather Goods
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Eyewear
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Other Accessories
            </Box>
          </Box>
        </Grid>

        <Grid item xl={2} xs={12}>
          <Box mt={{ xs: "30px", xl: "0" }}>
            <Box>
              <Box
                sx={{ fontWeight: "bold", color: "black" }}
                className="fs-14"
              >
                SAVOIR-FAIRE
              </Box>

              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                Discover the savoir-faire of the 2023/24 Métiers d'art
                collection
              </Box>
            </Box>
            <Box sx={{ mt: { xl: "50px", xs: "30px" } }}>
              <Box
                sx={{ fontWeight: "bold", color: "black" }}
                className="fs-14"
              >
                CHANEL NEWS
              </Box>

              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                Discover the latest news
              </Box>
            </Box>
            <Box sx={{ mt: { xl: "50px", xs: "30px" } }}>
              <Box
                sx={{
                  fontWeight: "bold",
                  color: "black",
                  width: { xl: "100%", xs: "80%" },
                }}
                className="fs-14"
              >
                LITERARY RENDEZVOUS AT RUE CAMBON
              </Box>

              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                Discover the savoir-faire of the 2023/24 Métiers d'art
                collection
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item xl={2} xs={12}>
          <Box mt={{ xs: "30px", xl: "0" }}>
            <Box>
              <Box
                sx={{ fontWeight: "bold", color: "black" }}
                className="fs-14"
              >
                SERVICES
              </Box>
            </Box>
            <Box sx={{ mt: { xl: "20px", xs: "10px" } }}>
              <Box
                sx={{ fontWeight: "bold", color: "black" }}
                className="fs-14"
              >
                CHANEL
              </Box>

              <Box color="textGray" className="fs-12" sx={{ mt: "10px" }}>
                A programme of services to preserve each CHANEL creation.
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                Find a Boutique
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                Book an appointment
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  </Container>
);

const fullMegamenu2 = (
  <Container maxWidth={"xl"}>
    <Box>
      <Grid container columnSpacing={4} justifyContent={{ xl: "center" }}>
        <Grid item xs={12} sx={{ paddingLeft: "unset !important" }}>
          <Box
            sx={{
              fontWeight: "bold",
              color: "black",
              textAlign: "center",
              textWrap: "wrap !important",
              py: "50px",
              width: "100%",
            }}
            className="fs-14"
          >
            EXCLUSIVELY IN BOUTIQUES AND AUTHORIZED RETAILERS
          </Box>{" "}
        </Grid>

        <Grid item xl={2} xs={12}>
          <Box>
            <Box sx={{ width: "216px", height: "290px" }}>
              <img src={megamenu2} alt="megamenu img1" />
            </Box>
            <Box>
              <Box
                className="fs-11"
                sx={{
                  transition: "0.4s",
                  cursor: "pointer",
                  fontWeight: "bold",
                  mt: "15px",
                  pb: "8px",
                  display: "inline-block",
                  borderBottom: "1px solid transparent",
                  "&:hover": {
                    borderBottom: "1px solid black",
                  },
                }}
              >
                FINE JEWELLERY HOME <i class="fa-solid fa-angle-right"></i>
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item xl={2} xs={12} mt={{ xs: "20px", xl: "0" }}>
          <Box>
            <Box sx={{ fontWeight: "bold", color: "black" }} className="fs-14">
              FEATURED
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Collection N°5
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Coco Crush, The Encounters
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              The BLISS BOUTIQ Style Guide
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              18 Place Vendôme
            </Box>
          </Box>
        </Grid>

        <Grid item xl={2} xs={12} mt={{ xs: "20px", xl: "0" }}>
          <Box>
            <Box>
              <Box
                sx={{
                  fontWeight: "bold",
                  color: "black",
                  mt: { xs: "10px", xl: "0" },
                }}
                className="fs-14"
              >
                CATEGORIES
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                Rings
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                Bracelets
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                Earrings
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                Necklaces
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                Brooches
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                All Fine Jewellery
              </Box>
            </Box>
            <Box sx={{ mt: { xl: "50px", xs: "30px" } }}>
              <Box
                sx={{ fontWeight: "bold", color: "black" }}
                className="fs-14"
              >
                BRIDAL
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                Engagement Rings
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                Wedding Rings
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item xl={2} xs={12}>
          <Box mt={{ xs: "40px", xl: "0" }}>
            <Box sx={{ fontWeight: "bold", color: "black" }} className="fs-14">
              COLLECTIONS
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Coco Crush
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              N°5
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Camélia
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Ultra
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Comète
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Plume de CHANEL
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Ruban
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              All Fine Jewellery
            </Box>
          </Box>
        </Grid>

        <Grid item xl={2} xs={12}>
          <Box mt={{ xs: "30px", xl: "0" }}>
            <Box sx={{ fontWeight: "bold", color: "black" }} className="fs-14">
              ADVICE AND SERVICES
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Care and Maintenance
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Our Services
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Where can I take my Jewellery to be repaired?
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Guarantees and Authentication
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  </Container>
);
const fullMegamenu3 = (
  <Container maxWidth={"xl"}>
    <Box>
      <Grid container columnSpacing={4} justifyContent={{ xl: "center" }}>
        <Grid item xl={12}>
          <Box
            sx={{
              fontWeight: "bold",
              color: "black",
              textAlign: "center",
              py: "50px",
              textWrap: "wrap !important",
            }}
            className="fs-14"
          >
            EXCLUSIVELY IN BOUTIQUES AND AUTHORIZED RETAILERS
          </Box>{" "}
        </Grid>
        <Grid item xl={2} xs={12}>
          <Box>
            <Box sx={{ width: "216px", height: "290px" }}>
              <img src={megamenu3} alt="megamenu img1" />
            </Box>
            <Box>
              <Box
                className="fs-11"
                sx={{
                  transition: "0.4s",
                  cursor: "pointer",
                  fontWeight: "bold",
                  mt: "15px",
                  pb: "8px",
                  display: "inline-block",
                  borderBottom: "1px solid transparent",
                  "&:hover": {
                    borderBottom: "1px solid black",
                  },
                }}
              >
                WATCHES HOME <i class="fa-solid fa-angle-right"></i>
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item xl={2} xs={12}>
          <Box mt={{ xs: "30px", xl: "0" }}>
            <Box sx={{ fontWeight: "bold", color: "black" }} className="fs-14">
              FEATURED
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              PREMIÈRE ÉDITION ORIGINALE
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              The J12 watches
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              J12 Automaton Calibre 6
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              The CHANEL Watch Manufacture
            </Box>
          </Box>
        </Grid>

        <Grid item xl={2} xs={12}>
          <Box mt={{ xs: "30px", xl: "0" }}>
            <Box>
              <Box
                sx={{ fontWeight: "bold", color: "black" }}
                className="fs-14"
              >
                WATCH COLLECTIONS
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                J12
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                PREMIÈRE
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                BOY·FRIEND
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                Code Coco
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                Monsieur de CHANEL
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                All Watches
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item xl={2} xs={12}>
          <Box mt={{ xs: "30px", xl: "0" }}>
            <Box sx={{ fontWeight: "bold", color: "black" }} className="fs-14">
              FINE WATCHMAKING
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              CHANEL Haute Horlogerie
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Artistic Craft Watches
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Manufacture Movement Watches
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Watches Set with Precious Stones
            </Box>
            <Box sx={{ mt: { xl: "50px", xs: "30px" } }}>
              <Box
                sx={{
                  fontWeight: "bold",
                  color: "black",
                }}
                className="fs-14"
              >
                WATCHMAKING ACCORDING TO CHANEL
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                CHANEL ceramic
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                Haute Horlogerie movements
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                18 Place Vendôme
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item xl={2} xs={12}>
          <Box mt={{ xs: "30px", xl: "0" }}>
            <Box sx={{ fontWeight: "bold", color: "black" }} className="fs-14">
              ADVICE AND SERVICES
            </Box>
            <Box
              sx={{
                fontWeight: "bold",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              CHANEL
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Care and Maintenance
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Our Services
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Where can I have my Watch repaired?
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Guarantees and Authentication
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Manuals
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Size guide
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  </Container>
);

const fullMegamenu4 = (
  <Container maxWidth={"xl"}>
    <Box>
      <Grid container columnSpacing={4} justifyContent={{ xl: "center" }}>
        <Grid item xl={2} xs={12}>
          <Box mt={"10px"}>
            <Box sx={{ width: "216px", height: "290px" }}>
              <img src={megamenu4} alt="megamenu img1" />
            </Box>
            <Box>
              <Box
                className="fs-11"
                sx={{
                  transition: "0.4s",
                  cursor: "pointer",
                  fontWeight: "bold",
                  mt: "15px",
                  pb: "8px",
                  display: "inline-block",
                  borderBottom: "1px solid transparent",
                  "&:hover": {
                    borderBottom: "1px solid black",
                  },
                }}
              >
                EYEWEAR HOME <i class="fa-solid fa-angle-right"></i>
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item xl={2} xs={12}>
          <Box mt={{ xs: "30px", xl: "0" }}>
            <Box sx={{ fontWeight: "bold", color: "black" }} className="fs-14">
              SUNGLASSES
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              New This Season
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Exclusives
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Timeless
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              All Sunglasses
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              <i class="fa-solid fa-location-crosshairs"></i> Virtual Try-On
            </Box>
          </Box>
        </Grid>

        <Grid item xl={2} xs={12}>
          <Box mt={{ xs: "30px", xl: "0" }}>
            <Box sx={{ fontWeight: "bold", color: "black" }} className="fs-14">
              OPTICAL
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              New This Season
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Timeless
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              All Optical
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              <i class="fa-solid fa-location-crosshairs"></i> Virtual Try-On
            </Box>
            <Box sx={{ mt: { xl: "50px", xs: "30px" } }}>
              <Box
                sx={{ fontWeight: "bold", color: "black" }}
                className="fs-14"
              >
                BLUE LIGHT GLASSES
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                All Blue Light Glasses
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                <i class="fa-solid fa-location-crosshairs"></i> Virtual Try-On
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item xl={2} xs={12}>
          <Box mt={{ xs: "30px", xl: "0" }}>
            <Box>
              <Box
                sx={{ fontWeight: "bold", color: "black" }}
                className="fs-14"
              >
                STORIES
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                Eyewear Campaign
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                Two-Tone Signature
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                Timeless Codes
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                A Tribute to Tweed
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                Charming Hearts
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                Graphic Lines
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item xl={2} xs={12}>
          <Box mt={{ xs: "30px", xl: "0" }}>
            <Box sx={{ fontWeight: "bold", color: "black" }} className="fs-14">
              SERVICES
            </Box>

            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Size Guide
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Care Instructions
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  </Container>
);

const fullMegamenu5 = (
  <Container maxWidth={"xl"}>
    <Box>
      <Grid container columnSpacing={4} justifyContent={{ xl: "center" }}>
        <Grid item  xl={12}>
          <Box
            sx={{
              fontWeight: "bold",
              color: "black",
              textAlign: "center",
              py: "50px",
              textWrap: "wrap !important",
            }}
            className="fs-14"
          >
            BLISS BOUTIQ TRY ON. DISCOVER THE EXCLUSIVE SELECTION
          </Box>{" "}
        </Grid>
        <Grid item xl={2} xs={12}>
          <Box>
            <Box sx={{ width: "216px", height: "290px" }}>
              <img src={megamenu5} alt="megamenu img1" />
            </Box>
            <Box>
              <Box
                className="fs-11"
                sx={{
                  transition: "0.4s",
                  cursor: "pointer",
                  fontWeight: "bold",
                  mt: "15px",
                  pb: "8px",
                  display: "inline-block",
                  borderBottom: "1px solid transparent",
                  "&:hover": {
                    borderBottom: "1px solid black",
                  },
                }}
              >
                FRAGRANCE HOME <i class="fa-solid fa-angle-right"></i>
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item xl={2} xs={12}>
          <Box mt={{ xs: "30px", xl: "0" }}>
            <Box sx={{ fontWeight: "bold", color: "black" }} className="fs-14">
              IN THE SPOTLIGHT
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Les Eaux de CHANEL
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Les Eaux de CHANEL
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Take your CHANCE
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Les Couleurs de CHANEL
            </Box>
            <Box sx={{ mt: { xl: "50px", xs: "30px" } }}>
              <Box
                sx={{ fontWeight: "bold", color: "black" }}
                className="fs-14"
              >
                THE CHANEL SELECTION
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                The Latest Creations
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                Special Editions
              </Box>
            </Box>
            <Box sx={{ mt: { xl: "50px", xs: "30px" } }}>
              <Box
                sx={{ fontWeight: "bold", color: "black" }}
                className="fs-14"
              >
                CHANEL SERVICES
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                Les Rendez-vous CHANEL
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                Fragrance & Beauty Boutiques
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                Store Locator
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item xl={2} xs={12}>
          <Box mt={{ xs: "30px", xl: "0" }}>
            <Box>
              <Box
                sx={{ fontWeight: "bold", color: "black" }}
                className="fs-14"
              >
                COLLECTIONS
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                Les Exclusifs de CHANEL
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                Les Eaux de CHANEL
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item xl={2} xs={12}>
          <Box mt={{ xs: "30px", xl: "0" }}>
            <Box sx={{ fontWeight: "bold", color: "black" }} className="fs-14">
              WOMEN
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              N°5
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Coco Mademoiselle
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Gabrielle CHANEL
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Chance
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Chance Eau Tendre
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Chance Eau Fraîche
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Chance Eau Vive
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Coco
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Coco Noir
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Allure Sensuelle
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Allure
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              N°19
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Cristalle
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              View all
            </Box>
          </Box>
        </Grid>

        <Grid item xl={2} xs={12}>
          <Box mt={{ xs: "30px", xl: "0" }}>
            <Box sx={{ fontWeight: "bold", color: "black" }} className="fs-14">
              MEN
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Bleu de CHANEL
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Allure Homme Sport
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Allure Homme Sport Eau Extrême
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Allure Homme
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Allure Homme Édition Blanche
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Platinum Égoïste
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Égoïste
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Pour Monsieur
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Antaeus
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              View all
            </Box>
          </Box>
        </Grid>

        <Grid item xl={2} xs={12}>
          <Box mt={{ xs: "30px", xl: "0" }}>
            <Box>
              <Box
                sx={{ fontWeight: "bold", color: "black" }}
                className="fs-14"
              >
                BATH AND BODY
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                Women
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                Men
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                View all
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  </Container>
);

const fullMegamenu6 = (
  <Container maxWidth={"xl"}>
    <Box>
      <Grid container columnSpacing={4} justifyContent={{ xl: "center" }}>
        <Grid item xl={12}>
          <Box
            sx={{
              fontWeight: "bold",
              color: "black",
              textAlign: "center",
              py: "50px",
              textWrap: "wrap !important",
            }}
            className="fs-14"
          >
            BLISS BOUTIQ TRY ON. DISCOVER THE EXCLUSIVE SELECTION
          </Box>{" "}
        </Grid>
        <Grid item xl={2} xs={12}>
          <Box>
            <Box sx={{ width: "216px", height: "290px" }}>
              <img src={megamenu6} alt="megamenu img1" />
            </Box>
            <Box>
              <Box
                className="fs-11"
                sx={{
                  transition: "0.4s",
                  cursor: "pointer",
                  fontWeight: "bold",
                  mt: "15px",
                  pb: "8px",
                  display: "inline-block",
                  borderBottom: "1px solid transparent",
                  "&:hover": {
                    borderBottom: "1px solid black",
                  },
                }}
              >
                MAKEUP HOME <i class="fa-solid fa-angle-right"></i>
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item xl={2} xs={12}>
          <Box mt={{ xs: "30px", xl: "0" }}>
            <Box sx={{ fontWeight: "bold", color: "black" }} className="fs-14">
              IN THE SPOTLIGHT
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Chanel Beauty Mix Workout
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Chanel Beauty Mix Spa
            </Box>

            <Box sx={{ mt: { xl: "50px", xs: "30px" } }}>
              <Box
                sx={{ fontWeight: "bold", color: "black" }}
                className="fs-14"
              >
                THE CHANEL SELECTION
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                The Latest Creations
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                Special Editions
              </Box>
            </Box>
            <Box sx={{ mt: { xl: "50px", xs: "30px" } }}>
              <Box
                sx={{ fontWeight: "bold", color: "black" }}
                className="fs-14"
              >
                CHANEL SERVICES
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                CHANEL Beauty Book
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                Les Rendez-vous CHANEL
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                Fragrance & Beauty Boutiques
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                Store Locator
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item xl={2} xs={12}>
          <Box mt={{ xs: "30px", xl: "0" }}>
            <Box>
              <Box
                sx={{ fontWeight: "bold", color: "black" }}
                className="fs-14"
              >
                LIPS
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                Lipsticks
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                Liquid Lipsticks
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                Lip Gloss
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                Lip Pencils
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                Lip Balms and Lip Care
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                View all
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                {" "}
                <i class="fa-solid fa-location-crosshairs"></i> CHANEL TRY ON
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item xl={2} xs={12}>
          <Box mt={{ xs: "30px", xl: "0" }}>
            <Box sx={{ fontWeight: "bold", color: "black" }} className="fs-14">
              COMPLEXION
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Base
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Foundations
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Concealer
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Powders
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Highlighter
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Blush
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Healthy Glow Makeup
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Bronzers
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              View all
            </Box>
            <Box sx={{ mt: { xl: "50px", xs: "30px" } }}>
              <Box
                sx={{ fontWeight: "bold", color: "black" }}
                className="fs-14"
              >
                EYES
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                Mascara
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                Eyeshadows
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                Eyeliners
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                Eye Palette
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                Brows
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                View all
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                <i class="fa-solid fa-location-crosshairs"></i> CHANEL TRY ON
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item xl={2} xs={12}>
          <Box mt={{ xs: "30px", xl: "0" }}>
            <Box sx={{ fontWeight: "bold", color: "black" }} className="fs-14">
              NAILS
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Nail Colour
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Manicure
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              View all
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              <i class="fa-solid fa-location-crosshairs"></i> CHANEL TRY ON
            </Box>

            <Box sx={{ mt: { xl: "50px", xs: "30px" } }}>
              <Box
                sx={{ fontWeight: "bold", color: "black" }}
                className="fs-14"
              >
                BRUSHES AND ACCESSORIES
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                Complexion Brushes
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                Eye Brushes
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                Lip Brushes
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                Other Accessories
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                View all
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  </Container>
);

const fullMegamenu7 = (
  <Container maxWidth={"xl"}>
    <Box>
      <Grid container columnSpacing={4} justifyContent={{ xl: "center" }}>
        <Grid item xl={12}>
          <Box
            sx={{
              fontWeight: "bold",
              color: "black",
              textAlign: "center",
              py: "50px",
              textWrap: "wrap !important",
            }}
            className="fs-14"
          >
            BLISS BOUTIQ TRY ON. DISCOVER THE EXCLUSIVE SELECTION
          </Box>{" "}
        </Grid>
        <Grid item xl={2} xs={12}>
          <Box>
            <Box sx={{ width: "216px", height: "290px" }}>
              <img src={megamenu7} alt="megamenu img1" />
            </Box>
            <Box>
              <Box
                className="fs-11"
                sx={{
                  transition: "0.4s",
                  cursor: "pointer",
                  fontWeight: "bold",
                  mt: "15px",
                  pb: "8px",
                  display: "inline-block",
                  borderBottom: "1px solid transparent",
                  "&:hover": {
                    borderBottom: "1px solid black",
                  },
                }}
              >
                SKINCARE HOME <i class="fa-solid fa-angle-right"></i>
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item xl={2} xs={12}>
          <Box mt={{ xs: "30px", xl: "0" }}>
            <Box sx={{ fontWeight: "bold", color: "black" }} className="fs-14">
              IN THE SPOTLIGHT
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Le Lift Pro
            </Box>
            <Box
              sx={{
                fontWeight: "bold",
                color: "black",
                mt: { xs: "20px", xl: "0" },
              }}
              className="fs-14"
            >
              N°1 DE CHANEL
            </Box>

            <Box sx={{ mt: { xl: "50px", xs: "30px" } }}>
              <Box
                sx={{ fontWeight: "bold", color: "black" }}
                className="fs-14"
              >
                THE BLISS BOUTIQ SELECTION
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                The Latest Creations
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                Special Editions
              </Box>
            </Box>
            <Box sx={{ mt: { xl: "50px", xs: "30px" } }}>
              <Box
                sx={{ fontWeight: "bold", color: "black" }}
                className="fs-14"
              >
                CHANEL SERVICES
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                Les Rendez-vous CHANEL
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                Fragrance & Beauty Boutiques
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                Store Locator
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item xl={2} xs={12}>
          <Box mt={{ xs: "30px", xl: "0" }}>
            <Box>
              <Box
                sx={{ fontWeight: "bold", color: "black" }}
                className="fs-14"
              >
                BY CATEGORY
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                Cleansers & Makeup Removers
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                Toners & Lotions
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                Serums & Concentrates
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                Moisturisers
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                Eyes & Lips
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                Oils
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                Protection
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                Masks & Scrubs
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                Mists
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                Body Care
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                Massage Accessories
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                View all
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item xl={2} xs={12}>
          <Box mt={{ xs: "30px", xl: "0" }}>
            <Box sx={{ fontWeight: "bold", color: "black" }} className="fs-14">
              BY COLLECTION
            </Box>
            <Box
              sx={{
                fontWeight: "bold",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              N°1 DE CHANEL
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Sublimage
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Le Lift & Le Lift Pro
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Hydra Beauty
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Le Blanc
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              The Cleansing Collection
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              CC Cream
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              UV Essentiel
            </Box>
          </Box>
        </Grid>

        <Grid item xl={2} xs={12}>
          <Box mt={{ xs: "30px", xl: "0" }}>
            <Box sx={{ fontWeight: "500", color: "black" }} className="fs-14">
              La Solution 10 de CHANEL
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Huile de Jasmin
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              La Crème Main
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Body Excellence
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Others
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              View all
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  </Container>
);

const fullMegamenu8 = (
  <Container maxWidth={"xl"}>
    <Box>
      <Grid container columnSpacing={4} justifyContent={{ xl: "center" }}>
        <Grid item xl={2} xs={12}>
          <Box mt={{ xs: "30px", xl: "0" }}>
            <Box sx={{ fontWeight: "bold", color: "black" }} className="fs-14">
              BLISS BOUTIQ CULTURE FUND
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Discover the Prize
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Discover the Fund
            </Box>
          </Box>
        </Grid>

        <Grid item xl={2} xs={12}>
          <Box mt={{ xs: "30px", xl: "0" }}>
            <Box sx={{ fontWeight: "bold", color: "black" }} className="fs-14">
              BLISS BOUTIQ CONNECTS
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Discover the Podcast
            </Box>
          </Box>
        </Grid>

        <Grid item xl={2} xs={12}>
          <Box mt={{ xs: "30px", xl: "0" }}>
            <Box>
              <Box
                sx={{ fontWeight: "bold", color: "black" }}
                className="fs-14"
              >
                INSIDE BLISS BOUTIQ
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                Gabrielle Chanel
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                100 years of creation
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                Chapters
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item xl={2} xs={12}>
          <Box mt={{ xs: "30px", xl: "0" }}>
            <Box sx={{ fontWeight: "bold", color: "black" }} className="fs-14">
              FOMDATION BLISS BOUTIQ
            </Box>

            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Discover the Fondation
            </Box>
          </Box>
        </Grid>

        <Grid item xl={2} xs={12}>
          <Box mt={{ xs: "30px", xl: "0" }}>
            <Box sx={{ fontWeight: "bold", color: "black" }} className="fs-14">
              SUSTAINABILITY
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Climate
            </Box>
          </Box>
        </Grid>

        <Grid item xl={2} xs={12}>
          <Box mt={{ xs: "30px", xl: "0" }}>
            <Box sx={{ fontWeight: "bold", color: "black" }} className="fs-14">
              CAREERS
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "black",
                mt: { xl: "20px", xs: "10px" },
              }}
              className="fs-14"
            >
              Join CHANEL
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  </Container>
);

export {
  fullMegamenu1,
  fullMegamenu2,
  fullMegamenu3,
  fullMegamenu4,
  fullMegamenu5,
  fullMegamenu6,
  fullMegamenu7,
  fullMegamenu8,
};
