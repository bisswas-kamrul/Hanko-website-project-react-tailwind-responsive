import React from "react";
import Container from "../Container";
import Flex from "../Flex";

const Comenite = () => {
  return (
    <>
     <div className="bg-black overflow-x-hidden">
       <Container>
        <div
          className=" md:h-[120px] bg-no-repeat bg-center bg-cover"
          style={{ backgroundImage: `url('/comenite.jpg')` }}>
          <Flex className={"flex-col md:flex-row"}>
            <div className="w-[585px]">
              <h3 className="text-[16px]  font-HeaderTextColor font-semibold md:text-[30px] text-white md:pl-5 pt-5">
                subscribe us to get latest news in your inbox from hancok
                community
              </h3>
            </div>
            <div className="">
              <input
                className=" h-[40px] w-[350px] bg-white shadow-sm rounded-4xl md:mt-5 mr-3 text-black uppercase font-semibold font-HeaderTextColor"
                placeholder=" you maile"></input>
            </div>
          </Flex>
        </div>
      </Container>
     </div>
    </>
  );
};

export default Comenite;
