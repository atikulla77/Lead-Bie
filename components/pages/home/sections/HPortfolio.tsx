"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

const HPortfolio = () => {
  const portfolioData = [
    { id: 1, img: "work_1", width: 800, height: 517, },
    { id: 2, img: "work_2", width: 800, height: 737, },
    { id: 3, img: "work_3", width: 800, height: 486, },
    { id: 4, img: "work_4", width: 800, height: 486, },
    { id: 5, img: "work_5", width: 800, height: 337, },
    { id: 6, img: "work_6", width: 800, height: 861, },
  ];
  const portfolioMainData = [
    {
      id: 1,
      img: "work_1",
      title: "ECommerce Platform for Local Retailer",
      description: "Mobilefirst storefront, secure checkout, inventory sync",
      width: 800,
      height: 517,
      customClass: "md:w-[58.333%] w-full xl:h-[433px]! lg:h-[343px]! md:h-[252px] sm:h-[330px] h-auto",
    },
    {
      id: 2,
      img: "work_2",
      title: "Healthcare Appointment System",
      description: "Patient scheduling, reminders, HIPAAaware workflows",
      width: 800,
      height: 737,
      customClass: "md:w-[41.666%] w-full xl:h-[433px]! lg:h-[343px]! md:h-[252px] sm:h-[450px] h-auto",
    },
    {
      id: 3,
      group: true,
      groupInfo: [
        {
          id: 1,
          img: "work_3",
          title: "Education LMS for Coaching Center",
          description: "Courses, quizzes, progress tracking",
          width: 800,
          height: 486,
          customClass: "md:w-1/2 w-full xl:h-[195px]! lg:h-[152px]! md:h-[200px] sm:h-[310px] h-auto",
        },
        {
          id: 2,
          img: "work_4",
          title: "Logistics Tracking Dashboard",
          description: "Realtime tracking, analytics, rolebased access",
          width: 800,
          height: 486,
          customClass: "md:w-1/2 w-full xl:h-[195px]! lg:h-[152px]! md:h-[200px] sm:h-[310px] h-auto",
        },
        {
          id: 3,
          img: "work_5",
          title: "Restaurant Ordering App",
          description: "Digital menu, table reservations, delivery integrations",
          width: 800,
          height: 337,
          customClass:
            "w-full xl:h-[282px]! lg:h-[223px]! md:h-[291px] sm:h-[215px] h-auto",
        },
      ],
    },
    {
      id: 6,
      img: "work_6",
      title: "Corporate Website Redesign",
      description: "Brand refresh, SEO uplift, faster load times",
      width: 800,
      height: 861,
      customClass:
        "lg:w-[41.666%] w-full xl:h-[505px]! lg:h-[405px]! md:h-[743px] sm:h-[549px] h-auto",
    },
  ];
  const [showFullViewImage, setShowFullViewImage] = useState(false)
  const [fullViewActiveImage, setFullViewActiveImage] = useState('work_1')

  return (
    <div className="relative">
      <div className="xl:w-[1199px]! lg:w-[960px]! md:w-[720px] sm:w-[510px] w-full mx-auto flex flex-col items-center lg:pt-[115px]! sm:pt-[70px] pt-[50px] lg:pb-[85px]! sm:pb-10 pb-5">
        <div className="w-full text-center font-poppins md:px-[15px]! sm:px-0 px-[15px] md:mb-0 sm:mb-[30px] mb-[15px]">
          <div className="xl:mb-10 mb-[30px]">
            <h5 className="text-center xl:text-[22px]! lg:text-[16px] text-[18px] font-semibold -mb-0.5">
              Portfolio
            </h5>
            <h2 className="xl:text-[60px]! lg:text-[40px]! sm:text-[42px] text-[30px] text-black! font-extrabold leading-[1.2] mb-2">
              Our Latest Work
            </h2>
          </div>
        </div>

        <div className="w-full flex flex-wrap">
          {portfolioMainData.map((card) => {
            return (
              <React.Fragment key={card.id || card.img}>
                <div className={`${card?.customClass} ${card?.group ? "hidden" : ""} px-[15px] mb-[30px] overflow-hidden relative Portfolio_Card`}>
                  <Image
                    src={`/assets/images/Home_Page/Portfolio/${card?.img ? card?.img : 'work_1'}.jpg`}
                    alt="Portfolio Images"
                    width={card?.width ? card?.width : 800}
                    height={card?.height ? card?.height : 800}
                    className="w-full h-auto object-cover relative z-0 rounded-[10px]"
                  />
                  <div className="absolute left-0 top-0 z-1 w-full h-full px-[15px]">
                    <div className="w-full h-full rounded-[10px] overflow-hidden opacity-0 transition-all duration-1000 relative Portfolio_Card_Info">
                      <div className="absolute left-0 top-0 w-full h-full bg-black opacity-[.4] z-5"></div>
                      <div className="absolute right-[-50px] top-[-50px] sm:w-[50px]! sm4:w-10 w-8 sm:h-[50px]! sm4:h-10 h-8 sm:leading-[50px]! sm4:leading-10 leading-8 flex justify-center items-center text-white bg-linear3 bg-size-[200%_auto] opacity-0 rounded-lg bg-left transition-all duration-1000 hover:bg-right cursor-pointer z-15 P_Card_Info_Icon" onClick={() => {setFullViewActiveImage(card?.img ? card?.img: 'work_1'); setShowFullViewImage(true)}}>
                        <FiPlus className="sm:text-[28px]! sm4:text-[21px] text-[18px]" />
                      </div>
                      <div className="absolute left-0 sm:bottom-[-125px] bottom-[-100px] w-full sm:p-[30px] sm2:p-5 p-3 z-10 opacity-0 transition-all duration-1000 P_Card_Info_Title">
                        <h2 className="sm:text-[20px]! sm4:text-[18px] text-[17px] sm:leading-[25px] leading-[25px] text-white! font-extrabold font-poppins mb-1">
                          {card?.title}
                        </h2>
                        <p className="sm:text-[15px]! sm4:text-[14px] text-[13px] sm4:leading-[1.3] leading-[1.2] text-white!  opacity-[.8] font-normal font-roboto">
                            {card?.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`lg:w-[58.333%] w-full ${card?.group ? "flex" : "hidden"} flex-wrap`}>
                  {card.groupInfo?.map((groupCard) => {
                    return (
                      <div key={groupCard.id} className={`${groupCard?.customClass} px-[15px] mb-[30px] overflow-hidden relative Portfolio_Card`}>
                        <Image
                          src={`/assets/images/Home_Page/Portfolio/${groupCard?.img}.jpg`}
                          alt="Portfolio Images"
                          width={groupCard?.width}
                          height={groupCard?.height}
                          className="w-full h-auto object-cover relative z-0 rounded-[10px]"
                        />
                        <div className="absolute left-0 top-0 z-1 w-full h-full px-[15px]">
                          <div className="w-full h-full rounded-[10px] overflow-hidden opacity-0 transition-all duration-1000 relative Portfolio_Card_Info">
                            <div className="absolute left-0 top-0 w-full h-full bg-black opacity-[.4] z-5"></div>
                            <div className="absolute right-[-50px] top-[-50px] sm:w-[50px]! sm4:w-10 w-8 sm:h-[50px]! sm4:h-10 h-8 sm:leading-[50px]! sm4:leading-10 leading-8 flex justify-center items-center text-white bg-linear3 bg-size-[200%_auto] opacity-0 rounded-lg bg-left transition-all duration-1000 hover:bg-right cursor-pointer z-15 P_Card_Info_Icon" onClick={() => {setFullViewActiveImage(groupCard?.img ? groupCard?.img: 'work_1'); setShowFullViewImage(true)}}>
                              <FiPlus className="sm:text-[28px]! sm4:text-[21px] text-[18px]" />
                            </div>
                            <div className="absolute left-0 sm:bottom-[-125px] bottom-[-100px] w-full sm:p-[30px] sm2:p-5 p-3 z-10 opacity-0 transition-all duration-1000 P_Card_Info_Title">
                              <h2 className="sm:text-[20px]! sm4:text-[18px] text-[17px] sm:leading-[25px] leading-[25px] text-white! font-extrabold font-poppins mb-1">
                                {groupCard?.title}
                              </h2>
                              <p className="sm:text-[15px]! sm4:text-[14px] text-[13px] text-white! sm4:leading-[1.3] leading-[1.2]  opacity-[.8] font-normal font-roboto">
                                  {groupCard?.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </React.Fragment>
            )
          })}
        </div>
      </div>



      {/* Full Image View */}
      <div className={`fixed left-0 top-0 w-full h-screen ${showFullViewImage? '':'hidden'} z-100`}>
        <div className="w-full h-full relative">
          <div className="absolute left-0 top-0 w-full h-full bg-[#000000cb] z-50"></div>
          <div className="w-full h-full flex justify-center items-center relative z-100">
            {/* Main Image */}
            <div className="lg:w-[40%]! md:w-[60%] sm:w-[70%] w-[90%] h-auto z-90">
              <Image
                src={`/assets/images/Home_Page/Portfolio/${fullViewActiveImage}.jpg`}
                alt="Portfolio Images"
                width={800}
                height={517}
                className="w-full lg:h-[30vmax]! md:h-[35vmax]! sm:h-[40vmax] sm2:h-[70vh] h-auto object-cover relative z-5"
              />
            </div>     

            <div className="absolute left-0 bottom-0 w-full  overflow-x-auto flex gap-2 items-center z-100 p-[15px]">
              {portfolioData.map((card) => {
                return (
                  <div key={card.id} className={`2xl:w-[95px]! sm:w-[75px] w-[65px] min-w-[65px] 2xl:h-20! sm:h-[60px] h-[50px] border-2 ${fullViewActiveImage === card.img ? 'border-primary':'border-white'} rounded-sm flex justify-center overflow-hidden cursor-pointer`} onClick={() => {setFullViewActiveImage(card.img)}}>
                    <Image
                      src={`/assets/images/Home_Page/Portfolio/${card.img}.jpg`}
                      alt="Portfolio Images"
                      width={card.width}
                      height={card.height}
                      className="w-full h-full object-cover relative z-5"
                    />
                  </div>
                )
              })}
            </div>
            <div className="absolute right-5 top-5">
                <RxCross2 className="text-[25px] text-white cursor-pointer" onClick={() => {setShowFullViewImage(false)}} />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default HPortfolio;
