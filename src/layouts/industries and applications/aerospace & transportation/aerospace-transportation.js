import React from 'react';
import './aerospace-transportation.scss'
import { useTranslation } from 'react-i18next';

const items = [
  {
    src: `${process.env.PUBLIC_URL}/pictures/industries & applications/at_engine.jpg`,
    altText: 'at_engine',
  },
  {
    src: `${process.env.PUBLIC_URL}/pictures/industries & applications/at_aircraft.jpg`,
    altText: 'at_aircraft',
  },
  {
    src: `${process.env.PUBLIC_URL}/pictures/industries & applications/at_tech.jpg`,
    altText: 'at_tech',
  },
]

export default function AerospaceTransportation({ Header, active }) {
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
    <>
      <div className={`col-12 col-md-6 article__aerospace-transportation ${active ? 'active' : ''}`} >
        <Header />
        <p>{t('Industries & Applications.Aerospace & Transportation.p1')}</p>
        <p>{t('Industries & Applications.Aerospace & Transportation.p2')}</p>
      </div>
      <div className={`col-12 col-md-5 album__aerospace-transportation ${active ? 'active' : ''}`} >
        {pictures}
      </div>
    </>
  )
}