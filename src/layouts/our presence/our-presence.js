import React from 'react';
import './our-presence.scss';
import { useTranslation } from 'react-i18next';
import MapSvg from '../../assets/svg/map.svg';

export default function OurPresence() {
  const { t } = useTranslation()

  return (
    <section className='page-section'>
      <div className='container'>
        <div className='our-presence' id={encodeURI(t('Nav.our presence'))} >
          <div className='col-12 article' >
            <h2>{t('Our Presence.title')}</h2>
            <div className='map-container'>
              <img className='map-container__pic' src={MapSvg} alt='map' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}