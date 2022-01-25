import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const CountryCard = ({countriesData}) => {
    if (countriesData.length > 0){

    return(
        <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: "lg",
            height: "sm",
          },
        }}
      >
        <Paper elevation={12} >
    <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
    Country Name:{countriesData[0].name}
    <br />
    Country Capital:{countriesData[0].capital}
    <br />
    Country Continent:{countriesData[0].continent}
    </Typography>
    <img src={countriesData[0].flag} /> 
    </Paper>
    </Box>
    )
    }
    return (
        <>
        </>
    )

}

export default CountryCard;