import React from 'react'

function Flex({children, className}) {
  return (
    <div className={`flex justify-between items-center gap-x-3 ${className}`}>{children}</div>
  )
}

export default Flex
