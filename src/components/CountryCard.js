import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const CountryCard = ({countriesData}) => {
console.log(countriesData);
    if (countriesData.length > 0){

    return(
        <>
    <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
    Country Name:{countriesData[0].name}
    <br />
    Country Capital:{countriesData[0].capital}
    <br />
    Country Continent:{countriesData[0].continent}
    </Typography>
    <img src={countriesData[0].flag} /> 
    </>
    )
    }
    return (
        <>
        </>
    )

}

export default CountryCard;