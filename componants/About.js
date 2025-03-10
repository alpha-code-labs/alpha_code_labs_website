'use client'
import { Box, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';
import SouthIcon from '@mui/icons-material/South';
import AOS from 'aos';
import 'aos/dist/aos.css';


const About = () => {
    
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    
    return (
        <>
            <Grid container sx={{ justifyContent: 'center', alignItems: 'center', background: 'linear-gradient(240deg, rgba(18,156,213,0.7288165266106443) 0%, rgba(110,182,191,0) 32%)' }}>
                <Grid item xs={10} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: '10px' }}>


                    <Box sx={{ fontSize: { lg: '24px', md: '22px', sm: '20px', xs: '19px' }, color: '#C7C7C7', mt: '5px' }}>
                        <Typewriter
                            options={{
                                strings: ['| About Alpha Code Labs'],
                                autoStart: true,
                                loop: true,
                                skipAddStyles: 10
                            }} />
                    </Box>

                </Grid>
                <Grid item xs={10} sx={{ mt: '20px', pb: '50px', }}>

                    <Typography data-aos="fade-up" sx={{ fontSize: { lg: '32px', md: '26px', sm: '22px', xs: '19px' }, color: '#C7C7C7', textAlign: 'center' }}><span style={{ color: 'white', fontWeight: 'bold' }}>Alpha Code Labs</span> is a deep tech startup studio. We are building deep tech products of the future. With a focus on Blockchain and AI/ML , we aspire to engineer solutions for problems that matter. We are looking for passionate technologists to join our team.</Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: '30px' }}>
                        <SouthIcon data-aos="fade-up" sx={{ color: '#C7C7C7', fontSize: { lg: '40px', md: '35px', sm: '30px', xs: '30px' } }}  />
                    </Box>
                </Grid>
            </Grid>
            

        </>
    )
}

export default About