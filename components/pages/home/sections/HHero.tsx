import Image from "next/image";
import { FaAngleRight } from "react-icons/fa";
import { BsChevronDoubleRight } from "react-icons/bs";
import { PiMedal } from "react-icons/pi";
import Link from "next/link";
import Button from "@/components/shared/ui-kit/Button";

const HHero = () => {
  const ValueBullets = [
    { id: 1, title: "First, we do a deep dive into your business" },
    { id: 2, title: "Then we launch your campaign" },
    { id: 3, title: "Finally, you get sales meetings on auto-pilot" },
  ];
  return (
    <div className="relative">
      {/* Partical --- */}
      <div className="absolute xl:top-[60px]! md:top-[-100px] top-[205px] lg:left-[100px] left-0 -z-1 md:w-[760px] w-full h-[509px]">
        <div className="relative w-full h-full">
          <Image
            src="/assets/images/Partical_1.png"
            width={760}
            height={509}
            className="w-full h-auto object-cover"
            alt="Picture of the author"
          />
        </div>
      </div>
      <div className="absolute xl:top-0! sm:top-[30px] top-10 right-0 -z-1 w-[309px] h-[272px]">
        <div className="relative w-full h-full">
          <Image
            src="/assets/images/Partical_2.png"
            width={309}
            height={272}
            className="w-full h-auto object-cover"
            alt="Picture of the author"
          />
        </div>
      </div>
      {/* Main Contant */}
      <div className="xl:w-[1199px]! lg:w-[960px]! md:w-[720px] sm:w-[510px] w-full mx-auto  h-auto px-[15px] 2xl:pt-[50px]! lg:pt-10! sm:pt-[30px] pt-5 flex lg:flex-row flex-wrap justify-between lg:items-start items-center font-poppins! sm:pb-0 pb-[30px]">
        <div className="lg:w-[58.33333%] w-full lg:pb-0 sm:pb-[50px] pb-10">
          <h1 className="md:text-[48px] sm:text-[40px] text-[32px] font-bold font-poppins text-black! leading-[1.2] mb-3">
            Add <span className="text-primary!">5-20 qualified</span> sales
            meetings to your calendar
          </h1>
          {/* <br className="lg:flex hidden" /> */}
          <p className="md:text-[18px] text-[15px] font-light font-poppins  leading-normal mb-[9px]">
            We set up a cold email system, scrape the leads, write the emails,
            and book you calls with your dream prospects
          </p>
          <div className="w-full mb-3">
            {ValueBullets?.map((card) => (
              <div
                key={card.id}
                className="w-fit flex items-center relative group"
              >
                <div className="absolute left-0 top-0 h-full flex items-start pt-[11px] transition-transform duration-1000 ease-in-out transform sm:group-hover:translate-x-2.5 group-hover:translate-x-1.5">
                  <BsChevronDoubleRight className="text-primary sm:text-[17px] text-[15px]" />
                </div>
                <p className="sm:p-[8px_5px_8px_35px] p-[8px_5px_8px_25px] sm:text-[15px] text-[14px] leading-[1.6]">
                  {card.title}
                </p>
              </div>
            ))}
          </div>
          <p className="text-[15px] font-light font-poppins  leading-normal">
            Cold email services are ideal for startups, agencies, consultants, B2B companies, and service providers that want to generate qualified leads, book meetings, and grow revenue without relying solely on ads or inbound marketing.
          </p>
          {/* <div className="md:text-[18px] text-[15px]  font-light font-poppins leading-normal flex pt-2.5">
            <PiMedal className="text-[24px] text-primary md:mt-0.5 mt-px w-[35px]" />{" "}
            <span className="inline pl-[5px]">
              {" "}
              Trusted by startups and established businesses across Bangladesh
              and beyond.
            </span>
          </div> */}
        </div>
        <div className="lg:w-[41.66667%] w-full xl:h-[400px]! lg:h-[274px] h-auto relative">
          <Image
            src="/assets/images/Home_Page/Home_Main_Image.png"
            width={1000}
            height={878}
            className="w-full h-auto object-contain Image-Transform-Animation"
            alt="home main image"
          />
        </div>
      </div>
    </div>
  );
};

export default HHero;
