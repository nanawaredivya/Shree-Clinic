import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'

export const HeaderCard = () => {
  return (
    <Grid container spacing={12}>
      <Grid item xs={4}>
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image="https://img.freepik.com/free-photo/doctors-pushing-emergency-stretcher-bed-corridor_107420-63715.jpg?size=626&ext=jpg"
          alt="Emergency Care"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Why Choose SHREE CLINIC
          </Typography>
          <Typography variant="body1" color="text.secondary">
          We are a multi-specialty tertiary level private hospital with more than 100 years of superior ethical medical care.
          Healthcare is a stable industry with consistent demand. Working in a hospital often provides a sense of job security.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      </Grid>

      <Grid item xs={4}>
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image="https://rocksidekhadi.com/cdn/shop/articles/Importance_of_Ayurveda_in_Modern_Life.jpg?v=1626076938"
          alt="Dental Care"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
          Ayurveda
          </Typography>
          <Typography variant="body1" color="text.secondary">
          Ayurveda can help cure physical illnesses and address various health issues. Did you know that your 
          unique physical and mental characteristics are determined by the proportion of three doshas - Vata, Kapha, 
          and Pitta - in your body? One of the doshas is usually more dominant than the others.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      </Grid>

      <Grid item xs={4}>
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image="https://cdn.pixabay.com/photo/2019/12/31/16/06/yoga-4732209_1280.jpg"
          alt="Exercise"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
          Exercise
          </Typography>
          <Typography variant="body1" color="text.secondary">
          Regular physical activity is one of the most important things you can do for your health. 
          Being physically active can improve your brain health, help manage weight, reduce the risk of disease, 
          strengthen bones and muscles, and improve your ability to do everyday activities.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      </Grid>
    </Grid>
  )
}



