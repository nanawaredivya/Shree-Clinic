import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Hidden from '@mui/material/Hidden';
import Grid from '@mui/material/Grid';

const AnimatedButton = styled(Button)({
  padding: '10px 20px',
  backgroundColor: '#007bff',
  color: 'white',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: '#32CD32',
  },
});

const AnimatedImage = styled('img')({
  maxWidth: '100%',
  height: '58vh',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.8)',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.1)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.8)',
  },
});

function Register() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <AnimatedImage src="Asset/register.jpg" alt="Your Image" />
        </Grid>
        <Grid item xs={12} md={6}>
          <div>
            <Typography variant="h4" gutterBottom
            sx={{
              color: "orange",
              fontSize: "3rem",
              fontWeight: "bold"
            }}
            >
              Registration Forms
            </Typography>
            <Hidden smUp>
              <Typography variant="body1" gutterBottom>
                Link only visible for screens larger than or equal to small breakpoint (sm).
              </Typography>
            </Hidden>
            <Box mt={2}>
              <Hidden xsDown>
                <Link to="/homopathy">
                  <AnimatedButton>Homopathy</AnimatedButton>
                </Link>
              </Hidden>
            </Box>
            <Box mt={2}>
              <Hidden xsDown>
                <Link to="/allopathic">
                  <AnimatedButton>Allopathic</AnimatedButton>
                </Link>
              </Hidden>
            </Box>
            
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Register;
