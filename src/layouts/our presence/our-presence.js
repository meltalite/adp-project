import React, { useState } from 'react';
import './our-presence.scss';
import { useTranslation } from 'react-i18next';
import SimpleMap from './map/simple-map';
import Locations, { defaultCoordinates } from './locations/Locations';

export default function OurPresence() {
  const [target, setTarget] = useState()
  const [zoom, setZoom] = useState(defaultCoordinates.zoom)
  const { t } = useTranslation()

  return (
    <section className='page-section'>
      <div className='container'>
        <div className='our-presence' id={encodeURI(t('Nav.our presence'))} >
          <div className='col-12 col-lg-5 article' >
            <h2>{t('Our Presence.title')}</h2>
            <Locations
              setTarget={(target) => setTarget(target)}
              setZoom={(zoom) => setZoom(zoom)}
            />
          </div>
          <div className='col-12 col-lg-5 album' >
            <div className='map' >
              <SimpleMap
                coordinates={defaultCoordinates}
                target={target}
                zoom={zoom}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}