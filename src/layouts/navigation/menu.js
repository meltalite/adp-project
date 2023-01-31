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
  ].map(name => ({
    name,
    action: () => onClick(name)
  }))
  navMenus.push({ name: 'Blog', action: () => window.open('https://blog.adpi.co', '_blank')})

  const onClick = (name) => {
    const id = encodeURI(name);
    const navbarOffset = document.querySelector('.navbar').offsetHeight;
    document.querySelectorAll(`section`).forEach((section, index) => {
      const target = section.firstChild.firstChild.id;
      if (target === id) {
        return scrollTo(section.offsetTop - navbarOffset, index + 1);
      }
    })
  }

  return (
    navMenus.map(({ name, action }) => (
      <NavItem
        key={name}
        className='nav-menu text'
      >
        <button className='button' onClick={action}>{name}</button>
      </NavItem>
    ))
  )
}

function scrollTo(position, index, scrollDuration = index * 200) {
  const interval = 10;
  const scrollStep = position / (scrollDuration / interval);
  if (position - window.scrollY >= 0) { // scroll down
    const notArrivedYet = () => (window.scrollY < position);
    const notAtBottom = () => ((window.innerHeight + window.scrollY) < document.body.offsetHeight)
    const scrollInterval = setInterval(() => {
      if (notArrivedYet() && notAtBottom()) {
        const step = Math.min(scrollStep, position - window.scrollY);
        window.scrollBy(0, step);
      }
      else clearInterval(scrollInterval);
    }, interval)
  } else { //scroll up
    const notArrivedYet = () => (window.scrollY > position);
    const notAtTop = () => (window.scrollY !== 0)
    const scrollInterval = setInterval(() => {
      const step = Math.min(scrollStep, window.scrollY - position);
      if (notArrivedYet() && notAtTop()) {
        window.scrollBy(0, -step);
      }
      else clearInterval(scrollInterval);
    }, interval)
  }
}