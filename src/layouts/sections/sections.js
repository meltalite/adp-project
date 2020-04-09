import React from 'react'
import { useTranslation } from 'react-i18next';

export default function Sections() {
  const { t } = useTranslation();
  const text = [1].map(item => (
    <div key={item} className="col-12" style={{padding: 'unset'}}>
      <h2>{t('Lipsum.title')}</h2>
      <p>{t('Lipsum.content')}</p>
    </div>
  ))

  const style = {
    backgroundColor: 'black',
    opacity: '.7',
    color: '#fff'
  }

  return (
    <section className='page-section' style={style}>
      {text}
    </section>
  )
}