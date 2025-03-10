'use client'
import React, { useEffect, useState } from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import team from '../../assets/team.svg';
import first from '../../assets/firstal.svg';
import web from '../../assets/web.svg';
import email from '../../assets/email.svg';
import seo from '../../assets/seo.svg';
import years from '../../assets/years.svg';
import mobileapp from '../../assets/mobileapp.png';
import web1 from '../../assets/webapp.png';
import landing from '../../assets/landing.png';
import webdev from '../../assets/webdev.png';
import meeting4 from '../../assets/meeting4.jpg';
import ReactSimplyCarousel from 'react-simply-carousel';
import '../../componants/crousal.css'
import ourvision from '../../assets/ourvision.png';
import aboutimg from '../../assets/aboutbanner.jpg';
import Header from '@/componants/Header';
import Image from 'next/image';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import AppSettingsAltIcon from '@mui/icons-material/AppSettingsAlt';
import BlurOnIcon from '@mui/icons-material/BlurOn';
import Footer from '@/componants/Footer';



const data = [
    {
        logo: team,
        number: '16+',
        text: 'Team Members'
    },
    {
        logo: first,
        number: '41',
        text: 'First Position'
    },
    {
        logo: email,
        number: '76',
        text: 'Email Campaigns'
    },
    {
        logo: seo,
        number: '96',
        text: 'SEO Campaigns'
    },
    {
        logo: years,
        number: '12',
        text: 'Years in Marketing'
    },
    {
        logo: web,
        number: '143',
        text: 'Web Analytics'
    }
];

const AboutPage = () => {
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
    const services = [
        { title: 'App Development', icon: mobileapp, desc: "Our goal in mobile app design is to create an intuitive and visually appealing interface that allows users to easily navigate and interact with the app’s features and functionality.", animate: "fade-right" },
        { title: 'Landing Page Design', icon: landing, desc: "Our goal in landing page design is to create an intuitive and visually appealing interface that allows users to easily navigate and interact with the page’s features and content.", animate: "fade-left" },
        { title: 'Web Design', icon: web1, desc: "Our goal in web design is to create an intuitive and visually appealing interface that allows users to easily navigate and interact with the website’s features and content.", animate: "fade-right" },
        { title: 'Web Development', icon: webdev, desc: "Our goal in web development is to create an intuitive and functional website that meets our clients' needs and requirements.", animate: "fade-left" }
    ]
    return (
        <>
            <Header />
            <Container disableGutters maxWidth={false} sx={{ overflow: "hidden", }}>
                <Box sx={{ height: '600px', width: '100%', backgroundPosition: 'center', backgroundColor: 'rgb(80,80,80)', backgroundBlendMode: 'multiply', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                    <Image src={aboutimg} style={{ width: "100%", height: '100%', objectFit: 'cover', position: 'relative' }} />
                    <Grid container sx={{ position: 'absolute', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', p: '20px' }}>
                        <Grid item xs={12} lg={4} sx={{ height: { lg: '300px', md: '300px', sm: '250px', xs: '250px' }, mb: { xs: '0px', lg: '0px', sm: '0px', md: '0px' } }}>
                            <Grid container>
                                <Grid item xs={12} sx={{ borderLeft: '3px solid #2979ff', padding: '10px' }}>
                                    <Typography variant='h1' sx={{ fontSize: { lg: '40px', xs: '20px' }, color: 'white', fontWeight: '600' }}>
                                        About Our Alpha Code Labs <br />IT Company
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sx={{ mt: '12px' }}>
                                    <Typography sx={{ color: 'white', fontSize: '15px' }}>Alpha Code Labs is a privately owned one-stop solution for IT services formed in 2020. We at Alpha Code Labsl have a specialized team of expert IT engineers ... </Typography>
                                </Grid>
                                <Grid item xs={12} sx={{ mt: '15px' }}>
                                    <Button variant='outlined' sx={{ color: 'white', border: '3px solid lightgrey' }}>View our work</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} lg={7} sx={{ height: 'fit-content' }}>
                            <Grid container>
                                <Grid item xs={12} >
                                    <Typography sx={{ color: 'white', fontSize: '35px', fontWeight: '600' }}>What We Do</Typography>
                                </Grid>
                                <Grid item xs={12} sx={{ alignItems: 'center', justifyContent: 'left', display: 'flex' }}>
                                    <OpenInBrowserIcon sx={{ color: '#2979ff', fontSize: '45px', mr: '20px' }} />
                                    <Typography sx={{ color: 'white', fontSize: '17px', fontWeight: "600" }}>Build Websites <span style={{ color: 'white', fontSize: '14px', ml: '3px', fontWeight: '500' }}>We at Alpha Code Labsl work dedicatedly, with a well-organized team of skilled IT engineers.</span></Typography>
                                    {/* <Typography sx={{ color: '#eeeeee', fontSize: '13px', ml:'3px' }}> We at Alpha Code Labsl work dedicatedly, with a well-organized team of skilled IT engineers.</Typography> */}
                                </Grid>
                                <Grid item xs={12} sx={{ mt: "10px", alignItems: 'center', justifyContent: 'left', display: 'flex' }}>
                                    <AppSettingsAltIcon sx={{ color: '#2979ff', fontSize: '45px', mr: '20px' }} />
                                    <Typography sx={{ color: 'white', fontSize: '17px', fontWeight: "600" }}>App Development <span style={{ color: 'white', fontSize: '14px', ml: '3px', fontWeight: '500' }}>We at Alpha Code Labsl work dedicatedly, with a well-organized team of skilled IT engineers.</span></Typography>
                                    {/* <Typography sx={{ color: '#eeeeee', fontSize: '13px' , ml:'3px'}}>We at Alpha Code Labsl work dedicatedly, with a well-organized team of skilled IT engineers.</Typography> */}
                                </Grid>
                                <Grid item xs={12} sx={{ alignItems: 'center', justifyContent: 'left', display: 'flex', mt: "10px" }}>
                                    <BlurOnIcon sx={{ color: '#2979ff', fontSize: '45px', mr: '20px' }} />
                                    <Typography sx={{ color: 'white', fontSize: '17px', fontWeight: "600" }}>SEO Services <span style={{ color: 'white', fontSize: '14px', ml: '3px', fontWeight: '500' }}>We at Alpha Code Labsl work dedicatedly, with a well-organized team of skilled IT engineers.</span> </Typography>
                                    {/* <Typography sx={{ color: '#eeeeee', fontSize: '13px', ml:'3px' }}>We at Alpha Code Labsl work dedicatedly, with a well-organized team of skilled IT engineers.</Typography> */}
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                </Box>

                
                <Grid container sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', padding: '10px 10px 50px 10px', background: 'linear-gradient(189deg, rgba(110,182,191,0.2582282913165266) 24%, rgba(174,96,242,0) 38%)' }}>
                    <Grid item lg={5} md={5} sm={12} xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', mt: { lg: '0px', md: '0px', sm: '20px', xs: '20px' } }} data-aos="fade-right">
                        <Typography variant='h2' sx={{ fontSize: { lg: '50px', md: '50px', sm: '40px', xs: '30px' }, fontWeight: '600', color: 'white' }}>Who Are We?</Typography>
                        <Typography variant='subtitle2' sx={{ fontSize: { lg: '16px', md: '16px', sm: '13px', xs: '14px', }, mt: '20px', color: '#eeeeee', textAlign: 'center' }}>Alpha Code Labs is a privately owned IT Support and IT Services business formed in 2020. Today we’re proud to boast a strong team of IT engineers who thrive on rolling up their sleeves and solving your IT problems and meeting your business needs. Our vertical solutions expertise allows your business to streamline workflow, and increase productivity. No matter the business, Alpha Code Labs has you covered with industry-compliant solutions, customized to your company’s specific needs.</Typography>
                    </Grid>
                    <Grid item lg={5} md={5} sm={12} xs={12} sx={{ mt: { lg: '0px', md: '0px', sm: '5px', xs: '8px' }, display: 'flex', justifyContent: 'center', alignItems: 'center', }} data-aos="fade-left">
                        <Box sx={{ width: { lg: '550px', md: '550px', sm: '750px', xs: '500px' }, height: { lg: '400px', md: '400px', sm: '390px', xs: '340px' }, borderRadius: { lg: '15%', md: '15%', sm: '10%', xs: '10px' }, mt: '25px' }}>
                            <Image src={meeting4} alt='meeting' style={{ borderRadius: '20px', objectFit: 'cover', width: '100%', height: '100%' }} />,
                        </Box>
                    </Grid>
                </Grid>
                <Grid container sx={{ flexWrap: "wrap-reverse", display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', padding: '10px 10px 50px 10px', background: 'linear-gradient(10deg, rgba(191,110,184,0.14058123249299714) 24%, rgba(174,96,242,0) 38%)', }}>
                    <Grid item lg={5} md={5} sm={12} xs={12} sx={{ mt: { lg: '0px', md: '0px', sm: '5px', xs: '15px' }, display: 'flex', justifyContent: 'center', alignItems: 'center', }} data-aos="fade-right">
                        <Box sx={{ width: { lg: '550px', md: '550px', sm: '750px', xs: '500px' }, height: { lg: '400px', md: '400px', sm: '390px', xs: '340px' }, borderRadius: { lg: '15%', md: '15%', sm: '10%', xs: '10px' }, mt: '25px' }}>
                            <Image src={ourvision} alt='meeting' style={{ borderRadius: '20px', objectFit: 'cover', width: '100%', height: '100%' }} />,
                        </Box>
                    </Grid>
                    <Grid item lg={5} md={5} sm={12} xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} data-aos="fade-left">
                        <Typography variant='h4' sx={{ fontSize: { lg: '50px', md: '50px', sm: '40px', xs: '30px' }, fontWeight: '600', color: 'white' }}>OUR VISION</Typography>
                        <Typography sx={{ fontSize: { lg: '16px', md: '16px', sm: '13px', xs: '14px', }, color: '#eeeeee', textAlign: 'center', mt: '20px' }}>We have established ourselves as an effusive IT agency that strives to value ethics, commitment, and quality to our clients. We are constantly working to maintain our positions as the best and to elevate ourselves by providing exceptional services.</Typography>
                    </Grid>
                </Grid>
                <Grid container sx={{ mt: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', p: "10px" }}>
                    <Grid item xs={10} sx={{ mt: '50px',mb:'20px', background: 'radial-gradient(circle, rgba(174,198,207,0.3114495798319328) 24%, rgba(174,96,242,0) 38%)'}}>
                    <Typography variant='h2' sx={{ fontSize: { lg: '50px', md: '50px', sm: '40px', xs: '30px',  }, fontWeight: '600',  color:  'white',textAlign:'center',mb:'50px'}}>Our Services</Typography>
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
                                services.map((ele, index) => {
                                    return (
                                        <Box className={index == activeSlideIndex ? 'activeCard' : 'nonActive'} sx={{ alignSelf: 'center', position: 'relative', width: { lg: 370, md: 350, sm: 250, xs: 280 }, height: { lg: 500, md: 440, sm: 330, xs: 365 }, }}>
                                            <Box sx={{ height: "100%", alignSelf: 'center', borderRadius: '15px', }}>
                                                {/* <img src={ele.img} style={{ position: 'relative', width: '100%', height: '100%', borderRadius: '15px', backgroundColor:'rgb(170, 170, 170)', backgroundBlendMode:'multiply' }} /> */}
                                                <Image src={ele.icon} style={{ position: 'relative', width: '100%', height: '100%', objectFit: 'cover', borderRadius: '15px', backgroundColor: 'rgb(170, 170, 170)', backgroundBlendMode: 'multiply' }} />
                                                <Box sx={{ position: 'absolute', bottom: '0px', p: '10px', backgroundColor: 'rgba(0,0,0,0.5)', backgroundBlendMode: 'multiply', overflow: 'hidden' }}>
                                                    <Typography sx={{ fontSize: { lg: '25px', md: '23px', sm: '20px', xs: '18px' }, fontWeight: 'bold', color: 'white', }}>{ele.title}</Typography>
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
                <Grid container sx={{  display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', pb: '20px' }}>
                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'column', mt: '30px', p: '10px' }} data-aos="fade-up">
                        <Typography variant='h2' sx={{ fontSize: { lg: '30px', md: '30px', sm: '30px', xs: '28px' }, fontWeight: '600', m: '20px', color: 'white' }}>Our Stats</Typography>
                        <Typography sx={{ fontSize: { lg: '18px', md: '18px', sm: '16px', xs: '15px' }, textAlign: 'center', fontFamily: 'Comfortaa", cursive', mt: '20px', color: 'grey' }}>We are proud of what we have achieved and the recognition we have received from our clients and the industry. Our stats showcase our commitment to excellence.</Typography>
                    </Grid>
                    <Grid container sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', mt: '30px' }} data-aos="fade-up">
                        {data.map((item) => {
                            return <Grid item xs={12} sm={6} md={6} lg={1.5} sx={{ textAlign: 'center',}} key={item.text}>
                                <Typography variant='h1' sx={{ fontSize: { lg: '30px', md: '25px', sm: '20px', xs: '20px' }, fontWeight: '600', color:  'white' }}>{item.number}</Typography>
                                <Typography variant='subtitle2' sx={{ fontSize: { lg: '20px', md: '18px', sm: '16px', xs: '16px' }, fontWeight: '600', color: 'grey', mt: '10px' }}>{item.text}</Typography>
                            </Grid>
                        })}
                    </Grid>
                </Grid>
                
            </Container>
            <Footer/>
        </>
    )
}

export default AboutPage