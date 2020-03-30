import React from 'react'
import './automotive.scss'
import { useTranslation } from 'react-i18next';

const items = [
  {
    src: `${process.env.PUBLIC_URL}/pictures/industries & applications/auto_showroom_car.jpg`,
    altText: 'auto_showroom_car',
  },
  {
    src: `${process.env.PUBLIC_URL}/pictures/industries & applications/auto_blue_car.jpg`,
    altText: 'auto_blue_car',
  },
  {
    src: `${process.env.PUBLIC_URL}/pictures/industries & applications/auto_speedometer.jpg`,
    altText: 'auto_speedometer',
  },
]

export default function Automotive({ Header, active }) {
  const { t } = useTranslation()

  const pictures = items.map(item => {
    return (
      <img src={item.src} alt={item.altText} key={item.altText} />
    )
  })
  return (
    <>
      <div className={`col-12 col-md-6 article__automotive ${active ? 'active' : ''}`} >
        <Header />
        <h6>{t('Industries & Applications.Automotive.t1')}</h6>
        <p>{t('Industries & Applications.Automotive.p1')}</p>
        <h6>{t('Industries & Applications.Automotive.t2')}</h6>
        <p>{t('Industries & Applications.Automotive.p2')}</p>
      </div>
      <div className={`col-12 col-md-5 album__automotive ${active ? 'active' : ''}`} >
        {pictures}
      </div>
    </>
  )
}