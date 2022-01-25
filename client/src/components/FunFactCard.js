import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const FunFactCard = ({funfact}) => {
    if (Object.keys(funfact).length > 0){

    return(
    <>
    <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
    Country Name:{funfact.name}
    <br />
    Country Fun Fact:{funfact.funfact}
    </Typography>
    </>
    )
    }
    return (
        <>
        </>
    )

}

export default FunFactCard;