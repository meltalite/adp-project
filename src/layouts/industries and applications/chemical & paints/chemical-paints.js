import React from 'react';
import './chemical-paints.scss'
import { useTranslation } from 'react-i18next';

const items = [
  {
    src: `${process.env.PUBLIC_URL}/pictures/industries & applications/cp_paint.jpg`,
    altText: 'cp_paint',
  },
  {
    src: `${process.env.PUBLIC_URL}/pictures/industries & applications/cp_beaker.jpg`,
    altText: 'cp_beaker',
  },
  {
    src: `${process.env.PUBLIC_URL}/pictures/industries & applications/cp_polymer.jpg`,
    altText: 'cp_polymer',
  },
]

export default function ChemicalPaints({ Header, active }) {
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
      <div className={`col-12 col-lg-6 article__chemical-paints ${active ? 'active' : ''}`} >
        {Header}
        <p>{t('Industries & Applications.Chemical & Paints.p1')}</p>
      </div>
      <div className={`col-12 col-lg-5 album__chemical-paints ${active ? 'active' : ''}`} >
        {pictures}
      </div>
    </>
  )
}