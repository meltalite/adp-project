import React from 'react';
import './home.scss'
import Navigation from "./navigation/navigation";
import Map from './our presence/our-presence';
import Sections from './sections/sections';
import Masthead from './masthead/masthead';
import AboutUs from './about us/about-us';
import Suppliers from './suppliers/suppliers';
import Footer from './footer/footer';

export default function Home() {
    return (
        <>
            <Navigation />
            <Masthead />
            <AboutUs />
            <Suppliers />
            <Sections />
            <Map />
            <Footer />
        </>
    )
}