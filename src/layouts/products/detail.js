import React from 'react'
import './detail.scss'
import { useTranslation } from 'react-i18next'

export default function Detail({ commodity, name, pictures}) {
  const { t } = useTranslation()
  return (commodity && name) ? (
    <div className='detail'>
      <h6>{t(`Products.${commodity}.items.${name}.name`)}</h6>
      <p>{t(`Products.${commodity}.items.${name}.desc`)}</p>
      {pictures && (
        pictures.map((pic, index) => {
          return (index === 0 ? (
            <div className='col-12'>
              <img src={pic.src} alt={pic.altText} key={pic.altText} />
            </div>
          ) : (
            <div className='col-6'>
              <img src={pic.src} alt={pic.altText} key={pic.altText} />
            </div>
            )
          )
        })
      )}
    </div>
  ) : ''
}