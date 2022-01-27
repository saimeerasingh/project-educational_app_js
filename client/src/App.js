import logo from './logo.svg';
import './App.css';
import CountriesContainer from './containers/CountriesContainer';
import { useEffect, useState } from 'react';
import FunFactContainer from './containers/FunFactContainer';
import WorldMap, {CountryContext}  from 'react-svg-worldmap';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


function App() {
  const data = [
    {country: 'cn', value: 1389618778}, // china
    {country: 'in', value: 1311559204}, // india
    {country: 'us', value: 331883986}, // united states
    {country: 'id', value: 264935824}, // indonesia
    {country: 'pk', value: 210797836}, // pakistan
    {country: 'br', value: 210301591}, // brazil
    {country: 'ng', value: 208679114}, // nigeria
    {country: 'bd', value: 161062905}, // bangladesh
    {country: 'ru', value: 141944641}, // russia
    {country: 'mx', value: 127318112}, // mexico
    {country: 'br', value: 212559204},
  ];
  

  return (
   <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
        <CountriesContainer/>
        </Grid>
        <Grid item xs={6}>
        </Grid>
        <Grid item xs={2}>
        <FunFactContainer/>
        </Grid>
        <Grid item xs={12}
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <WorldMap
        color="red"
        value-suffix="people"
        size="xxl"
        frame
        data={data}
        richInteraction
        />
        </Grid>
      </Grid>
    </Box>
  );
 
}

export default App;
