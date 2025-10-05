import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Images from "../Images";
import teme1 from "../../assets/team1.png";
import teme2 from "../../assets/team2.png";
import teme3 from "../../assets/team3.png";
import teme4 from "../../assets/team4.png";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Teme = () => {
  return (
   <div className="bg-black overflow-x-hidden">
     <Container>
      <div
        className="md:h-[900px] bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url('/teme.jpg')` }}>
        <h4 className="font-HeaderTextColor font-semibold text-3xl text-white pl-170 pt-8">
          TOP GAMES ON BLACK FRIDAY
        </h4>
        <span className="font-HeaderTextColor font-semibold text-3xl text-white pl-245 relative inline-block after:absolute after:h-[1px] after:w-[100px] after:bg-[#FF4655] after:top-6 after:left-10 after:ml-205">
          SALE
        </span>
        <Flex className={"flex-col md:flex-row justify-evenly md:flex-wrap"}>
          <div data-aos="zoom-in-down">
            <div className="mt-5">
              <Images
                ImgSrc={teme1}
                AltSrc={"teme1.png"}
                className={"h-[350px]"}
              />
            </div>
          </div>
          <div data-aos="zoom-in-left">
            <div className="mt-5">
              <Images
                ImgSrc={teme2}
                AltSrc={"teme2.png"}
                className={"h-[350px]"}
              />
            </div>
          </div>
          <div data-aos="zoom-in-right">
            <div className="mt-5">
              <Images
                ImgSrc={teme3}
                AltSrc={"teme3.png"}
                className={"h-[350px]"}
              />
            </div>
          </div>
          <div data-aos="zoom-out">
            <div className="mt-5">
              <Images
                ImgSrc={teme4}
                AltSrc={"teme4.png"}
                className={"h-[350px]"}
              />
            </div>
          </div>
        </Flex>
      </div>
    </Container>
   </div>
  );
};

export default Teme;
