import React from 'react'
import './services.scss'
import { useTranslation } from 'react-i18next'

export default function Services() {
  const { t } = useTranslation()

  return (
    <section className='page-section bg_grey' >
      <div className='container'>
        <div className='services' id={encodeURI(t('Nav.services'))}>
          <div className='col-12 col-lg-6 article'>
            <h2>{t('Services.title')}</h2>
          </div>
          <div className='col-12 col-lg-6 album'></div>
        </div>
      </div>
    </section>
  )
}