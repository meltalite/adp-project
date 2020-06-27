import React, { useState } from 'react';
import './navigation.scss';
import { Navbar, Nav, NavItem, NavbarBrand, NavbarToggler, Collapse } from 'reactstrap';
import SearchBar from './searchbar/search-bar';
import Language from './language/language';
import AdpSvg from '../../assets/svg/adp.svg';
import Menu from './menu';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  return (
    <>
      <Navbar fixed='top'>
        <div className='container'>
          <NavbarBrand onClick={() => console.warn('click')}>
            <img src={AdpSvg} alt='ADP' />
          </NavbarBrand>
          <NavbarToggler className='d-block d-lg-none' onClick={toggle} />
          <Collapse isOpen={isOpen} navbar className='nav-menu__collapse' >
            <Nav className='main-nav' >
              <Menu />
              <NavItem className='nav-menu search-lang'>
                <Language />
                <SearchBar />
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </>
  )
}