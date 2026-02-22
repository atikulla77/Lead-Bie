"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Autoplay } from "swiper/modules";

const HClients = () => {
  const clientsData = [
    { id: 1, img: "client_1", size: "w-[110px] h-[46px]" },
    { id: 2, img: "client_2", size: "w-[90px] h-[44px]" },
    { id: 3, img: "client_3", size: "w-[91px] h-[44px]" },
    { id: 4, img: "client_4", size: "w-[110px] h-[46px]" },
    { id: 5, img: "client_5", size: "w-[103px] h-[56px]" },
    { id: 6, img: "client_6", size: "w-[110px] h-[36px]" },
    { id: 7, img: "client_1", size: "w-[110px] h-[46px]" },
    { id: 8, img: "client_2", size: "w-[90px] h-[44px]" },
    { id: 9, img: "client_3", size: "w-[91px] h-[44px]" },
    { id: 10, img: "client_4", size: "w-[110px] h-[46px]" },
    { id: 11, img: "client_5", size: "w-[103px] h-[56px]" },
    { id: 12, img: "client_6", size: "w-[110px] h-[36px]" },
  ];
  return (
    <div>
      <div className="xl:w-[1199px]! lg:w-[960px]! md:w-[720px] sm:w-[510px] w-full mx-auto flex items-center justify-center text-center sm:px-0 px-[15px]">
        {/* <Swiper
          slidesPerView={5}
          spaceBetween={30}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          speed={1500}
           breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            420: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
            990: {
              slidesPerView: 5,
              spaceBetween: 25,
            },
            1200: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
          modules={[FreeMode, Autoplay]}
          className="mySwiper cursor-grab"
        >
          {clientsData.map((client) => {
            const [onHoverClientCard, setonHoverClientCard] = useState(false);
            return (
              <SwiperSlide>
                <div
                  key={client.id}
                  className={`w-full h-[100px] p-[20px_30px] ${
                        onHoverClientCard ? "bg-primary" : "bg-transparent"
                      } rounded-lg flex items-center justify-center transition duration-700 `}
                  onMouseEnter={() => {
                    setonHoverClientCard(true);
                  }}
                  onMouseLeave={() => {
                    setonHoverClientCard(false);
                  }}
                >
                  <div className={`${client.size} relative m-auto`}>
                    <Image
                      src={`/assets/images/Home_Page/clients/${client.img}_W.png`}
                      fill
                      className={`object-contain ${
                        onHoverClientCard ? "hidden" : ""
                      }`}
                      alt="Clients Images"
                    />
                    <Image
                      src={`/assets/images/Home_Page/clients/${client.img}_W.png`}
                      fill
                      className={`object-contain ${
                        onHoverClientCard ? "" : "hidden"
                      } `}
                      alt="Clients Images"
                    />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper> */}
        <p className="md:text-[15px] sm2:text-[14px] text-[12px] font-light font-poppins leading-normal bg-[#dde02360] text-black! md:p-[10px_30px]! sm:p-[7px_24px] sm2:p-[6px_20px] p-[6px_10px] rounded-[50px] text-center mx-auto">
            Trusted by startups and established businesses across Bangladesh and beyond.
          </p>
      </div>
    </div>
  );
};

export default HClients;
