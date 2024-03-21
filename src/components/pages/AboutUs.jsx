import * as React from 'react';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Typography } from '@mui/material';


const defaultTheme = createTheme();

export default function AboutUs() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid  container>
      <Grid xs={6}>
        <img src="https://images.pexels.com/photos/11119419/pexels-photo-11119419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="about us" width="130%" height="100%"/>
      </Grid>
      <Grid xs={6} variant='body1' sx={{ fontSize: 40, }}><b>About US</b><br/>
      <Typography sx={{fontFamily: "Segoe UI", fontSize: 20}}>Welcome to Health Plus, your trusted partner for accessible and personalized healthcare. 
      Our expert doctors offer online consultations and specialized services, prioritizing your well-being. 
      Join us on this journey towards a healthier you.</Typography><br/>

      <Grid  variant='body1' sx={{ fontSize: 25, color: "purple",}}><b>Your Solutions</b></Grid>
      
      <Grid  variant='body1' sx={{ fontSize: 20, }}><b>Choose a Specialist</b></Grid>
      <Typography sx={{fontFamily: "Segoe UI", fontSize: 20}}>
      Find your perfect specialist and book with ease at Health Plus. Expert doctors prioritize your health, offering tailored care.
      </Typography><br/>

      <Grid  variant='body1' sx={{ fontSize: 20,}}><b>Make a Schedule</b></Grid>
      <Typography sx={{fontFamily: "Segoe UI", fontSize: 20}}>
      Choose the date and time that suits you best, and let our dedicated team of medical professionals ensure your well-being with personalized care.
      </Typography>
<br/>
      <Grid  variant='body1' sx={{ fontSize: 20,}}><b>Get Your Solutions</b></Grid>
      <Typography sx={{fontFamily: "Segoe UI", fontSize: 20}}>
      Our experienced doctors and specialists are here to provide expert advice and personalized treatment plans, helping you achieve your best possible health.
      </Typography>
      </Grid>
      </Grid>

      {/* <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://images.pexels.com/photos/11119419/pexels-photo-11119419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '50px'
          }}
        />
        <Grid sx={6}>
          <Typography variant='h3' sx={{display: 'flex', alignItems: 'center', flexDirection: 'column',}}>About US</Typography>
        </Grid>
        
      </Grid> */}
    </ThemeProvider>
  );
}