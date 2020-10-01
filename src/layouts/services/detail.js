import React from 'react'
import './detail.scss'

export default function Detail({ service, pictures}) {
  return service ? (
    <div className='detail'>
      {pictures && (
        pictures.map((pic, index) => {
          return (index === 2 ? (
            <div className='col-12' key={pic.altText + '-' + index}>
              <img src={pic.src} alt={pic.altText} />
            </div>
          ) : (
            <div className='col-6' key={pic.altText + '-' + index}>
              <img src={pic.src} alt={pic.altText} />
            </div>
            )
          )
        })
      )}
    </div>
  ) : ''
}