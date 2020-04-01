import React, { useState } from 'react'
import './industries-applications.scss'
import { useTranslation } from 'react-i18next'
import Automotive from './automotive/automotive'
import ConsumerGoods from './consumer goods/consumer-goods'
import AutomotiveSvg from '../../assets/svg/automotive.svg'
import CgoodsSvg from '../../assets/svg/cgoods.svg'
import ElectricalSvg from '../../assets/svg/electrical.svg'
import HealthcareSvg from '../../assets/svg/healthcare.svg'
import ChemicalSvg from '../../assets/svg/chemical.svg'
import AerospaceSvg from '../../assets/svg/aerospace.svg'
import EnergySvg from '../../assets/svg/energy.svg'
import ElectricalElectronics from './electrical electronics/electrical-electronics'

const items = [
  { icon: AutomotiveSvg, component: Automotive, name: 'Automotive', class:'automotive' },
  { icon: CgoodsSvg, component: ConsumerGoods, name: 'Consumer Goods', class: 'consumergoods' },
  { icon: ElectricalSvg, component: ElectricalElectronics, name: 'Electrical & Electronics', class: 'electricalelectronics' },
  { icon: HealthcareSvg, component: ConsumerGoods, name: 'Healthcare', class: 'consumergoods' },
  { icon: ChemicalSvg, component: ConsumerGoods, name: 'Chemical & Paints', class: 'consumergoods' },
  { icon: AerospaceSvg, component: ConsumerGoods, name: 'Aerospace & Transportation', class: 'consumergoods' },
  { icon: EnergySvg, component: ConsumerGoods, name: 'Energy & Resources', class: 'consumergoods' },
]

export default function IndustriesApplications() {
  const [activeIndex, setActiveIndex] = useState(0)
  const { t } = useTranslation()

  const changeActiveIndex = (index) => setActiveIndex(index)

  const tabs = items.map((item, index) => {
    const itemClass = item.class
    const active = index === activeIndex
    return (
      <div className='wrapper'>
        <button
          className={`tab-button__${itemClass}`}
          onClick={() => changeActiveIndex(index)}
          key={index}
        >
          <img src={item.icon} alt={item.name} className={`tab-icon ${active ? 'active' : ''}`} />
        </button>
        {
          active && <div>{t(`Industries & Applications.${item.name}.title`)}</div>
        }
      </div>
    )
  })

  const Header = () => {
    return (
      <div className='header'>
        <h3>{t('Nav.industries & applications')}</h3>
        <div className='header-tab'>
          {(tabs)}
        </div>
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
        key={index}
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