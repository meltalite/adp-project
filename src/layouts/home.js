import React from 'react';
import './home.scss'
import Navigation from "./navigation/navigation";
import Map from './our presence/our-presence';
import Sections from './sections/sections';
import Masthead from './masthead/masthead';
import AboutUs from './about us/about-us';
import Suppliers from './suppliers/suppliers';
import Footer from './footer/footer';
import AboutUs2 from './about us/about-us-2';

export default function Home() {
  return (
    <>
      <Navigation />
      <Masthead />
      <AboutUs />
      <AboutUs2 />
      <Suppliers />
      <Sections />
      <Map />
      <Footer />
    </>
  )
}