import React from "react";
import { Link } from "react-scroll";

import { TbBrandFiverr } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa";

import { FaUpwork } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";


function Footer() {
  return (
    <div className="w-full md2:h-[10rem] h-[7rem] bg-[#1e1345]">
      <div className="xl:w-[1230px] w-[90%] h-[100%] flex relative mx-auto">
        <div className="flex justify-between items-center w-full GeologicaFont relative" >
          <Link
            to="OurProcess"
            className="flex items-center z-[2] text-[21px] EarthOrbiterFont cursor-pointer select-none"
          >
            {/* <img src={logo} className=" w-[142px] select-none" /> */}
            <p className="font-semibold text-white">
              Lead<span className="text-[#03BFFF] font-semibold">Bie</span>
            </p>
          </Link>

          <div className="md2:flex hidden items-center justify-center SatoshiFont absolute top-[58px] stext2:left-[37%] left-[33%] w-[320px]">
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
                offset={-50}
                duration={500}
                className="px-[5px] py-2 cursor-pointer text-white hover:text-[#03BFFF] transition-[0.4s]"
                aria-current="page"
              >
                Deliverables
              </Link>
            </div>
          </div>

          <div className="flex items-center ">
            <a
              href="https://www.upwork.com/freelancers/~0125a8b16776daf98f"
              target="_blank"
              className="bg-transparent rounded-[50%] w-[30px] h-[30px] flex justify-center items-center text-[#fff] hover:text-[#03bfff] transition-[0.3s]"
            >
              <TbBrandFiverr className="text-[21px] " />
            </a>
            <a
              href="https://www.upwork.com/freelancers/~0125a8b16776daf98f"
              target="_blank"
              className="ml-[5px] bg-transparent rounded-[50%] w-[30px] h-[30px] flex justify-center items-center text-[#fff] hover:text-[#03bfff] transition-[0.3s]"
            >
              <FaLinkedinIn className="text-[18px] " />
            </a>
            <a
              href="https://www.upwork.com/freelancers/~0125a8b16776daf98f"
              target="_blank"
              className="ml-[5px] bg-transparent rounded-[50%] w-[30px] h-[30px] flex justify-center items-center text-[#fff] hover:text-[#03bfff] transition-[0.3s]"
            >
              <FaUpwork className="text-[22px]  mt-[5px]" />
            </a>
            <a
              href="https://www.facebook.com/moharom.badsha"
              target="_blank"
              className="ml-[5px] bg-transparent rounded-[50%] w-[30px] h-[30px] flex justify-center items-center text-[#fff] hover:text-[#03bfff] transition-[0.3s]"
            >
              <FaFacebookF className="text-[17px] " />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
