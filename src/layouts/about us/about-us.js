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

export default function AboutUs() {
  const { t } = useTranslation()

  const pictures = items.map((item, index) => {
    return (index === 0 ?
      (
        <div className='col-12' >
        <img src={item.src} alt={item.altText} key={item.altText} />
        </div>
      ) : (
        <div className='col-6' >
        <img src={item.src} alt={item.altText} key={item.altText} />
        </div>
      )
    )
  })

  return (
    <section className='page-section'>
      <div className='container'>
        <div className='about-us' id={encodeURI(t('Nav.about us'))}>
          <div className='col-12 col-lg-5 article' >
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
          <div className='col-12 col-lg-5 album' >
            {pictures}
          </div>
        </div>
      </div>
    </section>
  )
}