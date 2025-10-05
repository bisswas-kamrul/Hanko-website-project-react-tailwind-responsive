import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Images from "../Images";
import vediopng from "../../assets/vedio 1.png";
import vedio2png from "../../assets/vadio 2.png";

const Vedio = () => {
  return (
    <>
     <div className="bg-black overflow-x-hidden">
       <Container>
        <div
          className="h-[755px] bg-no-repeat bg-center bg-cover"
          style={{ backgroundImage: `URL('/vedio.jpg')` }}>
          <h3 className="font-HeaderTextColor font-semibold text-4xl text-white pl-7 pt-5 leading-15 relative inline-block after:absolute after:conten-[' '] md:after:h-1 md:after:w-30 after:bg-[#FF4655] after:bottom-5 after:right-25">
            LIVE STREAMIN VIDEO BY<br></br> HANCOK
          </h3>
          <Flex className={"flex-col md:flex-row"}>
            <div className="mt-10">
              <iframe
                width={380}
                height={315}
                src="https://www.youtube.com/embed/c19t5ORk8Xo?si=dIsqgKwtARWpCr01"
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen=""
              />
            </div>
            <div className="mt-10">
              <iframe
                width={380}
                height={315}
                src="https://www.youtube.com/embed/7qDh6mly3Qc?si=hongGrXJ2njBuN43"
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen=""
              />
            </div>
            <div className="mt-10">
              <iframe
                width={380}
                height={315}
                src="https://www.youtube.com/embed/jz-JwBMmFPc?si=e46CwpqBTxSSUApC"
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen=""
              />
            </div>
          </Flex>
          <h4 className="font-HeaderTextColor font-medium text-2xl text-white text-center pt-4">
            PREVIOUS MATCHES
          </h4>
          <Flex className={"flex-col md:flex-row flex justify-evenly"}>
            <div className="h-[80px] w-[250px] bg-[#212121] mt-5">
              <div className="flex justify-between">
                <Images
                  ImgSrc={vediopng}
                  AltSrc={"vedio-png"}
                  className={"h-[60px] w-[60px] mt-2"}
                />
                <h4 className="font-HeaderTextColor font-medium text-2xl text-white pt-5 pr-3">
                  TEAM DELTA
                </h4>
              </div>
            </div>
            <div className="">
              <span className="font-HeaderTextColor font-medium text-2xl  text-white">
                09:10
              </span>
            </div>
            <div className="h-[80px] w-[250px] bg-[#212121] mt-5">
              <div className="flex justify-between">
                <Images
                  ImgSrc={vedio2png}
                  AltSrc={"vedio-2.png"}
                  className={"h-[60px] w-[60px] mt-2"}
                />
                <h4 className="font-HeaderTextColor font-medium text-2xl text-white pt-5 pr-3">
                  TEAM DELTA
                </h4>
              </div>
            </div>
          </Flex>
          <Flex className={"flex-col md:flex-row flex justify-evenly"}>
            <div className="h-[80px] w-[250px] bg-[#212121] mt-5">
              <div className="flex justify-between">
                <Images
                  ImgSrc={vediopng}
                  AltSrc={"vedio-png"}
                  className={"h-[60px] w-[60px] mt-2"}
                />
                <h4 className="font-HeaderTextColor font-medium text-2xl text-white pt-5 pr-3">
                  TEAM DELTA
                </h4>
              </div>
            </div>
            <div className="">
              <span className="font-HeaderTextColor font-medium text-2xl text-white">
                09:10
              </span>
            </div>
            <div className="h-[80px] w-[250px] bg-[#212121] mt-5">
              <div className="flex justify-between">
                <Images
                  ImgSrc={vedio2png}
                  AltSrc={"vedio-2.png"}
                  className={"h-[60px] w-[60px] mt-2"}
                />
                <h4 className="font-HeaderTextColor font-medium text-2xl text-white pt-5 pr-3">
                  TEAM DELTA
                </h4>
              </div>
            </div>
          </Flex>
        </div>
      </Container>
     </div>
    </>
  );
};

export default Vedio;
