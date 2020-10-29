import React from 'react';
import './contact-us.scss';
import { useTranslation } from 'react-i18next';
import EmailForm from './email/email-form';

const items = [
  {
    src: `${process.env.PUBLIC_URL}/pictures/contact us/cu_1.jpg`,
    altText: 'cu_1',
  },
  {
    src: `${process.env.PUBLIC_URL}/pictures/contact us/cu_2.jpg`,
    altText: 'cu_2',
  },
  {
    src: `${process.env.PUBLIC_URL}/pictures/contact us/cu_3.jpg`,
    altText: 'cu_3',
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
          <div className='col-12 col-lg-5 article' >
            <h2>
              {t('Contact Us.title')}
            </h2>
            <p>{t('Footer.Contact.name')}</p>
            <p>{t('Footer.Contact.office')}</p>
            <p>{t('Footer.Contact.street')}</p>
            <p>{t('Footer.Contact.district')}</p>
          <table>
            <tbody>
                <tr>
                  <td>Telp</td><td>: {t('Footer.Contact.phone')}</td>
                </tr>
                <tr>
                  <td>Fax</td><td>: {t('Footer.Contact.fax')}</td>
                </tr>
            </tbody>
          </table>
          </div>
          <div className='col-12 col-lg-5 album' >
            {pictures}
          </div>
          <div className='col-12 col-lg-7 email-sheet' >
            <EmailForm />
          </div>
        </div>
      </div>
    </section>
  )
}