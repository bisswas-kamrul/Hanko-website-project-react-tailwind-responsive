import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Images from "../Images";
import Futterpng from "../../assets/logo.png"
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import futter1 from "../../assets/futter-1.png"
import futter2 from "../../assets/futter-2.png"
import futter3 from "../../assets/futter-3.png"
import futter4 from "../../assets/futter-4.png"
import futter5 from "../../assets/futter-5.png"
import futter6 from "../../assets/futter-6.png"

const Futter = () => {
  return (
    <>
    <div className="bg-black overflow-x-hidden">
        <Container>
        <div
          className="md:h-[250px] bg-no-repeat bg-center bg-cover"
          style={{ backgroundImage: `url('/two game.jpg')` }}>
          <Flex className={"flex-col md:flex-row"}>
            <div className="">
                <Images ImgSrc={Futterpng} AltSrc={"futter.png"} className={"ml-5 mt-5"}/>
                <p className="font-HeaderTextColor font-medium text-sm text-[#666] pl-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br></br>Ipsum reprehenderit deserunt dolorem. Suscipit minus, <br></br>tenetur facilis optio cupiditate eligendi.</p>
                <div className="flex">
                    <FaFacebook  className="text-[#FF4655] ml-5 mt-10 text-2xl"/>
                <FaLinkedinIn className="text-white ml-5 mt-10 text-2xl"/>
                <FaSquareTwitter className="text-white ml-5 mt-10 text-2xl"/>
                <FaInstagram className="text-white ml-5 mt-10 text-2xl"/>
                </div>
            </div>
            <div className="">
                <h5 className="font-HeaderTextColor font-semibold text-white text-2xl">LINKS</h5>
               <ul>
                <li className="font-HeaderTextColor font-medium text-[#666] text-sm ">Home</li>
                <li className="font-HeaderTextColor font-medium text-[#666] text-sm ">About</li>
                <li className="font-HeaderTextColor font-medium text-[#666] text-sm ">Tournament</li>
                <li className="font-HeaderTextColor font-medium text-[#666] text-sm ">Contact</li>
               </ul>
            </div>
            <div className="">
                <h5 className="font-HeaderTextColor font-semibold text-white text-2xl">TEAMS</h5>
               <ul>
                <li className="font-HeaderTextColor font-medium text-[#666] text-sm ">PALADINS</li>
                <li className="font-HeaderTextColor font-medium text-[#666] text-sm ">CS:GO</li>
                <li className="font-HeaderTextColor font-medium text-[#666] text-sm ">DOTA 2</li>
                <li className="font-HeaderTextColor font-medium text-[#666] text-sm ">VALORANT</li>
               </ul>
            </div>
            <div className="">
                <h5 className="font-HeaderTextColor font-semibold text-white text-2xl">GALLERY</h5>
               <div className="flex mt-2 mr-2 gap-2">
                 <Images ImgSrc={futter1} AltSrc={"futter-1.png"} className={"h-[40px]"}/>
                 <Images ImgSrc={futter2} AltSrc={"futter-2.png"} className={"h-[40px]"}/>
                 <Images ImgSrc={futter3} AltSrc={"futter-3.png"} className={"h-[40px]"}/>
               </div>
               <div className="flex gap-2 mt-2">
                 <Images ImgSrc={futter4} AltSrc={"futter-4.png"} className={"h-[40px]"}/>
                 <Images ImgSrc={futter5} AltSrc={"futter-5.png"} className={"h-[40px]"}/>
                 <Images ImgSrc={futter6} AltSrc={"futter-6.png"} className={"h-[40px]"}/>
               </div>
            </div>
          </Flex>
        </div>
      </Container>
    </div>
    </>
  );
};

export default Futter;
