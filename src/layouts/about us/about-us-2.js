import React from 'react';
import './about-us.scss';
import { useTranslation } from 'react-i18next';

const items = [
  {
    src: `${process.env.PUBLIC_URL}/pictures/about us/au_office.jpg`,
    altText: 'au_office',
  },
  {
    src: `${process.env.PUBLIC_URL}/pictures/about us/au_polymer.jpg`,
    altText: 'au_polymer',
  },
  {
    src: `${process.env.PUBLIC_URL}/pictures/about us/au_granules.jpg`,
    altText: 'au_granules',
  },
]

export default function AboutUs2() {
  const { t } = useTranslation()

  const pictures = items.map(item => {
    return (
      <img src={item.src} alt={item.altText}/>
    )
  })

  return (
    <section className='page-section d-flex d-sm-none'>
      <div className='about-us-2' id={encodeURI(t('Nav.about us'))}>
        <div className='col-6' >
          <h2>
            {t('About Us.title')}
          </h2>
          <p>
            {t('About Us.p1')}
          </p>
          <p>
            {t('About Us.p2')}
          </p>
        </div>
        <div className='col-6' >
          {pictures}
        </div>
      </div>
    </section>
  )
}