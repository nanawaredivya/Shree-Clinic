import React, { useState } from 'react';
import { Grid, Typography, TextField, Button, Card, CardContent, CardMedia } from '@mui/material';
import { db } from '../../firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';

const Allopathic = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [info, setInfo] = useState('');

  const userCollection = collection(db, "allopathy")

  const handleSubmit = (e) => {
    e.preventDefault();
    addDoc(userCollection, {
      name: name,
      email: email,
      phone: phone,
      address: address,
      symptoms: symptoms,
      info: info,
    }).then(() => {
      if(!alert('Message sent successfully!'))document.location='./Register'
      setName('');
      setEmail('');
      setPhone('');
      setAddress('');
      setSymptoms('');
      setInfo('');
    }).catch((error) => {
      console.error('Error sending message:', error);
      alert('Error sending message. Please try again later.');
    });
  };

  return (
    <Grid container spacing={2}
      sx={{
        marginTop: '0.3rem'
      }}>
      <Grid item xs={12}>
        <Typography variant="h4" align="center" gutterBottom
          sx={{
            fontSize: 40,
            color: '#D35400',
            fontWeight: 'bold',
          }}>
          Allopathy Registration Form
        </Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card sx={{
          display: 'flex',
          flexDirection: 'column',
          marginBottom: '1rem',
          marginLeft: '1rem',
          marginRight: '2rem',
          paddingInlineEnd: '2rem',
          paddingInlineStart: '2rem',
          paddingBlock: '1.5rem',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.8)'
          // bgcolor: '#E5E4E2',
        }}>
          <CardMedia
            component="img"
            height="200"
            image="/Asset/Allopathy.jpg"
            alt="Contact Image"
          />
          <CardContent>
            <Typography variant="body1" gutterBottom
              sx={{
                marginBottom: '1rem',
                color: "#962ac9",
              }}>
              Allopathy Registration
            </Typography>
            
          </CardContent>
        </Card>
      </Grid>

      {/* Right Section */}
      <Grid item xs={12} md={7}>
        <Card sx={{ padding: 2, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.8)' }}>
          <CardContent>

            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Phone Number"
                    variant="outlined"
                    fullWidth
                    required
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Address"
                    variant="outlined"
                    fullWidth
                    required
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Symptoms"
                    multiline
                    rows={4}
                    variant="outlined"
                    fullWidth
                    required
                    onChange={(e) => setSymptoms(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Additional Information"
                    multiline
                    rows={4}
                    variant="outlined"
                    fullWidth
                    required
                    onChange={(e) => setInfo(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" fullWidth
                    sx={{
                      color: 'black',
                      backgroundColor: '#DC7633',
                      '&:hover': {
                        backgroundColor: '#D35400 ',
                      },
                    }}
                    onClick={handleSubmit}>
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Allopathic;
