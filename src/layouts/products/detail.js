import React from 'react'
import './detail.scss'
import { useTranslation } from 'react-i18next'
import LazyImage from '../../common/LazyImage'

export default function Detail({ commodity, name, pictures}) {
  const { t } = useTranslation()
  return  (
    <div className='detail'>
      {name && <h6>{t(`Products.${commodity}.items.${name}.name`)}</h6> }
      {name && <p>{t(`Products.${commodity}.items.${name}.desc`)}</p>}
      {pictures && (
        pictures.map((pic, index) => {
          return (index === 0 ? (
            <div className='col-12' key={index}>
              <LazyImage src={pic.src} alt={pic.altText} key={pic.altText} className={pic.altText}/>
            </div>
          ) : (
            <div className='col-6' key={index}>
              <LazyImage src={pic.src} alt={pic.altText} key={pic.altText} className={pic.altText}/>
            </div>
            )
          )
        })
      )}
    </div>
  )
}