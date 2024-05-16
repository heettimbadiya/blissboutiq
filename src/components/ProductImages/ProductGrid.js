import { Box, Grid } from "@mui/material";
import React from "react";
import img_1 from "../../assets/images/ProductImages/img-1.webp";
import img_2 from "../../assets/images/ProductImages/img-2.webp";
import img_3 from "../../assets/images/ProductImages/img-3.webp";
import img_4 from "../../assets/images/ProductImages/img-4.webp";
import img_5 from "../../assets/images/ProductImages/img-5.webp";
import img_6 from "../../assets/images/ProductImages/img-6.webp";
import img_7 from "../../assets/images/ProductImages/img-7.webp";
import img_8 from "../../assets/images/ProductImages/img-8.webp";

function ProductGrid() {
  return (
    <>
      <Box>
        <Grid container spacing={1}>
          <Grid item lg={7} xs={12} sx={{ height: "920px" }}>
            <img src={img_8} style={{ objectFit: "cover" }} alt={img_1} />
          </Grid>
          <Grid item lg={5} xs={12}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6} lg={12} sx={{ height: "460px" }}>
                <img src={img_5} alt={img_2} />
              </Grid>
              <Grid item xs={12} sm={6} lg={12} sx={{ height: "460px" }}>
                <img src={img_3} alt={img_3} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={1} pt={1}>
          <Grid item md={6} xs={12} sx={{ height: "700px" }}>
            <img src={img_4} alt={img_4} />
          </Grid>
          <Grid item md={6} xs={12} sx={{ height: "700px" }}>
            <img src={img_5} alt={img_5} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default ProductGrid;
