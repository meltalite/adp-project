import React from 'react'
import './detail.scss'

export default function Detail({ service, pictures}) {
  return service ? (
    <div className='detail'>
      {pictures && (
        pictures.map((pic, index) => (
          <div className='col-6' key={pic.altText + '-' + index}>
            <img src={pic.src} alt={pic.altText} />
          </div>
        ))
      )}
    </div>
  ) : ''
}