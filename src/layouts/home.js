import React from 'react';
import Navigation from "./navigation/navigation";
import Map from './footer/map';
import Sections from './sections/sections';
import Masthead from './masthead/masthead';

export default function Home() {
    return (
        <>
            <Navigation />
            <Masthead />
            <Sections />
            <Map />
        </>
    )
}