'use client'
import { Box, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';
import ReactSimplyCarousel from 'react-simply-carousel';
import './crousal.css';
import neeraj from '../assets/neeraj.jpg';
import rahul from '../assets/Rahul Keswani.jpeg';
import rohitDalal from '../assets/rohit-new.jpg';
import pankajChaddah  from '../assets/pankaj-new.jpg';
import tejasvi from '../assets/tejas-new.jpg';
import karan from '../assets/karan-new.jpg';
// import samir from '../assets/samir-new.jpg';
import gaurav from '../assets/gaurav.jpg';
import mriyank from '../assets/mriyank-new.jpg';
import viraj from '../assets/viraj-new.jpg';
import arjun from '../assets/arjun-new.jpg';
import saurabh from '../assets/saurabh-new.jpg';
import chirag from '../assets/chirag.jpg';
import ravi from '../assets/ravisharma.jpg';
import rachit from '../assets/rachit-new.jpg';
import sumit from '../assets/sumit.jpg';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

const investor = [
    {
        id: "world-1",
        img: neeraj,
        heading: "Neeraj Gupta ",
        title:
            "As CEO and Managing Director of Harsoria Healthcare, Neeraj brings in years of industry experience in Healthcare. His firm Harsoria are leaders in manufacturing medical equipments. Harsoria also exports its products to many countries. ",
    },
    {
        id: "world-2",
        img: rahul,
        heading: "Rahul Keswani",
        title:
            "As CEO and Managing Director of MHK Exports, Rahul beings in years of industry experience in Textile and garments. MHK is one of the leading garment exporter of the country with operations in many countries globally.  ",
    },

    {
        id: "world-3",
        img: rohitDalal,
        heading: "Rohit Dalal",
        title:
            "As Chairman and CEO of the Spiti Group, Rohit also runs and operates the Suncity school in Gurgaon. Rohit is also a diverse investor with interests in various companies and businesses. His school boasts of one of the premium sports facilities in the country.  ",
    },
    {
        id: "world-4",
        img: pankajChaddah,
        heading: "Pankaj Chaddah",
        title:
            "Known lovingly as PC, Pankaj was the co-founder of Zomato, before spinning off and co-founding his own baby called Shyft. Shyft is a personalized, lifestyle driven health care platform. PC is a serial entrepreneur and investor.",
    },
    {
        id: "world-5",
        img: tejasvi,
        heading: "Tejasvi Bhargava ",
        title:
            "As CEO and Managing Director of Quality Group, Tejasvi brings in years of industry experience in manufacturing. Tejasvi’s manufacturing unit produces steel parts for many industries. ",
    },
    {
        id: "world-6",
        img: karan,
        heading: "Karan Bedi",
        title:
            "As Managing Director of AIHP, Karan brings in years of industry experience in Real Estate. Karan also has recently brought in the Elle Décor brand in India, with the flagship store in Gurgaon. ",
    },
    {
        id: "world-7",
        img: sumit,
        heading: "Samir Dewan ",
        title:
            "Samy heads Affluent banking over at Indusind Bank. As the job profile suggests, he is our resident expert in Finance. Samy also has a fund that helps small companies grow at a quick pace. ",
    },

    {
        id: "world-8",
        img: gaurav,
        heading: "Gaurav Verma",
        title:
            "This Chief Marketing Officer of PharmEasy is an industry expert in Marketing. Previously with Zomato, Gaurav is well known in the industry as a marketing guru.",
    },
    {
        id: "world-9",
        img: mriyank,
        heading: "Mrigank Tripathi",
        title:
            " This Chief Growth Office of PeopleStrong is an industry expert in B2B Saas. An entrepreneur by heart, Mrigank is also a mentor to countless B2B saas products both Indian and abroad. ",
    },
    {
        id: "world-10",
        img: viraj,
        heading: "Viraj Sinh ",
        title:
            "This Managing Partner at Affle is an industry expert in Adtech. A serial entrepreneur, Viraj took his first company all the way to IPO. A rare achievement. ",
    },

    {
        id: "world-11",
        img: arjun,
        heading: "Arjun Mehta",
        title:
            "Arjun Mehta is a partner at BDO India. Arjun is a Risk Advisory specialist and has over 25 years of expertise in identifying, predicting and mitigating business threats.",
    },

    {
        id: "world-12",
        img: saurabh,
        heading: "Saurabh Gupta",
        title:
            "Saurabh Gupta is Head of Operations at GLG. His core strength is in operations, in strategic planning and in driving large teams.",
    },
    {
        id: "world-13",
        img: chirag,
        heading: "Chirag Galundia ",
        title:
            "This National Director at Wavemaker is widely respected in the Digital Marketing space as one of the leaders. His area of expertise is in E-Commerce.",
    },
    {
        id: "world-14",
        img: ravi,
        heading: "Ravi Sharma",
        title:
            "This hardcore sales man has vast experience in B2C sales. Growing internet businesses is his strength and he has done it for over 25 years. ",
    },

    //  {
    //   id: 'world-15',
    //   img: '/Navin Wazir.jpeg',
    //   heading:'Navin Wazir',
    //   title: 'Navin works as a Country Head for Bacardi Indonesia. Navin’s strength is in operations, in strategic planning and in driving large teams. ',
    // },

    {
        id: "world-16",
        img: rachit,
        heading: "Rachit Bahri",
        title:
            "As Managing Director of Pravin Papers Ltd, Rachit brings in years of industry experience in Distribution. Rachit is a distributor/trader in petroleum coke. ",
    },

    {
        id: "world-17",
        img: sumit,
        heading: "Sumeet Mittal",
        title:
            "Sumeet Mittal works for the Louis Dreyfus company. He has been in the cotton trading industry since 2008 and is an expert in the Agritech space.",
    },
]


const Investors = () => {
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

    useEffect(() => {
        AOS.init({ duration: 2000});
    }, []);
    return (
        <>
            <Grid container sx={{ justifyContent: 'center', alignItems: 'center', mt:'30px' }}>
                <Grid item xs={10} sx={{ display: 'flex', alignItems: 'center', mt: '10px' }}>


                    <Box sx={{ fontSize: { lg: '24px', md: '22px', sm: '20px', xs: '19px' }, color: '#C7C7C7', mt: '5px' }}>
                        <Typewriter
                            options={{
                                strings: ['| Our early Investors'],
                                autoStart: true,
                                loop: true,
                                skipAddStyles: 10
                            }} />
                    </Box>

                </Grid>
                <Grid item xs={10} sx={{mt:'50px'}}>
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
                            investor.map((ele, index) => {
                                return (
                                    <Box className={index == activeSlideIndex ? 'activeCard' : 'nonActive'}  sx={{ alignSelf: 'center', position: 'relative', width: { lg: 370, md: 350, sm: 250, xs: 280 }, height: { lg: 500, md: 440, sm: 330, xs: 365 }, }}>
                                        <Box sx={{ height: "100%", alignSelf: 'center', borderRadius: '15px', }}>
                                            {/* <img src={ele.img} style={{ position: 'relative', width: '100%', height: '100%', borderRadius: '15px', backgroundColor:'rgb(170, 170, 170)', backgroundBlendMode:'multiply' }} /> */}
                                            <Image src={ele.img}  alt='investors' style={{position: 'relative', width: '100%', height: '100%',objectFit:'cover', borderRadius: '15px', backgroundColor:'rgb(170, 170, 170)', backgroundBlendMode:'multiply'}}/>
                                            <Box sx={{ position: 'absolute', bottom: '0px', p: '10px' ,backgroundColor: 'rgba(0,0,0,0.5)', backgroundBlendMode: 'multiply',overflow:'hidden'}}>
                                                <Typography sx={{ fontSize: { lg: '25px', md: '23px', sm: '20px', xs: '18px' }, fontWeight: 'bold', color: 'white', }}>{ele.heading}</Typography>
                                                <Box sx={{   borderRadius:'6px' }}>
                                                    <Typography sx={{ fontSize: { lg: '14px', md: '13px', sm: '13px', xs: '12px' }, color: 'white', }}>{ele.title}</Typography>
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
        </>
    )
}

export default Investors