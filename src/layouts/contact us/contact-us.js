import React from 'react';
import './contact-us.scss';
import { useTranslation } from 'react-i18next';
import EmailForm from './email/email-form';

export default function ContacUs() {
  const { t } = useTranslation()

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
        </div>
      </div>
    </section>
  )
}