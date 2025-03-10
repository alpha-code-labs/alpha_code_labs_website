import About from '@/componants/About'
import Banner from '@/componants/Banner'
import Explore from '@/componants/Explore'
import Footer from '@/componants/Footer'
import GetStarted from '@/componants/GetStarted'
import Header from '@/componants/Header'
import Investors from '@/componants/Investors'
import OurProduct from '@/componants/OurProduct'
import Partners from '@/componants/Partners'
import { Container, Grid, Typography } from '@mui/material'
import React from 'react'

const page = () => {
  
  return (
    <Container disableGutters maxWidth='xl'>
      <Header />
      <Banner/>
      <About/>
      <Explore/>
      <GetStarted/>
      <Investors/>
      <OurProduct/>
      <Partners/>
      <Footer/>
      {/* <Grid container>
        <Grid item xs={12} sx={{ border: '1px solid red' }}>
        </Grid>
      </Grid> */}

    </Container>
  )
}

export default page
