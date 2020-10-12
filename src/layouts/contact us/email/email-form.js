import React, { useState } from 'react';
import './email-form.scss';
import { useTranslation } from 'react-i18next';

export default function EmailForm() {
  const { t } = useTranslation()
  const [showToast, setShowToast] = useState();
  const [isSuccess, setIsSuccess] = useState();

  async function send() {
    // const transporter = createTransport({
    //   host: "smtp.ethereal.email",
    //   port: 587,
    //   secure: false, // true for 465, false for other ports
    //   auth: {
    //     user: 'pinkie.kuhic@ethereal.email', // generated ethereal user
    //     pass: 'Rf45AgPBZV3hgMJtzf' // generated ethereal password
    //   }
    // })
    window.Email.send({
      // Host : "smtp.ethereal.email",
      // Username : "pinkie.kuhic@ethereal.email",
      // Password : "Rf45AgPBZV3hgMJtzf",
      // SecureToken: '78b292b4-9a53-494f-8c0b-f9d2e47ada29', // ethereal
      // SecureToken: '9787bd5a-d8fd-46b5-a46e-b3c757b3e1a1', // mailtrap
      // SecureToken: '1d07e3be-cd15-44db-8b74-caa7cdc810be', // adpi.co
      // Ad>3z&Y60F
      SecureToken: 'ef0ec99d-6632-4106-9698-b31828b2d758', // localhost
      To : 'inquiries@adpi.co',
      From : "your.client@domain.com",
      Subject : "This is the subject",
      Body : "And this is the body"
    })
    .then(message => {
      console.warn(message);
      if (message === "OK") {
        setIsSuccess(true);
      } else {
        setIsSuccess(false);
      }
    })
    .catch(error => {
      console.error(error)
      setIsSuccess(false);
    })
    .finally(() => flashToast());
  }

  function flashToast() {
    setShowToast(true)
    setTimeout(() => {
      setShowToast(false);
      setIsSuccess();
    }, 5000)
  }

  return (
    <>
      <div className='email-form'>
        <div className='col-6 name'>
          <input type='text' placeholder={t('Contact Us.name')} />
        </div>
        <div className='col-6 email'>
          <input type='text' placeholder={t('Contact Us.email')} />
        </div>
        <div className='col-6 phone'>
          <input type='text' placeholder={t('Contact Us.phone')} />
        </div>
        <div className='col-6 company'>
          <input type='text' placeholder={t('Contact Us.company')} />
        </div>
        <div className='col-12 subject'>
          <input type='text' placeholder={t('Contact Us.subject')} />
        </div>
        <div className='col-6 material'>
          <input type='text' placeholder={t('Contact Us.material')} />
        </div>
        <div className='col-6 application'>
          <input type='text' placeholder={t('Contact Us.application')} />
        </div>
        <div className='col-12 message'>
          <textarea rows="10" placeholder={t('Contact Us.message')} />
        </div>
      </div>
      <button className='submit' onClick={send}>{t('Contact Us.submit')}</button>
      {showToast && (
        <div className='notify'>{t(`Contact Us.toast ${isSuccess ? 'success' : 'failed'}`)}</div>
      )
      }
    </>
  )
}