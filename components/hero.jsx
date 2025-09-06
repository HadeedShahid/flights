import { Card, FormControl, InputLabel, MenuItem, Select, Popover, TextField, Autocomplete } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import React, { useState } from 'react';
import dayjs from 'dayjs';
import { Search } from 'lucide-react';

const Hero = () => {
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);

  const [tripType, setTripType] = useState('round');
  const [travelClass, setTravelClass] = useState('economy');

  const [anchorEl, setAnchorEl] = useState(null);
  const [passengers, setPassengers] = useState({
    adults: 1,
    children: 0,
    infantsSeat: 0,
    infantsLap: 0,
  });

  const locations = ['New York', 'London', 'Paris', 'Tokyo', 'Dubai', 'Singapore'];

  const handleTripChange = (event) => setTripType(event.target.value);
  const handleClassChange = (event) => setTravelClass(event.target.value);

  const handlePassengerClick = (event) => setAnchorEl(event.currentTarget);
  const handlePassengerClose = () => setAnchorEl(null);

  const open = Boolean(anchorEl);

  const increment = (type) => setPassengers(prev => ({ ...prev, [type]: prev[type] + 1 }));
  const decrement = (type) => setPassengers(prev => ({ ...prev, [type]: prev[type] > 0 ? prev[type] - 1 : 0 }));

  const totalPassengers = Object.values(passengers).reduce((a, b) => a + b, 0);

  return (
    <div>
      <img src='/images/bg.png' alt="background" className='w-full h-full' />
      <h1 className='text-6xl font-normal'>Flights</h1>
     
    </div>
  );
};

export default Hero;
