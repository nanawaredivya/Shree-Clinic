import { Grid, Typography } from '@mui/material'
import React from 'react'
import ServviceCard from './SevviceCard'

const Services = () => {
  return (
    <div>
    <Grid>
      <Typography variant='h3' align='center'><b>What We Do</b></Typography>
      <Typography variant='h6' color="text.secondary" align='center'><br/>
      We bring healthcare to your convenience, offering a comprehensive range of on-demand medical services
      tailored to your needs. Our platform allows you to connect with experienced online doctors who provide
      expert medical advice, issue online prescriptions, and offer quick refills whenever you require them.
      </Typography><br/>
      <ServviceCard/><br/>
    </Grid><br/>
    </div>
  )
}

export default Services