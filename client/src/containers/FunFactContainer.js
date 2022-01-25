import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import FunFactCard from "../components/FunFactCard";
import Popper from '@mui/material/Popper';


const FunFactContainer = () => {

    const [funfact, setFunfact] =  useState([]);
    const [anchorEl, setAnchorEl] = React.useState(null);
 
    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
        getFunFacts();
      };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;


  const getFunFacts = () => {
    fetch('http://localhost:5000/api/funfacts')
    .then(res => res.json())
    .then(data => data[Math.floor(Math.random() * data.length)])
    .then(data => setFunfact({name: data.country, funfact: data.funfact}))
  }


 return(
     <>
    
    <Button aria-describedby={id}   variant="outlined"
     onClick = {handleClick}>
     Fun Facts
    </Button>

    <Popper id={id} open={open} anchorEl={anchorEl}>
    <FunFactCard funfact={funfact}/> 
      </Popper>

   
     </>
 )
}

export default FunFactContainer;