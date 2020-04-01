import React from 'react';
import './consumer-goods.scss'
import { useTranslation } from 'react-i18next';

const items = [
  {
    src: `${process.env.PUBLIC_URL}/pictures/industries & applications/cg_cyclist.jpg`,
    altText: 'cg_cyclist',
  },
  {
    src: `${process.env.PUBLIC_URL}/pictures/industries & applications/cg_makeup.jpg`,
    altText: 'cg_makeup',
  },
  {
    src: `${process.env.PUBLIC_URL}/pictures/industries & applications/cg_roof.jpg`,
    altText: 'cg_roof',
  },
]

export default function ConsumerGoods({ Header, active }) {
  const { t } = useTranslation()

  const pictures = items.map(item => {
    return (
      <img src={item.src} alt={item.altText} key={item.altText} />
    )
  })
  return (
    <>
      <div className={`col-12 col-md-6 article__consumer-goods ${active ? 'active' : ''}`} >
        <Header />
        <table className='col-12'>
          <tbody>
            <tr>
              <td>
                <h6>{t('Industries & Applications.Consumer Goods.t1')}</h6>
                <p>{t('Industries & Applications.Consumer Goods.p1')}</p>
              </td>
              <td></td>
              <td>
                <h6>{t('Industries & Applications.Consumer Goods.t3')}</h6>
                <p>{t('Industries & Applications.Consumer Goods.p3')}</p>
              </td>
            </tr>
            <tr>
              <td>
                <h6>{t('Industries & Applications.Consumer Goods.t2')}</h6>
                <p>{t('Industries & Applications.Consumer Goods.p2')}</p>
              </td>
              <td></td>
              <td>
                <h6>{t('Industries & Applications.Consumer Goods.t4')}</h6>
                <p>{t('Industries & Applications.Consumer Goods.p4')}</p>
              </td>
            </tr>
          </tbody>
          </table>
        </div>
      <div className={`col-12 col-md-5 album__consumer-goods ${active ? 'active' : ''}`} >
        {pictures}
      </div>
    </>
  )
}