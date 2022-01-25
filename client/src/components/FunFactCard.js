import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


const FunFactCard = ({funfact}) => {
    if (Object.keys(funfact).length > 0){

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
        <Paper elevation={3} >
        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
        Country Name:{funfact.name}
        <br />
        Country Fun Fact:{funfact.funfact}
        </Typography>
        </Paper>
      </Box>

    
    )
    }
    return (
        <>
        </>
    )

};

export default FunFactCard;