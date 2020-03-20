import React from 'react';
import './navigation.scss'
import logo from '../../logo.svg';
import { Navbar, Nav, NavItem } from 'reactstrap';
import { NavigationItems } from './navigation-items';

export default function Navigation() {
    return (
        <Navbar light sticky fixed={'top'}>
            <a href={'#'} >
                <img src={logo} alt={'logo'} className={'logo'} />
            </a>
            <Nav className={'main-nav'} justified={true} >
                {
                    NavigationItems.map(navItem => (
                        <NavItem style={{ marginRight: '20px' }} >
                            <a href={`#${navItem.goTo}`}>{navItem.text}</a>
                        </NavItem>
                    ))
                }
            </Nav>
        </Navbar>
    )
}