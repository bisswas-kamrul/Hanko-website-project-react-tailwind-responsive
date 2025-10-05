import React from 'react'
import Container from '../Container'

const Contact = () => {
  return (
    <>
    <div className="py-3 bg-black overflow-x-hidden">
        <Container>
           <h1
            className={
              "font-HeaderText font-bold text-2xl text-HeadrColor uppercase pl-[150px] pt-20"
            }>
            Get In Touch
          </h1>
          <div className="">
            <input
              type="text"
              placeholder=" Email address"
              className={
                "h-[50px] w-[700px] bg-white shadow-xs border-1  text-black uppercase mt-10 ml-[150px]"
              }
            />
            <input
              type="number"
              placeholder=" password"
              className={
                "h-[50px] w-[700px] bg-white shadow-xs border-1  text-black uppercase mt-5 ml-[150px]"
              }
            />
            <textarea
              placeholder={" your text"}
              className={
                "h-[200px] w-[700px] ml-[150px] mt-5 border-1 bg-white"
              }></textarea>
            <button
              className={
                "h-[50px] w-[350px] bg-black shadow-xs border-1  text-white uppercase  ml-[150px] mt-5"
              }>
              SUBMIT
            </button>
          </div>
        </Container>
    </div>
    </>
  )
}

export default Contact