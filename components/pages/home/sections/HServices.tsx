"use client";
import Image from "next/image";
import { useState } from "react";
import { GiOffshorePlatform } from "react-icons/gi";
import { FaCheck, FaCode, FaGear, FaRegCircleCheck } from "react-icons/fa6";
import { BsDiagram3Fill } from "react-icons/bs";
import { PiHeadCircuit } from "react-icons/pi";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import Button from "@/components/shared/ui-kit/Button";
import { MdEmail } from "react-icons/md";

type HServicesProps = {
  pageName?: string;
};

const HServices: React.FC<HServicesProps> = ({ pageName = "Home" }) => {
  let HomePage = pageName === "Home" ? true : false;
  let ServicesPage = pageName === "Services" ? true : false;

  const [onHoverServiceCard, setOnHoverServiceCard] = useState("PinkRed");
  const ServicesData = [
    {
      id: 1,
      name: "Cold Email",
      description:
        "Cold email is a personalized outreach message sent to potential clients who haven’t interacted with you before. It’s used to introduce your offer, start conversations, and generate qualified leads in a direct, scalable way.",
      icon: (
        <MdEmail className="text-[43px] text-white animation_card_topFromBottom_logo" />
      ),
      colorName: "VividOrange",
      colorCode: "bg-[#ffa808] shadow-[0_2px_15px_#ffa80880]",
    },
    {
      id: 2,
      name: "Email List Building",
      description:
        "Email list building is the process of collecting contact information from your ideal audience to create a targeted database for outreach, marketing, and lead generation campaigns.",
      icon: (
        <FaCode className="text-[40px] text-white animation_card_topFromBottom_logo" />
      ),
      colorName: "PinkRed",
      colorCode: "bg-[#ff586e] shadow-[0_2px_15px_#ff586e80]",
    },
    {
      id: 3,
      name: "Data Scraping",
      description:
        "Data scraping from Apollo.io and LinkedIn Sales Navigator involves extracting publicly available professional data to build highly targeted lead lists for outreach and sales campaigns.",
      icon: (
        <FaGear className="text-[40px] text-white animation_card_topFromBottom_logo" />
      ),
      colorName: "DarkSpringGreen",
      colorCode: "bg-[#029e76] shadow-[0_2px_15px_#029e7680]",
    },
  ];

  return (
    <div>
      <div id="services"
        className={`xl:w-[1199px]! lg:w-[960px]! md:w-[720px] sm:w-[510px] w-full mx-auto flex flex-col items-center ${
          HomePage && "lg:pt-[115px]! sm:pt-[70px] pt-[50px]"
        } ${
          ServicesPage &&
          "lg:pt-[115px]! sm:pt-[70px] pt-[50px] lg:pb-[85px]! sm:pb-10 pb-5"
        }`}
      >
        <div
          className={`w-full ${HomePage && "flex"} ${
            ServicesPage && "hidden"
          } flex-col text-center justify-center font-poppins pb-10`}
        >
          <h5 className="inline-block text-center xl:text-[22px]! lg:text-[16px] text-[18px] font-semibold">
            SERVICES
          </h5>
          <h2 className="xl:text-[60px]! lg:text-[40px]! sm:text-[42px] text-[30px] text-black! font-extrabold leading-[1.2]">
            PROVIDE AWESOME SERVICE
          </h2>
        </div>
        {/* Home Page */}
        <div className={`w-full flex flex-wrap justify-center`}>
          {ServicesData.map((service) => {
            return (
              <div
                className="lg:w-1/3! md:w-1/2 w-full px-[15px] mb-[30px]"
                key={service.id}
              >
                <div
                  className={`${
                    onHoverServiceCard === service.colorName
                      ? "shadow-[0_5px_95px_#1d20232b] z-10"
                      : ""
                  } xl:p-[30px_20px]! lg:p-[30px_17px] md:p-[30px_22px] sm2:p-[30px] p-5 h-full bg-defaultBG rounded-sm transition-all duration-1000 relative animation_card_topFromBottom`}
                  onMouseEnter={() => {
                    setOnHoverServiceCard(service.colorName);
                  }}
                >
                  <div
                    className={`w-[90px] h-[90px] leading-[90px] m-[24px_0_45px] ${service.colorCode} rounded-full mx-auto relative z-10`}
                  >
                    <div
                      className={`absolute ${
                        onHoverServiceCard === service.colorName
                          ? "right-[30px]"
                          : "-right-5"
                      } -top-5 bg-right z-[-1] transition-all duration-1000`}
                    >
                      <div className={`w-[82px] h-[133px] relative m-auto`}>
                        <Image
                          src={`/assets/images/Home_Page/Services/S_Dot_Partical_${service.colorName}.png`}
                          fill
                          className={`object-contain `}
                          alt="Service Images"
                        />
                      </div>
                    </div>
                    {/* Logo */}
                    <div className="w-full h-full flex items-center justify-center cursor-pointer rounded-full overflow-hidden">
                      {service.icon}
                    </div>
                  </div>
                  <div className="text-center relative cursor-default z-10">
                    <h2 className="xl:text-[23px] text-[20px] xl:leading-normal leading-[1.2] text-black! font-semibold font-poppins  mb-[9px]">
                      {service.name}
                    </h2>
                    <p className="sm2:text-[15px] text-[13px] font-poppins font-normal">
                      {service.description}
                    </p>
                  </div>

                  {/* particals */}
                  <div
                    className={`absolute ${
                      onHoverServiceCard === service.colorName
                        ? "left-[-15px] top-[-15px] opacity-100"
                        : "left-[100px] top-[100px] opacity-0"
                    } z-1 transition-all duration-1000 `}
                  >
                    <div
                      className={`${
                        onHoverServiceCard === service.colorName
                          ? "w-[293px] h-[345px]"
                          : "w-[185px] h-[170px]"
                      } relative transition-all duration-1000`}
                    >
                      <Image
                        src={`/assets/images/Home_Page/Services/S_Particle_1.png`}
                        fill
                        className={`object-contain `}
                        alt="Service Images"
                      />
                    </div>
                  </div>
                  <div
                    className={`absolute ${
                      onHoverServiceCard === service.colorName
                        ? "-right-2.5 -bottom-5 opacity-100"
                        : "right-[100px] bottom-[100px] opacity-0"
                    } z-1 transition-all duration-1000`}
                  >
                    <div
                      className={`${
                        onHoverServiceCard === service.colorName
                          ? "w-[250px] h-72"
                          : "w-[125px] h-[145px]"
                      } relative transition-all duration-1000`}
                    >
                      <Image
                        src={`/assets/images/Home_Page/Services/S_Particle_2.png`}
                        fill
                        className={`object-contain `}
                        alt="Service Images"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HServices;
