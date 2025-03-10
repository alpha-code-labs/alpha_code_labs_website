'use client'
import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import placs from '../assets/pla_cs.png';
import aclGamingLogo from '../assets/acl-gaming-logo.jpeg';
import { useRouter } from 'next/navigation';




const OurProduct = () => {
    const router = useRouter();

    const routeHandler=(route)=>{
        switch(route)
        {
            case 'gaming-studio':
                router.push(`/${route}`)
                break;    
        }
    }

    //acl gaming studio
    return (
        <>
            <Grid container sx={{ mt: '50px' }}>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                    <Typography sx={{ fontSize:{lg: '64px', md:'50px', sm:'40px', xs:'30px'}, color: 'white', fontWeight: 'bold', fontFamily: 'sans-serif' }}>Our Products</Typography>
                </Grid>

                   <Grid container sx={{  justifyContent: 'center', alignItems: 'center', mt:'50px' }}>
                    <Grid item lg={2.4} md={3} sm={5} xs={10} sx={{  height: '480px', mr:{lg:'18px', md:'18px', sm:'18px', xs:'0px'}, position:'relative', cursor:'pointer' }} onClick={()=>routeHandler('gaming-studio')}>
                        <Box sx={{ width: '100%', height: '100%', }}>
                            <Image src={aclGamingLogo} alt='products' style={{ width: '100%', height: '100%', objectFit: 'fit' ,borderRadius:'20px'}} />
                        </Box>
                        <Box sx={{width:'100%',height:'120px', backgroundColor: 'rgba(0,0,0,0.5)', backgroundBlendMode: 'multiply', position:'absolute', bottom:'0px', display:'flex',justifyContent:'center',alignItems:'center', borderRadius:'0px 0px 20px 20px ' }}>
                             <Typography sx={{fontSize:'28px',color:'skyblue',fontWeight:'bold'}}>Gaming Studio</Typography>
                        </Box>
                    </Grid>

                    <Grid item lg={2.4} md={3} sm={5} xs={10} sx={{  height: '480px', mr:{lg:'18px', md:'18px', sm:'18px', xs:'0px'}, position:'relative', mt:{lg:'0px', md:'0px', sm:'0px', xs:'20px'} }}>
                        <Box sx={{ width: '100%', height: '100%',}}>

                            <Image src={placs} alt='products' style={{ width: '100%', height: '100%', objectFit: 'cover' ,borderRadius:'20px'}} />
                        </Box>
                        <Box sx={{width:'100%',height:'120px', backgroundColor: 'rgba(0,0,0,0.5)', backgroundBlendMode: 'multiply', position:'absolute', bottom:'0px', display:'flex',justifyContent:'center',alignItems:'center', borderRadius:'0px 0px 20px 20px ' }}>
                             <Typography sx={{fontSize:'22px',color:'white',fontWeight:'bold'}}>Coming Soon</Typography>
                        </Box>

                    </Grid>


                    <Grid item lg={2.4} md={3} sm={5} xs={10} sx={{  height: '480px', mr:{lg:'18px', md:'18px', sm:'18px', xs:'0px'}, position:'relative',mt:{lg:'0px', md:'0px', sm:'20px', xs:'20px'} }}>
                        <Box sx={{ width: '100%', height: '100%', }}>

                            <Image src={placs} alt='product1' style={{ width: '100%', height: '100%', objectFit: 'cover' ,borderRadius:'20px'}} />
                        </Box>
                        <Box sx={{width:'100%',height:'120px', backgroundColor: 'rgba(0,0,0,0.5)', backgroundBlendMode: 'multiply', position:'absolute', bottom:'0px', display:'flex',justifyContent:'center',alignItems:'center', borderRadius:'0px 0px 20px 20px ' }}>
                             <Typography sx={{fontSize:'22px',color:'white',fontWeight:'bold'}}>Coming Soon</Typography>
                        </Box>

                    </Grid>

                    <Grid item lg={2.4} md={3} sm={5} xs={10} sx={{height: '480px',mr:{lg:'18px', md:'18px', sm:'18px', xs:'0px'}, position:'relative',mt:{lg:'0px', md:'20px', sm:'20px', xs:'20px'} }}>
                        <Box sx={{ width: '100%', height: '100%', }}>

                            <Image src={placs} alt='product2' style={{ width: '100%', height: '100%', objectFit: 'cover' ,borderRadius:'20px'}} />
                        </Box>
                        <Box sx={{width:'100%',height:'120px', backgroundColor: 'rgba(0,0,0,0.5)', backgroundBlendMode: 'multiply', position:'absolute', bottom:'0px',display:'flex',justifyContent:'center',alignItems:'center', borderRadius:'0px 0px 20px 20px ' }}>
                             <Typography sx={{fontSize:'22px',color:'white',fontWeight:'bold'}}>Coming Soon</Typography>
                        </Box>

                    </Grid>
                   
                </Grid>
            </Grid>
        </>
    )
}

export default OurProduct