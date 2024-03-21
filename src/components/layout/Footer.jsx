import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AssignmentTurnedInTwoToneIcon from '@mui/icons-material/AssignmentTurnedInTwoTone';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';

const Footer =() => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#1976d2', height: '200px' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="AssignmentTurnedInTwoToneIcon"
            sx={{ mr: 2 }}
          >
            <AssignmentTurnedInTwoToneIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Shree Clinic
          </Typography>
        </Toolbar>
        <List sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', flexDirection: 'column' }}>
          <ListItem>
            <ListItemIcon>
              <LocationOnIcon />
            </ListItemIcon>
            <ListItemText primary="Mulacha Wada, Satara City" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <PhoneIcon />
            </ListItemIcon>
            <ListItemText primary="123-456-7890" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
            <EmailIcon />
            </ListItemIcon>
            <ListItemText primary="shreeclinic@gmail.com" />
          </ListItem>
          {/* <ListItem>
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText primary="info@example.com" />
          </ListItem> */}
        </List>
      </AppBar>
    </Box>
  );
}
export default Footer

