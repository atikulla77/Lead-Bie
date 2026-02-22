"use client";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import {
  FaAngleRight,
  FaArrowLeft,
  FaArrowRight,
  FaQuoteLeft,
} from "react-icons/fa";

// import required modules
import { FreeMode, Autoplay, Navigation } from "swiper/modules";
import Link from "next/link";
import Button from "@/components/shared/ui-kit/Button";

type HTestimonialProps = {
  pageName?: string;
};
const HTestimonial: React.FC<HTestimonialProps> = ({ pageName }) => {
  const blogsData = [
    {
      id: 1,
      name: "Farhan M",
      position: "Business Owner",
      description:
        "Hafizur and his team made the DFY cold email process completely effortless. Everything was handled end-to-end, and we started getting quality leads immediately!",
      img: "user_1",
    },
    {
      id: 2,
      name: "Dr. Shirin A",
      position: "Chief Marketing Officer",
      description:
        "Thanks to Hafizur, our outreach is now seamless. From targeted lists to personalized emails, every step was managed professionally, delivering excellent results.",
      img: "user_2",
    },
    {
      id: 3,
      name: "Kamal R",
      position: "CEO",
      description:
        "Hafizur’s DFY cold email service exceeded our expectations. We saw booked meetings and high-quality leads without lifting a finger—highly recommended!",
      img: "user_3",
    },
  ];

  return (
    <div id="testmonial" className="lg:pt-[115px]! sm:pt-[70px] pt-[50px] lg:pb-[85px]! sm:pb-10 pb-5">
      <div className="xl:w-[1199px]! lg:w-[960px]! md:w-[720px] sm:w-[510px] w-full mx-auto flex lg:flex-row flex-col items-center md:px-[15px]! sm:px-0 px-[15px]">
        <div className="lg:w-1/2 w-full text-left font-poppins md:px-[15px] px-0 mb-10 lg:order-1 order-2">
          <h5 className="inline-block xl:text-[22px]! lg:text-[16px] text-[18px] font-semibold -mb-0.5">
            TESTMONIAL
          </h5>
          <h2 className="xl:text-[60px]! lg:text-[40px]! sm:text-[42px] text-[30px] text-black! font-extrabold leading-[1.2] mb-2">
            What Our Clients Say
          </h2>
          <p className="text-[15px] font-light font-poppins text-[#b7b7b7] leading-[25px]">
            Nunc vel ligula ut erat scelerisque vehicula sit amet porttitor
            magna. Donec malesuada quis diam quis pellentesque.
          </p>
        </div>
        <div className="lg:w-1/2 w-full md:px-[15px] px-0 relative lg:order-2 order-1 sm2:mb-0 mb-[15px]">
          <Swiper
            slidesPerView={1}
            slidesPerGroup={1}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 55552500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            speed={2000}
            modules={[FreeMode, Autoplay, Navigation]}
            className="mySwiper cursor-grab flex! justify-center!"
          >
            {blogsData.map((blog) => (
              <SwiperSlide key={blog.id}>
                <div className="xl:w-[570px]! lg:w-[450px] w-full h-full lg:m-[15px] m-0 lg:p-0 p-[15px]">
                  <div className="xl:w-[525px]! lg:w-[405px] w-full sm:p-[35px]! sm2:p-5 p-[15px] bg-white rounded-sm! shadow-[1px_0_20px_#0000001a]">
                    <p className="sm:text-[18px] text-[15px] font-normal font-roboto italic leading-[1.6] mb-5">
                      {blog.description}
                    </p>
                    <div className="flex md:items-center items-end justify-between">
                      <FaQuoteLeft className="md:text-[85px] text-[50px] text-primary leading-none opacity-[.4]" />
                      <div className="flex items-center">
                        <div className="text-right">
                          <h3 className="sm:text-[22px]! sm2:text-[18px] text-[17px] text-black! font-bold sm:leading-[26px] leading-5 sm:mb-[5px] mb-0.5 font-poppins">
                            {blog.name}
                          </h3>
                          <p className="sm:text-[15px] text-[13px] font-normal font-roboto">
                            {blog.position}
                          </p>
                        </div>
                        <div
                          className={`sm:w-20 w-[60px] sm:h-20 h-[60px] border-2 border-primary relative sm2:ml-5 ml-2.5 rounded-full`}
                        >
                          <Image
                            src={`/assets/images/Home_Page/Testmonial/${blog.img}.jpg`}
                            fill
                            className="object-contain rounded-full"
                            alt="Testmonial User Image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* ✅ Custom Navigation Buttons */}
          <div className="flex justify-center gap-5 sm2:mt-5 mt-[15px]">
            <button className="custom-prev bg-white hover:bg-primary text-primary hover:text-white w-[45px] h-[45px] rounded-full flex items-center justify-center shadow-[1px_0_20px_#0000001a] cursor-pointer transition-all duration-500">
              <FaArrowLeft />
            </button>
            <button className="custom-next bg-white hover:bg-primary text-primary hover:text-white w-[45px] h-[45px] rounded-full flex items-center justify-center shadow-[1px_0_20px_#0000001a] cursor-pointer transition-all duration-500">
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HTestimonial;
