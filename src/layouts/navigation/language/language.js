import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'
import './language.scss'
import { Tooltip } from 'reactstrap';

const languages = [
  { id: 'en', display: '🇬🇧', tooltip: 'English' },
  { id: 'jp', display: '🇯🇵', tooltip: 'Japanese' },
  { id: 'ch', display: '🇨🇳', tooltip: 'Chinese' },
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
        >
            {lang.display}
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