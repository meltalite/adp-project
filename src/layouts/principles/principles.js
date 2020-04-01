import React from 'react'
import { useTranslation } from 'react-i18next'
import './principles.scss'

const items = [
  {
    src: `${process.env.PUBLIC_URL}/pictures/principles/p_covestro.png`,
    altText: 'p_covestro',
  },
  {
    src: `${process.env.PUBLIC_URL}/pictures/principles/p_celanese.png`,
    altText: 'p_celanese',
  },
  {
    src: `${process.env.PUBLIC_URL}/pictures/principles/p_basf.png`,
    altText: 'p_basf',
  },
  {
    src: `${process.env.PUBLIC_URL}/pictures/principles/p_solvay.png`,
    altText: 'p_solvay',
  },
  {
    src: `${process.env.PUBLIC_URL}/pictures/principles/p_lanxess.png`,
    altText: 'p_lanxess',
  },
  {
    src: `${process.env.PUBLIC_URL}/pictures/principles/p_lg-chem.png`,
    altText: 'p_lg-chem',
  },
  {
    src: `${process.env.PUBLIC_URL}/pictures/principles/p_chemours.png`,
    altText: 'p_chemours',
  },
  {
    src: `${process.env.PUBLIC_URL}/pictures/principles/p_exxon.png`,
    altText: 'p_exxon',
  },
  {
    src: `${process.env.PUBLIC_URL}/pictures/principles/p_tpsc.png`,
    altText: 'p_tpsc',
  },
]

export default function Principles() {
  const { t } = useTranslation()

  const logos = items.map(item => {
    return (
      <img src={item.src} alt={item.altText} key={item.altText} className={item.altText}/>
    )
  })

  return (
    <section className='page-section'>
      <div className="principles" id={encodeURI(t('Nav.principles'))}>
        <h2>
          {t('Principles.title')}
        </h2>
        <div className='col-12 col-md-12 logos' >
          {logos}
        </div>
      </div>
    </section>
  )
}