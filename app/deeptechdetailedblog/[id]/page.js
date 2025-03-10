'use client'
import Footer from '@/componants/Footer';
import Header from '@/componants/Header';
import { Box, Grid, Paper, Skeleton, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import deeptech from '../../../assets/deeptech.jpg';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import axios from 'axios';

const DeeptechDetailedBlog = () => {
    const [blogDetails, setBlogDetails] = useState([]);
    const skelArr = new Array(1).fill(1);
    const param = useParams();
    // console.log('check params', param.id);

    const fetchblogData = async () => {
        try {
            const getblogDetails = await axios.get(`/api/getfullsingleblog/${param.id}`);
            // console.log('get data',getblogDetails);
            if (getblogDetails.data.message = 'Fetch Data Successfully') {
                setBlogDetails(getblogDetails.data.resp);

            }

        } catch (err) {
            console.log(err);
            alert(err.message)
        }
    };

    useEffect(() => {
        fetchblogData();
    }, []);

    // console.log(blogDetails)
    return (
        <>
            <Header />

            {
                blogDetails.length == 0 ?
                    <Grid container sx={{ justifyContent: 'space-evenly', alignItems: 'center', display: 'flex', overflow: 'hidden', p: '10px', mt: '20px' }}>

                        {
                            skelArr.map((ele, index) => {
                                return <Grid key={index} item lg={7} md={10} sm={10} xs={10} component={Paper} sx={{ width: { lg: '286px', md: '280px', sm: '280px', xs: '280px' }, m: '10px' }}>
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
                    <Grid container sx={{ pt: '70px', pb: '70px', justifyContent: 'center', alignItems: 'center' }} >
                        <Grid item lg={7} md={10} sm={10} xs={10} sx={{ boxShadow: '1px 1px 14px -1px rgba(255,255,255,1)', borderRadius: '10px ' }} >
                            <Box sx={{ width: '100%', height: {lg:'450px', md:'400px', sm:'350px', xs:'300px'} }}>
                                {/* <Image src={deeptech} alt='deep tech' style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px 10px 0px 0px', }} /> */}
                                <Image src={require(`../../../public/upload${blogDetails.image}`)} alt='deep tech' style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px 10px 0px 0px', }} />

                            </Box>
                            <Box sx={{ p: '15px' }}>
                                {/* <Typography sx={{ color: '#b71c1c', fontSize: '20px', fontFamily: 'sans-serif', mt: '10px' }}>Blogs Article</Typography> */}
                                {/* <Typography sx={{ color: 'white', fontSize: '25px', fontFamily: 'sans-serif', mt: '10px' }}>{blogDetails.category}</Typography> */}
                                <Typography sx={{ color: '#b71c1c', fontSize: '25px', fontFamily: 'sans-serif', mt: '10px' }}>{blogDetails.description}</Typography>,
                                <Typography sx={{ color: '#C7C7C7', fontSize: '20px', fontFamily: 'sans-serif', mt: '10px', cursor: 'pointer' }}><a href='' style={{ color: '#C7C7C7', textDecoration: 'none' }}>{blogDetails.link1}</a></Typography>
                                <Typography sx={{ color: '#C7C7C7', fontSize: '15px', fontFamily: 'sans-serif', mt: '7px' }}>{blogDetails.para1}</Typography>

                                <Typography sx={{ color: '#C7C7C7', fontSize: '20px', fontFamily: 'sans-serif', mt: '10px', cursor: 'pointer' }}><a href='' style={{ color: '#C7C7C7', textDecoration: 'none' }}>{blogDetails.link2}</a></Typography>
                                <Typography sx={{ color: '#C7C7C7', fontSize: '15px', fontFamily: 'sans-serif', mt: '7px' }}>{blogDetails.para2}</Typography>


                                <Typography sx={{ color: '#C7C7C7', fontSize: '20px', fontFamily: 'sans-serif', mt: '10px', cursor: 'pointer' }}><a href='' style={{ color: '#C7C7C7', textDecoration: 'none' }}>{blogDetails.link3}</a></Typography>
                                <Typography sx={{ color: '#C7C7C7', fontSize: '15px', fontFamily: 'sans-serif', mt: '7px' }}>{blogDetails.para3}</Typography>


                                <Typography sx={{ color: '#C7C7C7', fontSize: '20px', fontFamily: 'sans-serif', mt: '10px', cursor: 'pointer' }}><a href='' style={{ color: '#C7C7C7', textDecoration: 'none' }}>{blogDetails.link4}</a></Typography>
                                <Typography sx={{ color: '#C7C7C7', fontSize: '15px', fontFamily: 'sans-serif', mt: '7px' }}>{blogDetails.para4}</Typography>

                                <Typography sx={{ color: '#C7C7C7', fontSize: '20px', fontFamily: 'sans-serif', mt: '10px', cursor: 'pointer' }}><a href='' style={{ color: '#C7C7C7', textDecoration: 'none' }}>{blogDetails.link5}</a></Typography>
                                <Typography sx={{ color: '#C7C7C7', fontSize: '15px', fontFamily: 'sans-serif', mt: '7px' }}>{blogDetails.para5}</Typography>

                            </Box>

                        </Grid>
                    </Grid>
            }





            <Footer />
        </>
    )
}

export default DeeptechDetailedBlog