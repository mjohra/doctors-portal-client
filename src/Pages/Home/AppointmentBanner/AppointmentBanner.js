import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import doctor from "../../../images/doctor.png";
import Banner from "../../../images/appointment-bg.png";
import { Button, Typography } from "@mui/material";

const appointmentBanner = {
  background: `url(${Banner})`,
  backgroundColor: "rgba(45,58,74,0.9)",
  backgroundBlendMode: "darken,luminosity",
  marginTop: 170,
};

const AppointmentBanner = () => {
  return (
    
      <Box sx={{mt:5}} style={appointmentBanner} sx={{ flexGrow: 1 }}>
        <Grid sx={{mt:5}} container spacing={2}>
          <Grid item xs={12} md={6}>
            <img
              style={{ width: 400, marginTop: "-110px" }}
              src={doctor}
              alt=""
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              textAlign: "left",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography
                variant="h6"
                sx={{ mb: 4 }}
                style={{ color: "#5CE7ED" }}
              >
                Appointment
              </Typography>
              <Typography variant="h4" style={{ color: "white" }}>
                Make An Appointment Today
              </Typography>
              <Typography
                variant="h6"
                sx={{ my: 4 }}
                style={{ color: "white", fontSize: 14, fontWeight: 300 }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                vel ut est odit vero natus.
              </Typography>
              <Button variant="contained">Learn More</Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
  );
};

export default AppointmentBanner;
