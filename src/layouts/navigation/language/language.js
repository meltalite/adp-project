import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'
import './language.scss'
import { Tooltip } from 'reactstrap';
import UKSvg from '../../../assets/svg/uk.svg'
import JPSvg from '../../../assets/svg/jp.svg'
import CHSvg from '../../../assets/svg/ch.svg'

const languages = [
  { id: 'en', display: UKSvg, tooltip: 'English' },
  { id: 'jp', display: JPSvg, tooltip: 'Japanese' },
  { id: 'ch', display: CHSvg, tooltip: 'Chinese' },
]

export default function Language() {
  const { i18n } = useTranslation()

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }

  const TooltipedButton = ({ lang }) => {
    const [tooltipOpen, setTooltipOpen] = useState(false);
    const toggle = () => setTooltipOpen(!tooltipOpen);
    return (
        <button
          key={lang.id}
          onClick={() => changeLanguage(lang.id)}
          id={lang.tooltip}
          className={lang.id}
        >
            <img src={lang.display} alt={lang.id} />
            <Tooltip placement='bottom' isOpen={tooltipOpen} target={lang.tooltip} toggle={toggle}>{lang.tooltip}</Tooltip>
        </button>
    )
  }

  return (
    <div className='nav-menu__lang'>
      {languages.map((lang, index) => <TooltipedButton lang={lang} key={index}/>)}
    </div>
  )
}