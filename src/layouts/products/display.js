import React, { useState } from 'react';
import './display.scss';
import { Collapse } from 'reactstrap';
import commodityList from './commodity-list';
import { useTranslation } from 'react-i18next';

const Dropdown = ({ setCommodity, activeProduct, setActiveProduct, setName, setPictures, commodity, products }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const { t } = useTranslation()

  const changeProductDesc = (index, commodity, name, pictures) => {
    if (index !== activeIndex) {
      setActiveIndex(index)
      setName(name)
      setCommodity(commodity)
      setPictures(pictures)
    } else {
      setActiveIndex()
      setName()
      setCommodity()
      setPictures()
    }
  }

  const items = products.map((product, index) => {
    return (
      <button
        key={product.name}
        className={`product ${index === activeIndex ? 'active' : ''}`}
        onClick={() => changeProductDesc(index, commodity, product.name, product.pictures)}
      >
        {t(`Products.${commodity}.items.${product.name}.name`)}
      </button>
    )
  })

  const changeActiveProduct = () => {
    if(activeProduct !== commodity) {
      setActiveProduct(commodity)
    } else {
      setActiveProduct()
    }
  }

  return (
    <>
      <button
        className='dropdown'
        onClick={changeActiveProduct}
      >
        {t(`Products.${commodity}.title`)}
      </button>
      <Collapse isOpen={commodity === activeProduct}>
        {items}
      </Collapse>
    </>
  )
}

export default function Display({ setCommodity, setName, setDescription, setPictures }) {
  const [activeProduct, setActiveProduct] = useState('Commodity Plastic')
  const keys = Object.keys(commodityList)

  return (
    <div className='display'>
      {keys.map(key => {
        const products = commodityList[key]
        return (
          <Dropdown
            setCommodity={setCommodity}
            activeProduct={activeProduct}
            setActiveProduct={setActiveProduct}
            setName={setName}
            setDescription={setDescription}
            setPictures={setPictures}
            commodity={key}
            products={products}
            key={key}
          />
        )
      })}
    </div>
  )
}