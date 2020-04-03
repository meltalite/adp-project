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
import AdpWhiteSvg from '../../assets/svg/adp-white.svg'

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
        <h2>{t('Footer.About.title')}</h2>
        <p>{t('Footer.About.p1')}</p>
        <p>{t('Footer.About.p2')}</p>
        <p>{t('Footer.About.p3')}</p>
      </div>
      <div className='col-12 col-md-3 contact'>
        <h2>{t('Footer.Contact.title')}</h2>
        <p>{t('Footer.Contact.name')}</p>
        <p>{t('Footer.Contact.office')}</p>
        <p>{t('Footer.Contact.street')}</p>
        <p>{t('Footer.Contact.district')}</p>
        <p>{t('Footer.Contact.phone')}</p>
        <p>{t('Footer.Contact.fax')}</p>
      </div>
      <div className='col-8 col-md-3 follow'>
        <h2>{t('Footer.Follow.title')}</h2>
        <div className='socmed'>
          {icons}
        </div>
      </div>
      <div className='col-4 col-md-2 logo'>
        <img src={AdpWhiteSvg} alt='adp-white' />
      </div>
    </footer>
  )
}