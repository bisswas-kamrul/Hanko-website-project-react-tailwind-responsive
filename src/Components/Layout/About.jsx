import React from "react";
import Container from "../Container";
import Images from "../Images";
import aboutpng from "../../assets/about-1.png";
import { PiArrowElbowRightThin } from "react-icons/pi";
import { FaAngleDoubleRight } from "react-icons/fa";
import Flex from "../Flex";
import CountUp from "react-countup";

const About = () => {
 
  return (
    <>
     <div className="bg-black">
       <Container>
        <div
          className=" md:h-[750px] md:bg-no-repeat md:bg-center md:bg-cover"
          style={{ backgroundImage: `URL('/about.jpg')` }}>
          <h3 className="md:font-HeaderTextColor font-semibold md:text-4xl text-white pl-7 pt-5 leading-15 relative inline-block after:absolute after:conten-[' '] md:after:h-1 after:w-30 after:bg-[#FF4655] md:after:bottom-5 after:right-30">
            ABOUT THE BIGGEST HANCOK<br></br> COMMUNITY
          </h3>
          <div className="flex-col gap-y-5 md:flex-row flex gap-x-10">
            <Images
              ImgSrc={aboutpng}
              AltSrc={"aboutpng"}
              className={"sm:w-full md:ml-7 md:mt-5 md:w-[580px]"}
            />
            <div className="md:w-[580px]">
              <h4 className="sm:text-[20px] font-HeaderTextColor font-semibold md:text-2xl text-white pt-5">
                MOST POPULAR GAMING PLATFORM.
              </h4>
              <div className="flex gap-x-1.5 items-center">
                <PiArrowElbowRightThin className="text-[#FF4655] mt-2" />
                <p
                  className={
                    "font-HeaderTextColor font-normal text-sm text-white pt-2"
                  }>
                  World Bigghest Community & Gaming Server
                </p>
              </div>
              <div className="flex gap-x-1.5 items-center">
                <PiArrowElbowRightThin className="text-[#FF4655] mt-2" />
                <p
                  className={
                    "font-HeaderTextColor font-normal text-sm text-white pt-2"
                  }>
                  Friendly Clan & Mates
                </p>
              </div>
              <div className="flex gap-x-1.5 items-center">
                <PiArrowElbowRightThin className="text-[#FF4655] mt-2" />
                <p
                  className={
                    "font-HeaderTextColor font-normal text-sm text-white pt-2"
                  }>
                  We Provide Gaming Accesories
                </p>
              </div>
              <div className="flex gap-x-1.5 items-center">
                <PiArrowElbowRightThin className="text-[#FF4655] mt-2" />
                <p
                  className={
                    "font-HeaderTextColor font-normal text-sm text-white pt-2"
                  }>
                  Largest Online Gaming Community & Shop
                </p>
              </div>
              <div className="flex gap-x-1.5 items-center">
                <PiArrowElbowRightThin className="text-[#FF4655] mt-2" />
                <p
                  className={
                    "font-HeaderTextColor font-normal text-sm text-white pt-2"
                  }>
                  Hancok reaches more than 150 million monthly users
                </p>
              </div>
              <div className="flex gap-x-1.5 items-center">
                <PiArrowElbowRightThin className="text-[#FF4655] mt-2" />
                <p
                  className={
                    "font-HeaderTextColor font-normal text-sm text-white pt-2"
                  }>
                  We are leading global media brand for games
                </p>
              </div>
              <p className="md:font-HeaderTextColor font-normal md:text-sm text-white md:pl-2 pt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex illo
                sed odio<br></br>temporibus magni quia eveniet odit placeat
                repellat quod ipsum modi<br></br>necessitatibus, dolorum
                officia!
              </p>
              <div className=" md:relative inline-block">
                <button className=" h-[40px] w-[120px] bg-[#212121] shadow-xs md:ml-2 mt-3 text-center text-white font-HeaderTextColor">
                  View More
                </button>
                <FaAngleDoubleRight className="absolute text-white top-[26px] right-2 text-sm text-center" />
              </div>
            </div>
          </div>
          <Flex className={"flex-col  sm:flex-row justify-between"}>
            <div className=" h-25 w-60 bg-[#212121] ml-8 mt-10 rounded-bl-3xl rounded-tr-3xl text-center pt-5">
              <span
                className="text-white text-[18px] font-HeaderTextColor font-bold relative inline-block after:absolute after:h-[10px] after:w-[10px] after:bg-[#FF4655] after:content-['
                '] after:rounded-full after:top-3 after:-right-4">
               <CountUp end ={112} duration={1000} suffix="k"/>
              </span>
              <p className="font-HeaderTextColor font-light text-[18px] text-white">
                Community Earning
              </p>
            </div>
            <div className="h-25 w-60 bg-[#212121] ml-8 mt-10 rounded-bl-3xl rounded-tr-3xl text-center pt-5">
              <span
                className="text-white text-[18px] font-HeaderTextColor font-bold relative inline-block after:absolute after:h-[10px] after:w-[10px] after:bg-[#FF4655] after:content-['
                '] after:rounded-full after:top-3 after:-right-4">
                <CountUp end={12} duration={300} suffix="m"/>
              </span>
              <p className="font-HeaderTextColor font-light text-[18px] text-white">
                Total Member
              </p>
            </div>
            <div className="h-25 w-60 bg-[#212121] ml-8 mt-10 rounded-bl-3xl rounded-tr-3xl text-center pt-5">
              <span
                className="text-white text-[18px] font-HeaderTextColor font-bold relative inline-block after:absolute after:h-[10px] after:w-[10px] after:bg-[#FF4655] after:content-['
                '] after:rounded-full after:top-3 after:-right-4">
                <CountUp end={121} duration={1000} suffix="k"/>
              </span>
              <p className="font-HeaderTextColor font-light text-[18px] text-white">
                Streams Complete
              </p>
            </div>
            <div className="h-25 w-60 bg-[#212121] ml-8 mt-10 rounded-bl-3xl rounded-tr-3xl text-center pt-5">
              <span
                className="text-white text-[18px] font-HeaderTextColor font-bold relative inline-block after:absolute after:h-[10px] after:w-[10px] after:bg-[#FF4655] after:content-['
                '] after:rounded-full after:top-3 after:-right-4">
               <CountUp end={844} duration={100} suffix="k"/>
              </span>
              <p className="font-HeaderTextColor font-light text-[18px] text-white">
                Total Sponsers
              </p>
            </div>
          </Flex>
        </div>
      </Container>
     </div>
    </>
  );
};

export default About;
