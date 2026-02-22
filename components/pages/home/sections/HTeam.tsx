"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Autoplay, Pagination } from "swiper/modules";
import {
  FaAngleRight,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import Link from "next/link";
import Button from "@/components/shared/ui-kit/Button";

type HTeamProps = {
  pageName?: string;
};

const HTeam: React.FC<HTeamProps> = ({ pageName = "Home" }) => {
  let HomePage = pageName === "Home" ? true : false;
  let TeamPage = pageName === "Team" ? true : false;

  const teamsData = [
    {
      id: 1,
      name: "Jahan Rahman",
      position: "Chief Executive Officer",
      description: "Leads strategy and client success",
      img: "user_1",
    },
    {
      id: 2,
      name: "Rafiul Karim",
      position: "Head of Design",
      description: "Crafts intuitive experiences and design systems",
      img: "user_2",
    },
    {
      id: 3,
      name: "Tasnim Ahmed",
      position: "Lead Engineer",
      description: "Builds scalable, secure architectures",
      img: "user_3",
    },
    {
      id: 4,
      name: "Nabila Islam",
      position: "Growth Specialist",
      description: "Drives SEO, content, and performance marketing",

      img: "user_4",
    },
  ];
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Filter data based on breakpoints
  let filteredTeams = teamsData;

  // Set slides per view dynamically
  const slidesPerView =
    windowWidth >= 1200
      ? 3
      : windowWidth >= 768
      ? 2
      : windowWidth >= 600
      ? 1
      : 1;
  const slidesPerGroup = slidesPerView;

  return (
    <div className={`${HomePage && "bg-[#f4f2ff]!"}`}>
      <div
        className={`xl:w-[1199px]! lg:w-[960px]! md:w-[720px] sm:w-[510px] w-full mx-auto flex flex-col items-center ${
          HomePage && "lg:py-[115px]! sm:py-[70px] py-[50px]"
        } ${
          TeamPage &&
          "lg:pt-[115px]! sm:pt-[70px] pt-[50px] lg:pb-[85px]! sm:pb-10 pb-5"
        } sm2:px-[15px] px-0`}
      >
        <div
          className={`w-full ${
            TeamPage && "hidden"
          } text-center font-poppins mb-[30px]`}
        >
          <h5 className="inline-block xl:text-[22px]! lg:text-[16px] text-[18px] text-[#bbbbbb777] font-semibold -mb-0.5">
            TEAM
          </h5>
          <h2 className="xl:text-[60px]! lg:text-[40px]! sm:text-[42px] text-[30px] text-black! font-extrabold leading-[1.2] mb-2">
            OUR BEST EXPERTISE
          </h2>
        </div>
        <div className={`w-full relative ${TeamPage && "hidden"}`}>
          <Swiper
            slidesPerView={slidesPerView}
            slidesPerGroup={slidesPerGroup}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              el: ".my-custom-pagination",
              bulletClass: "my-bullet",
              bulletActiveClass: "my-bullet-active",
            }}
            speed={2500}
            modules={[FreeMode, Autoplay, Pagination]}
            className="mySwiper cursor-grab"
          >
            {filteredTeams.map((team) => (
              <SwiperSlide key={team.id}>
                <div className="w-full flex justify-center transition duration-700 mx-auto px-[15px] sm3:pb-[65px] pb-[50px]">
                  <div className={`w-full relative `}>
                    <Image
                      src={`/assets/images/Home_Page/Team/${team.img}.jpg`}
                      width={350}
                      height={400}
                      className="w-full h-auto object-contain rounded-sm!"
                      alt="Team Images"
                    />
                    <div className="absolute left-0 sm3:bottom-[-45px] -bottom-10 w-full flex justify-center">
                      <div className="w-full sm3:p-5 p-[15px_10px] flex justify-center items-center text-center sm:mx-5! sm3:mx-10 mx-5 rounded-sm bg-white shadow-[1px_-15px_50px_#0000001a]">
                        <div>
                          <h1 className="md:text-[22px] sm3:text-[20px] sm2:text-[17px] text-[15px] text-black! hover:text-primary! leading-none font-bold font-poppins transition-all duration-1000 cursor-pointer py-1">
                            {team.name}
                          </h1>
                          <p className="sm3:text-[14px] sm2:text-[12px] text-[11px] font-poppins font-medium uppercase">
                            {team.position}
                          </p>
                          <p className="sm3:text-[14px] sm2:text-[12px] text-[11px] font-poppins font-light">
                            {team.description}
                          </p>
                        </div>
                        {/* <div className="flex flex-col items-center">
                          <div className="sm4:w-8 w-7 sm4:h-8 h-7 sm4:leading-8 leading-7 bg-[#dde0239d] hover:bg-primary text-[#000000ab]! hover:text-white! rounded-full flex justify-center items-center sm3:m-1 m-0.5 transition-all duration-1000 cursor-pointer">
                            <FaFacebookF className="sm4:text-[14px] text-[12px]" />
                          </div>
                          <div className="sm4:w-8 w-7 sm4:h-8 h-7 sm4:leading-8 leading-7 bg-[#dde0239d] hover:bg-primary text-[#000000ab]! hover:text-white! rounded-full flex justify-center items-center sm3:m-1 m-0.5 transition-all duration-1000 cursor-pointer">
                            <FaInstagram className="sm4:text-[14px] text-[12px]" />
                          </div>
                          <div className="sm4:w-8 w-7 sm4:h-8 h-7 sm4:leading-8 leading-7 bg-[#dde0239d] hover:bg-primary text-[#000000ab]! hover:text-white! rounded-full flex justify-center items-center sm3:m-1 m-0.5 transition-all duration-1000 cursor-pointer">
                            <FaTwitter className="sm4:text-[14px] text-[12px]" />
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* ✅ This is where pagination will render */}
          <div className="my-custom-pagination flex justify-center mt-[30px] gap-2"></div>
        </div>
        <div
          className={`w-full grid xl:grid-cols-3! md:grid-cols-2 grid-cols-1 gap-[30px] relative ${
            HomePage && "hidden"
          } `}
        >
          {teamsData.map((team) => (
            <div
              key={team.id}
              className="w-full flex justify-center transition duration-700 mx-auto px-[15px] sm3:pb-[65px] pb-[50px]"
            >
              <div className={`w-full h-auto relative rounded-sm!`}>
                <div className="w-full h-auto cursor-pointer rounded-sm! overflow-hidden">
                  <Image
                    src={`/assets/images/Home_Page/Team/${team.img}.jpg`}
                    width={350}
                    height={400}
                    className="w-full h-auto object-cover rounded-sm! transition-all duration-1000 overflow-hidden hover:scale-[1.2]"
                    alt="Team Images"
                  />
                </div>
                <div className="absolute left-0 sm3:bottom-[-45px] -bottom-10 w-full flex justify-center">
                  <div className="w-full sm3:p-5 p-[15px_10px] flex justify-center items-center text-center sm:mx-5! sm3:mx-10 mx-5 rounded-sm bg-white shadow-[1px_-15px_50px_#0000001a]">
                    <div>
                      <h1 className="md:text-[22px] sm3:text-[20px] sm2:text-[17px] text-[15px] text-black! hover:text-primary! leading-none font-bold font-poppins transition-all duration-1000 cursor-pointer py-1">
                        {team.name}
                      </h1>
                      <p className="sm3:text-[14px] sm2:text-[12px] text-[11px] font-poppins font-medium uppercase">
                        {team.position}
                      </p>
                      <p className="sm3:text-[14px] sm2:text-[12px] text-[11px] font-poppins font-light">
                        {team.description}
                      </p>
                    </div>
                    {/* <div className="flex flex-col items-center">
                          <div className="sm4:w-8 w-7 sm4:h-8 h-7 sm4:leading-8 leading-7 bg-[#dde0239d] hover:bg-primary text-[#000000ab]! hover:text-white! rounded-full flex justify-center items-center sm3:m-1 m-0.5 transition-all duration-1000 cursor-pointer">
                            <FaFacebookF className="sm4:text-[14px] text-[12px]" />
                          </div>
                          <div className="sm4:w-8 w-7 sm4:h-8 h-7 sm4:leading-8 leading-7 bg-[#dde0239d] hover:bg-primary text-[#000000ab]! hover:text-white! rounded-full flex justify-center items-center sm3:m-1 m-0.5 transition-all duration-1000 cursor-pointer">
                            <FaInstagram className="sm4:text-[14px] text-[12px]" />
                          </div>
                          <div className="sm4:w-8 w-7 sm4:h-8 h-7 sm4:leading-8 leading-7 bg-[#dde0239d] hover:bg-primary text-[#000000ab]! hover:text-white! rounded-full flex justify-center items-center sm3:m-1 m-0.5 transition-all duration-1000 cursor-pointer">
                            <FaTwitter className="sm4:text-[14px] text-[12px]" />
                          </div>
                        </div> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Button
          text="Work With Us"
          link="/"
          customClassName="w-fit flex mx-auto xl:mt-[55px] mt-[42px]"
          border="p-[1px]"
          borderLinearGradient={true}
          borderLinearGradientPadding={`xl:p-[12px_37px]! md:p-[12px_30px] sm3:p-[10px_23px] p-[9px_28px] ${HomePage && "bg-[#f4f2ff]! hover:bg-transparent!"} ${TeamPage && "bg-white! hover:bg-transparent!"} `}
        />
      </div>
    </div>
  );
};

export default HTeam;
