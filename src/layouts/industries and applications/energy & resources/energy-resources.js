import React from 'react';
import './energy-resources.scss'
import { useTranslation } from 'react-i18next';

const items = [
  {
    src: `${process.env.PUBLIC_URL}/pictures/industries & applications/er_solar.jpg`,
    altText: 'er_solar',
  },
  {
    src: `${process.env.PUBLIC_URL}/pictures/industries & applications/er_windmill.jpg`,
    altText: 'er_windmill',
  },
  {
    src: `${process.env.PUBLIC_URL}/pictures/industries & applications/er_bulb.jpg`,
    altText: 'er_bulb',
  },
]

export default function EnergyResources({ Header, active }) {
  const { t } = useTranslation()

  const pictures = items.map(item => {
    return (
      <img src={item.src} alt={item.altText} key={item.altText} />
    )
  })
  return (
    <>
      <div className={`col-12 col-md-6 article__energy-resources ${active ? 'active' : ''}`} >
        <Header />
        <p>{t('Industries & Applications.Energy & Resources.p1')}</p>
      </div>
      <div className={`col-12 col-md-5 album__energy-resources ${active ? 'active' : ''}`} >
        {pictures}
      </div>
    </>
  )
}
