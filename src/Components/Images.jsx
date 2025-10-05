import React from 'react'

const Images = ({className , AltSrc, ImgSrc}) => {
  return (
    <img src={ImgSrc} alt={AltSrc} className={`${className}`}/>
  )
}

export default Images