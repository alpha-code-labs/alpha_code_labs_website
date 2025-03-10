'use client'
import { Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    const date = new Date().getFullYear()
    return (
        <>
            <Grid container sx={{ justifyContent: 'center', alignItems: 'center', background: 'radial-gradient(circle, rgba(110,182,191,0.10416666666666663) 7%, rgba(174,96,242,0) 100%)' }}>
                <Grid item xs={10} >
                    <Typography sx={{ fontSize: { lg: '64px', md: '50px', sm: '40px', xs: '30px' }, color: 'white', fontWeight: 'bold', fontFamily: 'sans-serif', textAlign: 'center' }}>Alpha Code Labs</Typography>
                    <Typography sx={{ fontSize: { lg: '24px', md: '22px', sm: '20px', xs: '18px' }, color: 'white', fontFamily: 'sans-serif', textAlign: 'center' }}>(A Studio Innovate Initiative)</Typography>

                    <Divider sx={{ bgcolor: 'lightgrey', mt: '10px' }} />
                    <Grid container sx={{ justifyContent: 'space-between', alignItems: 'center', mt: '20px', mb: '10px' }}>
                        <Grid item lg={2} md={4} sm={12} xs={12}>
                            <Typography sx={{ fontSize: { lg: '24px', md: '22px', sm: '20px', xs: '18px' }, color: 'white', fontWeight: 'bold', fontFamily: 'sans-serif', }}>Alpha Code Labs</Typography>
                        </Grid>
                        <Grid item lg={5} md={6} sm={12} xs={12} sx={{mt:{lg:'0px', md:'0px', sm:'8px', xs:'8px'}}}>
                            <Typography sx={{ color: '#C7C7C7', fontSize:{lg: '17px', md:'17px', sm:'15px', xs:'15px'} }}>Copyright © 2022 - {date} Alpha Code Labs. All rights reserved.</Typography>
                        </Grid>
                        <Grid item lg={1} md={1} sm={12} xs={12} sx={{ display: 'flex', justifyContent:{lg: 'right', md:'right', sm:'left', xs:'left'}, alignItems: 'center',mt:{lg:'0px', md:'0px', sm:'8px', xs:'8px'}}}>
                            <LinkedInIcon sx={{ fontSize: '33px', color: 'white', cursor: 'pointer' }} onClick={() => window.open("https://www.linkedin.com/company/alpha-code-labs/about/", "_blank")} />

                        </Grid>
                    </Grid>


                </Grid>
            </Grid>
        </>
    )
}

export default Footer