import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'

const SevviceCard = () => {
  return (
    <Grid container spacing={12}>
         <Grid item xs={4}>
       <Card sx={{ maxWidth: 550,  background: "#D9DDDd"}}>
       <CardActionArea>
         <CardContent>
           <Typography gutterBottom variant="h4" component="div" align='center'>
           Homeopathy
           </Typography>
           <Typography variant="h6" color="text.secondary">
           A homoeopathy is a form of medicine which gives medicine for triggering the immune system of the body. 
           Further, the remedies which homoeopathy provides are safe and effective without any side effects.it 
           believes that any substance can create symptoms in a healthy person which can cure similar symptoms to 
           someone who is sick. It prepares medicines by diluting many plants, vegetables, synthetic materials in 
           distilled water and alcohol in small amounts.
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
          height="150"
          image="https://as1.ftcdn.net/v2/jpg/02/60/12/40/1000_F_260124068_JJjukE9KIRHD8ihvRdj4cXNrx9HYpYgy.jpg"
          alt="Emergency Care"
        />
        <CardMedia
          component="img"
          height="180"
          image="https://as1.ftcdn.net/v2/jpg/04/68/37/52/1000_F_468375244_PC1mJcuHI1hBO7h9dEPh7vjogR4FtJNO.jpg"
          alt="Emergency Care"
        />
        <CardMedia
          component="img"
          height="150"
          image="https://as2.ftcdn.net/v2/jpg/02/58/07/13/1000_F_258071338_K2z3rSFfaFeYaIeQ2WdtH6r9txGl7fDI.jpg"
          alt="Emergency Care"
        />
        
      </CardActionArea>
    </Card>
      </Grid>


       <Grid item xs={4}>
       <Card sx={{ maxWidth: 550,  background: "#D9DDDd"}}>
       <CardActionArea>
         <CardContent>
           <Typography gutterBottom variant="h4" component="div" align='center'>
           Allopathic
           </Typography>
           <Typography variant="h6" color="text.secondary">
           Allopathic medicine, commonly referred to as Western medicine, has made remarkable advancements in treating 
           various illnesses. It relies on the use of pharmaceutical drugs and surgical interventions to target 
           specific symptoms or diseases. It is an evidence-based system where doctors
           treat symptoms using conventional medications.It relies onTrusted Source clinical examinations and 
           focusing on a person’s symptoms and signs before treatment.
           </Typography>
         </CardContent>
       </CardActionArea>
     </Card>
       </Grid>
     </Grid>
  )
}

export default SevviceCard

// import { Card, CardActionArea, CardContent, Grid, Typography } from '@mui/material'
// import React from 'react'

// export const SevviceCard = () => {
//   return (
//     <Grid container spacing={3}>
//         <Grid item xs={4}>
//       <Card sx={{ maxWidth: 345 }}>
//       <CardActionArea>
//         <CardContent>
//           <Typography gutterBottom variant="h4" component="div">
//           Ayurveda
//           </Typography>
//           <Typography variant="body1" color="text.secondary">
//           Ayurveda can help cure physical illnesses and address various health issues. Did you know that your 
//           unique physical and mental characteristics are determined by the proportion of three doshas - Vata, Kapha, 
//           and Pitta - in your body? One of the doshas is usually more dominant than the others.
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//     </Card>
//       </Grid>
//     </Grid>
//   )
// }
