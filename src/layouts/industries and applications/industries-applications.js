import React, { useState } from 'react'
import './industries-applications.scss'
import { useTranslation } from 'react-i18next'
import Automotive from './automotive/automotive'
import ConsumerGoods from './consumer goods/consumer-goods'
import ElectricalElectronics from './electrical electronics/electrical-electronics'
import Healthcare from './healthcare/healthcare'
import ChemicalPaints from './chemical & paints/chemical-paints'
import AerospaceTransportation from './aerospace & transportation/aerospace-transportation'
import EnergyResources from './energy & resources/energy-resources'
import AutomotiveSvg from '../../assets/svg/automotive.svg'
import CgoodsSvg from '../../assets/svg/cgoods.svg'
import ElectricalSvg from '../../assets/svg/electrical.svg'
import HealthcareSvg from '../../assets/svg/healthcare.svg'
import ChemicalSvg from '../../assets/svg/chemical.svg'
import AerospaceSvg from '../../assets/svg/aerospace.svg'
import EnergySvg from '../../assets/svg/energy.svg'

const items = [
  { icon: AutomotiveSvg, component: Automotive, name: 'Automotive', class:'automotive' },
  { icon: CgoodsSvg, component: ConsumerGoods, name: 'Consumer Goods', class: 'consumergoods' },
  { icon: ElectricalSvg, component: ElectricalElectronics, name: 'Electrical & Electronics', class: 'electricalelectronics' },
  { icon: HealthcareSvg, component: Healthcare, name: 'Healthcare', class: 'healthcare' },
  { icon: ChemicalSvg, component: ChemicalPaints, name: 'Chemical & Paints', class: 'chemicalpaints' },
  { icon: AerospaceSvg, component: AerospaceTransportation, name: 'Aerospace & Transportation', class: 'aerospacetransportation' },
  { icon: EnergySvg, component: EnergyResources, name: 'Energy & Resources', class: 'energyresources' },
]

export default function IndustriesApplications() {
  const [activeIndex, setActiveIndex] = useState(0)
  const { t } = useTranslation()

  const changeActiveIndex = (index) => setActiveIndex(index)

  const tabs = items.map((item, index) => {
    const itemClass = item.class
    const active = index === activeIndex
    return (
      <div key={index} className='wrapper'>
        <button
          className={`tab-button__${itemClass}`}
          onClick={() => changeActiveIndex(index)}
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
        <h2>{t('Industries & Applications.title')}</h2>
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
        Header={Header()}
        active={active}
        key={index}
      />
    )
  })

  return (
    <section className='page-section bg_blue' >
      <div className='container'>
        <div className='industries-applications' id={encodeURI(t('Nav.industries & applications'))}>
          {pages}
        </div>
      </div>
    </section>
  )
}