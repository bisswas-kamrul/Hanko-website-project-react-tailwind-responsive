import React from 'react'

const Bage = ({bageText ,className}) => {
  return (
    <div className={`h-[40px] w-[80px] bg-[#FF4655] text-center rounded-2xl ml-3 ${className}`}>{bageText}</div>
  )
}

export default Bage