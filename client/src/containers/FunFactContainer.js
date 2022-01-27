import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import FunFactCard from "../components/FunFactCard";
import Popper from '@mui/material/Popper';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Box from '@mui/material/Box';



const FunFactContainer = () => {

    const [funfact, setFunfact] =  useState([]);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
 
    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
        setOpen((prev) => !prev);
        getFunFacts();
      };
    const handleClickAway = () => {
        setOpen(false)
    }

    const id = open ? 'simple-popper' : undefined;


  const getFunFacts = () => {
    fetch('http://localhost:5000/api/funfacts')
    .then(res => res.json())
    .then(data => data[Math.floor(Math.random() * data.length)])
    .then(data => setFunfact({name: data.country, funfact: data.funfact}))
  }


 return(
     <div>
        <ClickAwayListener onClickAway={handleClickAway}>
            <Box >

                <Button aria-describedby={id}   variant="outlined"
                onClick = {handleClick} size="large">
                Fun Facts
                </Button>

                <Popper id={id} open={open} anchorEl={anchorEl}>
                    <FunFactCard funfact={funfact}/> 
                </Popper>
            </Box>
        </ClickAwayListener>
    </div>
    )
}

export default FunFactContainer;