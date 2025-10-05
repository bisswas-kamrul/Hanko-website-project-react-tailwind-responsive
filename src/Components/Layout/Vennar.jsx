import React from "react";
import Container from "../Container";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Vennar = () => {
  return (
    <>
      <div className="bg-black overflow-x-hidden">
        <Container>
          <div
            className=" md:h-[800px] bg-no-repeat bg-center bg-cover"
            style={{ backgroundImage: `URL('/banner 1.jpg')` }}>
            <h4 className="font-HeaderTextColor font-normal text-2xl text-white pl-7 pt-40">
              LIFE TIME
            </h4>
            <h1 className=" font-HeaderTextColor font-semibold md:text-5xl text-white pt-2 pl-7">
              GAMING EXPERIENCE
            </h1>
            <p className="font-HeaderTextColor font-normal text-sm text-white pl-7 pt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae alias voluptas optio.<br></br>
              Veritatis recusandae pariatur qui dignissimos dolore similique ad
              adipisci eum. Quos <br></br>
              aliquid fugiat magni illum eius?
            </p>
            <div className=" relative   inline-block">
             <a href="#"> <button className="h-[40px] w-[120px] bg-white shadow-xs ml-7 mt-3 text-center text-black font-HeaderTextColor">
                View More
              </button></a>
            </div>
            <div className="flex-col gap-y-3 ml-7  mt-5  md:flex-row flex gap-x-5 items-cente text-white md:ml-7 md:mt-80">
             <a href="#"> <FaFacebook /></a>
              <FaLinkedinIn />
              <FaTwitter />
              <FaInstagram />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Vennar;
