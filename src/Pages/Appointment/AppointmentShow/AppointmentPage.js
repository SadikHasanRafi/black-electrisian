import * as React from 'react';
import { Grid } from '@mui/material';
import Calender from '../Calender';
import AppointmentShow from './AppointmentShow';
import { Container } from 'react-bootstrap';
// import { Box } from '@mui/system';



const AppointmentPage = () => {
    const [date,setDate]=React.useState(new Date())
    return (
        // <Box sx={{ flexGrow: 1 }}>
     <Container>
         <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
        <Calender date={date} setDate={setDate}></Calender>
        </Grid>
        <Grid item xs={12} md={6}>
           <AppointmentShow
           
           date={date}
           >

           </AppointmentShow>
        </Grid>
       
      </Grid>
     </Container>
    // </Box>
    );
};

export default AppointmentPage;