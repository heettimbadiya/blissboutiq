import React from 'react'
import { Box, Container, Grid } from '@mui/material';
import megamenu1 from './assets/images/header/megamenu/10558235410462-MEGAMENU_DEF-Desktop_VDEF.avif'; // replace with actual path to the image

const Full = () => {

const fashionLinks = [
  { text: 'FASHION HOME', icon: 'fa-solid fa-angle-right' },
  { text: 'THE CHANEL HANDBAG', icon: 'fa-solid fa-angle-right' }
];

const latestShows = [
  { title: 'Cruise 2024/25', date: 'Available in boutiques from November 2024' },
  { title: 'Fall-Winter 2024/25', date: 'Available in boutiques from September 2024' },
  { title: '2023/24 Metiers d\'art', date: 'Available in boutiques in June 2024' }
];

const inBoutiques = [
  'Spring-Summer 2024',
  'Spring-Summer 2024 Pre-Collection',
  'The Cruise 2023/24 Collection',
  'The Iconic Handbag - The Campaign',
  'Ready-To-Wear',
  'Handbags',
  'Shoes',
  'Costume Jewellery',
  'Small Leather Goods',
  'Eyewear',
  'Other Accessories'
];

const savoirFaire = [
  'Discover the savoir-faire of the 2023/24 Métiers d\'art collection'
];

const chanelNews = [
  'Discover the latest news'
];

const literaryRendezvous = [
  'LITERARY RENDEZVOUS AT RUE CAMBON',
  'Discover the savoir-faire of the 2023/24 Métiers d\'art collection'
];

const services = [
  'A programme of services to preserve each CHANEL creation.',
  'Find a Boutique',
  'Book an appointment'
];

const fullMegamenu1 = (
  <Container maxWidth="xl">
    <Box>
      <Grid container columnSpacing={4} justifyContent="center">
        <Grid item xl={2} xs={12}>
          <Box mt={{ xs: '20px', xl: '0' }}>
            <Box sx={{ width: '216px', height: '290px' }}>
              <img src={megamenu1} alt="megamenu img1" />
            </Box>
            <Box>
              {fashionLinks.map((link, index) => (
                <Box
                  key={index}
                  className="fs-11"
                  sx={{
                    transition: '0.4s',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    mt: '15px',
                    pb: '8px',
                    display: 'inline-block',
                    borderBottom: '1px solid transparent',
                    '&:hover': {
                      borderBottom: '1px solid black',
                    }
                  }}
                >
                  {link.text} <i className={link.icon}></i>
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>

        <Grid item xl={2} xs={12}>
          <Box mt={{ xs: '30px', xl: '0' }}>
            <Box sx={{ fontWeight: 'bold', color: 'black' }} className="fs-14">
              LETEST SHOWS
            </Box>
            {latestShows.map((show, index) => (
              <Box
                key={index}
                sx={{
                  fontWeight: '500',
                  color: 'black',
                  mt: { xl: '20px', xs: '10px' },
                }}
                className="fs-14"
              >
                {show.title}
                <Box color="textGray" className="fs-12" sx={{ mt: { xl: '20px', xs: '10px' } }}>
                  {show.date}
                </Box>
              </Box>
            ))}
          </Box>
        </Grid>

        <Grid item xl={2} xs={12}>
          <Box mt={{ xs: '30px', xl: '0' }}>
            <Box sx={{ fontWeight: 'bold', color: 'black' }} className="fs-14">
              IN BOUTIQUES
            </Box>
            {inBoutiques.map((item, index) => (
              <Box
                key={index}
                sx={{
                  fontWeight: '500',
                  color: 'black',
                  mt: { xl: '20px', xs: '10px' },
                }}
                className="fs-14"
              >
                {item}
              </Box>
            ))}
          </Box>
        </Grid>

        <Grid item xl={2} xs={12}>
          <Box mt={{ xs: '30px', xl: '0' }}>
            <Box>
              <Box sx={{ fontWeight: 'bold', color: 'black' }} className="fs-14">
                SAVOIR-FAIRE
              </Box>
              {savoirFaire.map((text, index) => (
                <Box
                  key={index}
                  sx={{
                    fontWeight: '500',
                    color: 'black',
                    mt: { xl: '20px', xs: '10px' },
                  }}
                  className="fs-14"
                >
                  {text}
                </Box>
              ))}
            </Box>
            <Box sx={{ mt: { xl: '50px', xs: '30px' } }}>
              <Box sx={{ fontWeight: 'bold', color: 'black' }} className="fs-14">
                CHANEL NEWS
              </Box>
              {chanelNews.map((text, index) => (
                <Box
                  key={index}
                  sx={{
                    fontWeight: '500',
                    color: 'black',
                    mt: { xl: '20px', xs: '10px' },
                  }}
                  className="fs-14"
                >
                  {text}
                </Box>
              ))}
            </Box>
            <Box sx={{ mt: { xl: '50px', xs: '30px' } }}>
              <Box
                sx={{
                  fontWeight: 'bold',
                  color: 'black',
                  width: { xl: '100%', xs: '80%' },
                }}
                className="fs-14"
              >
                {literaryRendezvous[0]}
              </Box>
              <Box
                sx={{
                  fontWeight: '500',
                  color: 'black',
                  mt: { xl: '20px', xs: '10px' },
                }}
                className="fs-14"
              >
                {literaryRendezvous[1]}
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item xl={2} xs={12}>
          <Box mt={{ xs: '30px', xl: '0' }}>
            <Box>
              <Box sx={{ fontWeight: 'bold', color: 'black' }} className="fs-14">
                SERVICES
              </Box>
              {services.map((service, index) => (
                <Box key={index} sx={{ mt: { xl: '20px', xs: '10px' } }}>
                  <Box sx={{ fontWeight: 'bold', color: 'black' }} className="fs-14">
                    {index === 0 ? 'CHANEL' : service}
                  </Box>
                  {index === 0 && (
                    <Box color="textGray" className="fs-12" sx={{ mt: '10px' }}>
                      {service}
                    </Box>
                  )}
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  </Container>
);




  return (
    <>
      {fullMegamenu1}
    </>
  );
}

export default Full
