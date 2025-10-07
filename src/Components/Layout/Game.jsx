import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Images from "../Images";
import game1 from "../../assets/game-1.png";
import game2 from "../../assets/game-2.png";
import game3 from "../../assets/game-3.png";
import game4 from "../../assets/game-4.png";
import Bage from "../Bage";

const Game = () => {
  return (
    <>
     <div className="bg-black overflow-x-hidden">
       <Container>
        <div
          className="md:h-[730px] bg-no-repeat bg-center bg-cover"
          style={{ backgroundImage: `URL('/game.jpg')` }}>
          <h4 className="font-HeaderTextColor font-semibold text-3xl text-white pl-170 pt-8">
            TOP GAMES ON BLACK FRIDAY
          </h4>
          <span className="font-HeaderTextColor font-semibold text-3xl text-white pl-245 relative inline-block after:absolute after:h-[1px] after:w-[100px] after:bg-[#FF4655] after:top-6 after:left-10 after:ml-205">
            SALE
          </span>
          <Flex className={"flex-col sm:flex-row"}>
            <div className="mt-10">
              <Images ImgSrc={game1} AltSrc={"game-1.png"} />
              <div className="h-[130px] bg-[#212121]">
                <p className="font-HeaderTextColor font-semibold text-sm text-white">
                  Horizon Zero Dawn™ Complet...
                </p>
                <h6 className="font-HeaderTextColor font-semibold text-xs text-white">
                  Brace Yourself Games
                </h6>
                <div className="flex gap-2">
                  <Bage bageText={"40%"} className={"mt-6 text-white pt-2"} />
                  {/* <del className="text-white pt-8">$7.99</del> */}
                  <span className="text-white pt-8">$ 7.99</span>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <Images ImgSrc={game2} AltSrc={"game-2.png"} />
              <div className="h-[130px] bg-[#212121]">
                <p className="font-HeaderTextColor font-semibold text-sm text-white">
                  Disciples: Liberation
                </p>
                <h6 className="font-HeaderTextColor font-semibold text-xs text-white">
                  Brace Yourself Games
                </h6>
                <div className="flex gap-2">
                  <Bage bageText={"40%"} className={"mt-6 text-white pt-2"} />
                  {/* <del className="text-white pt-8">$7.99</del> */}
                  <span className="text-white pt-8">$ 7.99</span>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <Images ImgSrc={game3} AltSrc={"game-3.png"} />
              <div className="h-[130px] bg-[#212121]">
                <p className="font-HeaderTextColor font-semibold text-sm text-white">
                  Horizon Zero Dawn™ Complet...
                </p>
                <h6 className="font-HeaderTextColor font-semibold text-xs text-white">
                  Brace Yourself Games
                </h6>
                <div className="flex gap-2">
                  <Bage bageText={"40%"} className={"mt-6 text-white pt-2"} />
                  {/* <del className="text-white pt-8">$7.99</del> */}
                  <span className="text-white pt-8">$ 7.99</span>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <Images ImgSrc={game4} AltSrc={"game-4.png"} />
              <div className="h-[130px] bg-[#212121]">
                <p className="font-HeaderTextColor font-semibold text-sm text-white">
                  Industries of Titan
                </p>
                <h6 className="font-HeaderTextColor font-semibold text-xs text-white">
                  Brace Yourself Games
                </h6>
                <div className="flex gap-2">
                  <Bage bageText={"40%"} className={"mt-6 text-white pt-2"} />
                  {/* <del className="text-white pt-8">$7.99</del> */}
                  <span className="text-white pt-8">$ 7.99</span>
                </div>
              </div>
            </div>
          </Flex>
          <div className="font-HeaderTextColor font-medium text-[18px] text-white pt-6 pl-5">
            Hancok Games Catalog
          </div>
        </div>
      </Container>
     </div>
    </>
  );
};

export default Game;
