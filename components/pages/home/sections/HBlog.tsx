"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

// import required modules
import { FreeMode, Autoplay, Navigation } from "swiper/modules";
import { IoMdTime } from "react-icons/io";
import { FaAngleRight, FaArrowLeft, FaRegComment } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import Button from "@/components/shared/ui-kit/Button";
type HBlogProps = {
  pageName?: string;
};

const HBlog: React.FC<HBlogProps> = ({ pageName }) => {
  const blogsData = [
    {
      id: 1,
      name: "Designing for Conversion: 7 UX Patterns That Work",
      description:
        "Practical patterns to increase signups and sales without sacrificing usability.",
      date: "7 March, 2023",
      comment: 15,
      img: "blog_1",
    },
    {
      id: 2,
      name: "Speed Matters: A Practical Guide to Web Performance",
      description:
        "Techniques to cut load times and delight users across devices.",
      date: "7 March, 2023",
      comment: 17,
      img: "blog_2",
    },
    {
      id: 3,
      name: "From Idea to MVP: A Roadmap for Founders",
      description:
        "Research, prototyping, and validation steps to launch faster.",
      date: "7 March, 2023",
      comment: 12,
      img: "blog_3",
    },
    // {
    //   id: 4,
    //   name: "Quisque sem tortor, convallis in arcu finibus.",
    //   description:
    //     "Pellentesque vel nibh gravida erat interdum lacinia vel in lectus. Sed fermentum pulvinar.",
    //   date: "7 March, 2023",
    //   comment: 15,
    //   img: "blog_1",
    // },
    // {
    //   id: 5,
    //   name: "Praesent ut lobortis purus hasellus accumsan.",
    //   description:
    //     "Pellentesque vel nibh gravida erat interdum lacinia vel in lectus. Sed fermentum pulvinar.",
    //   date: "7 March, 2023",
    //   comment: 17,
    //   img: "blog_2",
    // },
    // {
    //   id: 6,
    //   name: "Donec feugiat mollis nisi in dignissim. Morbi lectus.",
    //   description:
    //     "Pellentesque vel nibh gravida erat interdum lacinia vel in lectus. Sed fermentum pulvinar.",
    //   date: "7 March, 2023",
    //   comment: 12,
    //   img: "blog_3",
    // },
  ];

  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Set slides per view dynamically
  const slidesPerView =
    windowWidth >= 1030
      ? 3
      : windowWidth >= 800
      ? 2
      : windowWidth >= 600
      ? 1
      : 1;

  return (
    <div>
      <div className="1xl:w-[1240px]! 1lg:w-[1000px]! 1md:w-[780px] sm:w-[550px] w-full mx-auto flex flex-col items-center lg:pt-[115px]! sm:pt-[70px] pt-[50px] sm2:px-[15px] px-0">
        <div className="w-full text-center font-poppins mb-[35px] sm2:px-0 px-[15px]">
          <h2 className="xl:text-[60px]! lg:text-[40px]! sm:text-[42px] text-[30px] text-black! font-extrabold leading-[1.2] mb-2">
            Latest Blog & News
          </h2>

          <p className="sm3:text-[15px] text-[13px] font-light font-poppins leading-normal mx-auto">
            Insights, howtos, and case studies from the PentaBite team.
            <br className="sm2:flex hidden" /> Learn best practices for building
            and
            <br className="sm2:flex hidden" /> growing digital products.
          </p>
        </div>
        <div className="w-full relative">
          <Swiper
            slidesPerView={slidesPerView}
            slidesPerGroup={1}
            spaceBetween={0}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            speed={2000}
            modules={[FreeMode, Autoplay, Navigation]}
            className="mySwiper flex! justify-center!"
          >
            {blogsData.map((blog) => (
              <SwiperSlide key={blog.id}>
                <div className="py-[15px] h-full">
                  <div className="1xl:w-[370px]! 1lg:w-[290px]! 1md:w-[330px]! sm:w-[480px]! sm2:w-[360px] w-[300px] h-full shadow-[0px_0px_20px_#00000026] md:mx-auto! sm:mx-[15px] mx-auto">
                    <div className="w-full h-full rounded-sm! flex flex-col justify-center items-start overflow-hidden">
                      <div
                        className={`w-full 1xl:h-[200px]! 1lg:h-[157px]! 1md:h-[178px]! sm:h-[260px]! sm2:h-[195px] h-[162px] relative `}
                      >
                        <Image
                          src={`/assets/images/Home_Page/Blog/${blog.img}.jpg`}
                          fill
                          className="object-contain"
                          alt="Blog Images"
                        />
                      </div>
                      <div className="w-full sm:p-[30px] p-[15px] bg-white">
                        <h1 className="sm:text-[20px] text-[18px]  hover:text-primary! text-black! leading-[1.4] font-semibold font-poppins transition-all duration-1000 cursor-pointer sm:pb-2.5 pb-[7px]">
                          {blog.name}
                        </h1>
                        <p className="sm:text-[15px] text-[13px] font-normal font-poppins leading-[1.6]">
                          {blog.description}
                        </p>

                        <div className="flex justify-between items-center border-t border-[#e1e1f0] sm:p-[25px_0px_0px] p-[15px_0px_0px] m-[20px_0px_0px]">
                          <div className="h-8 flex items-center ">
                            <IoMdTime className="1xl:text-[25px]! sm:text-[23px] text-[21px] text-primary 1xl:mr-[5px] mr-0.5" />
                            <p className="1xl:text-[15px]! sm:text-[14px] text-[13px] font-normal text-[#b7b7b7]">
                              {blog.date}
                            </p>
                          </div>
                          <div className="h-8 flex items-center text-primary">
                            <FaRegComment className="1xl:text-[19px]! sm:text-[17px] text-[16px] sm:mr-2.5 mr-[7px]" />
                            <p className="1xl:text-[15px]! sm:text-[14px] text-[13px] font-normal">
                              {blog.comment}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* ✅ Custom Navigation Buttons */}
          <div className="absolute 2xl:left-[-50px] left-[-15px] top-0 z-40 h-full md:flex hidden justify-center items-center">
            <button className="custom-prev bg-primary text-white w-11 h-[41px] rounded-[3px] flex items-center justify-center shadow-[1px_0px_15px_#0000005e] cursor-pointer">
              <FaArrowLeft />
            </button>
          </div>
          <div className="absolute 2xl:right-[-50px] right-[-15px] top-0 z-40 h-full md:flex hidden justify-center items-center">
            <button className="custom-next bg-primary text-white w-11 h-[41px] rounded-[3px] flex items-center justify-center shadow-[1px_0px_15px_#0000005e] cursor-pointer">
              <FaArrowRight />
            </button>
          </div>
        </div>

        <Button
          text="Explore All Articles"
          link="/"
          customClassName="w-fit flex mx-auto xl:mt-[55px] mt-[42px]"
          border="p-[1px]"
          borderLinearGradient={true}
          borderLinearGradientPadding={`xl:p-[12px_37px]! md:p-[12px_30px] sm3:p-[10px_23px] p-[9px_28px] ${
            pageName === "AboutUs" ? "bg-[#f4f2ff]! hover:bg-transparent!" : ""
          }`}
        />
      </div>
    </div>
  );
};

export default HBlog;
