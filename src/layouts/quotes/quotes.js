import React from 'react'
import { useTranslation } from 'react-i18next';
import './quotes.scss'

const quoteList = [
  {
    src: `${process.env.PUBLIC_URL}/pictures/quotes/person_1.jpg`,
    alt: 'person_1',
    name: "Roger Waterfield",
    profession: "CEO, Bayer Asia",
    text: "Lipsum.short"
  },
  {
    src: `${process.env.PUBLIC_URL}/pictures/quotes/person_2.jpg`,
    alt: 'person_2',
    name: "Maggie Sliverstone",
    profession: "Head of Product Development, Bayer Asia",
    text: "Lipsum.short"
  },
]

const dquote = <div className='dquote'><img src={`${process.env.PUBLIC_URL}/pictures/quotes/dquote.png`} alt='dquote' /></div>

export default function Quotes() {
  const { t } = useTranslation();
  const quotes = quoteList.map((quote, index) => (
    <div key={index} className="col-12 col-lg-5 quote">
      <img className='photo' src={quote.src} alt={quote.alt} />
      <p>{quote.name}</p>
      <p>{quote.profession}</p>
      {dquote}
      <p>{t('Lipsum.short')}</p>
      {dquote}
    </div>
  ))

  return (
    <section className='page-section bg_black' >
      <div className='container'>
        <div className='quotes'>
          {quotes}
        </div>
      </div>
    </section>
  )
}