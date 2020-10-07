import React from 'react';
import './footer.scss';
import { useTranslation } from 'react-i18next';
import AdpWhiteSvg from '../../assets/svg/adp-white.svg'
import IgSvg from '../../assets/svg/ig.svg'
import YoutubeSvg from '../../assets/svg/youtube.svg'
import FacebookSvg from '../../assets/svg/fb.svg'
import TwitterSvg from '../../assets/svg/twitter.svg'
import LinkedinSvg from '../../assets/svg/linkedin.svg'

 const items = [
   { href:'https://www.instagram.com/', icon: IgSvg },
   { href:'https://www.youtube.com/', icon: YoutubeSvg },
   { href:'https://www.facebook.com/', icon: FacebookSvg },
   { href:'https://www.twitter.com/', icon: TwitterSvg },
   { href:'https://www.linkedin.com/', icon: LinkedinSvg },
 ]

export default function Footer() {
  const { t } = useTranslation()

  const icons = items.map((item, index) => {
    return (
      <a href={item.href} target="_blank" rel="noopener noreferrer" key={index}>
        <img src={item.icon} alt='socmed' />
      </a>
    )
  })

  return (
    <footer className='footer' >
      <div className='container'>
        <div className='col-lg-4 about d-none d-lg-block'>
          <h2>{t('Footer.About.title')}</h2>
          <p>{t('Footer.About.p1')}</p>
          <p>{t('Footer.About.p2')}</p>
          <p>{t('Footer.About.p3')}</p>
        </div>
        <div className='col-12 col-lg-3 contact'>
          <h2>{t('Footer.Contact.title')}</h2>
          <p>{t('Footer.Contact.name')}</p>
          <p>{t('Footer.Contact.office')}</p>
          <p>{t('Footer.Contact.street')}</p>
          <p>{t('Footer.Contact.district')}</p>
          <p>{t('Footer.Contact.phone')}</p>
          <p>{t('Footer.Contact.fax')}</p>
        </div>
        <div className="col-12 col-lg-5 follow-logo">
          <h2>{t('Footer.Follow.title')}</h2>
          <div className='follow'>
            <div className='socmed'>
              {icons}
            </div>
          </div>
          <div className='logo'>
            <img src={AdpWhiteSvg} alt='adp-white' />
          </div>
        </div>
      </div>
    </footer>
  )
}