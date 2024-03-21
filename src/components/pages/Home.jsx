import React from 'react'
import { Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import HeaderImg from './HeaderImg';
import { HeaderCard } from './HeaderCard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    marginBottom: 3,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
}));

const Home = () => {
    const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
      <br/>
      <HeaderImg/>
      <br/><br/>
      <Typography variant='h4' color={'orange'} align='center'>"Take care of your body. It's the only place you have to live in."</Typography>
      <br/><br/>
      <HeaderCard/> 
      <br/>
      </Container>
    </div>
  )
}

export default Home