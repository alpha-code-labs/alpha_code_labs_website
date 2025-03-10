'use client'
import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import placs from '../assets/pla_cs.png';
import pla12 from '../assets/pla12.png';
import './crousal.css'


export const insights = [
    {
        // id: "world-1",
        // imgUrl: pla12,
        // title: "Codenia Technologies",
        // // image: "/companyLogo.png",
        // url: "https://codeniatechnologies.com/",
        // disable: true,
        id: "world-1",
        imgUrl: placs,
        title: "Coming Soon ",
        url: "javascript:;",
        disable: false,
    },
    {
        id: "world-2",
        imgUrl: placs,
        title: "Coming Soon ",
        url: "javascript:;",
        disable: false,
    },
    {
        id: "world-3",
        imgUrl: placs,
        title: "Coming Soon ",
        url: "javascript:;",
        disable: false,
    },
    {
        id: "world-4",
        imgUrl: placs,
        title: "Coming Soon",
        url: "javascript:;",
        disable: false,
    },
    {
        id: "world-5",
        imgUrl: placs,
        title: "Coming Soon",
        url: "javascript:;",
        disable: false,
    },
    {
        id: "world-6",
        imgUrl: placs,
        title: "Coming Soon",
        url: "javascript:;",
        disable: false,
    },
    {
        id: "world-7",
        imgUrl: placs,
        title: "Coming Soon",
        url: "javascript:;",
        disable: false,
    },
    {
        id: "world-8",
        imgUrl: placs,
        title: "Coming Soon",
        url: "javascript:;",
        disable: false,
    },
    {
        id: "world-9",
        imgUrl: placs,
        title: "Coming Soon",
        url: "javascript:;",
        disable: false,
    },
    {
        id: "world-10",
        imgUrl: placs,
        title: "Coming Soon",
        url: "javascript:;",
        disable: false,
    },
]


const Partners = () => {
    return (
        <>
            <Grid container sx={{ mt: '50px', pb:'200px' }}>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                    <Typography sx={{ fontSize:{lg: '64px', md:'50px', sm:'40px', xs:'30px'}, color: 'white', fontWeight: 'bold', fontFamily: 'sans-serif' }}>Our Partners</Typography>
                </Grid>

                <Grid container sx={{  display: 'flex', justifyContent: 'center', alignItems: 'center' , mt:'50px'}}>
                    <Grid item xs={10} >
                        <Box className='removeScroll' sx={{ height: '500px',  display: 'flex', flexWrap: 'nowrap', overflowX: 'scroll', }}>
                            {insights.map((ele, index) => {
                                return (
                                    <Box sx={{ width: '300px', height: '100%', flexShrink: 0, position: 'relative' , mr:'20px'}}>
                                        <Box sx={{ width: '100%', height: '100%',  }}>

                                            <Image src={ele.imgUrl} alt='patners' style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }} />
                                        </Box>
                                        <Box sx={{ width: '180px', height: '150px', backgroundColor: ele.title === 'Codenia Technologies'?'rgba(0,0,0,0.5)':'', backgroundBlendMode: 'multiply', position: 'absolute', bottom: '5px', left: '20%', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '20px' }}>
                                            <Typography sx={{ fontSize: '20px', color: 'white', fontWeight: 'bold', textAlign: 'center' }}>{ele.title}</Typography>
                                        </Box>

                                    </Box>
                                )
                            })
                            }



                        </Box>

                        

                    </Grid>
                </Grid>

            
            </Grid>
        </>
    )
}

export default Partners