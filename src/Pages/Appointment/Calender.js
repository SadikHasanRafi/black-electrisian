import React from 'react';
// import isWeekend from 'date-fns/isWeekend';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import StaticDatePicker from '@mui/lab/StaticDatePicker';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

import { DayPicker } from 'react-day-picker';
const Calender = ({date,setDate}) => {
    
    return (
      //    <LocalizationProvider dateAdapter={AdapterDayjs}>
      //    <StaticDatePicker
      //      displayStaticWrapperAs="desktop"
         
      //      value={date}
      //      onChange={(newValue) => {
      //        setDate(newValue);
      //      }}
      //      renderInput={(params) => <TextField {...params} />}
      //   />
      //  </LocalizationProvider>
     
     
     <DayPicker
     style={{background:"white",padding:"60px 120px"}}
     mode="single"
     selected={date}
     onSelect={(newValue) => {
       setDate(newValue);
     }}
     renderInput={(params) => <TextField {...params} />} />
    );
};

export default Calender;