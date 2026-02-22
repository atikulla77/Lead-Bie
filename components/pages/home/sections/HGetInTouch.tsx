import Button from "@/components/shared/ui-kit/Button";
import Image from "next/image";
import { CiBoxList } from "react-icons/ci";
import { FaAngleRight } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { GrDocumentText } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";
import { LiaSmsSolid } from "react-icons/lia";
import { LuUserRound } from "react-icons/lu";

type HGetInTouchProps = {
  pageName?: string;
  imgWidth?: number;
  imgHeight?: number;
  imgAnimation?: number;
};
const HGetInTouch: React.FC<HGetInTouchProps> = ({
  pageName = "Home",
  imgWidth = 858,
  imgHeight = 745,
  imgAnimation = 1,
}) => {
  return (
    <div className="">
      <div id="contact-us" className="xl:w-[1199px]! lg:w-[960px]! md:w-[720px] sm:w-[510px] w-full mx-auto flex lg:flex-row flex-col items-center lg:pt-[115px]! sm:pt-[70px] pt-[50px] lg:pb-[85px]! sm:pb-10 pb-5">
        <div className="xl:w-1/2 lg:w-[58.33333%] w-full font-poppins px-[15px] mb-[30px]">
          <h5 className="inline-block text-center xl:text-[22px]! lg:text-[16px] text-[18px] font-semibold -mb-0.5">
            CONTACT US
          </h5>
          <h2 className="xl:text-[60px]! lg:text-[40px]! sm:text-[42px] text-[30px] text-black! font-extrabold leading-[1.2] mb-10">
            GET IN TOUCH
          </h2>

          <div className="w-full grid sm:grid-cols-2 grid-cols-1 sm:gap-[30px] gap-0">
            <div className="mb-5 relative">
              <input
                type="text"
                placeholder="First Name"
                className="w-full bg-white text-[15px] placeholder:text-[#888] text-[#888] font-normal border border-[#cccccc] focus:border-primary focus:outline-none xl:h-[60px] h-[50px] p-[10px_20px_10px_65px] transition-all duration-300 ease-in-out font-roboto rounded-sm"
              />
              <div className="absolute left-[21px] top-0 h-full flex items-center">
                <div className="h-5 flex items-center pr-[11px] border-r border-r-[#9192a4]">
                  <LuUserRound className="text-[19px] text-primary" />
                </div>
              </div>
            </div>
            <div className="mb-5 relative">
              <input
                type="text"
                placeholder="Last Name"
                className="w-full bg-white text-[15px] placeholder:text-[#888] text-[#888] font-normal border border-[#cccccc] focus:border-primary focus:outline-none xl:h-[60px] h-[50px] p-[10px_20px_10px_65px] transition-all duration-300 ease-in-out font-roboto rounded-sm"
              />
              <div className="absolute left-[21px] top-0 h-full flex items-center">
                <div className="h-5 flex items-center pr-[11px] border-r border-r-[#9192a4]">
                  <LuUserRound className="text-[19px] text-primary" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full grid sm:grid-cols-2 grid-cols-1 sm:gap-[30px] gap-0">
            <div className="mb-5 relative">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-white text-[15px] placeholder:text-[#888] text-[#888] font-normal border border-[#cccccc] focus:border-primary focus:outline-none xl:h-[60px] h-[50px] p-[10px_20px_10px_65px] transition-all duration-300 ease-in-out font-roboto rounded-sm"
              />
              <div className="absolute left-[21px] top-0 h-full flex items-center">
                <div className="h-5 flex items-center pr-[11px] border-r border-r-[#9192a4]">
                  <HiOutlineMail className="text-[19px] text-primary" />
                </div>
              </div>
            </div>
            <div className="mb-5 relative">
              <input
                type="tel"
                placeholder="Phone No."
                className="w-full bg-white text-[15px] placeholder:text-[#888] text-[#888] font-normal border border-[#cccccc] focus:border-primary focus:outline-none xl:h-[60px] h-[50px] p-[10px_20px_10px_65px] transition-all duration-300 ease-in-out font-roboto rounded-sm"
              />
              <div className="absolute left-[21px] top-0 h-full flex items-center">
                <div className="h-5 flex items-center pr-[11px] border-r border-r-[#9192a4]">
                  <FiPhone className="text-[19px] text-primary" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full grid sm:grid-cols-2 grid-cols-1 sm:gap-[30px] gap-0">
            <div className="mb-5 relative">
              <input
                type="text"
                placeholder="Project Title"
                className="w-full bg-white text-[15px] placeholder:text-[#888] text-[#888] font-normal border border-[#cccccc] focus:border-primary focus:outline-none xl:h-[60px] h-[50px] p-[10px_20px_10px_65px] transition-all duration-300 ease-in-out font-roboto rounded-sm"
              />
              <div className="absolute left-[21px] top-0 h-full flex items-center">
                <div className="h-5 flex items-center pl-0.5 pr-[11px] border-r border-r-[#9192a4]">
                  <GrDocumentText className="text-[17px] text-primary" />
                </div>
              </div>
            </div>

            <div className="mb-5 relative">
              <select
                className="w-full bg-white text-[15px] text-[#888] font-normal border border-[#cccccc] 
               focus:border-primary focus:outline-none xl:h-[60px] h-[50px] pl-[65px] pr-5 
               transition-all duration-300 ease-in-out font-roboto rounded-sm appearance-none"
                defaultValue=""
              >
                <option value="">Choose Service</option>
                <option value="Web Development">Web Development</option>
                <option value="Web Design">Web Design</option>
                <option value="Strategy & Research">Strategy & Research</option>
              </select>

              {/* Left Icon */}
              <div className="absolute left-[21px] top-0 h-full flex items-center pointer-events-none">
                <div className="h-5 flex items-center pr-2.5 border-r border-r-[#9192a4]">
                  <CiBoxList className="text-[20px] text-primary" />
                </div>
              </div>

              {/* Custom Dropdown Arrow */}
              {/* <div className="absolute right-5 top-0 h-full flex items-center pointer-events-none">
                <svg
                  className="w-4 h-4 text-[#9192a4]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div> */}
            </div>
          </div>
          <div className="xl:mb-5! lg:mb-10 mb-[30px] relative">
            <textarea
              rows={4}
              placeholder="Message"
              className="w-full bg-white text-[15px] placeholder:text-[#888] text-[#888] font-normal border border-[#cccccc] focus:border-primary focus:outline-none p-[18px_20px_10px_65px] transition-all duration-300 ease-in-out font-roboto rounded-sm"
            />
            <div className="absolute left-[21px] top-0 h-[60px] flex items-center">
              <div className="h-5 flex items-center pr-[9px] border-r border-r-[#9192a4]">
                <LiaSmsSolid className="text-[22px] text-primary" />
              </div>
            </div>
          </div>
          <Button
            text="Submit Now"
            customClassName="sm2:w-fit w-full"
            padding="xl:p-[14px_37px] md:p-[14px_30px] sm3:p-[10px_14px] p-[9px_13px]"
            bgLinearGradient={true}
          />
        </div>
        <div className="xl:w-1/2 lg:w-[41.66667%] w-full px-[15px] mb-[30px]">
          <div className="w-full xl:h-[523px]! lg:h-[321px]! h-auto relative">
            <Image
              src={`/assets/images/${
                pageName === "Home"
                  ? "Home_Page/GetInTouch_Main_Image.png"
                  : pageName === "ContactUs"
                  ? "Contact_Us_Page/contact-us-main_image.png"
                  : "Home_Page/GetInTouch_Main_Image.png"
              }`}
              width={imgWidth}
              height={imgHeight}
              className={`w-full h-auto object-contain Image-Transform-Animation${imgAnimation}`}
              alt="get in touch main image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HGetInTouch;
