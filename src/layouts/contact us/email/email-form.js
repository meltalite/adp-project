import React, { useState } from 'react';
import './email-form.scss';
import { useTranslation } from 'react-i18next';
import { createTransport, getTestMessageUrl } from 'nodemailer'

export default function EmailForm() {
  const { t } = useTranslation()
  const [showToast, setShowToast] = useState();
  const [isSuccess, setIsSuccess] = useState();

  function onSubmit() {
    send().catch(console.error)
    flashToast()
  }

  async function send() {
    // create reusable transporter object using the default SMTP transport
    const transporter = createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'pinkie.kuhic@ethereal.email', // generated ethereal user
        pass: 'Rf45AgPBZV3hgMJtzf' // generated ethereal password
      }
    })

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: 'pinkie.kuhic@ethereal.email', // sender address
      to: "pinkie.kuhic@ethereal.email", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>" // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", getTestMessageUrl(info));
  }

  function flashToast() {
    setShowToast(true)
    setTimeout(() => {
      setShowToast(false)
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
        <div className='col-12 subject'>
          <input type='text' placeholder={t('Contact Us.subject')} />
        </div>
        <div className='col-12 message'>
          <textarea rows="10" placeholder={t('Contact Us.message')} />
        </div>
      </div>
      <button className='submit' onClick={onSubmit}>{t('Contact Us.submit')}</button>
      {showToast && (
        <div className='notify'>{t(`Contact Us.toast ${isSuccess ? 'success' : 'failed'}`)}</div>
      )
      }
    </>
  )
}