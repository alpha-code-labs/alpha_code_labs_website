"use client";
import React, { useState } from "react";
import {
  Box,
  Grid,
  Card,
  CardMedia,
  Typography,
  Button,
  TextField,
  Container,
  useMediaQuery,
  useTheme,
  Modal
} from "@mui/material";
import bgOne from "../../../../assets/landing-page-bg.jpg";
import bgTwo from "../../../../assets/bg-two.png";
import mochi_vid_hard from "@/assets/videos/HardAdevertFinalFix.mp4"





const GameOne = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: new Date().toISOString().split("T")[0],
  });
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal]= useState(false);

  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setLoading(true);

    const sheetURL = process.env.NEXT_PUBLIC_GOOGLE_SHEET;

    fetch(sheetURL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `Name=${formData.name}&Email=${formData.email}&Date=${formData.date}&Game=${"MOCHI-THE-BLOB-1"}`,
    })
      .then((response) => response.text())
      .then((data) => {
        //alert("Submitted Successfully.", data);
        setOpenModal(true);
        setFormData({
          name: "",
          email: "",
          date: new Date().toISOString().split("T")[0],
        });
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  return (
    <Grid
      container
      sx={{
        backgroundImage: `url(${bgTwo.src})`,
        backgroundSize: "cover",
        minHeight: "100vh",
        py: { xs: 2, md: 4 },
        px: { xs: 2, md: 6 },
      }}
    >
      <Container maxWidth="lg">
        <Grid item xs={12}>
        <Card
  sx={{
    position: "relative",
    width: "100%",
    backgroundImage: `url(${bgOne.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>

            <Box
              sx={{
                pt:"64px"  ,
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
                pb: 3,
                px: { xs: 2, md: 4 },
              }}
            >
              {/* Video Section */}
              <Box
                sx={{
                 
                  width: { xs: "100%", md: "60%" },
                  maxWidth: "800px",
                }}
              >
                <CardMedia
                  component="video"
                  controls
                  autoPlay
                  loop
                  muted
                  width="auto"
                  height="400vh"
                  src={mochi_vid_hard}
                  alt="Video"
                  sx={{
                    backgroundColor:"green",
                    borderRadius: "12px",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
                  }}
                />
              </Box>

              {/* Text Section */}
              <Box
                sx={{
                  width: { xs: "100%", md: "40%" },
                  textAlign: { xs: "center", md: "left" },
                  padding: "12px",
                  color: "white",
                }}
              >
                <Typography variant="body1" 
                sx={{ fontSize: "16px", textAlign: "center",fontFamily: "Arial, sans-serif", fontWeight: "bold", color: "black" }}>
               Welcome to Mochi the Blob, where every leap is a test of pure skill and determination. In this adrenaline-fueled platformer, the jumping gameplay is as relentless as it is rewarding—each gravity-defying jump demands razor-sharp timing and unwavering focus. Conquer seemingly impossible gaps and treacherous obstacles as you strive to reach the elusive princess, turning each near-miss into a triumphant moment. Ready to defy gravity and embrace the challenge?
                </Typography>
                <form onSubmit={handleSubmitForm}>
                  <TextField
                    required
                    fullWidth
                    name="name"
                    label="Name"
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        [e.target.name]: e.target.value,
                      }))
                    }
                    sx={{ my: 1 }}
                    InputLabelProps={{
                        sx: { color: "white" },
                      }}
                  />
                  <TextField
                    required
                    fullWidth
                    label="Email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        [e.target.name]: e.target.value,
                      }))
                    }
                    InputLabelProps={{
                        sx: { color: "white" },
                      }}
                    sx={{ my: 1, textColor:"blue" }}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    {loading ? "Submitting..." : "Sign Up"}
                  </Button>
                   <Typography  textAlign={"center"}>
                                      <span style={{ color: "white" }}>Pre-Register</span> now to avail exciting benefits.
                                    </Typography>
                </form>
              </Box>
            </Box>
           
            <Typography
              variant="h4"
              color="skyblue"
              align="center"
              sx={{
                position: "absolute",
                top: "0%",
                width: "100%",
                backgroundImage:
                  "linear-gradient(to right, transparent, black, transparent)",
                padding: "8px",
              }}
            >
              Mochi the Blob
            </Typography>
          </Card>
        </Grid>
      </Container>
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
    </Grid>
  );
};

export default GameOne;
