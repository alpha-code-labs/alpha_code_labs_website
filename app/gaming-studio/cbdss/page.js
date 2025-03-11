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
} from "@mui/material";
import bgOne from "../../../assets/landing-page-bg.jpg";
import bgTwo from "../../../assets/bg-two.png";

const GameOne = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: new Date().toISOString().split("T")[0],
  });
  const [loading, setLoading] = useState(false);

  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setLoading(true);

    const sheetURL = process.env.NEXT_PUBLIC_GOOGLE_SHEET;

    fetch(sheetURL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `Name=${formData.name}&Email=${formData.email}&Date=${formData.date}`,
    })
      .then((response) => response.text())
      .then((data) => {
        alert("Submitted Successfully.", data);
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
        px: { xs: 2, md: 8 },
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
                  width="100%"
                  height="auto"
                  src="https://cdn.pixabay.com/video/2021/09/27/89894-616430996_large.mp4"
                  alt="Video"
                  sx={{
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
                <Typography variant="h6" color="black">
                  We’re a team of 10 passionate creators who live and breathe
                  gaming. From arcade thrills to immersive sports adventures,
                  we craft fun, addictive, and unforgettable experiences.
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
                    {loading ? "Submitting..." : "Submit"}
                  </Button>
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
              Journey of a Cricketer
            </Typography>
          </Card>
        </Grid>
      </Container>
    </Grid>
  );
};

export default GameOne;
