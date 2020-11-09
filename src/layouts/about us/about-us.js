import React from 'react';
import './about-us.scss';
import { useTranslation } from 'react-i18next';
import LazyImage from '../../common/LazyImage';

const items = [
  {
    src: `${process.env.PUBLIC_URL}/pictures/about us/au_1.jpg`,
    altText: 'au_1',
  },
  {
    src: `${process.env.PUBLIC_URL}/pictures/about us/au_2.jpg`,
    altText: 'au_2',
  },
  {
    src: `${process.env.PUBLIC_URL}/pictures/about us/au_3.jpg`,
    altText: 'au_3',
  },
]

export default function AboutUs() {
  const { t } = useTranslation()

  const pictures = items.map((item, index) => {
    return (index === 0 ?
      (
        <div className='col-12' key={item.altText} >
        <LazyImage src={item.src} alt={item.altText} />
        </div>
      ) : (
        <div className='col-6' key={item.altText} >
        <LazyImage src={item.src} alt={item.altText} />
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