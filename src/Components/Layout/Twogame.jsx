import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Images from "../Images";
import twogame1 from "../../assets/twogeme-1.png";
import twogame2 from "../../assets/tow geme-2.png";
import twogame3 from "../../assets/twogame-3.png";

const Twogame = () => {
  return (
    <>
    <div className="bg-black overflow-x-hidden">
        <Container>
        <div
          className="h-[400px] bg-no-repeat bg-center bg-cover"
          style={{ backgroundImage: `URL('/two game.jpg')` }}>
          <Flex className={"flex-col md:flex-row"}>
            <div className="md:w-[580px]">
              <p className="font-HeaderTextColor font-medium text-sm text-[18px] text-[#FF4655] pt-5 pl-5">
                Choose Your Favourite Game
              </p>
              <h3 className="font-HeaderTextColor font-semibold text-4xl text-white pl-5">
                Explore hancok catalog for your next favorite game!
              </h3>
              <p className="font-HeaderTextColor font-semibold text-[#666666] text-sm pt-5 pl-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Delectus culpa ratione enim maiores nisi cupiditate non nesciunt
                officia labore aut? Et, vero!
              </p>
              <button className="h-[30px] w-[70px] bg-[#121212] mt-5 font-HeaderTextColor font-medium text-sm text-white ml-5">
                Browse All
              </button>
            </div>
            <div className=" relative md:w-[580px]">
              <Images
                ImgSrc={twogame1}
                AltSrc={"twogame1.png"}
                className={" absolute -bottom-55 h-[300px] left-50 z-10 "}
              />
              <Images
                ImgSrc={twogame2}
                AltSrc={"twogame2.png"}
                className={" absolute -bottom-55 h-[300px] left-60 "}
              />
              <Images
                ImgSrc={twogame3}
                AltSrc={"twogame3.png"}
                className={" absolute -bottom-55 h-[300px] left-42 "}
              />
            </div>
          </Flex>
        </div>
      </Container>
    </div>
    </>
  );
};

export default Twogame;
