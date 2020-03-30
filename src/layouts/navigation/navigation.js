import React, { useState } from 'react';
import './navigation.scss'
import { Navbar, Nav, NavItem, NavbarBrand, NavbarToggler, Collapse } from 'reactstrap';
import SearchBar from './searchbar/search-bar';
import Language from './language/language';
import { useTranslation } from 'react-i18next'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  const { t } = useTranslation()
  const navMenus = [
    t("Nav.about us"),
    t("Nav.principles"),
    t("Nav.industries & applications"),
    t("Nav.products"),
    t("Nav.services"),
    t("Nav.contact us"),
  ]
  return (
    <>
      <Navbar fixed='top'>
        <NavbarBrand href='#' ><img src={`${process.env.PUBLIC_URL}/pictures/main_adp.jpg`} alt='ADP' /></NavbarBrand>
        <NavbarToggler className='d-block d-md-none' onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className='nav-menu__collapse' >
          <Nav className='main-nav' >
            <>
              {
                navMenus.map(navItem => (
                  <NavItem 
                    key={navItem}
                    className='nav-menu text'
                  >
                    <a href={`#${navItem}`}>{navItem}</a>
                  </NavItem>
                ))
              }
              <NavItem className='nav-menu search-lang'>
                <Language />
                <SearchBar />
              </NavItem>
            </>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  )
}