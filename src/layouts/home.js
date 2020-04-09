import React from 'react';
import './home.scss'
import Navigation from "./navigation/navigation";
import OurPresence from './our presence/our-presence';
import Sections from './sections/sections';
import Masthead from './masthead/masthead';
import AboutUs from './about us/about-us';
import Principles from './principles/principles';
import Footer from './footer/footer';
import IndustriesApplications from './industries and applications/industries-applications';
import Products from './products/products';
import Services from './services/services';

export default function Home() {
  return (
    <>
      <Navigation />
      <Masthead />
      <AboutUs />
      <Principles />
      <IndustriesApplications />
      <Products />
      <Services />
      <Sections />
      <OurPresence />
      <Footer />
    </>
  )
}