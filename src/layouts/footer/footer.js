import React from 'react';
import './footer.scss';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faInstagram,
  faTwitter,
  faFacebook,
  faYoutube,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons'

 const items = [
   { href:'https://www.instagram.com/', icon: faInstagram },
   { href:'https://www.youtube.com/', icon: faYoutube },
   { href:'https://www.facebook.com/', icon: faFacebook },
   { href:'https://www.twitter.com/', icon: faTwitter },
   { href:'https://www.linkedin.com/', icon: faLinkedin },
 ]

export default function Footer() {
  const { t } = useTranslation()

  const icons = items.map((item, index) => {
    return (
      <a href={item.href} target="_blank" rel="noopener noreferrer" key={index}><FontAwesomeIcon icon={item.icon} /></a>
    )
  })

  return (
    <footer className='footer' >
      <div className='col-md-4 about d-none d-md-block'>
        <h2>{t('Footer.about.title')}</h2>
        <p>{t('Footer.about.p1')}</p>
        <p>{t('Footer.about.p2')}</p>
        <p>{t('Footer.about.p3')}</p>
      </div>
      <div className='col-md-3 contact'>
        <h2>{t('Footer.contact.title')}</h2>
        <p>{t('Footer.contact.name')}</p>
        <p>{t('Footer.contact.office')}</p>
        <p>{t('Footer.contact.street')}</p>
        <p>{t('Footer.contact.district')}</p>
        <p>{t('Footer.contact.phone')}</p>
        <p>{t('Footer.contact.fax')}</p>
      </div>
      <div className='col-md-3 follow'>
        <h2>{t('Footer.follow.title')}</h2>
        <div className='socmed'>
          {icons}
        </div>
      </div>
      <div className='col-md-2 logo'>
      </div>
    </footer>
  )
}