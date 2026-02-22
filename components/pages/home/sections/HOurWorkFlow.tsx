"use client";
import Button from "@/components/shared/ui-kit/Button";
import Image from "next/image";
import Link from "next/link";
import { FaAngleRight, FaBattleNet } from "react-icons/fa";

const HOurWorkFlow = () => {
  const ourWorkFlowData = [
    {
      id: 1,
      title: "First, we do a deep dive into your business",
      description:
        "We deeply analyze your business, offers, and ICP to build scripts, lead lists, and complete DFY outreach infrastructure.",
      colorCode: "#ff586e",
    },
    {
      id: 2,
      title: "Then we launch your campaign",
      description:
        "ROnce assets are approved, we launch campaigns, send tailored emails, and split-test copy and audiences to maximize quality leads.",
      colorCode: "#ffa808",
    },
    {
      id: 3,
      title: "Finally, you get sales meetings on auto-pilot",
      description:
        "After launch, we follow up, nurture replies, and book qualified prospects on your calendar, handling everything end-to-end for you.",
      colorCode: "#029e76",
    },
  ];

  return (
    <div id="our-process" className="lg:pt-[115px]! sm:pt-[70px] pt-[50px] sm:pb-0 pb-[50px]">
      <div className="xl:w-[1199px]! lg:w-[960px]! md:w-[720px] sm:w-[510px] w-full mx-auto flex md:flex-row flex-col items-center ">
        <div className="xl:w-1/2! lg:w-[58.33333%] w-full font-poppins md:px-[15px]! sm:px-0 px-[15px] md:mb-0 mb-[30px]">
          <div className={`xl:mb-10 mb-[30px]`}>
            <h2 className="xl:text-[60px]! lg:text-[40px]! sm:text-[42px] text-[30px] text-black! font-bold leading-[1.2] mb-2">
              OUR WORK FLOW
            </h2>
          </div>
          <div className="w-full">
            {ourWorkFlowData.map((card) => {
              return (
                <div
                  key={card.id}
                  className={`w-full flex sm3:flex-row flex-col sm3:text-left text-center items-center OWF_Card mb-[30px] relative ${
                    card.colorCode === "#ffa808" ? "md:pl-20 pl-0" : ""
                  }`}
                >
                  <div
                    className={`sm:w-[100px]! w-20 sm:min-w-[100px] min-w-20 sm:h-[100px] h-20 m-5 relative`}
                  >
                    <div
                      className={`w-full h-full rounded-full bg-white flex justify-center items-center  transition-all duration-1000 relative z-3 OWF_Card_BG_Color`}
                      style={
                        { "--box-bg": card.colorCode } as React.CSSProperties
                      }
                    >
                      <FaBattleNet
                        className={`text-[45px] relative z-10 transition-all duration-1000 OWF_Card_Logo_Color`}
                        style={
                          {
                            "--box-color": card.colorCode,
                          } as React.CSSProperties
                        }
                      />
                    </div>
                    <div className="absolute sm:-top-8 top-[-23px] sm:-left-8 left-[-23px] z-2 sm:w-[165px] w-[126px] sm:h-[165px] h-[126px] flex justify-center items-center">
                      <div className="sm:w-[165px] w-[126px] sm:h-[165px] h-[126px] relative OWF_Card_Hover">
                        <Image
                          src={`/assets/images/Home_Page/our_work_flow/owf_card_${card.id}.png`}
                          fill
                          className="object-contain"
                          alt="our work flow card BG"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="sm3:pl-5 pl-0 sm3:mt-0 mt-[18px]">
                    <h4 className="sm3:text-[20px] text-[17px] font-semibold leading-[1.2] text-black! font-poppins mb-2">
                      {card.title}
                    </h4>
                    <p className="sm3:text-[14px] text-[13px] leading-normal font-poppins font-light">
                      {card.description}
                    </p>
                  </div>
                  <div
                    className={`absolute top-[-150px] left-12 w-[118px] h-[450px] ${
                      card.id === 2 ? "md:flex hidden" : "hidden"
                    } z-1`}
                  >
                    <Image
                      src="/assets/images/Home_Page/our_work_flow/owf_cards_bg.png"
                      fill
                      className="object-contain"
                      alt="our work flow cards bg image"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="xl:w-1/2 w-[41.66667%] lg:flex hidden px-[15px]">
          <div className="w-full sm:h-[586px]! sm2:h-[445px] h-[380px] relative">
            <Image
              src="/assets/images/Home_Page/our_work_flow/our_work_flow_Main-Image.png"
              fill
              className="object-contain Image-Transform-Animation"
              alt="our work flow main image"
            />
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default HOurWorkFlow;
