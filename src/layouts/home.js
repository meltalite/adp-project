import React from 'react';
import Navigation from "./navigation/navigation";
import { NavigationItems } from './navigation/navigation-items';

export default function Home() {
    return (
       <>
       <Navigation></Navigation>
       <h1>HOI</h1>
       {NavigationItems.map(item => (
           <div id={item.goTo} style={{ marginTop: '40px', marginBottom: '1000px', padding: '50px 0'}}>
               <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra nibh ac libero lobortis dictum. Vestibulum at nulla et ligula placerat vulputate. Phasellus lacus mi, molestie sit amet turpis vel, maximus faucibus arcu. Suspendisse potenti. Fusce ut tincidunt diam. Vivamus sed pharetra orci. In hac habitasse platea dictumst. In quis leo vel turpis mollis ornare. Vestibulum ac volutpat risus, eget consectetur erat. Maecenas malesuada purus et nibh dapibus, eget ornare justo faucibus.
               </p>
           </div>
       ))}
       </> 
    )
}