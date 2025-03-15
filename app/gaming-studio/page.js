"use client";
import React from "react";
import { Box, Grid, Card, CardMedia, Typography } from "@mui/material";
import bgOne from "../../assets/landing-page-bg.jpg";
import bgTwo from "../../assets/bg-two.png";
import bgThree from "../../assets/bg-three.png";
import astronaut from "../../assets/astronaut.png";
import cbdss_vid from "@/assets/videos/CBDSS.mp4";
import mochi_vid_hard from "@/assets/videos/HardAdevertFinalFix.mp4";
import joac_vid_one from "@/assets/videos/Joac_Trailer.mp4";
import divine_vid_eng from "@/assets/videos/Divine_Quest_English.mp4";
import bluff_vid from "@/assets/videos/Bluff_Trailer.mp4";

const GamingStudio = () => {

  const gameContent= [
    {title:"Journey of a Cricketer", video:joac_vid_one, content:"Step onto the pitch in Journey of a Cricketer, where every swing of the bat and every tense moment on the field is rendered in hyper-realistic detail. This immersive experience invites you to relive the raw, emotions of a cricketer’s life—feeling the thrill of early dreams, the agony of setbacks, and the triumphant roar of victory as you navigate a career defined by passion, sacrifice, and relentless pursuit of greatness."}
    ,{title:"Mochi the Blob", video:mochi_vid_hard, content:"Welcome to Mochi the Blob, where every leap is a test of pure skill and determination. In this adrenaline-fueled platformer, the jumping gameplay is as relentless as it is rewarding—each gravity-defying jump demands razor-sharp timing and unwavering focus. Conquer seemingly impossible gaps and treacherous obstacles as you strive to reach the elusive princess, turning each near-miss into a triumphant moment. Ready to defy gravity and embrace the challenge?"}
    ,{title:"Cricket Ball Drop - Stack Smash", video:cbdss_vid, content:"Dive into the effortless fun of 3D Cricket Stack Ball, where easy-to-learn gameplay meets ultimate stress relief. With its intuitive controls and addictive stacking challenge, each perfectly aligned ball lets you unwind and melt away the day's pressures, offering a light-hearted escape into the world of cricket-themed relaxation."}
    ,{title:"Divine Quest", video:divine_vid_eng, content:"Embark on Divine Quest, a magical adventure where Indian parents can seamlessly introduce their kids to the rich tapestry of Hindu mythology. This immersive game brings age-old legends to life through interactive storytelling, vibrant visuals, and engaging puzzles that not only entertain but also educate. Perfect for family time, Divine Quest offers a unique opportunity to explore timeless epics and moral lessons, inspiring young minds with the wisdom and wonder of our cultural heritage."}
    ,{title:"Bluff - IRL", video:bluff_vid, content:"Step into the world of Bluff IRL, where every card played rekindles the cherished nostalgia of gathering with friends for a thrilling game of deception and wit. This globally celebrated card game masterfully recreates the joy, camaraderie, and light-hearted banter of your favorite bluff sessions, inviting you to relive those unforgettable moments of fun, strategy, and friendly rivalry."}
  ]




  return (
    <div style={{ flex: 1 }}>    
   <Box
  sx={{
    position: "relative",
    height: "100vh",
    width: "full",
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
  {/* Dark Overlay */}
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

  {/* Content Wrapper */}
  <Grid
    container
    spacing={4}
    sx={{
      position: "relative",
      zIndex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      mx: "auto",
      px: 2,
    }}
  >
    {/* Left: Text Content */}
    <Grid item xs={12} md={6} sx={{ textAlign: "left" }}>
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
          whiteSpace: "nowrap",
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
        Powering the <span style={{ color: "blue" }}>Next-Gen</span> Gaming Universe!
      </Typography>
    </Grid>

    {/* Right: Image */}
    <Grid
      item
      xs={12}
      md={6}
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <CardMedia
        component="img"
        sx={{
          width: "100%",
          maxWidth: 500,
          height: "auto",
        }}
        image={astronaut.src}
        alt="Astronaut Image"
      />
    </Grid>
  </Grid>
</Box>



      <Grid container justifyContent="center" sx={{ py: 3, backgroundColor: "black" }}>
        <Typography variant="h3" color="white" align="center">
          Top Popular Games
        </Typography>
      </Grid>

     {gameContent.map((item,index)=>(
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
{item.title}
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
              muted
              width="full"
              height="100%"
              src={item?.video}
              alt="Video"
            />
          </Box>
                          
        </Card>
        <Typography variant="body1" 
                          sx={{ mt:"8px", fontSize: "16px", textAlign: "center",fontFamily: "Arial, sans-serif", fontWeight: "bold", color: "white" }}>
                            {item?.content}
                          </Typography>
      </Grid>
     
    </Grid>
     )) }
  
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