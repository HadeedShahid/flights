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
      <Card className="p-6 space-y-4 mt-6 pb-8 relative overflow-visible rounded-2xl"  sx={{ overflow: 'visible', borderRadius:"12px", 

        boxShadow: '0 4px 12px rgba(0,0,0,0.15), 0 0 6px rgba(0,0,0,0.1)', // more even shadow on all sides
       }}>
        {/* Trip Type, Class and Passengers */}
        <div className='flex gap-4'>
          {/* Trip Type Select */}
          <FormControl sx={{ minWidth: 180 }} className="bg-white rounded-lg shadow-md" size="small">
            <InputLabel id="trip-select-label">Trip Type</InputLabel>
            <Select
              labelId="trip-select-label"
              id="trip-select"
              value={tripType}
              label="Trip Type"
              onChange={handleTripChange}
              className="rounded-lg"
            >
              <MenuItem value="round">Round trip</MenuItem>
              <MenuItem value="one">One way</MenuItem>
              <MenuItem value="multi">Multi-city</MenuItem>
            </Select>
          </FormControl>

          {/* Class Select */}
          <FormControl sx={{ minWidth: 180 }} className="bg-white rounded-lg shadow-md" size="small">
            <InputLabel id="class-select-label">Class</InputLabel>
            <Select
              labelId="class-select-label"
              id="class-select"
              value={travelClass}
              label="Class"
              onChange={handleClassChange}
              className="rounded-lg"
            >
              <MenuItem value="economy">Economy</MenuItem>
              <MenuItem value="premium">Premium Economy</MenuItem>
              <MenuItem value="business">Business</MenuItem>
              <MenuItem value="first">First</MenuItem>
            </Select>
          </FormControl>

          {/* Passengers Dropdown */}
          <div className="relative">
            <div
              onClick={handlePassengerClick}
              className="flex items-center justify-between min-w-[180px] px-3 h-10 bg-white rounded-lg shadow-md cursor-pointer border border-gray-300"
            >
              <span className="text-gray-800">Passengers: {totalPassengers}</span>
              <span className="text-gray-400">&#9662;</span>
            </div>

            <Popover
              open={open}
              anchorEl={anchorEl}
              onClose={handlePassengerClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            >
              <div className="p-4 space-y-3 min-w-[250px]">
                {[
                  { label: 'Adults', key: 'adults' },
                  { label: 'Children Aged 2-11', key: 'children' },
                  { label: 'Infants In seat', key: 'infantsSeat' },
                  { label: 'Infants On lap', key: 'infantsLap' },
                ].map((item) => (
                  <div key={item.key} className="flex justify-between items-center">
                    <span>{item.label}</span>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => decrement(item.key)}
                        className="w-8 h-8 bg-blue-500 text-white rounded-md flex items-center justify-center"
                      >
                        -
                      </button>
                      <span className="w-6 text-center">{passengers[item.key]}</span>
                      <button
                        onClick={() => increment(item.key)}
                        className="w-8 h-8 bg-blue-500 text-white rounded-md flex items-center justify-center"
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </Popover>
          </div>
        </div>
         <div className='flex flex-col md:flex-row gap-4'>
          {/* From Autocomplete */}
           <Autocomplete
            options={locations}
            value={from}
            onChange={(e, newValue) => setFrom(newValue)}
            renderInput={(params) => (
              <TextField 
                {...params} 
                label="From" 
                size="large" 
                className="bg-white rounded-lg shadow-md min-w-[220px]" 
                InputProps={{ ...params.InputProps, className: 'h-14 px-4 text-lg' }}
              />
            )}
          />

          {/* To Autocomplete */}
          <Autocomplete
            options={locations}
            value={to}
            onChange={(e, newValue) => setTo(newValue)}
            renderInput={(params) => (
              <TextField 
                {...params} 
                label="To" 
                size="large" 
                className="bg-white rounded-lg shadow-md min-w-[220px]" 
                InputProps={{ ...params.InputProps, className: 'h-14 px-4 text-lg' }}
              />
            )}
          />
<div className='flex'>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
  <DatePicker
    value={departureDate} // set null initially if you don't want default value
    onChange={(newDate) => setDepartureDate(newDate)}
    slotProps={{
      textField: {
        size: 'small',
        placeholder: 'Departure',
        className: 'bg-white rounded-lg shadow-md min-w-[180px] h-14 px-4 text-lg',
        InputProps: {
          className: 'h-full px-4 text-lg',
        },
      },
    }}
  />
</LocalizationProvider>

{tripType !== 'one' && (
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DatePicker
      value={returnDate} // set null initially if you don't want default value
      onChange={(newDate) => setReturnDate(newDate)}
      slotProps={{
        textField: {
          size: 'small',
          placeholder: 'Return',
          className: 'bg-white rounded-lg shadow-md min-w-[180px] h-14 px-4 text-lg',
          InputProps: {
            className: 'h-full px-4 text-lg',
          },
        },
      }}
    />
  </LocalizationProvider>
)}

</div>
          
        </div>
       <button className='bg-blue-500 text-white flex items-center gap-2 rounded-full py-2 px-4 absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 shadow-lg font-semibold text-sm'>
    <Search className='w-5 h-5' />
    Explore
  </button>

      </Card>
    </div>
  );
};

export default Hero;
