'use client'
import Footer from '@/componants/Footer';
import Header from '@/componants/Header';
import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useEffect } from 'react';
import deeptech from '../../assets/deeptech.jpg';
import gaming from '../../assets/gaming1.jpg';
import ai from '../../assets/ai.jpg';
import { useRouter } from 'next/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Blog = () => {
    useEffect(() => {
        AOS.init({ duration: 2000});
    }, []);
    
    const router = useRouter();
    return (
        <>
            <Header />
            <Grid container sx={{ background: 'radial-gradient(circle, rgba(116,134,212,0.18820028011204482) 28%, rgba(102,170,245,0.03974089635854339) 44%)' }}>
                <Grid container>
                    <Grid item xs={12}>
                        <Typography sx={{ fontSize:{lg: '60px', md:'50px', sm:'40px', xs:'30px'}, color: 'white', fontWeight: 'bold',textAlign:'center', p:'20px' }}>Blogs</Typography>
                    </Grid>
                </Grid>
                <Grid container sx={{  justifyContent: 'space-evenly', alignItems: 'center', pt:'40px', pb:'50px'}}>

                    <Grid item lg={3} md={5} sm={10} xs={10} data-aos="fade-up" sx={{ height: '300px', position: 'relative', cursor: 'pointer' }} onClick={() => { router.push('./deeptechblog') }}>
                        <Image src={deeptech} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }} />
                        <Box sx={{ position: 'absolute', color: '#C7C7C7', width: '100%', bottom: '0%', backgroundColor: 'rgba(0,0,0,0.5)', backgroundBlendMode: 'multiply' }}>
                            <Typography sx={{ fontSize: '30px', fontWeight: 'bold', fontFamily: 'serif', textAlign: 'center', }}>Deep Tech Studio</Typography>
                        </Box>

                    </Grid>
                    <Grid item lg={3} md={5} sm={10} xs={10}  data-aos="fade-up" sx={{ height: '300px', position: 'relative', cursor: 'pointer', mt:{lg:'0px', md:'0px', sm:'20px', xs:'20px'} }} onClick={() => { router.push('./gamingblog') }}>
                        <Image src={gaming} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }} />
                        <Box sx={{ position: 'absolute', color: '#C7C7C7', width: '100%', bottom: '0%', backgroundColor: 'rgba(0,0,0,0.5)', backgroundBlendMode: 'multiply' }}>
                            <Typography sx={{ fontSize: '30px', fontWeight: 'bold', fontFamily: 'serif', textAlign: 'center', }}>Gaming Studio</Typography>
                        </Box>

                    </Grid>
                    <Grid item lg={3} md={5} sm={10} xs={10} data-aos="fade-up" sx={{ height: '300px', position: 'relative', cursor: 'pointer', mt:{lg:'0px', md:'0px', sm:'20px', xs:'20px'}}} onClick={() => { router.push('./aiblog') }}>
                        <Image src={ai} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }} />
                        <Box sx={{ position: 'absolute', color: '#C7C7C7', width: '100%', bottom: '0%', backgroundColor: 'rgba(0,0,0,0.5)', backgroundBlendMode: 'multiply' }}>
                            <Typography sx={{ fontSize: '30px', fontWeight: 'bold', fontFamily: 'serif', textAlign: 'center', }}>AI </Typography>
                        </Box>

                    </Grid>

                </Grid>

            </Grid>


            <Footer />
        </>
    )
}

export default Blog