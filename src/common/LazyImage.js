import React from 'react';

export default function LazyImage({ src, alt, className }) {
  return (
    <img data-src={src} alt={alt} className={`lazyload ${className}`} />
  )
}