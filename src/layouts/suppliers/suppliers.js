import React from 'react'
import { useTranslation } from 'react-i18next'
import './suppliers.scss'

const items = [
  {
    src: `${process.env.PUBLIC_URL}/pictures/suppliers/s_celanese.png`,
    altText: 's_celanese',
  },
  {
    src: `${process.env.PUBLIC_URL}/pictures/suppliers/s_basf.png`,
    altText: 's_basf',
  },
  {
    src: `${process.env.PUBLIC_URL}/pictures/suppliers/s_solvay.png`,
    altText: 's_solvay',
  },
]

export default function Suppliers() {
  const { t } = useTranslation()

  const logos = items.map(item => {
    return (
      <img src={item.src} alt={item.altText} key={item.altText} />
    )
  })

  return (
    <section className='page-section'>
      <div className="suppliers" id={encodeURI(t('Nav.suppliers'))}>
        <h2>
          {t('Suppliers.title')}
        </h2>
        <div className='col-12 col-md-12' >
          {logos}
        </div>
      </div>
    </section>
  )
}