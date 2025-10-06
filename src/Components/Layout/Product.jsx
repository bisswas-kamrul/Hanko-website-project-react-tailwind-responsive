import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Images from "../Images";
import product1 from "../../assets/product-one.png";
import product2 from "../../assets/product-two.png";
import product3 from "../../assets/product-three.png";
import product4 from "../../assets/product-one.png";
import Bage from "../Bage";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Product = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
         
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
     <div className="bg-black overflow-x-hidden">
       <Container>
        <div
          className="h-[600px] bg-no-repeat bg-center bg-cover"
          style={{ backgroundImage: `url('/product.jpg')` }}>
          <h3 className="font-HeaderTextColor font-semibold text-4xl text-white pl-7 pt-5 leading-15 relative inline-block after:absolute after:conten-[' '] after:h-1 md:after:w-30 after:bg-[#FF4655] after:bottom-5 after:right-10">
            WE PROVIDE ALL GAMING<br></br> ACCESORIES
          </h3>
          <div className="">
            <Slider {...settings}>
              {/* <Flex> */}
              <div className=" relative mt-5 ">
                <Images
                  ImgSrc={product1}
                  AltSrc={"product-1.png"}
                  className={" md:h-[350px]"}
                />
                <Bage
                  bageText={"$95%"}
                  className={
                    " absolute top-2  text-sm text-center pt-2 text-white ml-15"
                  }
                />
                <h6 className=" absolute bottom-10 font-HeaderTextColor font-medium text-sm text-white pl-10 ">
                  Gaming Controller
                </h6>
                <h6 className=" absolute bottom-3 font-HeaderTextColor font-medium text-sm text-[#FF4655] pl-13 ">
                  Add To Cart
                </h6>
              </div>
              <div className=" relative mt-5 ">
                <Images
                  ImgSrc={product2}
                  AltSrc={"product-2.png"}
                  className={"md:h-[350px]"}
                />
                <Bage
                  bageText={"$95%"}
                  className={
                    " absolute top-2  text-sm text-center pt-2 text-white ml-15"
                  }
                />
                <h6 className=" absolute bottom-10 font-HeaderTextColor font-medium text-sm text-white pl-10 ">
                  Gaming Controller
                </h6>
                <h6 className=" absolute bottom-3 font-HeaderTextColor font-medium text-sm text-[#FF4655] pl-13 ">
                  Add To Cart
                </h6>
              </div>
              <div className=" relative mt-5 ">
                <Images
                  ImgSrc={product3}
                  AltSrc={"product-3.png"}
                  className={"md:h-[350px]"}
                />
                <Bage
                  bageText={"$95%"}
                  className={
                    " absolute top-2  text-sm text-center pt-2 text-white ml-15"
                  }
                />
                <h6 className=" absolute bottom-10 font-HeaderTextColor font-medium text-sm text-white pl-10 ">
                  Gaming Controller
                </h6>
                <h6 className=" absolute bottom-3 font-HeaderTextColor font-medium text-sm text-[#FF4655] pl-13 ">
                  Add To Cart
                </h6>
              </div>
              <div className=" relative mt-5 ">
                <Images
                  ImgSrc={product4}
                  AltSrc={"product-4.png"}
                  className={"md:h-[350px]"}
                />
                <Bage
                  bageText={"$95%"}
                  className={
                    " absolute top-2  text-sm text-center pt-2 text-white ml-15"
                  }
                />
                <h6 className=" absolute bottom-10 font-HeaderTextColor font-medium text-sm text-white pl-10 ">
                  Gaming Controller
                </h6>
                <h6 className=" absolute bottom-3 font-HeaderTextColor font-medium text-sm text-[#FF4655] pl-13 ">
                  Add To Cart
                </h6>
              </div>
              <div className=" relative mt-5 ">
                <Images
                  ImgSrc={product4}
                  AltSrc={"product-4.png"}
                  className={"md:h-[350px]"}
                />
                <Bage
                  bageText={"$95%"}
                  className={
                    " absolute top-2  text-sm text-center pt-2 text-white ml-15"
                  }
                />
                <h6 className=" absolute bottom-10 font-HeaderTextColor font-medium text-sm text-white pl-10 ">
                  Gaming Controller
                </h6>
                <h6 className=" absolute bottom-3 font-HeaderTextColor font-medium text-sm text-[#FF4655] pl-13 ">
                  Add To Cart
                </h6>
              </div>
            </Slider>
          </div>
        </div>
      </Container>
     </div>
    </>
  );
};

export default Product;
