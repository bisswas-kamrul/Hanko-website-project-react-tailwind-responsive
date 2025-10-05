import React, { useEffect, useState } from "react";
import Container from "../Container";
import Flex from "../Flex";
import { CiGlobe } from "react-icons/ci";
import { PiSignInBold } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router";
import Images from "../Images";
import logo from "../../assets/logo.png";

const Header = () => {
  // Sticky header
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menu toggle (mobile)
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={`p-5  md:sticky top-0 z-50 ${
          scrolled ? "bg-black shadow-md" : "bg-black"
        }`}
      >
        <Container>
          <Flex className="items-center justify-between">
            {/* Logo */}
            <Link to={"/"}>
              <Images ImgSrc={logo} AltSrc={"logo.png"} />
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-6 items-center">
              <Link to={"/"}>
                <li className="text-white text-sm uppercase hover:text-gray-300">Home</li>
              </Link>
              <Link to={"/About"}>
                <li className="text-white text-sm uppercase hover:text-gray-300">About Us</li>
              </Link>
              <li className="text-white text-sm uppercase hover:text-gray-300">Tournament</li>
              <li className="text-white text-sm uppercase hover:text-gray-300">Store</li>
              <Link to={"/Team"}>
                <li className="text-white text-sm uppercase hover:text-gray-300">Team</li>
              </Link>
              <li className="text-white text-sm uppercase hover:text-gray-300">FAQ</li>
              <Link to={"/Contact"}>
                <li className="text-white text-sm uppercase hover:text-gray-300">Contact Us</li>
              </Link>
            </ul>

            {/* Right Side Icons */}
            <div className="hidden md:flex items-center gap-x-3">
              <CiGlobe className="text-white text-lg" />
              <PiSignInBold className="text-white text-lg" />
              <h5 className="text-white text-sm uppercase">Sign in</h5>
              <IoIosSearch className="text-white text-lg" />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <FaBars
                onClick={() => setOpen(!open)}
                className="text-white text-xl cursor-pointer"
              />
            </div>
          </Flex>

          {/* Mobile Dropdown */}
          {open && (
            <ul className="md:hidden flex flex-col bg-black mt-3 p-4 space-y-3 rounded-lg">
              <Link to={"/"}><li className="text-white hover:text-gray-300">Home</li></Link>
              <Link to={"/About"}><li className="text-white hover:text-gray-300">About</li></Link>
              <li className="text-white hover:text-gray-300">Tournament</li>
              <li className="text-white hover:text-gray-300">Store</li>
              <Link to={"/Team"}><li className="text-white hover:text-gray-300">Team</li></Link>
              <li className="text-white hover:text-gray-300">FAQ</li>
              <Link to={"/Contact"}><li className="text-white hover:text-gray-300">Contact</li></Link>
            </ul>
          )}
        </Container>
      </div>
    </>
  );
};

export default Header;
