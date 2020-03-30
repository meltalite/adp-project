import React, { useState } from 'react'
import './industries-applications.scss'
import { useTranslation } from 'react-i18next'
import Automotive from './automotive/automotive'
import ConsumerGoods from './consumer goods/consumer-goods'
import CarSvg from '../../assets/svg/car.svg'
import BottleSvg from '../../assets/svg/bottle.svg'

const items = [
  { icon: CarSvg, component: Automotive, name: 'Automotive' },
  { icon: BottleSvg, component: ConsumerGoods, name: 'Consumer Goods' },
]

export default function IndustriesApplications() {
  const [activeIndex, setActiveIndex] = useState(0)
  const { t } = useTranslation()

  const changeActiveIndex = (index) => setActiveIndex(index)

  const tabs = items.map((item, index) => {
    const componentName = item.component.name.toLowerCase()
    const active = index === activeIndex
    return (
    <button
      className={`tab-button__${componentName} ${active ? 'active' : ''}`}
      onClick={() => changeActiveIndex(index)}
    >
      <img src={item.icon} alt={item.name} className={`tab-icon ${active ? 'active' : ''}`} />
      {
        active && t(`Industries & Applications.${item.name}.title`)
      }
    </button>
    )
  })
  
  const Header = () => {
    return (
      <div className='header'>
        <h3>{t('Nav.industries & applications')}</h3>
        {tabs}
      </div>
    )
  }

  const pages = items.map((item, index) => {
    const Component = item.component
    const active = index === activeIndex
    return (
      <Component
        className={`${Component.name.toLowerCase} ${active ? 'active' : ''}`}
        Header={Header}
        active={active}
      />
    )
  })

  return (
    <section className='page-section bg_blue' >
      <div className='industries-applications' id={encodeURI(t('Nav.industries & applications'))}>
        {pages}
      </div>
    </section>
  )
}