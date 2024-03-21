import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'

 const DoctorCard = () => {
  return (
    <Grid container spacing={12}>
      <Grid item xs={4}>
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia sx={{height: "250px"}}
          component="img"
          height="200"
          image="https://icons.veryicon.com/png/o/internet--web/55-common-web-icons/person-4.png"
          alt="Emergency Care"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{fontFamily: "Segoe UI",}}>
          Dr Kiran Jagtap
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{fontFamily: "Segoe UI", fontSize: "20px"}}>
          Homeopathy
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      </Grid>

      <Grid item xs={4}>
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia sx={{height: "250px"}}
          component="img"
          height="180"
          image="https://icons.veryicon.com/png/o/internet--web/55-common-web-icons/person-4.png"
          alt="Dental Care"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{fontFamily: "Segoe UI"}}>
          Dr Kiran Jagtap
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{fontFamily: "Segoe UI", fontSize: "20px"}}>
          Homeopathy
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      </Grid>

      <Grid item xs={4}>
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia sx={{height: "250px"}}
          component="img"
          height="180"
          image="https://icons.veryicon.com/png/o/internet--web/55-common-web-icons/person-4.png"
          alt="Exercise"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{fontFamily: "Segoe UI"}}>
          Dr Kiran Jagtap
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{fontFamily: "Segoe UI", fontSize: "20px"}}>
          Homeopathy
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      </Grid>
    </Grid>
  )
}

export default DoctorCard



