import React, { useState } from "react";
import logo from "../image/logo.png";

// import { Link } from "react-router-dom";
import { Link } from "react-scroll";

function Navber() {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 24) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <div className={` w-full flex fixed top-[0px] z-50`}>
      <nav
        className={`text-white w-full relative ${
          color
            ? "bg-[#1e1345f0] shadow-[0px_0px_3px_0px_#00000040]"
            : "bg-transparent"
        }`}
        style={{ transition: ".1s ease-in" }}
      >
        <div
          className="mx-auto px-2 sm:px-6 lg:px-[0] xl:w-[1230px] w-[96%] relative"
          data-aos="fade-down"
        >
          <div className="h-[5rem] flex md2:justify-between justify-end items-center w-full GeologicaFont ">
            <div className="md2:flex hidden items-center justify-center SatoshiFont">
              <div className="flex space-x-[10px] items-center text-[16px] font-medium">
                <Link
                  to="OurProcess"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  className="px-[5px] py-2 cursor-pointer text-white hover:text-[#03BFFF] transition-[0.4s]"
                  aria-current="page"
                >
                  Our Process
                </Link>
                <Link
                  to="CaseStudies"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  className="px-[5px] py-2 cursor-pointer text-white hover:text-[#03BFFF] transition-[0.4s]"
                  aria-current="page"
                >
                  Case Studies
                </Link>
                <Link
                  to="Deliverables"
                  spy={true}
                  smooth={true}
                  offset={-85}
                  duration={500}
                  className="px-[5px] py-2 cursor-pointer text-white hover:text-[#03BFFF] transition-[0.4s]"
                  aria-current="page"
                >
                  Deliverables
                </Link>
              </div>
            </div>

            <Link
              to="OurProcess"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              className="flex items-center z-[2] text-[21px] EarthOrbiterFont absolute top-[25px] md2:left-[45%] sm:left-[24px] left-[8px] cursor-pointer select-none"
              aria-current="page"
            >
              {/* <img src={logo} className=" w-[142px] select-none" /> */}
              <p className="font-semibold">
                Lead<span className="text-[#03BFFF] font-semibold">Bie</span>
              </p>
            </Link>

            <Link
              to="Contact"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
              aria-current="page"
              className="md2:text-[16px] text-[12px] sm5:px-[50px] px-[40px] py-[10px] sm5:border-[1.6px] border-[1px] rounded-[50px] border-[#03BFFF] text-[#fff] social_icon_hover transition-[0.3s] cursor-pointer bg-transparent hover:bg-[#03BFFF]"
            >
              Connect Us
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navber;
