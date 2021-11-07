import { Button, Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Banner from "../../../images/appointment-bg.png";
import React from "react";

const appointmentBanner = {
  background: `url(${Banner})`,
  backgroundColor: "rgba(45,58,74,0.9)",
  backgroundBlendMode: "darken,luminosity",
  marginTop: 170,
};

const ContactUs = () => {
  return (
    <Container sx={{ pb: 5, mb: 5 }} style={appointmentBanner}>
      <Box sx={{ p: 5, m: 5 }}>
        <Typography sx={{ my: 2, color: "info.main", pt: 5 }} variant="h6">
          Contact Us
        </Typography>
        <Typography sx={{ my: 2, color: "white" }} variant="h4">
          Always Connect With Us
        </Typography>
        <form>
          <TextField
            required
            id="filled-required"
            sx={{ width: "70%", m: 1, backgroundColor: "white" }}
            defaultValue="Your Email"
            size="normal"
          />
          <TextField
            required
            id="filled-required"
            sx={{ width: "70%", m: 1, backgroundColor: "white" }}
            defaultValue="Subject"
            size="normal"
          />
          <TextField
            required
            id="filled-required"
            sx={{ width: "70%", m: 1, backgroundColor: "white" }}
            defaultValue="Message"
            size="normal"
          />
          
        </form>
        <Button sx={{px:5,py:1,mt:4}} variant="contained">Submit</Button>
        
      </Box>
    </Container>
  );
};

export default ContactUs;
