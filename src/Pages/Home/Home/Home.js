import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import About from "../About/About";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import Banner from "../Banner/Banner";
import ContactUs from "../ContactUs/ContactUs";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Banner></Banner>
      <Services></Services>
      <About></About>
      <AppointmentBanner></AppointmentBanner>
      <Testimonial></Testimonial>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
};

export default Home;
