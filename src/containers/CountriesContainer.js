import React, { useState, useEffect } from "react";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const CountriesContainer = () => {


    const [countriesName, setCountriesName] = useState([])
    const [countriesData, setCountriesData] = useState([])


    useEffect(() => {
        getCountries()
    }, [])


    const getCountries = () => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(data => setCountriesName(data.map(x => x.name.common)))
    }

    const getCountryDetail = (newValue) => {
        fetch("https://restcountries.com/v3.1/name/" + newValue)
            .then(res => res.json())
            .then(data => setCountriesData(data.map(x => ({ name: x.name.official, flag: x.flags.png, capital: x.capital[0], continent: x.continents[0] }))))
        console.log(countriesData);
    }


    return (
        <div>


            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={countriesName}
                sx={{ width: 300 }}
                onChange={(event, newValue) => {
                    getCountryDetail(newValue);
                }}
                renderInput={(params) => <TextField {...params} label="Countries" countries={countriesName} />}
            />
            
    
            <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                Country Name:{countriesData[0].name}
                <br />
                Country Capital:{countriesData[0].capital}
                <br />
                Country Continent:{countriesData[0].continent}
            </Typography>
            <img src={countriesData[0].flag} /> 
            
            
        </div>
    );
}

export default CountriesContainer;