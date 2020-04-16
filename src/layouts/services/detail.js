import React from 'react'
import './detail.scss'

export default function Detail({ service, pictures}) {
  return service ? (
    <div className='detail'>
      {pictures && (
        pictures.map((pic, index) => {
          return (index === 2 ? (
            <div className='col-12'>
              <img src={pic.src} alt={pic.altText} key={pic.altText} />
            </div>
          ) : (
            <div className='col-6'>
              <img src={pic.src} alt={pic.altText} key={pic.altText} />
            </div>
            )
          )
        })
      )}
    </div>
  ) : ''
}