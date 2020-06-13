import React from 'react'
import './automotive.scss'
import { useTranslation } from 'react-i18next';

const items = [
  {
    src: `${process.env.PUBLIC_URL}/pictures/industries & applications/auto.png`,
    altText: 'auto',
  },
]

export default function Automotive({ Header, active }) {
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
      <div className={`col-12 col-lg-6 article__automotive ${active ? 'active' : ''}`} >
        {Header}
        <h6>{t('Industries & Applications.Automotive.t1')}</h6>
        <p>{t('Industries & Applications.Automotive.p1')}</p>
        <h6>{t('Industries & Applications.Automotive.t2')}</h6>
        <p>{t('Industries & Applications.Automotive.p2')}</p>
      </div>
      <div className={`col-12 col-lg-5 album__automotive ${active ? 'active' : ''}`} >
        {pictures}
      </div>
    </>
  )
}