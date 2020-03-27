import React from 'react'
import { useTranslation } from 'react-i18next';

export default function Sections() {
  const { t } = useTranslation();
  const style = {
    padding: '70px 20px 0px 20px',
    borderBottom: '1px dashed purple'
  }
  return (
    [1].map(item => (
      <section key={item} id={item} style={style} className='page-section'>
        <div key={item} className="row" >
          <div key={item} className="col-12" >
            <h1>{t('Lipsum.title')}</h1>
            <p>{t('Lipsum.content')}</p>
          </div>
        </div>
      </section>
    ))
  )
}