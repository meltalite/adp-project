import React from 'react';
import Navigation from "./navigation/navigation";
import { NavigationItems } from './navigation/navigation-items';
import Map from './footer/map';

export default function Home() {
    const style = {
        marginBottom: '20px',
        padding: '50px 0' 
    }
    return (
        <div className="container">
            <Navigation></Navigation>
            <h1>HOI</h1>
            {NavigationItems.map(item => (
                <div key={item.goTo} className="row" >
                    <section id={item.goTo} style={style}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra nibh ac libero lobortis dictum. Vestibulum at nulla et ligula placerat vulputate. Phasellus lacus mi, molestie sit amet turpis vel, maximus faucibus arcu. Suspendisse potenti. Fusce ut tincidunt diam. Vivamus sed pharetra orci. In hac habitasse platea dictumst. In quis leo vel turpis mollis ornare. Vestibulum ac volutpat risus, eget consectetur erat. Maecenas malesuada purus et nibh dapibus, eget ornare justo faucibus.
                        </p>
                    </section>
                </div>
            ))}
            <Map></Map>
       </div> 
    )
}