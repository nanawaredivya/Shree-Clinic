import { Grid, Typography } from '@mui/material'
import React from 'react'
import DoctorCard from './DoctorCard'

export const Doctors = () => {
  return (
    <Grid>
        <Grid  variant='body1' sx={{ fontSize: 40, display: "flex", justifyContent: "center"}}><b>Meet Our Doctors</b></Grid><br/>
      <Typography align='center' sx={{fontFamily: "Segoe UI", fontSize: 20,}}>
      Meet our exceptional team of specialist doctors, dedicated to providing top-notch healthcare services at Health 
      Plus. Trust in their knowledge and experience to lead you towards a healthier and happier life.
      </Typography><br/>
      <DoctorCard />
    </Grid>
  )
}
