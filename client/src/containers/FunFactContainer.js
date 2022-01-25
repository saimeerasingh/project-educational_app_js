import React, { useState, useEffect } from "react";
import FunFactButton from "../components/FunFactButton";
import Button from '@mui/material/Button';

const FunFactContainer = () => {

    const [message, setMessage] =  useState([]);


  const getFunFacts = () => {
    fetch('http://localhost:5000/api/funfacts')
    .then(res => res.json())
    .then(data => data[Math.floor(Math.random() * data.length)])
    .then(data => setMessage({name: data.country, funfact: data.funfact}))
  }


 return(
     <>
    
    <Button
     onClick={() => {
       getFunFacts();
     }}
    >
     Fun Facts
    </Button>

     </>
 )
}

export default FunFactContainer;