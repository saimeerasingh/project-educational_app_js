import React, { useState, useEffect } from "react";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Popper from '@mui/material/Popper';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Box from '@mui/material/Box';

import CountryCard from "../components/CountryCard";

const CountriesContainer = () => {


    const [countriesName, setCountriesName] = useState([])
    const [countriesData, setCountriesData] = useState([])
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
        setOpen((prev) => !prev);
    };
    const handleClickAway = () => {
        setOpen(false)
    }

    const id = open ? 'simple-popper' : undefined;


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
            .then(data => setCountriesData(data.map(x => ({ name: x.name.official, flag: x.flags.png, capital: x.capital, continent: x.continents }))))
        console.log(countriesData);
    }


    return (
        <div>
         <ClickAwayListener onClickAway={handleClickAway}>
            <Box >
            
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={countriesName}
                sx={{ width: 300 }}
                onChange={(event, newValue) => {
                    handleClick(event);
                    getCountryDetail(newValue);
                }}
                renderInput={(params) => <TextField {...params} label="Countries" countries={countriesName} />}
            />
            
            <Popper id={id} open={open} anchorEl={anchorEl}>
            <CountryCard countriesData={countriesData}/>
            </Popper>
            </Box>
            </ClickAwayListener>
        </div>
    );
}

export default CountriesContainer;