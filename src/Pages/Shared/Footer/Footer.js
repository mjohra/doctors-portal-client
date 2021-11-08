import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import fbg from "../../../images/footer-bg.png";

const footerBanner = {
  background: `url(${fbg})`,
};

const Footer = () => {
  return (
    <Container sx={{ my: 5 }} style={footerBanner}>
      <Box sx={{ flexGrow: 1, textAlign: "left", my: 5 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid sx={{ mt: 5 }} item xs={6} md={3}>
            <Typography
              variant="h6"
              sx={{ my: 1 }}
              style={{ color: "black", fontSize: 14, fontWeight: 300 }}
            >
              Emergency Dental Care
            </Typography>
            <Typography
              variant="h6"
              sx={{ my: 1 }}
              style={{ color: "black", fontSize: 14, fontWeight: 300 }}
            >
              Check Up
            </Typography>
            <Typography
              variant="h6"
              sx={{ my: 1 }}
              style={{ color: "black", fontSize: 14, fontWeight: 300 }}
            >
              Treatment of Personal Diseases
            </Typography>
            <Typography
              variant="h6"
              sx={{ my: 1 }}
              style={{ color: "black", fontSize: 14, fontWeight: 300 }}
            >
              Tooth Extraction
            </Typography>
            <Typography
              variant="h6"
              sx={{ my: 1 }}
              style={{ color: "black", fontSize: 14, fontWeight: 300 }}
            >
              Check Up
            </Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography
              variant="h6"
              sx={{ my: 1 }}
              style={{ color: "#5CE7ED" }}
            >
              Services
            </Typography>
            <Typography
              variant="h6"
              sx={{ mb: 1 }}
              style={{ color: "black", fontSize: 14, fontWeight: 300 }}
            >
              Emergency Dental Care
            </Typography>
            <Typography
              variant="h6"
              sx={{ my: 1 }}
              style={{ color: "black", fontSize: 14, fontWeight: 300 }}
            >
              Check Up
            </Typography>
            <Typography
              variant="h6"
              sx={{ my: 1 }}
              style={{ color: "black", fontSize: 14, fontWeight: 300 }}
            >
              Treatment of Personal Diseases
            </Typography>
            <Typography
              variant="h6"
              sx={{ my: 1 }}
              style={{ color: "black", fontSize: 14, fontWeight: 300 }}
            >
              Tooth Extraction
            </Typography>
            <Typography
              variant="h6"
              sx={{ my: 1 }}
              style={{ color: "black", fontSize: 14, fontWeight: 300 }}
            >
              Check Up
            </Typography>
            <Typography
              variant="h6"
              sx={{ my: 1 }}
              style={{ color: "black", fontSize: 14, fontWeight: 300 }}
            >
              Check Up
            </Typography>
            <Typography
              variant="h6"
              sx={{ my: 1 }}
              style={{ color: "black", fontSize: 14, fontWeight: 300 }}
            >
              Check Up
            </Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography
              variant="h6"
              sx={{ my: 1 }}
              style={{ color: "#5CE7ED" }}
            >
              Oral Health
            </Typography>
            <Typography
              variant="h6"
              sx={{ mb: 1 }}
              style={{ color: "black", fontSize: 14, fontWeight: 300 }}
            >
              Emergency Dental Care
            </Typography>
            <Typography
              variant="h6"
              sx={{ my: 1 }}
              style={{ color: "black", fontSize: 14, fontWeight: 300 }}
            >
              Check Up
            </Typography>
            <Typography
              variant="h6"
              sx={{ my: 1 }}
              style={{ color: "black", fontSize: 14, fontWeight: 300 }}
            >
              Treatment of Personal Diseases
            </Typography>
            <Typography
              variant="h6"
              sx={{ my: 1 }}
              style={{ color: "black", fontSize: 14, fontWeight: 300 }}
            >
              Tooth Extraction
            </Typography>
            <Typography
              variant="h6"
              sx={{ my: 1 }}
              style={{ color: "black", fontSize: 14, fontWeight: 300 }}
            >
              Check Up
            </Typography>
            <Typography
              variant="h6"
              sx={{ my: 1 }}
              style={{ color: "black", fontSize: 14, fontWeight: 300 }}
            >
              Check Up
            </Typography>
            <Typography
              variant="h6"
              sx={{ my: 1 }}
              style={{ color: "black", fontSize: 14, fontWeight: 300 }}
            >
              Check Up
            </Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography
              variant="h6"
              sx={{ my: 1 }}
              style={{ color: "#5CE7ED" }}
            >
              Our Addresses
            </Typography>
            <Typography
              variant="h6"
              sx={{ mb: 1 }}
              style={{ color: "black", fontSize: 14, fontWeight: 300 }}
            >
              Emergency Dental Care
            </Typography>
            <Typography
              variant="h6"
              sx={{ my: 1 }}
              style={{ color: "black", fontSize: 14, fontWeight: 300 }}
            >
              Check Up
            </Typography>
            <Typography
              variant="h6"
              sx={{ my: 1 }}
              style={{ color: "black", fontSize: 14, fontWeight: 300 }}
            >
              Treatment of Personal Diseases
            </Typography>
            <Typography
              variant="h6"
              sx={{ my: 1 }}
              style={{ color: "black", fontSize: 14, fontWeight: 300 }}
            >
              Tooth Extraction
            </Typography>
            <Typography
              variant="h6"
              sx={{ my: 1 }}
              style={{ color: "black", fontSize: 14, fontWeight: 300 }}
            >
              Check Up
            </Typography>
            <Typography
              variant="h6"
              sx={{ my: 1 }}
              style={{ color: "black", fontSize: 14, fontWeight: 300 }}
            >
              Check Up
            </Typography>
            <Typography
              variant="h6"
              sx={{ my: 1 }}
              style={{ color: "black", fontSize: 14, fontWeight: 300 }}
            >
              Check Up
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Typography
        variant="body1"
        style={{ color: "Black" }}
        sx={{ my: 5, textAlign: "center" }}
      >
        Copyright 2021 All Right Reserved
      </Typography>
    </Container>
  );
};

export default Footer;
