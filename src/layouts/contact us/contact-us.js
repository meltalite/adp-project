import React from 'react';
import './contact-us.scss';
import { useTranslation } from 'react-i18next';
import EmailForm from './email/email-form';

const items = [
  {
    src: `${process.env.PUBLIC_URL}/pictures/contact us/cu_cs.jpg`,
    altText: 'cu_cs',
  },
  {
    src: `${process.env.PUBLIC_URL}/pictures/contact us/cu_polymer.jpg`,
    altText: 'cu_polymer',
  },
  {
    src: `${process.env.PUBLIC_URL}/pictures/contact us/cu_granules.jpg`,
    altText: 'cu_granules',
  },
]

export default function ContacUs() {
  const { t } = useTranslation()

  const pictures = items.map((item, index) => {
    return (index === 0 ?
      (
        <div className='col-12' key={item.altText} >
        <img src={item.src} alt={item.altText} />
        </div>
      ) : (
        <div className='col-6' key={item.altText} >
        <img src={item.src} alt={item.altText} />
        </div>
      )
    )
  })

  return (
    <section className='page-section'>
      <div className='container'>
        <div className='contact-us' id={encodeURI(t('Nav.contact us'))}>
          <div className='col-12 col-lg-7 article' >
            <h2>
              {t('Contact Us.title')}
            </h2>
            <EmailForm />
          </div>
          <div className='col-12 col-lg-5 album' >
            {pictures}
          </div>
        </div>
      </div>
    </section>
  )
}