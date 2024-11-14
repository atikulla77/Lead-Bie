import React from "react";
import { Link } from "react-scroll";
import Navber from "./Navber";
import { HiOutlineCheck } from "react-icons/hi";
import Marquee from "react-fast-marquee";

import TBImage1 from "../image/TrustedBy/img1.png";
import TBImage2 from "../image/TrustedBy/img2.png";
import TBImage3 from "../image/TrustedBy/img3.png";
import TBImage4 from "../image/TrustedBy/img4.png";
import TBImage5 from "../image/TrustedBy/img5.png";
import TBImage6 from "../image/TrustedBy/img6.png";

function Home() {
  const allTeam = [
    {
      id: 1,
      image: TBImage1,
    },
    {
      id: 2,
      image: TBImage2,
    },
    {
      id: 3,
      image: TBImage3,
    },
    {
      id: 4,
      image: TBImage4,
    },
    {
      id: 5,
      image: TBImage5,
    },
    {
      id: 6,
      image: TBImage6,
    },
  ];

  return (
    <div className="w-full h-[100%] relative bg-[#1e1345]" name="OurProcess">
      <Navber />

      <div
        className="xl:w-[1230px] w-[96%] h-[100%] flex flex-col justify-center text-center mx-auto sm5:pt-[154px] pt-[125px] pb-[30px] relative text-[white] SatoshiFont "
        data-aos="fade-up"
      >
        <p className="sm2:w-[345px] w-[280px] sm:text-[15px] sm2:text-[14px] text-[12px] text-center py-[8px] bg-[#fff3] font-[700] rounded-[50px] border-[1px] border-[#fff]  mx-auto">
          AGENCIES & B2B SERVICE BUSINESSES
        </p>

        <h1 className="stext2:text-[47px] md2:text-[40px] sm:text-[36px] sm2:text-[30px] sm5:text-[26px] sm4:text-[22px] sm3:text-[20px] text-[17.5px] stext2:font-semibold font-bold tracking-[0.6px] md:leading-[58px] sm:leading-[45px] sm2:leading-[38px] sm5:leading-[36px] sm3:leading-[32px] leading-[25px] sm2:pt-[20px] pt-[15px]">
          Add{" "}
          <span className="sm5:border-b-[3px] border-b-[2px] border-[#03BFFF]">
            10-15 qualified
          </span>{" "}
          sales meetings
          <br className=" md:hidden flex" /> to your
          <br className="md:flex hidden" /> calendar completely
          <br className=" md:hidden flex" /> done-for-you,
          <br className="md:flex hidden" />
          <span className="hidden">guaranteed or you don't pay.</span>
        </h1>

        <p className="stext2:text-[20px] md2:text-[18px] sm:text-[15px] sm2:text-[14px] sm4:text-[13px] text-[12px] font-[500] text-[#ffffffbf] sm2:pt-[15px] pt-[10px] sm4:pb-[26px] pb-[20px]">
          We set up a cold email system, scrape the leads, write the
          <br className="sm4:flex hidden" /> emails, and book you calls with
          your dream prospects{" "}
        </p>

        <iframe
          className="mx-auto md2:!w-[80%] !w-[98%] md2:rounded-[25px] rounded-[15px] sm5:border-[3px] border-[2px] border-[#fff] mb-[40px]"
          src="https://www.youtube.com/embed/vXR_3uzRsVI?si=xc-Cm4zb7fsRQlpG"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        <p className="sm4:text-[18px] text-[15px] md:w-auto w-[98%] text-center py-[8px] px-[24px] bg-[#fff3] font-[700] rounded-[10px] mx-auto border-[1px] border-[#ffffff33]">
          What can you expect from our call?
        </p>
        <div className="stext2:w-[970px] w-[98%] flex stext2:flex-row flex-col stext2:justify-between justify-center mx-auto">
          <div className="flex md:flex-row flex-col md:justify-between justify-center items-center border-[1px] border-[#ffffff33] bg-transparent rounded-[10px] md:w-[470px] w-[98%] md:py-[15px] py-[20px] px-[20px] mt-[25px] stext2:mx-0 mx-auto">
            <div className="bg-[#03BFFF] p-[4px] rounded-[50%] border-[1px] border-[#ffffff59]">
              <HiOutlineCheck className="w-[20px] h-[20px] " />
            </div>

            <p className="sm4:text-[18px] text-[15px] text-center font-[500] md:pt-0 pt-[16px]">
              We will audit your current outbound marketing
            </p>
          </div>
          <div className="flex md:flex-row flex-col md:justify-between justify-center items-center border-[1px] border-[#ffffff33] bg-transparent rounded-[10px] md:w-[450px] w-[98%] md:py-[15px] py-[20px] px-[20px] mt-[25px] stext2:mx-0 mx-auto">
            <div className="bg-[#03BFFF] p-[4px] rounded-[50%] border-[1px] border-[#ffffff59]">
              <HiOutlineCheck className="w-[20px] h-[20px] " />
            </div>

            <p className="sm4:text-[18px] text-[15px] text-center font-[500] md:pt-0 pt-[16px]">
              After the audit, we’ll come up with a strategy
            </p>
          </div>
        </div>
        <Link
          to="Contact"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
          aria-current="page"
          className="stext2:w-[970px] w-[98%] md2:text-[16px] text-[14px] sm5:px-[50px] px-[40px] py-[15px] sm5:border-[1.6px] border-[1px] rounded-[50px] border-[#03BFFF] text-[#fff] bg-[#03BFFF] transition-[0.3s] cursor-pointer font-semibold mx-auto mt-[25px] "
        >
          Connect Us
        </Link>
        <div className="" data-aos="fade-up">
          <p className="text-[15px] text-center font-[600] mt-[25px]">
            Trusted By
          </p>
          <div className="stext2:w-[970px] w-[98%] mx-auto">
            <Marquee className="pt-[5px]">
              {allTeam.map((key) => {
                return (
                  <div className={`sm2:w-[130px] w-[100px] mx-[15px] opacity-[0.8]`} key={key.id}>
                    <img src={key.image} className="w-full" alt="" />
                  </div>
                );
              })}
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
