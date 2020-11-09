import React from 'react';
import './our-presence.scss';
import { useTranslation } from 'react-i18next';
import MapDesktopSvg from '../../assets/svg/map-desktop.svg';
import MapMobileSvg from '../../assets/svg/map-mobile.svg';
import LazyImage from '../../common/LazyImage';

export default function OurPresence() {
  const { t } = useTranslation()
  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
  const svg = vw >= 992 ? MapDesktopSvg : MapMobileSvg;

  return (
    <section className='page-section'>
      <div className='container'>
        <div className='our-presence' id={encodeURI(t('Nav.our presence'))} >
          <div className='col-12 article' >
            <h2>{t('Our Presence.title')}</h2>
            <div className='map-container'>
              <LazyImage className='map-container__pic' src={svg} alt='map' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}