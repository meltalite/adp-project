import React from 'react';
import './navigation.scss';
import { NavItem } from 'reactstrap';
import { useTranslation } from 'react-i18next';

export default function Menu() {
  const { t } = useTranslation()
  const navMenus = [
    t("Nav.about us"),
    t("Nav.principles"),
    t("Nav.industries & applications"),
    t("Nav.products"),
    t("Nav.services"),
    t("Nav.our presence"),
    t("Nav.contact us"),
  ]

  return (
    navMenus.map(navItem => (
      <NavItem
        key={navItem}
        className='nav-menu text'
      >
        <a href={`#${navItem}`}>{navItem}</a>
      </NavItem>
    ))
  )
}