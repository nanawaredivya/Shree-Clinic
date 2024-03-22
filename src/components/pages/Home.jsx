import React from 'react';
import { Container, Typography } from '@mui/material';
import HeaderImg from './HeaderImg';
import { HeaderCard } from './HeaderCard';

const Home = () => {
  return (
    <div style={{ flexGrow: 1 }}>
      <Container>
        <HeaderImg />
        <Typography variant='h4' style={{ color: 'orange', textAlign: 'center', margin: '20px 0' }}>
          "Take care of your body. It's the only place you have to live in."
        </Typography>
        <HeaderCard />
      </Container>
    </div>
  );
};

export default Home;
