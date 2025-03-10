'use client'
import { Height } from '@mui/icons-material';
import { Box, Button, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import getstart from '../assets/get-started.png'
import InfoModal from './InfoModal';
import AOS from 'aos';
import 'aos/dist/aos.css';

const GetStarted = () => {
    const [open, setOpen] = useState(false)

    const infoHandler = () => {
        setOpen(true)
    };
    useEffect(() => {
        AOS.init({ duration: 2000});
    }, []);
    return (
        <>

        
        <Grid container sx={{ justifyContent: 'center', alignItems: 'center', mt: '100px' }}>
            <Grid item lg={5} md={5} sm={10} xs={10} data-aos="fade-right" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Box sx={{ width: { lg: '600px', md: '600px', sm: '500px', sm: '350px' }, height: { lg: '600px', md: '600px', sm: '500px', sm: '350px' }, }}>
                    <Image src={getstart} alt='getstart' style={{ width: '100%', height: '100%', objectFit: 'cover', }} />
                </Box>

            </Grid>
            <Grid item lg={5} md={5} sm={10} xs={10} data-aos="fade-left" >
                <Typography sx={{ fontSize: { lg: '24px', md: '22px', sm: '20px', xs: '19px' }, color: '#C7C7C7' }}>| Get in touch with us</Typography>
                <Typography sx={{ fontSize: { lg: '64px', md: '50px', sm: '40px', xs: '30px' }, color: 'white', fontWeight: 'bold', fontFamily: 'sans-serif' }}>Get started with just a few clicks</Typography>
                <Grid container sx={{ mt: '20px' }}>
                    <Grid item xs={10} sx={{ display: 'flex', alignItems: 'center', }}>
                        <Box sx={{ width: {lg:'70px', md:'70px', sm:'70px', xs:'120px'}, height: '70px', bgcolor: '#323F5D', borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Typography sx={{ color: 'white', fontSize: '25px', fontWeight: 'bold' }}>01</Typography>
                        </Box>
                        <Box sx={{ ml: '20px' }}>
                            <Typography sx={{ fontSize: '17px', color: '#C7C7C7' }}>Read the operating models mentioned above.</Typography>
                        </Box>

                    </Grid>
                    <Grid item xs={10} sx={{ display: 'flex', alignItems: 'center', mt: "20px" }}>
                        <Box sx={{ width:  {lg:'70px', md:'70px', sm:'70px', xs:'100px'}, height: '70px', bgcolor: '#323F5D', borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Typography sx={{ color: 'white', fontSize: '25px', fontWeight: 'bold' }}>02</Typography>
                        </Box>
                        <Box sx={{ ml: '20px' }}>
                            <Typography sx={{ fontSize: '17px', color: '#C7C7C7' }}>Fill the form here and reach out to us.</Typography>
                        </Box>

                    </Grid>
                    <Grid item xs={10} sx={{ mt: '20px' }}>
                        <Button variant='contained' fullWidth sx={{ bgcolor: 'darkblue', textTransform: 'capitalize', borderRadius: '6px', fontSize: '20px', '&:hover':{bgcolor:'darkblue'} }} onClick={infoHandler}>Submit Interest</Button>

                    </Grid>
                </Grid>

            </Grid>
        </Grid>
        <InfoModal open={open} setOpen={setOpen}/>
        </>
    )
}

export default GetStarted