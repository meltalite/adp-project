import React from 'react';
import './home.scss'
import Navigation from "./navigation/navigation";
import Map from './our presence/our-presence';
import Sections from './sections/sections';
import Masthead from './masthead/masthead';
import AboutUs from './about us/about-us';
import Principles from './principles/principles';
import Footer from './footer/footer';
import IndustriesApplications from './industries and applications/industries-applications';

export default function Home() {
  return (
    <>
      <Navigation />
      <Masthead />
      <AboutUs />
      <Principles />
      <IndustriesApplications />
      <Sections />
      <Map />
      <Footer />
    </>
  )
}