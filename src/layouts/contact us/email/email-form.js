import React, { useRef, useState } from 'react';
import './email-form.scss';
import { useTranslation } from 'react-i18next';
import BodyTemplate from './BodyTemplate';

const HOSTINGER = {
  Token: 'fb00d8b6-63e2-4ad3-8909-ac09863069be',
  Email: 'inquiries@adpi.co'
};

export default function EmailForm() {
  const { t } = useTranslation()
  const [showToast, setShowToast] = useState();
  const [isSuccess, setIsSuccess] = useState();
  const [disabled, setDisabled] = useState();
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const companyRef = useRef();
  const subjectRef = useRef();
  const materialRef = useRef();
  const applicationRef = useRef();
  const messageRef = useRef();

  async function send() {
    setDisabled(true);
    window.Email.send({
      SecureToken: HOSTINGER.Token,
      To : HOSTINGER.Email,
      From : HOSTINGER.Email,
      Subject : subjectRef.current.value,
      Body: BodyTemplate.get({
        name: nameRef.current.value,
        email: emailRef.current.value,
        phone: phoneRef.current.value,
        company: companyRef.current.value,
        material: materialRef.current.value,
        application: applicationRef.current.value,
        message: messageRef.current.value
      })
    })
    .then(message => {
      console.log(message);
      if (message === "OK") {
        setIsSuccess(true);
        clearForm();
      } else {
        setIsSuccess(false);
      }
    })
    .catch(error => {
      console.error(error)
      setIsSuccess(false);
    })
    .finally(() => {
      flashToast();
      setDisabled(false);
    });
  }

  function flashToast() {
    setShowToast(true)
    setTimeout(() => {
      setShowToast(false);
      setIsSuccess();
    }, 5000)
  }

  function clearForm() {
    nameRef.current.value = '';
    emailRef.current.value = '';
    phoneRef.current.value = '';
    companyRef.current.value = '';
    subjectRef.current.value = '';
    materialRef.current.value = '';
    applicationRef.current.value = '';
    messageRef.current.value = '';
  }

  return (
    <>
      <div className='email-form'>
        <div className='col-6 name'>
          <input type='text' placeholder={t('Contact Us.name')}  ref={nameRef}/>
        </div>
        <div className='col-6 email'>
          <input type='text' placeholder={t('Contact Us.email')} ref={emailRef}/>
        </div>
        <div className='col-6 phone'>
          <input type='text' placeholder={t('Contact Us.phone')} ref={phoneRef}/>
        </div>
        <div className='col-6 company'>
          <input type='text' placeholder={t('Contact Us.company')} ref={companyRef}/>
        </div>
        <div className='col-6 material'>
          <input type='text' placeholder={t('Contact Us.material')} ref={materialRef}/>
        </div>
        <div className='col-6 application'>
          <input type='text' placeholder={t('Contact Us.application')} ref={applicationRef}/>
        </div>
        <div className='col-12 subject'>
          <input type='text' placeholder={t('Contact Us.subject')} ref={subjectRef}/>
        </div>
        <div className='col-12 message'>
          <textarea rows="10" placeholder={t('Contact Us.message')} ref={messageRef}/>
        </div>
      </div>
      { disabled ? 
        <button className='submit' onClick={send} disabled>{t('Contact Us.submit')}</button> 
        : 
        <button className='submit' onClick={send}>{t('Contact Us.submit')}</button> 
        }
      {showToast && (
        <div className='notify'>{t(`Contact Us.toast ${isSuccess ? 'success' : 'failed'}`)}</div>
      )
      }
    </>
  )
}