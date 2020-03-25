import React from 'react';
import './home.scss'
import Navigation from "./navigation/navigation";
import Map from './our presence/our-presence';
import Sections from './sections/sections';
import Masthead from './masthead/masthead';
import AboutUs from './about us/about-us';

export default function Home() {
    return (
        <>
            <Navigation />
            <Masthead />
            <AboutUs />
            <Sections />
            <Map />
        </>
    )
}