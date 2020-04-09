import React, { useState } from 'react';
import { Button, CardBody, Card, Collapse } from 'reactstrap';
import { useTranslation } from 'react-i18next';

export const defaultCoordinates = {
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

export default function Locations({ setTarget, setZoom }) {
  const [activeIndex, setActiveIndex] = useState()
  const { t } = useTranslation()
  const focusZoom = 17;

  const changeCoordinate = (index, target) => {
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

  return defaultCoordinates.locations.map((location, index) => {
    const target = {
      lat: location.lat,
      lng: location.lng
    }

    return (
      <div key={index} className='locations'>
        <Button onClick={() => changeCoordinate(index, target)} >{t(`Our Presence.${location.name}`)}</Button>
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
}