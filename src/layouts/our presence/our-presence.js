import React, { useState } from 'react';
import './our-presence.scss';
import { useTranslation } from 'react-i18next';
import SimpleMap from './simple-map';
import { Button, CardBody, Card, Collapse } from 'reactstrap';

const defaultCoordinates = {
  center: {
    lat: 7.440793,
    lng: 109.385669
  },
  zoom: 3.7,
  locations: [
    {
      name: 'Jakarta',
      lat: -6.1882567,
      lng: 106.7365006
    },
    {
      name: 'Batam',
      lat: 1.066464,
      lng: 104.0344033
    },
    {
      name: 'Ho Chi Minh',
      lat: 10.7546664,
      lng: 106.4150337
    },
    {
      name: 'Bangkok',
      lat: 13.7245601,
      lng: 100.4930247
    },
  ]
}

export default function OurPresence() {
  const [target, setTarget] = useState()
  const [zoom, setZoom] = useState(defaultCoordinates.zoom)
  const [activeIndex, setActiveIndex] = useState()
  const { t } = useTranslation()
  const focusZoom = 17;

  const buttons = defaultCoordinates.locations.map((location, index) => {
    const target = {
      lat: location.lat,
      lng: location.lng
    }

    function changeCoordinate() {
      if (index !== activeIndex) {
        setActiveIndex(index)
        setTarget(target)
        setZoom(focusZoom)
      } else {
        setActiveIndex()
        setTarget(defaultCoordinates.center)
        setZoom(defaultCoordinates.zoom)
      }
    }

    return (
      <div key={index} className='locations'>
        <Button onClick={changeCoordinate} >{t(`Our Presence.${location.name}`)}</Button>
        <Collapse isOpen={index === activeIndex}>
          <Card>
            <CardBody>
              <p>{t(`Our Presence.Addresses.${location.name}.name`)}</p>
              <p>{t(`Our Presence.Addresses.${location.name}.office`)}</p>
              <p>{t(`Our Presence.Addresses.${location.name}.street`)}</p>
              <p>{t(`Our Presence.Addresses.${location.name}.district`)}</p>
              <p>{t(`Our Presence.Addresses.${location.name}.phone`)}</p>
              <p>{t(`Our Presence.Addresses.${location.name}.fax`)}</p>
            </CardBody>
          </Card>
        </Collapse>
      </div>
    )
  })

  return (
    <section className='page-section'>
      <div className='our-presence' id={encodeURI(t('Nav.our presence'))} >
        <div className='col-12 col-md-5 article' >
          <h2>{t('Our Presence.title')}</h2>
          {buttons}
        </div>
        <div className='col-12 col-md-5 album' >
          <div className='map' >
            <SimpleMap
              coordinates={defaultCoordinates}
              target={target}
              zoom={zoom}
            />
          </div>
        </div>
      </div>
    </section>
  )
}