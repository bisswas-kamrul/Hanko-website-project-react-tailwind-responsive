import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Images from "../Images";
import world from "../../assets/world-1.png";
import world2 from "../../assets/world-2.png";

const World = () => {
  return (
    <>
      <div className="bg-black overflow-x-hidden">
        <Container>
        <div
          className="md:h-[600px] bg-no-repeat bg-center bg-cover"
          style={{ backgroundImage: `URL('/world.jpg')` }}>
          <Flex className={"flex-col gap-y-5 md:flex-row"}>
            <div className="md:w-[580px]">
              <Images ImgSrc={world} AltSrc={"world.jpg"} className={""} />
            </div>
            <div className=" md:w-[580px]">
              <h4 className="text-sm md:font-HeaderTextColor font-semibold md:text-3xl text-white pl-40 pt-8">
                POPULAR GAMES AROUND THE
              </h4>
              <span className="text-sm  md:font-HeaderTextColor font-semibold md:text-3xl text-white pl-110 relative inline-block after:absolute after:h-[1px] md:after:w-[100px] after:bg-[#FF4655] after:top-6 after:left-10 after:ml-70">
                WORLD
              </span>
              <Images ImgSrc={world2} AltSrc={"world-2"} className={"w-[410px] md:mt-15"} />
            </div>
          </Flex>
        </div>
      </Container>
      </div>
    </>
  );
};

export default World;
