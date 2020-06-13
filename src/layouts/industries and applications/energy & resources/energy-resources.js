import React from 'react';
import './energy-resources.scss'
import { useTranslation } from 'react-i18next';

const items = [
  {
    src: `${process.env.PUBLIC_URL}/pictures/industries & applications/er.png`,
    altText: 'er',
  },
]

export default function EnergyResources({ Header, active }) {
  const { t } = useTranslation()

  const pictures = items.map((item, index) => {
    return (index === 0 ?
      (
        <div className='col-12' key={item.altText} >
          <img src={item.src} alt={item.altText} />
        </div>
      ) : (
        <div className='col-6' key={item.altText} >
          <img src={item.src} alt={item.altText} />
        </div>
      )
    )
  })
  return (
    <>
      <div className={`col-12 col-lg-6 article__energy-resources ${active ? 'active' : ''}`} >
        {Header}
        <p>{t('Industries & Applications.Energy & Resources.p1')}</p>
      </div>
      <div className={`col-12 col-lg-5 album__energy-resources ${active ? 'active' : ''}`} >
        {pictures}
      </div>
    </>
  )
}
