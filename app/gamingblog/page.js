'use client'
import React, { useEffect, useState } from 'react';
import Footer from '@/componants/Footer';
import Header from '@/componants/Header';
import { Box, Grid, Paper, Skeleton, Typography } from '@mui/material';
import gaming from '../../assets/gaming1.jpg';
import Image from 'next/image';
import axios from 'axios';

const GamingBlog = () => {
    const [gamingDec, setGamingDec] = useState([]);
    const skelArr = new Array(4).fill(1);

    const fetchBlogData = async () => {
        try {
            const getBlogData = await axios.get('/api/blogs');
            // console.log('check blog data',getBlogData);
            if (getBlogData.data.message = 'Data Fetch Successfully') {
                setGamingDec(getBlogData.data.resp);
            }
            if (getBlogData.data.message == 'Failed To Fetch Data') {
                alert(err.message)

            }


        } catch (err) {
            console.log(err);
            alert(err.message);
        }
    };
   
    useEffect(() => {
        fetchBlogData();
    }, []);

    const gamingData = gamingDec.filter((ele) => { return ele.category == 'Gaming Studio' });
    console.log(gamingData)
    return (
        <>
            <Header />
            {
                gamingData.length == 0 ?
                    <Grid container sx={{ justifyContent: 'space-evenly', alignItems: 'center', display: 'flex', overflow: 'hidden', p: '10px', mt: '20px' }}>

                        {
                            skelArr.map((ele, index) => {
                                return <Grid key={index} item lg={3.1} md={5} sm={10} xs={10} component={Paper} sx={{ width: { lg: '286px', md: '280px', sm: '280px', xs: '280px' }, m: '10px' }}>
                                    <Skeleton variant="rectangular" sx={{ width: '100%', height: '210px' }} />
                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: '10px' }}>
                                        <Skeleton variant="rectangular" sx={{ width: '75%', height: '20px' }} />
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: '10px', p: '7px' }}>
                                        <Skeleton variant="rectangular" sx={{ width: '10%', height: '20px' }} />
                                        <Skeleton variant="rectangular" sx={{ width: '10%', height: '20px' }} />
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center', mt: '10px', p: '7px' }}>
                                        <Skeleton variant="rectangular" sx={{ width: '55%', height: '20px' }} />
                                    </Box>

                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: '10px', p: '7px' }}>
                                        <Skeleton variant="rectangular" sx={{ width: '30%', height: '20px' }} />
                                        <Skeleton variant="rectangular" sx={{ width: '30%', height: '20px' }} />
                                    </Box>

                                </Grid>
                            })
                        }



                    </Grid> :
                    <Grid container sx={{ justifyContent: 'space-evenly', alignItems: 'center', p: '60px 0px 60px 0px' }}>
                        {
                            gamingData.map((ele, index) => {
                                return (
                                    <Grid key={index} item lg={3.1} md={5} sm={10} xs={10} sx={{ backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: '10px', boxShadow: '1px 1px 14px -1px rgba(200,200,200,1)', mt: '8px',mb: '10px',cursor:'pointer' }} onClick={()=>{blogHandler(ele._id)}}>
                                        <Box sx={{ width: '100%', height: '300px' }}>
                                            {/* <Image src={deeptech} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px 10px 0px 0px', }} /> */}
                                            <Image src={require(`../../public/upload${ele.image}`)} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px 10px 0px 0px', }} />

                                        </Box>
                                        <Box sx={{ p: '10px' }}>
                                            <Typography sx={{ color: '#b71c1c', fontSize: '20px', fontFamily: 'sans-serif', mt: '10px' }}>Blogs Article</Typography>
                                            <Typography sx={{ color: 'white', fontSize: '20px', fontFamily: 'sans-serif', mt: '10px' }}>{ele.category}</Typography>
                                            <Typography sx={{ color: '#C7C7C7', fontSize: '15px', fontFamily: 'sans-serif', mt: '10px' }}>{ele.description}</Typography>
                                        </Box>

                                    </Grid>
                                )
                            })
                        }


                    </Grid>

            }
            <Footer />
        </>
    )
}

export default GamingBlog