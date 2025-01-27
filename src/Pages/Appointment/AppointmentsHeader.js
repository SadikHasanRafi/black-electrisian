import React from 'react';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
// import chair from '../../../images/chair.png';
// import Calender from '../../Shared/Calender/Calender';
import { Container } from '@mui/material';
import Calender from './Calender';

const AppointmentsHeader = ({date,setDate}) => {
   
    return (
       <Container>
        <Box style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
        <Calender date={date} setDate={setDate}></Calender>
        </Box>
          
       </Container>
    );
};

export default AppointmentsHeader;