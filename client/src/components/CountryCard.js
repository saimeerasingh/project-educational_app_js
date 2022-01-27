import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

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
            <Paper elevation={12} sx={{ p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1 }}>
            <Grid container spacing={2} >
                <Grid item xs>
                    <img src={countriesData[0].flag} /> 
                </Grid>
            <Grid item xs={12}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }} color="text.secondary" gutterBottom>
                {countriesData[0].name}
                </Typography>
            </Grid>
            <br />
            <Grid item xs={8}>
                <Typography  variant="subtitle1" color="text.secondary" gutterBottom>
                The Capital is {countriesData[0].capital}
                </Typography>
            </Grid>
            <br />
            <Grid item xs={8}>
                <Typography  variant="subtitle1" color="text.secondary" gutterBottom>
                Its in {countriesData[0].continent}
                </Typography>
            </Grid>
            <br />
            <Grid item xs={4}>
                
            </Grid>
            </Grid>
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