import React from 'react';
import './home.scss'
import Navigation from "./navigation/navigation";
import OurPresence from './our presence/our-presence';
import Quotes from './quotes/quotes';
import Masthead from './masthead/masthead';
import AboutUs from './about us/about-us';
import Principles from './principles/principles';
import Footer from './footer/footer';
import IndustriesApplications from './industries and applications/industries-applications';
import Products from './products/products';
import Services from './services/services';
import ContacUs from './contact us/contact-us';

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
      <Quotes />
      <OurPresence />
      <ContacUs />
      <Footer />
    </>
  )
}