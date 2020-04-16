import React from 'react';
import './display.scss';
import { Collapse } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import activityList from './activity-list';

const Dropdown = ({ service, setService, setPictures, activity }) => {
  const { t } = useTranslation()

  const Desc = () => {
    return (
      <>
        <h6>{t(`Services.${activity.name}.t1`)}</h6>
        <p>{t(`Services.${activity.name}.p1`)}</p>
      </>
    )
  }

  const changeActivity = () => {
    if(activity.name !== service) {
      setService(activity.name)
      setPictures(activity.pictures)
    } else {
      setService()
      setPictures()
    }
  }

  return (
    <>
      <button
        className='dropdown'
        onClick={changeActivity}
      >
        {t(`Services.${activity.name}.title`)}
      </button>
      <Collapse isOpen={service === activity.name}>
        <Desc />
      </Collapse>
    </>
  )
}

export default function Display({ service, setService, setPictures }) {
  const keys = Object.keys(activityList)
  return (
    <div className='display'>
      {keys.map(key => {
        const activity = activityList[key]
        return (
          <Dropdown
            service={service}
            setService={setService}
            setPictures={setPictures}
            activity={activity}
            key={activity.name}
          />
        )
      })}
    </div>
  )
}