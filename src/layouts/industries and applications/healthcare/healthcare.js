import React from 'react';
import './healthcare.scss'
import { useTranslation } from 'react-i18next';

const items = [
  {
    src: `${process.env.PUBLIC_URL}/pictures/industries & applications/h_prescription.jpg`,
    altText: 'h_prescription',
  },
  {
    src: `${process.env.PUBLIC_URL}/pictures/industries & applications/h_sanitizer.jpg`,
    altText: 'h_sanitizer',
  },
  {
    src: `${process.env.PUBLIC_URL}/pictures/industries & applications/h_syringe.jpg`,
    altText: 'h_syringe',
  },
]

export default function Healthcare({ Header, active }) {
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
      <div className={`col-12 col-lg-6 article__healthcare ${active ? 'active' : ''}`} >
        <Header />
        <p>{t('Industries & Applications.Healthcare.p1')}</p>
      </div>
      <div className={`col-12 col-lg-5 album__healthcare ${active ? 'active' : ''}`} >
        {pictures}
      </div>
    </>
  )
}