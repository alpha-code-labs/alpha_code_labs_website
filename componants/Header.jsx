'use client'
import { Box, Grid } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';
import acl from '../assets/acl.png';
import MenuIcon from '@mui/icons-material/Menu';
import SideDrawer from './SideDrawer';
import { useRouter } from 'next/navigation';

const Header = () => {
    const router = useRouter();
    const [open,setOpen] = useState(false)

    const drawerHandler=()=>{
        setOpen(true)
    }
   
    return (
        <>

       
        <Grid container sx={{ justifyContent: 'space-between', alignItems: 'center',background: 'radial-gradient(circle, rgba(163,160,162,0.4907212885154062) 0%, rgba(110,177,191,0) 32%)',}}>
            <Grid item lg={1.2} md={1.4} sm={2.1} xs={3} sx={{  display: 'flex', justifyContent: 'left', alignItems: 'center',}}>
                <Box sx={{ width: {lg:'100%', md:'100%', sm:'100%', xs:'100%'}, height:{lg: '90px', md:'90px', sm:'80px', xs:'75px'},  }}>

                    <Image src={acl} alt='logo' style={{ width: '100%', height: '100%',  objectFit:'contain', cursor:'pointer' }} onClick={()=>{router.push('/')}}/>
                </Box>
            </Grid>
            <Grid item lg={0.8} md={0.8} sm={1.5} xs={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <MenuIcon sx={{ fontSize: {lg:'30px', md:'30px', sm:'30px', xs:'25px'}, border: '3px solid lightgrey', borderRadius: '6px', color: 'lightgrey' , cursor:'pointer'}} onClick={drawerHandler}/>
            </Grid>
        </Grid>
        <SideDrawer open={open} setOpen={setOpen}/>
        </>

    )
}

export default Header