"useClient";
import React from "react";
import { Box, Grid, Card, CardMedia, Typography } from "@mui/material";
import bgOne from "../../assets/landing-page-bg.jpg";
import bgTwo from "../../assets/bg-two.png";
import bgThree from "../../assets/bg-three.png";
import astronaut from "../../assets/astronaut.png";

const GamingStudio = () => {
  return (
    <div style={{ flex: 1 }}>    
      <Box
        sx={{
          position: "relative",
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "white",
          px: 2,
          overflow: "hidden",
          backgroundImage: `url(${bgOne.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        />

        <Box sx={{ position: "relative", zIndex: 1, px: 2 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
            }}
          >
            ACL | Gaming Studio
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
              mt: 2,
            }}
          >
            Powering the Next-Gen Gaming Universe!
          </Typography>
        </Box>
        <Grid style={{position: "absolute"}}  item xs={12} sm={4}  display="flex" justifyContent="center">
            <CardMedia
              component="img"
              sx={{ width: "100%", maxWidth: 500 }}
              image={astronaut.src}
              alt={`Image`}
              height={"full"}
            />
        </Grid>
      </Box>

      <Grid container justifyContent="center" sx={{ py: 3, backgroundColor: "black" }}>
        <Typography variant="h3" color="white" align="center">
          Top Popular Games
        </Typography>
      </Grid>

      <Grid container spacing={2} sx={{ backgroundImage: `url(${bgTwo.src})`, backgroundSize: "cover", p: { xs: 2, md: 8 }, minHeight: "100vh" }}>
        <Grid item xs={12}>
          <Card sx={{ position: "relative", width: "100%", bgcolor: "red" }}>
            <CardMedia component="img" height="500" image={bgOne.src} alt="Background Image" />
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
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: { xs: "90%", md: "70%" },
                height: "70%",
              }}
            >
              <CardMedia
                component="video"
                controls
                autoPlay
                loop
                width="full"
                height="100%"
                src="https://cdn.pixabay.com/video/2021/09/27/89894-616430996_large.mp4"
                alt="Video"
              />
            </Box>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={1} sx={{ backgroundImage: `url(${bgThree.src})`, backgroundSize: "cover", minHeight: "300px", p: 2, justifyContent: "center" }}>
        {[1, 2, 3].map((item, index) => (
          <Grid key={index} item xs={12} sm={4} display="flex" justifyContent="center">
            <CardMedia
              component="img"
              sx={{ width: "100%", maxWidth: 350 }}
              image="https://img.freepik.com/free-vector/hand-drawn-ipl-cricket-illustration_52683-78375.jpg"
              alt={`Image ${item}`}
            />
          </Grid>
        ))}
        <Typography variant="h6" sx={{ maxWidth: "800px", mx: "auto", padding:"12px", color:"white" }}>
          We’re a team of 10 passionate creators who live and breathe gaming. From arcade thrills to immersive sports adventures, 
          we craft fun, addictive, and unforgettable experiences.
        </Typography>

      </Grid>
      <Box sx={{ p: { xs: 2, md: 6 }, textAlign: "center", backgroundColor: "black", color: "white" }}>
        
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          About Us
        </Typography>

        <Typography variant="h6" sx={{ maxWidth: "800px", mx: "auto" }}>
          We’re a team of 10 passionate creators who live and breathe gaming. From arcade thrills to immersive sports adventures, 
          we craft fun, addictive, and unforgettable experiences.
        </Typography>

        <Typography variant="h6" sx={{ maxWidth: "800px", mx: "auto", mt: 2 }}>
          What began as a simple idea—to make games people love—has grown into an exciting journey of creativity and innovation. 
          At ACL Gaming Studio, we don’t just build games; we create moments that players remember.
        </Typography>

      </Box>
    </div>
  );
};

export default GamingStudio;