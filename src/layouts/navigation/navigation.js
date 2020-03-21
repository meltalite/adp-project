import React, { useState } from 'react';
import './navigation.scss'
import { Navbar, Nav, NavItem, NavbarBrand, NavbarToggler, Collapse } from 'reactstrap';
import { NavigationItems } from './navigation-items';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)
    return (
        <>
        <Navbar light fixed='top'>
            <NavbarBrand href='#'>ADP</NavbarBrand>
            <NavbarToggler id='navbarMobile' className='nav-toggler d-block d-sm-none' onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar className='d-sm-none' >
                    <Nav className='main-nav d-block d-sm-none' justified>
                        {
                            NavigationItems.map(navItem => (
                                <NavItem key={navItem.goTo} style={{ marginRight: '20px' }} className='d-block d-sm-none text-uppercase'>
                                    <a href={`#${navItem.goTo}`}>{navItem.text}</a>
                                </NavItem>
                            ))
                        }
                    </Nav>
            </Collapse>
            <Nav id='navbarDesktop' className='main-nav d-none d-lg-flex' >
                    {
                        NavigationItems.map(navItem => (
                            <NavItem key={navItem.goTo} style={{ marginRight: '20px' }} className='d-none d-lg-flex text-uppercase'>
                                <a href={`#${navItem.goTo}`}>{navItem.text}</a>
                            </NavItem>
                        ))
                    }
            </Nav>
        </Navbar>
        </>
    )
}