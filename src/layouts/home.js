import React from 'react';
import Navigation from "./navigation/navigation";
import Map from './footer/map';
import Sections from './sections/sections';

export default function Home() {
    return (
        <>
            <Navigation />
            <Sections />
            <Map />
        </>
    )
}