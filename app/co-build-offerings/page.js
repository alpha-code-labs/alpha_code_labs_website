'use client';

import React, { useState } from 'react';
import { Box, Grid, TextField, Button, Typography, Paper, IconButton, Divider, Modal } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const images = [
  '/coBuildOfferings/img1.jpg',
  '/coBuildOfferings/CoBuild (1)-2.jpg',
  '/coBuildOfferings/CoBuild (1)-3.jpg',
  '/coBuildOfferings/CoBuild (1)-4.jpg',
  '/coBuildOfferings/CoBuild (1)-5.jpg',
  '/coBuildOfferings/CoBuild (1)-6.jpg',
  '/coBuildOfferings/CoBuild (1)-7.jpg',
];

const CoBuildOfferings = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };
   const [formData, setFormData] = useState({
     name: "",
     email: "",
     companyName:"",
     date: new Date().toISOString().split("T")[0],
   });
   const [loading, setLoading] = useState(false);
   const [openModal, setOpenModal]= useState(false);

  const handleSubmitForm = (e) => {
    console.log(formData);
    e.preventDefault();
    setLoading(true);

    const sheetURL = process.env.NEXT_PUBLIC_COBUILD_GOOGLE_SHEET;

    fetch(sheetURL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `Name=${formData.name}&Email=${formData.email}&Company=${formData.companyName}&Date=${formData.date}`,
    })
      .then((response) => response.text())
      .then((data) => {
        //alert("Submitted Successfully.", data);
        setOpenModal(true);
        setFormData({
          name: "",
          email: "",
          companyName: "",
          date: new Date().toISOString().split("T")[0],
        });
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };



  return (
    <Box
      sx={{
        p: { xs: 2, md: 4 },
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(139deg, rgba(212,106,217,0.050945378151260545) 47%, rgba(102,170,245,0) 100%)'
      }}
    >
      <Grid container spacing={4} sx={{ height: '100%' }}>
        {/* Carousel */}
        <Grid item xs={12} md={8}>
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: '100%',
              minHeight: 400,
              maxHeight: '80vh',
              overflow: 'hidden',
              borderRadius: 3,
              boxShadow: 3,
            }}
          >
            <img
              src={images[current]}
              alt={`Slide ${current + 1}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '12px',
                transition: 'all 0.5s ease-in-out',
              }}
            />

            {/* Arrows */}
            <IconButton
              onClick={prevSlide}
              sx={{
                position: 'absolute',
                top: '50%',
                left: 10,
                transform: 'translateY(-50%)',
                bgcolor: 'rgba(255,255,255,0.8)',
                boxShadow: 1,
              }}
            >
              <ArrowBackIos color="action" />
            </IconButton>
            <IconButton
              onClick={nextSlide}
              sx={{
                position: 'absolute',
                top: '50%',
                right: 10,
                transform: 'translateY(-50%)',
                bgcolor: 'rgba(255,255,255,0.8)',
                boxShadow: 1,
              }}
            >
              <ArrowForwardIos color="action" />
            </IconButton>
          </Box>
        </Grid>

        {/* Form */}
        <Grid item xs={12} md={4} sx={{ display: 'flex', alignItems: 'center' }}>
          <Paper
            sx={{
              p: 4,
              borderRadius: 3,
              width: '100%',
              boxShadow: 4,
              backgroundColor: '#ffffff',
            }}
            elevation={0}
          >
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
              Join the Co-Build Community
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Share your details and we’ll get in touch.
            </Typography>
            <Divider sx={{ my: 2 }} />
            <TextField required onChange={(e)=>setFormData(prev=>({...prev,name:e.target.value}))}          value={formData.name} fullWidth label="Full Name" variant="outlined" margin="dense" />
            <TextField fullWidth onChange={(e)=>setFormData(prev=>({...prev,email:e.target.value}))}        value={formData.email} label="Email Address" type="email" variant="outlined" margin="dense" />
            <TextField fullWidth onChange={(e)=>setFormData(prev=>({...prev,companyName:e.target.value}))}  value={formData.companyName} label="Company / Startup Name" variant="outlined" margin="dense" />
            <Button
              variant="contained"
              fullWidth
              sx={{
                mt: 3,
                py: 1.3,
                fontWeight: 'bold',
                borderRadius: 2,
                background: 'linear-gradient(to right, #1976d2, #42a5f5)',
              }}
              onClick={handleSubmitForm}
            >
             { loading ? "Submitting..." : "Submit"}
            </Button>
          </Paper>
        </Grid>
      </Grid>
        <Modal open={openModal} onClose={() => setOpenModal(false)}>
                    <Box
                      sx={{
                        color: "white",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 300,
                        bgcolor: "blue",
                        boxShadow: 24,
                        p: 3,
                        borderRadius: "10px",
                        textAlign: "center",
                      }}
                    >
                      <Typography variant="h4" sx={{
                        textColor:"white",}} gutterBottom>
                        Thanks for your interest!
                      </Typography>
                      <Typography variant="body1">We will contact you shortly.</Typography>
                      <Button
                        variant="contained"
                        sx={{ mt: 2 }}
                        onClick={() => setOpenModal(false)}
                      >
                        Close
                      </Button>
                    </Box>
                  </Modal>
    </Box>
  );
};

export default CoBuildOfferings;



