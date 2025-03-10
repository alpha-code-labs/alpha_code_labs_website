'use client'
import Footer from '@/componants/Footer';
import Header from '@/componants/Header';
import { Box, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import '../../componants/crousal.css'
import Image from 'next/image';
import ajay from '../../assets/ajay.png';
import sumesh from '../../assets/sumesh1.png';
import rahul from '../../assets/rahul.jpg';
import kanhaiya from '../../assets/kanhaiya.jpg';
import harshit from '../../assets/harshit.jpg';
import ritu from '../../assets/ritu.jpg';
import hariom from '../../assets/hariom.jpg';
import navneet from '../../assets/navneet.jpg';


const teamMembers = [
    {
        name: 'Ajay Singh',
        img: ajay,
        desc:'Ajay is a  technologist with knowledge of multiple technologies including MERN stack. When he is not working he loves to play Chess and Badminton.'
    },
    {
        name: 'Sumesh Nayar',
        img: sumesh,
        desc:'Sumesh is a Mern stack developer with a sharp eye on emerging Technologies. When he is not working he loves to play chess , read tech blogs or hit the gym .'
    },
    {
        name: 'Kanhaiya Verma',
        img: kanhaiya,
        desc:'Kanhaiya is a Tech Entrepreneur and he thrives on innovation while finding balance in badminton, drawing, and continuous learning.'
    },
    {
        name: 'Harshit Grover',
        img: harshit,
        desc:'Harshit Grover is a 3D artist with expertise in skills like modeling, texturing, sculpting, lighting and rendering. In his spare time he likes to play story driven games, do cooking, reading and meditation.'
    },
    {
        name: 'Rahul Rawal',
        img: rahul,
        desc:'Rahul is a mern stack developer and he has the quality of an entrepreneur and when Rahul is free from the office work he loves to play cricket and travel'
    },
    {
        name: 'Ritu Rai',
        img: ritu,
        desc:'Ritu is a History graduate who is taking a dive into the entrepreneurial and business world. She completed her graduation in 2023 from University of Delhi and now she is bracing and sharpening herself for the entrepreneurial journey. Apart from this she is a classical Kathak dancer and likes reading books.'
    },
    {
        name: 'Hari Om Tripathi',
        img: hariom,
        desc:'Hari Om is diligently navigating the path toward entrepreneurship while concurrently serving as a developer. With a profound interest in pioneering technologies and concepts, he consistently seeks to expand his knowledge base. Outside of professional endeavors, Hari Om finds relaxation and fulfillment through reading manga and gardening activities during his leisure hours.'
    },
    {
        name: 'Navneet Parihar',
        img: navneet,
        desc:"Navneet is a MERN stack developer . And aspiring entrepreneur. I like movie's and art when I am not working"
    },


]

const Team = () => {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    
    useEffect(() => {
      const handleResize = () => {
        setIsSmallScreen(window.innerWidth < 1300);
      };
      handleResize();
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    return (
        <>
            <Header />
            <Grid container sx={{   justifyContent: 'center', alignItems: 'flex-start', background: 'radial-gradient(circle, rgba(217,106,211,0.07895658263305327) 47%, rgba(102,170,245,0) 100%)' , }}>
                <Grid item xs={10}>
                    <Typography sx={{ fontSize: { lg: '64px', md: '50px', sm: '40px', xs: '30px' }, color: 'white', fontWeight: 'bold', fontFamily: 'sans-serif', textAlign: 'center' }}>Alpha Code Labs</Typography>
                    <Typography sx={{ fontSize: { lg: '24px', md: '22px', sm: '20px', xs: '18px' }, color: 'white', fontFamily: 'sans-serif', textAlign: 'center' }}>(Team Members)</Typography>
                </Grid>

                <Grid item xs={10} sx={{ mt: '50px' ,mb:'50px' }}>
                    <ReactSimplyCarousel activeSlideIndex={activeSlideIndex} onRequestChange={setActiveSlideIndex} itemsToShow={1} itemsToScroll={1} autoplay={true} autoplayDelay={2000}
                        forwardBtnProps={{
                            style: { alignSelf: 'center', background: 'black', border: 'none', borderRadius: '50%', color: 'white', cursor: 'pointer', fontSize: '20px', height: 30, lineHeight: 1, textAlign: 'center', width: 30, display: isSmallScreen ? 'none' : 'block' },
                            children: <span>{`>`}</span>,
                        }}
                        backwardBtnProps={{
                            style: { alignSelf: 'center', background: 'black', border: 'none', borderRadius: '50%', color: 'white', cursor: 'pointer', fontSize: '20px', height: 30, lineHeight: 1, textAlign: 'center', width: 30, display: isSmallScreen ? 'none' : 'block' },
                            children: <span>{`<`}</span>,
                        }}
                        responsiveProps={[{ itemsToShow: 1, itemsToScroll: 1, minWidth: 480 }, { itemsToShow: 3, itemsToScroll: 1, minWidth: 600, }, { itemsToShow: 3, itemsToScroll: 1, minWidth: 1024 }]}
                        speed={300}
                        easing="linear"
                        centerMode>

                        {
                            teamMembers.map((ele, index) => {
                                return (
                                    <Box className={index == activeSlideIndex ? 'activeCard' : 'nonActive'} sx={{ alignSelf: 'center', position: 'relative', width: { lg: 370, md: 350, sm: 250, xs: 280 }, height: { lg: 500, md: 440, sm: 330, xs: 365 }, }}>
                                        <Box sx={{ height: "100%", alignSelf: 'center', borderRadius: '15px', }}>
                                            {/* <img src={ele.img} style={{ position: 'relative', width: '100%', height: '100%', borderRadius: '15px', backgroundColor:'rgb(170, 170, 170)', backgroundBlendMode:'multiply' }} /> */}
                                            <Image src={ele.img} alt='teams' style={{ position: 'relative', width: '100%', height: '100%', objectFit: 'cover', borderRadius: '15px', backgroundColor: 'rgb(170, 170, 170)', backgroundBlendMode: 'multiply' }} />
                                            <Box sx={{ position: 'absolute', bottom: '0px', p: '10px', backgroundColor: 'rgba(0,0,0,0.5)', backgroundBlendMode: 'multiply', overflow: 'hidden' }}>
                                                <Typography sx={{ fontSize: { lg: '25px', md: '23px', sm: '20px', xs: '18px' }, fontWeight: 'bold', color: 'white', }}>{ele.name}</Typography>
                                                <Box sx={{ borderRadius: '6px' }}>
                                                    <Typography sx={{ fontSize: { lg: '14px', md: '13px', sm: '13px', xs: '12px' }, color: 'white', }}>{ele.desc}</Typography>
                                                </Box>
                                            </Box>

                                        </Box>
                                    </Box>
                                )
                            })
                        }

                    </ReactSimplyCarousel>

                </Grid>

            </Grid>
            <Footer />
        </>
    )
}

export default Team