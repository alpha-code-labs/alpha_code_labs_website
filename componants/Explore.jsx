'use client'
import { Box, Button, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';
import opm from '../assets/opm_bg.png';
import Image from 'next/image';
import opsystem from '../assets/opsystem.png';
import InfoModal from './InfoModal';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Explore = () => {
    const [open, setOpen] = useState(false)

    const openModalHandler=()=>{
        setOpen(true)
    };

    useEffect(() => {
        AOS.init({ duration: 2000});
    }, []);
    return (
        <>

        
        <Grid container sx={{ justifyContent: 'center', alignItems: 'center', background: 'linear-gradient(90deg, rgba(255,255,255,0) 9%, rgba(202,32,223,0.09576330532212884) 49%, rgba(155,29,227,0) 88%)', pb:'30px' }}>
            <Grid item xs={10} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: '10px' }}>


                <Box sx={{ fontSize: { lg: '24px', md: '22px', sm: '20px', xs: '19px' }, color: '#C7C7C7', mt: '5px' }}>
                    <Typewriter
                        options={{
                            strings: ['| Our Operating Models'],
                            autoStart: true,
                            loop: true,
                            skipAddStyles: 10
                        }} />
                </Box>

            </Grid>
            <Grid item xs={10} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'ceenter', }}>
                <Typography sx={{fontSize:{lg: '64px', md:'50px', sm:'40px', xs:'30px'}, color: '#FFFFFF', fontWeight: 'bold', fontFamily: 'sans-serif' }}>Choose one of the <br />Operating Models</Typography>
            </Grid>
            <Grid container sx={{ mt: '80px', justifyContent: 'space-evenly', }}>

                <Grid item lg={4.4} md={5} sm={11} xs={11} data-aos="fade-right" sx={{  position: 'relative' }}>
                    <Box sx={{ height: '500px', borderRadius: '20px' }}>
                        <Image src={opm} alt='opm' style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '25px' }} />
                    </Box>
                    <Box sx={{ position: 'absolute', top: '31%', left: 0, width: '100%', backgroundColor: 'rgba(0,0,0,0.5)', backgroundBlendMode: 'multiply' }}>
                        <Box sx={{  m: '10px' }}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Box sx={{ bgcolor: 'lightgrey', width: '60px', height: '60px', borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <Image src={opsystem} alt='opsystem' style={{ width: '100%', height: '100%' }} />
                                    </Box>


                                </Grid>
                                <Grid item xs={12} sx={{ mt: '20px' }}>
                                    <Typography sx={{ fontSize: '16px', fontWeight: 'bold', color: 'white', fontFamily: 'serif' }}>OPERATING MODEL 1</Typography>
                                    <Typography sx={{ fontSize: {lg:'20px', md:'17px', sm:'15px', xs:'15px'}, fontFamily: 'sans-serif', color: 'white', fontWeight: 'bold', mt: '30px' }}>Your Idea, You are a full time founder and you have the capital. We form a company and we start the build together. We grind together to make this company successful</Typography>

                                </Grid>
                                <Grid item xs={12} sx={{ mt: '20px' }}>
                                    <Button variant='contained' fullWidth sx={{ bgcolor: 'darkblue', textTransform: 'capitalize', borderRadius: '6px', fontSize: '20px', '&:hover':{bgcolor:'darkblue'} }} onClick={openModalHandler}>Submit Interest</Button>

                                </Grid>
                            </Grid>

                        </Box>
                    </Box>
                </Grid>
                <Grid item lg={1.1} md={1.4} sm={11} xs={11} data-aos="fade-right" sx={{ position: 'relative',mt:{lg:'0px', md:'0px', sm:'20px', xs:'20px'} }}>
                    <Box sx={{ height: {lg:'500px', md:'500px', sm:'100px', xs:'80px'}, borderRadius: '25px' }}>
                        <Image src={opm} alt='opm1' style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }} />
                    </Box>
                    <Box sx={{position:'absolute', bottom:'40px',width:'100%'}}>
                    <Typography sx={{ fontSize: '10px', fontWeight: 'bold', color: 'white', fontFamily: 'serif', textAlign:'center' }}>OPERATING MODEL 2</Typography>
                    </Box>

                </Grid>
                <Grid item lg={1.1} md={1.4} sm={11} xs={11} data-aos="fade-right" sx={{ position: 'relative', mt:{lg:'0px', md:'0px', sm:'20px', xs:'20px'} }}>
                    <Box sx={{ height: {lg:'500px', md:'500px', sm:'100px', xs:'80px'}, borderRadius: '25px' }}>
                        <Image src={opm} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }} />
                    </Box>
                    <Box sx={{position:'absolute', bottom:'40px',width:'100%'}}>
                    <Typography sx={{ fontSize: '10px', fontWeight: 'bold', color: 'white', fontFamily: 'serif', textAlign:'center' }}>OPERATING MODEL 3</Typography>
                    </Box>

                </Grid>
                <Grid item lg={1.1} md={1.4} sm={11} xs={11} data-aos="fade-right" sx={{ position: 'relative' ,mt:{lg:'0px', md:'0px', sm:'20px', xs:'20px'}}}>
                    <Box sx={{ height: {lg:'500px', md:'500px', sm:'100px', xs:'80px'}, borderRadius: '25px' }}>
                        <Image src={opm} alt='omp2' style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }} />
                    </Box>
                    <Box sx={{position:'absolute', bottom:'40px', width:'100%'}}>
                    <Typography sx={{ fontSize: '10px', fontWeight: 'bold', color: 'white', fontFamily: 'serif', textAlign:'center' }}>OPERATING MODEL 4</Typography>
                    </Box>

                </Grid>

            </Grid>

        </Grid>
        <InfoModal open={open} setOpen={setOpen}/>
        </>
    )
}

export default Explore