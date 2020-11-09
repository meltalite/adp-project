import React from 'react'
import LazyImage from '../../common/LazyImage'
import './detail.scss'

export default function Detail({ service, pictures}) {
  return service ? (
    <div className='detail'>
      {pictures && (
        pictures.map((pic, index) => (
          <div className='col-6' key={pic.altText + '-' + index}>
            <LazyImage src={pic.src} alt={pic.altText} />
          </div>
        ))
      )}
    </div>
  ) : ''
}