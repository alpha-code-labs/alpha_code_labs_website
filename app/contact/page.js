'use client'
import { Box, Button, Container, Divider, Grid, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import contactwall from '../../assets/contact1.jpg'
import Header from '@/componants/Header';
import Image from 'next/image';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import Footer from '@/componants/Footer';
import axios from 'axios';

const Contact = () => {
    const [info, setInfo] = useState(
        {
            name: '',
            phone: '',
            gender: '',
            age: '',
        }
    );

    const infoHandler = (e) => {
        const { name, value } = e.target;
        setInfo({ ...info, [name]: value })

    };
    console.log(info)


    const submitHandler = async () => {
        try {
            const res = await axios.post('/api/info', info);
            console.log(res)
            if (res.data.message = 'Saved Your Details') {
                alert(res.data.message);
                setInfo({
                    name: '',
                    phone: '',
                    gender: '',
                    age: '',
                })

            }

        } catch (err) {
            console.log(err);
            alert(err.massage);
        }

    }
    return (
        <>
            <Header />

            <Box sx={{ height: { lg: '550px', md: '540px', sm: '500px', xs: '350px' }, }}>
                <Image src={contactwall} style={{ width: '100%', height: '100%', objectFit: 'cover', }} />
                {/* <Grid container sx={{position:'absolute',display: 'flex', justifyContent: 'center', alignItems: 'center',top:'45%',}}>
                    <Grid item lg={7} md={7} sm={10} xs={11} sx={{ mt: {lg:'-2%', md:'-2%', sm:'-5%', xs:'-100px'}, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                        <Typography variant='h2' sx={{ fontSize: { lg: '55px', md: '48px', sm: '40px', xs: '35px' }, fontWeight: '600', textAlign: 'center', color: 'white' }}>See Your Digital Transformation Growth With Us</Typography>
                        <Box sx={{ fontSize: { lg: '24px', md: '22px', sm: '20px', xs: '19px' }, color: 'white', mt: '5px' }}>
                            <Typewriter
                                options={{
                                    strings: ['Get all Your question answer by our business development team .'],
                                    autoStart: true,
                                    loop: true,
                                    skipAddStyles: 10
                                }} />
                        </Box>

                    </Grid>

                </Grid> */}
            </Box >
            <Container disableGutters maxWidth='xl' sx={{ background: 'linear-gradient(139deg, rgba(212,106,217,0.050945378151260545) 47%, rgba(102,170,245,0) 100%)' }}>
                <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: { lg: '-7%', md: '25px', sm: '35px', xs: '35px' } }}>
                    <Grid item lg={6} md={9} sm={11} xs={11} sx={{ borderRadius: '10px', backgroundColor: 'white', boxShadow: '1px 10px 19px 0px rgba(0,0,0,0.5)' }} >
                        <Grid container sx={{ padding: '25px', bgcolor: '#e0e0e0', borderRadius: '10px' }}>
                            <Grid item xs={12}>
                                <Typography xs={12} variant='h4' sx={{ fontSize: { lg: '38px', md: '35px', sm: '30px', xs: '30px' }, fontWeight: '600', color: '#1976d2' }}>Get in Touch</Typography>

                            </Grid>
                            {/* <Grid container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: '30px' }} >
                                    <Grid item lg={5.5} md={5.5} sm={12} xs={12}>
                                        <TextField variant="outlined" placeholder='Full Name*' size='small' fullWidth />
                                    </Grid>
                                    <Grid item lg={5.5} md={5.5} sm={12} xs={12} sx={{ mt: { lg: '0px', md: '0px', sm: '25px', xs: '25px' } }}>
                                        <TextField variant="outlined" placeholder='Business Email Address*' size='small' fullWidth />
                                    </Grid>

                                </Grid>
                                <Grid container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: { lg: '30px', md: '30px', sm: '25px', xs: '30px' } }}>
                                    <Grid item lg={5.5} md={5.5} sm={12} xs={12} >
                                        <TextField variant="outlined" placeholder='Phone Number*' size='small' fullWidth />
                                    </Grid>
                                    <Grid item lg={5.5} md={5.5} sm={12} xs={12} sx={{ mt: { lg: '0px', md: '0px', sm: '25px', xs: '25px' } }}>
                                        <TextField variant="outlined" placeholder='Organization/institution*' size='small' fullWidth />
                                    </Grid>

                                </Grid>
                                <Grid container sx={{ mt: '30px' }}>
                                    <Grid item xs={12}>
                                        <TextField variant="outlined" placeholder='Message' size='small' fullWidth />
                                    </Grid>
                                    
                                    <Grid item xs={12} sx={{ textAlign: 'center', mt: '15px' }}>
                                        <Button variant='contained' sx={{ borderRadius: '20px', padding: '10px 27px' }}>Submit</Button>
                                    </Grid>
                                </Grid> */}

                            <Grid container sx={{ mt: '2px', p: '10px' }}>
                                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'light', alignItems: 'center' }}>
                                    <Typography sx={{ fontSize: '17px', mr: '5px', color: '#424242' }}>Name</Typography>
                                </Grid>
                                <Grid item xs={12} sx={{ mt: '5px' }} >

                                    <TextField placeholder='Name..' fullWidth size='small' sx={{ fontSize: '15px' }} onChange={infoHandler} name='name' value={info.name} />

                                </Grid>

                                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'light', alignItems: 'center', mt: '15px' }}>
                                    <Typography sx={{ fontSize: '17px', mr: '5px', color: '#424242' }}>Phone No</Typography>
                                </Grid>
                                <Grid item xs={12} sx={{ mt: '5px' }} >
                                    {/* <TextField placeholder='Full Name..' fullWidth size='small' sx={{ fontSize: '15px' }} onChange={UserInputDetails} name='fullName' value={addUserDtails.fullName} /> */}
                                    <TextField placeholder='Phone No..' type='number' fullWidth size='small' sx={{ fontSize: '15px' }} onChange={infoHandler} name='phone' value={info.phone} />

                                </Grid>

                                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'light', alignItems: 'center', mt: '15px' }}>
                                    <Typography sx={{ fontSize: '17px', mr: '5px', color: '#424242' }}>Gender</Typography>
                                </Grid>
                                <Grid item xs={12} sx={{ mt: '5px' }} >
                                    {/* <TextField placeholder='Full Name..' fullWidth size='small' sx={{ fontSize: '15px' }} onChange={UserInputDetails} name='fullName' value={addUserDtails.fullName} /> */}
                                    <TextField placeholder='Gender..' fullWidth size='small' sx={{ fontSize: '15px' }} onChange={infoHandler} name='gender' value={info.gender} />

                                </Grid>

                                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'light', alignItems: 'center', mt: '15px' }}>
                                    <Typography sx={{ fontSize: '17px', mr: '5px', color: '#424242' }}>Age</Typography>
                                </Grid>
                                <Grid item xs={12} sx={{ mt: '5px' }} >
                                    {/* <TextField placeholder='Full Name..' fullWidth size='small' sx={{ fontSize: '15px' }} onChange={UserInputDetails} name='fullName' value={addUserDtails.fullName} /> */}
                                    <TextField placeholder='Age..' type='number' fullWidth size='small' sx={{ fontSize: '15px' }} onChange={infoHandler} name='age' value={info.age} />

                                </Grid>
                                <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: '20px', pb: '10px' }}>
                                    {/* <Button variant='contained' disabled={btn} sx={{ fontSize: '15px' }} onClick={submitNewUserHandler}>Add User</Button> */}
                                    <Button variant='contained' sx={{ fontSize: '17px', bgcolor: 'black', color: 'white', textTransform: 'capitalize' }} onClick={submitHandler}>Submit</Button>

                                </Grid>

                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>

                <Grid container sx={{ mt: { lg: '50px', md: '40px', sm: '30px', xs: '30px' }, display: 'flex', justifyContent: 'space-evenly', alignItems: 'flex-start', padding: '20px 18px', }}>
                    <Grid item lg={6} md={6} sm={12} xs={12} sx={{ borderRadius: '10px', boxShadow: '1px 1px 10px 0px rgba(0,0,0,0.75)', height: '450px' }}>

                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112361.2844167191!2d76.98316326447453!3d28.350076589038867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d229dc171ec51%3A0x7d602c9c98e0d4e7!2sPlatinum%20Tower!5e0!3m2!1sen!2sin!4v1716804769902!5m2!1sen!2sin" width="100%" height="100%" style={{ border: '0', allowfullscreen: "", loading: "lazy", referrerpolicy: "no-referrer-when-downgrade", borderRadius: '10px' }}></iframe>

                    </Grid>
                    <Grid item lg={4} md={5} sm={12} xs={12} sx={{ mt: { lg: '0px', md: '0px', sm: '10px', xs: '15px' } }}>

                        <Grid container sx={{ display: 'flex', justifyContent: { lg: 'right', md: 'right', sm: 'left', sm: 'left' }, alignItems: 'center' }}>
                            <Grid item xs={10} >
                                <Typography sx={{ fontSize: { lg: '30px', md: '27px', sm: '25px', xs: '24px' }, color: 'white', fontWeight: '600' }}>Locate Us</Typography>
                                <Typography sx={{ fontSize: { lg: '19px', md: '19px', sm: '17px', xs: '16px' }, mt: '5px', color: 'white' }}>Sohna Road,<br /> Sector 47, <br />Gurugram, Haryana 122018</Typography>
                                <Typography sx={{ display: 'flex', justifyContent: 'left', fontSize: { lg: '19px', md: '19px', sm: '17px', xs: '16px', color: 'white' } }}><PhoneIphoneIcon fontSize='small' />08527175911</Typography>


                            </Grid>

                            <Grid item xs={10} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', mt: '30px' }}>
                                <Typography sx={{ fontSize: { lg: '30px', md: '27px', sm: '25px', xs: '24px' }, color: 'white', fontWeight: '600' }}>Working Hours</Typography>
                                <Typography sx={{ fontSize: { lg: '19px', md: '19px', sm: '17px', xs: '16px' }, mt: '5px', color: 'white' }}>Our office is open 24*7 <br />Open Monday to Saturday<br /> From 10:00 AM to 06:00 PM</Typography>

                            </Grid>
                        </Grid>



                    </Grid>
                </Grid>

            </Container>
            <Footer />


        </>
    )
}

export default Contact