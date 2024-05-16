import React from 'react'
import { Box, Container, Grid } from '@mui/material'
import category1 from '../../assets/images/Home/categoey/category1.png';

const Category = () => {
    const categories = [
        {img: category1,title: "SUMMER STORE"},
        {img: category1,title: "SUMMER STORE"},
        {img: category1,title: "SUMMER STORE"},
        {img: category1,title: "SUMMER STORE"},
        {img: category1,title: "SUMMER STORE"},
        {img: category1,title: "SUMMER STORE"},
    ]
  return (
    <>
      <Box>
        <Container maxWidth="xl">
          <Box sx={{ padding: "50px 0" }}>
            <Grid container>
              {categories.map((item, index) => (
                <Grid
                  item
                  key={index}
                  xs={12}
                  lg={2}
                  md={4}
                  sm={6}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <Box sx={{ width: { xs: "230px", lg: "190px" } }}>
                    <img
                      src={item.img}
                      alt={item.img}
                      style={{ borderRadius: "50%" }}
                    />
                  </Box>
                  <Box
                    sx={{
                      mt: "14px",
                      fontWeight: "500",
                      color: "#0e3051",
                      fontSize: "18px",
                    }}
                  >
                    {item.title}
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Category