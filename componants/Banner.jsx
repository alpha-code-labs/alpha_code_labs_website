'use client'
import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useEffect } from 'react';
import banner from '../assets/banner.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Banner = () => {
    useEffect(() => {
        AOS.init({ duration: 2000});
    }, []);

    ///this is test commit.
    return (
        <>

            <Grid container >
                <Grid item xs={12} sx={{  textAlign: 'center' }}>
                    <Typography sx={{ fontSize:{lg: '60px', md:'50px', sm:'40px', xs:'30px'}, color: 'white', fontWeight: 'bold', mt: '5px', fontFamily: 'sans-serif' }}>BUILD FAST</Typography>
                    <Typography sx={{ fontSize: {lg: '60px', md:'50px', sm:'40px', xs:'30px'}, color: 'white', fontWeight: 'bold', mt: '5px', fontFamily: 'sans-serif' }}>BUILD AT SCALE</Typography>
                    <Typography sx={{ fontSize: {lg: '60px', md:'50px', sm:'40px', xs:'30px'}, color: 'white', fontWeight: 'bold', mt: '5px', fontFamily: 'sans-serif' }}>BUILD TOGETHER</Typography>
                </Grid>
                <Grid container sx={{justifyContent:{lg:'center',md:'right', sm:'right',xs:'right'},alignItems:'center', mt:'30px'}}>
                <Grid item lg={10} md={11} sm={11} xs={11} data-aos="fade-right" sx={{height:{lg:'550px', md:'450px', sm:'350px', xs:'280px'},borderRadius:'100px 0px 0px 0px',background: 'linear-gradient(90deg, rgba(36,33,38,1) 9%, rgba(0,148,186,1) 50%, rgba(155,29,227,1) 88%)',display:'flex',alignItems:'flex-end'}}>
                    <Box sx={{height:{lg:'520px', md:'420px',sm:'320px', xs:'250px' },borderRadius:'70px 0px 0px 0px',width:'100%'}}>
                    <Image src={banner} alt='banner' style={{width:'100%',height:'100%',borderRadius:'70px 0px 0px 0px',width:'100%',objectFit:'cover'}}/>
                        
                    </Box>
                  
                </Grid>
                

                </Grid>
            </Grid>
        </>
    )
}

export default Banner