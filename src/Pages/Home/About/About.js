import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import treatment from "../../../images/treatment.png";
import { Button, Container, Typography } from "@mui/material";

const About = () => {
  return (
    <Container sx={{my:5}}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md:2 }} columns={{ xs: 12, sm: 12, md: 12 }}
      >
          <Grid item xs={12} md={6}>
            <img style={{ width:400,height:400 }} src={treatment} alt="" />
          </Grid>
          <Grid sx={{my:5, py:4 ,textAlign:'left'}} item xs={12} md={6}>
            <Typography variant="h4">
              Exceptional Dental <br /> Care,On Your Terms
            </Typography>
            <Typography sx={{py:4}} variant="body2" color="text.secondary">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web page
            </Typography>
            <Button variant="contained">Get Appointment</Button>

          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default About;
