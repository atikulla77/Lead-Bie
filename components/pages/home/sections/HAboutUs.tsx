import Button from "@/components/shared/ui-kit/Button";
import Image from "next/image";
import Link from "next/link";
import { BsChevronDoubleRight } from "react-icons/bs";
import { FaAngleRight } from "react-icons/fa";
import { FaCheck, FaRegCircleCheck } from "react-icons/fa6";
type HGetInTouchProps = {
  imgAnimation?: number;
};

const HAboutUs: React.FC<HGetInTouchProps> = ({ imgAnimation = 1 }) => {
  return (
    <div>
      <div
        className={`xl:w-[1199px]! lg:w-[960px]! md:w-[720px] sm:w-[510px] w-full mx-auto flex md:flex-row flex-col items-center lg:pt-[115px]! sm:pt-[70px] pt-[50px] lg:pb-[85px]! sm:pb-10 pb-5`}
      >
        <div className={`px-[15px] md:w-1/2 w-full md:mb-0 mb-[30px]`}>
          <div className="w-full sm:h-[523px]! sm2:h-[445px] h-[380px] relative">
            <Image
              src="/assets/images/Home_Page/AboutUs_Main_Image.png"
              fill
              className={`object-contain Image-Transform-Animation${imgAnimation}`}
              alt="about us main image"
            />
          </div>
        </div>
        <div
          className={`font-poppins md:w-1/2 w-full px-[15px] md:mb-0 mb-[30px]`}
        >
          <div className={""}>
            <h2 className="xl:text-[60px]! lg:text-[40px]! sm:text-[42px] text-[30px] text-black! font-extrabold leading-[1.2] mb-[5px]">
              How We Help Your <br />{" "}
              <span className="text-primary!">Business Grow</span>
            </h2>
            <p className="text-[16px] text-[#b7b7b7] leading-[1.6] font-roboto">
              We make sure your calendar is filled with sales meetings with prospects you want to work with. We take all the headaches and hassle of prospecting out of your hands so you can focus on closing the leads we send you every week.
            </p>

            <ul className={`mt-[15px] flex flex-col gap-2.5 `}>
              <li className="text-[15px] font-semibold">Approach:</li>
              <li className="flex items-center">
                <span
                  className={`w-[18px] h-[18px] flex justify-center items-center rounded-full transition-all duration-[0.8s] bg-linear3 bg-size-[200%] bg-left hover:bg-right text-white! opacity-[.8]`}
                >
                  <FaCheck className="text-[11px]" />
                </span>
                <span className="ml-2.5 text-[14px]">
                  DFY Outbound Infrastructure Creation & Maintenance
                </span>
              </li>
              <li className="flex items-center">
                <span
                  className={`w-[18px] h-[18px] flex justify-center items-center rounded-full transition-all duration-[0.8s] bg-linear3 bg-size-[200%] bg-left hover:bg-right text-white! opacity-[.8]`}
                >
                  <FaCheck className="text-[11px]" />
                </span>
                <span className="ml-2.5 text-[14px]">
                  DFY Lead Scraping
                </span>
              </li>
              <li className="flex items-center">
                <span
                  className={`w-[18px] h-[18px] flex justify-center items-center rounded-full transition-all duration-[0.8s] bg-linear3 bg-size-[200%] bg-left hover:bg-right text-white! opacity-[.8]`}
                >
                  <FaCheck className="text-[11px]" />
                </span>
                <span className="ml-2.5 text-[14px]">
                  DFY Response Management & Booking
                </span>
              </li>
              <li className="flex items-center">
                <span
                  className={`w-[18px] h-[18px] flex justify-center items-center rounded-full transition-all duration-[0.8s] bg-linear3 bg-size-[200%] bg-left hover:bg-right text-white! opacity-[.8]`}
                >
                  <FaCheck className="text-[11px]" />
                </span>
                <span className="ml-2.5 text-[14px]">
                  Weekly Performance Reporting
                </span>
              </li>
            </ul>

          </div>
        </div>
      </div>
    </div>
  );
};

export default HAboutUs;
