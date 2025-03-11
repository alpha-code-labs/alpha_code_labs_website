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
} from "@mui/material";
import bgOne from "../../../assets/landing-page-bg.jpg";
import bgTwo from "../../../assets/bg-two.png";

const GameOne = () => {
  const [formData, setFormData] = useState({ name: "", email: "", date: new Date() });
  const [loading, setLoading] = useState(false);

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    setLoading(true);

    const sheetURL = process.env.NEXT_PUBLIC_GOOGLE_SHEET; // Replace with your script URL

    try {
        const response = await fetch(sheetURL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const result = await response.json();
        if (result.status === "success") {
            alert("Submitted successfully!");
            setFormData({ name: "", email: "", date: new Date() });
        } else {
            throw new Error("Submission failed");
        }
    } catch (error) {
        alert(error.message);
    } finally {
        setLoading(false);
    }
};


  return (
    <Grid
      container
      sx={{
        backgroundImage: `url(${bgTwo.src})`,
        backgroundSize: "cover",
        minHeight: "100vh",
        py: { xs: 2, md: 2 },
        px: { xs: 2, md: 8 },
      }}
    >
      <Grid item xs={12}>
        <Card sx={{ position: "relative", width: "100%", bgcolor: "red" }}>
          <Box
            sx={{
              position: "absolute",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
              height: "100vh",
              px: 3,
            }}
          >
            {/* Video Section */}
            <Box
              sx={{
                width: { xs: "100%", md: "60%" },
                maxWidth: "800px",
                position: "relative",
              }}
            >
              <CardMedia
                component="video"
                controls
                autoPlay
                loop
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
                maxWidth: { xs: "100%", md: "40%" },
                textAlign: { xs: "center", md: "left" },
                padding: "12px",
                color: "white",
              }}
            >
              <Typography variant="h6">
                We’re a team of 10 passionate creators who live and breathe gaming. From arcade thrills to immersive sports adventures, we craft fun, addictive, and unforgettable experiences.
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
                    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
                  }
                  sx={{ my: 1 }}
                />
                <TextField
                  required
                  fullWidth
                  label="Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
                  }
                  sx={{ my: 1 }}
                />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                  {loading ? "Submitting..." : "Submit"}
                </Button>
              </form>
            </Box>
          </Box>
          <CardMedia component="img" height="500" image={bgOne.src} alt="Background Image" />
          <Typography
            variant="h4"
            color="skyblue"
            align="center"
            sx={{
              position: "absolute",
              top: "0%",
              width: "100%",
              backgroundImage: "linear-gradient(to right, transparent, black, transparent)",
              padding: "8px",
            }}
          >
            Journey of a Cricketer
          </Typography>
        </Card>
      </Grid>
    </Grid>
  );
};

export default GameOne;
