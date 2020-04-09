import React, { useState } from 'react';
import './display.scss';
import { Collapse } from 'reactstrap';
import commodityList from './commodity-list';
import { useTranslation } from 'react-i18next';

const Dropdown = ({ setCommodity, activeProduct, setActiveProduct, setName, setPictures, commodity, products }) => {
  const [activeIndex, setActiveIndex] = useState()
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
        className='commodity'
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

export default function Display({ setCommodity, activeProduct, setActiveProduct, setName, setDescription, setPictures }) {
  const commodities = Object.keys(commodityList)
  return (
    <div className='display'>
      {commodities.map(commodity => {
        const products = commodityList[commodity]
        return (
          <Dropdown
          setCommodity={setCommodity}
            activeProduct={activeProduct}
            setActiveProduct={setActiveProduct}
            setName={setName}
            setDescription={setDescription}
            setPictures={setPictures}
            commodity={commodity}
            products={products}
            key={commodity}
          />
        )
      })}
    </div>
  )
}