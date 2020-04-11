import React, { useState } from 'react'
import './products.scss'
import { useTranslation } from 'react-i18next'
import Display from './display'
import Detail from './detail'

export default function Products() {
  const { t } = useTranslation()
  const [commodity, setCommodity] = useState()
  const [activeProduct, setActiveProduct] = useState()
  const [name, setName] = useState()
  const [pictures, setPictures] = useState()

  return (
    <section className='page-section' >
      <div className='container'>
        <div className='products' id={encodeURI(t('Nav.products'))}>
          <div className='col-12 col-md-6 article'>
            <h2>{t('Products.title')}</h2>
            <Display
              setCommodity={(commodity) => setCommodity(commodity)}
              activeProduct={activeProduct}
              setActiveProduct={(product) => setActiveProduct(product)}
              setName={(name) => setName(name)}
              setPictures={(pictures) => setPictures(pictures)}
            />
          </div>
          <div className='col-12 col-md-5 album'>
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