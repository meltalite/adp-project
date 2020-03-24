import React from 'react';
import { useTranslation } from 'react-i18next'
import './language.scss'

export default function Language() {
  const { i18n } = useTranslation()

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }

  const languages = [
    {id: 'en', display:'🇬🇧'},
    {id: 'jp', display:'🇯🇵'},
    {id: 'ch', display:'🇨🇳'},
  ]

  return (
      <div className='nav-menu__lang'>
        { languages.map(lang => (
            <button 
              key={lang.id}
              onClick={() => changeLanguage(lang.id)} 
            >{lang.display}</button>
          ))
        }
      </div>
  )
}