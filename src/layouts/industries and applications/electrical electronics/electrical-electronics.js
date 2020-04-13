import React from 'react';
import './electrical-electronics.scss'
import { useTranslation } from 'react-i18next';

const items = [
  {
    src: `${process.env.PUBLIC_URL}/pictures/industries & applications/ee_fiber_optic.jpg`,
    altText: 'ee_fiber_optic',
  },
  {
    src: `${process.env.PUBLIC_URL}/pictures/industries & applications/ee_vacuum_cleaner.jpg`,
    altText: 'ee_vacuum_cleaner',
  },
  {
    src: `${process.env.PUBLIC_URL}/pictures/industries & applications/ee_drills.jpg`,
    altText: 'ee_drills',
  },
]

export default function ElectricalElectronics({ Header, active }) {
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
      <div className={`col-12 col-lg-6 article__electrical-electronics ${active ? 'active' : ''}`} >
        <Header />
        <p>{t('Industries & Applications.Electrical & Electronics.p1')}</p>
      </div>
      <div className={`col-12 col-lg-5 album__electrical-electronics ${active ? 'active' : ''}`} >
        {pictures}
      </div>
    </>
  )
}