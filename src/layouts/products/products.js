import React, { useState } from 'react'
import './products.scss'
import { useTranslation } from 'react-i18next'
import Display from './display'
import Detail from './detail'

export const INITIAL_PICTURE = [
      {
        src: `${process.env.PUBLIC_URL}/pictures/products/initial.jpg`,
        altText: 'initial'
      }
    ]

export default function Products() {
  const { t } = useTranslation()
  const [commodity, setCommodity] = useState()
  const [name, setName] = useState()
  const [pictures, setPictures] = useState(INITIAL_PICTURE)

  return (
    <section className='page-section' >
      <div className='container'>
        <div className='products' id={encodeURI(t('Nav.products'))}>
          <div className='col-12 col-lg-6 article'>
            <h2>{t('Products.title')}</h2>
            <Display
              setCommodity={(commodity) => setCommodity(commodity)}
              setName={(name) => setName(name)}
              setPictures={(pictures) => setPictures(pictures)}
            />
          </div>
          <div className='col-12 col-lg-5 album'>
            <Detail
              commodity={commodity}
              name={name}
              pictures={pictures}
            />
          </div>
        </div>
      </div>
    </section>
  )
}