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

const images = [
  { src: img_8, height: "920px", gridProps: { lg: 7, xs: 12 } },
  { src: img_5, height: "460px", gridProps: { xs: 12, sm: 6, lg: 12 } },
  { src: img_3, height: "460px", gridProps: { xs: 12, sm: 6, lg: 12 } },
  { src: img_4, height: "700px", gridProps: { md: 6, xs: 12 } },
  { src: img_5, height: "700px", gridProps: { md: 6, xs: 12 } },
];

function ProductGrid() {
  return (
    <Box>
      <Grid container spacing={1}>
        {images.slice(0, 1).map((img, index) => (
          <Grid item key={index} {...img.gridProps} sx={{ height: img.height }}>
            <img
              src={img.src}
              style={{ objectFit: "cover", height: "100%", width: "100%" }}
              alt={`img-${index + 1}`}
            />
          </Grid>
        ))}
        <Grid item lg={5} xs={12}>
          <Grid container spacing={1}>
            {images.slice(1, 3).map((img, index) => (
              <Grid
                item
                key={index + 1}
                {...img.gridProps}
                sx={{ height: img.height }}
              >
                <img
                  src={img.src}
                  style={{ objectFit: "cover", height: "100%", width: "100%" }}
                  alt={`img-${index + 2}`}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={1} pt={1}>
        {images.slice(3).map((img, index) => (
          <Grid
            item
            key={index + 3}
            {...img.gridProps}
            sx={{ height: img.height }}
          >
            <img
              src={img.src}
              style={{ objectFit: "cover", height: "100%", width: "100%" }}
              alt={`img-${index + 4}`}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProductGrid;
