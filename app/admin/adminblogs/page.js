'use client'
import Footer from '@/componants/Footer';
import Header from '@/componants/Header';
import { Grid, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import React from 'react';

const AdminPage = () => {
    const router = useRouter();
    return (
        <>
            <Header />
            <Grid container sx={{ height: '550px' }}>
                <Grid item xs={12}>
                    <Typography sx={{ fontSize: { lg: '64px', md: '50px', sm: '40px', xs: '30px' }, color: 'white', fontWeight: 'bold', fontFamily: 'sans-serif', textAlign: 'center' }}>Alpha Code Labs</Typography>
                    <Typography sx={{ fontSize: { lg: '24px', md: '22px', sm: '20px', xs: '18px' }, color: 'white', fontFamily: 'sans-serif', textAlign: 'center' }}>(Admin Pannel)</Typography>
                </Grid>
                <Grid container sx={{justifyContent:'space-evenly', alignItems:'center', pb:'50px'}}>
                    <Grid item xs={3} sx={{border:'1px solid green', height:'300px', borderRadius:'20px',boxShadow: '1px 1px 7px 1px rgba(110,162,230,1)', display:'flex', justifyContent:'center', alignItems:'center', cursor:'pointer'}} onClick={()=>{router.push('./addblogpage')}}>
                    <Typography sx={{fontSize:'35px', color:'white',textShadow:' 3px 1px 0px rgba(102,164,205,0.6)'}}>Add Blogs </Typography>

                    </Grid>
                    <Grid item xs={3} sx={{border:'1px solid green', height:'300px', borderRadius:'20px',boxShadow: '1px 1px 7px 1px rgba(110,162,230,1)', display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <Typography sx={{fontSize:'35px', color:'white',textShadow:' 3px 1px 0px rgba(102,164,205,0.6)'}}>Upcoming </Typography>

                    </Grid>
                    <Grid item xs={3} sx={{border:'1px solid green', height:'300px', borderRadius:'20px',boxShadow: '1px 1px 7px 1px rgba(110,162,230,1)', display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <Typography sx={{fontSize:'35px', color:'white',textShadow:' 3px 1px 0px rgba(102,164,205,0.6)'}}>Upcoming</Typography>

                    </Grid>
                </Grid>

            </Grid>
            <Footer />
        </>
    )
}

export default AdminPage