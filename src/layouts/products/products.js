import React, { useState } from 'react'
import './products.scss'
import { useTranslation } from 'react-i18next'
import Display from './display'
import Detail from './detail'
import commodityList from './commodity-list'

export default function Products() {
  const { t } = useTranslation()
  const [commodity, setCommodity] = useState("Engineering Plastic")
  const [name, setName] = useState(commodityList["Engineering Plastic"][10].name)
  const [pictures, setPictures] = useState(commodityList["Engineering Plastic"][10].pictures)

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