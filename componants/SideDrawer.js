'use client'
import { Divider, Drawer, Grid, Typography } from '@mui/material';
import React from 'react';
import CancelIcon from '@mui/icons-material/Cancel';
import { useRouter } from 'next/navigation';

const SideDrawer = ({ open, setOpen }) => {
    const router = useRouter();


    const closeHandler = () => {
        setOpen(false)
    }

    const changeHandler = (e) => {
        console.log(e)
        if(e == 'About'){
            router.push('/')
        };
        if(e == 'Team'){
            router.push('/team')
        };
        if(e == 'Blogs'){
            router.push('/blog')
        };
        if(e == 'Contact'){
            router.push('/contact')
        }
    }

    return (
        <>
            <Drawer
                anchor={'right'}
                open={open}
                onClose={() => { setOpen(false) }}
                PaperProps={{
                    sx: { width: { lg: '25%', md: '35%', sm: '50%', xs: '60%' }, zIndex: 999999999, margin: 'auto', bgcolor: '#212529', }
                }}
            >
                <Grid container  >
                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center', p: '10px' }} >
                        <CancelIcon sx={{ color: 'grey', fontSize: '40px', cursor: 'pointer' }} onClick={closeHandler} />
                    </Grid>
                    <Divider sx={{ bgcolor: 'lightgrey', mt: '5px', width: '100%' }} />
                    <Grid item xs={12} sx={{ p: '10px', mt: '15px' }}>
                        <Typography sx={{ fontSize: '20px', color: 'grey', cursor:'pointer' }} onClick={() => { changeHandler('About') }}>About Us</Typography>
                        {/* <Divider sx={{ bgcolor: 'lightgrey', mt: '5px' }} /> */}
                        {/* <Typography sx={{ fontSize: '20px', color: 'grey', mt: '10px', cursor:'pointer' }} onClick={() => { changeHandler('Team') }}>Team</Typography> */}
                        {/* <Divider sx={{ bgcolor: 'lightgrey', mt: '5px' }} /> */}
                        <Typography sx={{ fontSize: '20px', color: 'grey', mt: '10px' , cursor:'pointer'}} onClick={() => { changeHandler('Blogs') }}>Blogs</Typography>
                        {/* <Divider sx={{ bgcolor: 'lightgrey', mt: '5px' }} /> */}
                        <Typography sx={{ fontSize: '20px', color: 'grey', mt: '10px', cursor:'pointer' }} onClick={() => { changeHandler('Contact') }}>Contact Us</Typography>
                        {/* <Divider sx={{ bgcolor: 'lightgrey', mt: '5px' }} /> */}

                    </Grid>


                </Grid>


            </Drawer>
        </>
    )
}

export default SideDrawer