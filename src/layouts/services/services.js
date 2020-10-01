import React, { useState } from 'react'
import './services.scss'
import { useTranslation } from 'react-i18next'
import Display from './display'
import Detail from './detail'
import activityList from './activity-list'

export default function Services() {
  const { t } = useTranslation()
  const [service, setService] = useState(activityList["Solution Provider"].name)
  const [pictures, setPictures] = useState(activityList["Solution Provider"].pictures)

  return (
    <section className='page-section bg_grey' >
      <div className='container'>
        <div className='services' id={encodeURI(t('Nav.services'))}>
          <div className='col-12 col-lg-6 article'>
            <h2>{t('Services.title')}</h2>
            <Display
              service={service}
              setService={(service) => setService(service)}
              setPictures={(pictures) => setPictures(pictures)}
            />
          </div>
          <div className='col-12 col-lg-5 album'>
            <Detail
              service={service}
              pictures={pictures}
            />
          </div>
        </div>
      </div>
    </section>
  )
}