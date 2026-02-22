import Image from "next/image";
import Link from "next/link";
import { FaAngleRight, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

import { TbBrandFiverr } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const footerData = [
    {
      id: 1,
      name: "OUR LINKS",
      subLinks: [
        { id: 1, name: "Services", link: "#services" },
        { id: 2, name: "Pricing", link: "#pricing" },
        { id: 3, name: "Our Process", link: "#our-process" },
        { id: 4, name: "Testmonial", link: "#testmonial" },
        { id: 5, name: "Contact Us", link: "#contact-us" },
      ],
    },
    {
      id: 2,
      name: "OUR SERVICES",
      subLinks: [
        { id: 1, name: "Cold Email", link: "" },
        { id: 2, name: "Email List Building", link: "" },
        { id: 3, name: "Data Scraping", link: "" },
      ],
    },

  ];
  return (
    <div>
      <div
        className="relative"
        style={{
          background: "url('/assets/images/footer_bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#110f0f",
        }}
      >
        <footer className="xl:w-[1199px]! lg:w-[960px]! md:w-[720px] sm:w-[510px] w-full items-center mx-auto flex flex-col md:p-[70px_0_30px] p-[50px_0_20px]">
          <div className="w-full md:px-[15px]! sm:px-0 px-[15px] mb-[30px]">
            <div className="w-full flex md:flex-row flex-wrap items-center justify-between border-b border-[#ffffff24] pb-2.5">
              <div className="xl:w-[41.66667%]! md:w-[33.33333%] w-full mb-2.5">
                <div className="sm:w-40 w-[140px] h-[50px] flex items-center relative">
                  <Link
                    href="/"
                    className="flex items-center text-[21px] font-earthorbiter cursor-pointer select-none"
                  >
                    <p className="font-semibold text-white!">
                      Lead
                      <span className="text-primary! font-semibold">Bie</span>
                    </p>
                  </Link>
                </div>
              </div>
              <div className="xl:w-[25%]! md:w-[33.33333%] sm:w-[50%] w-full flex items-center mb-2.5 md:px-[15px] px-0">
                <div className="w-20 h-20 flex justify-center items-center mr-2.5">
                  <div className="lg:w-[60px]! w-[50px] h-[70px] relative">
                    <Image
                      src="/assets/images/Footer/footer_icon_email.png"
                      fill
                      className="object-contain"
                      alt="Picture of Footer Icon"
                    />
                  </div>
                </div>
                <div className="font-roboto">
                  <h3 className="text-[16px] leading-[1.6] text-[#ffffffc0]! font-medium">
                    +8801723260439
                  </h3>
                  <p className="xl:text-[16px] text-[15px] text-[#ffffffc0]!">
                    hafizurr.rahmaan@gmail.com
                  </p>
                </div>
              </div>
              <div className="md:w-[33.33333%]! sm:w-[50%] w-full flex items-center mb-2.5 md:pl-[15px] pl-0">
                <div className="min-w-20 h-20 flex justify-center items-center mr-2.5">
                  <div className="lg:w-[60px]! md:w-[50px] w-[60px] h-[70px] relative">
                    <Image
                      src="/assets/images/Footer/footer_icon_map.png"
                      fill
                      className="object-contain"
                      alt="Picture of Footer Icon"
                    />
                  </div>
                </div>
                <div className="font-roboto">
                  <p className="xl:text-[16px] text-[15px] text-[#ffffffc0]!">
                    Rajshahi, Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="flex flex-wrap justify-between text-left">
              <div className="xl:w-1/3! lg:w-[33.33333%]! sm:w-[50%] w-full md:px-[15px]! sm:px-0 px-[15px] pb-[30px]">
                <h2 className="text-[24px] font-bold text-white! leading-[1.2] pb-2.5 m-[0_0_30px] font-poppins relative">
                  ABOUT US
                  <div className="absolute left-0 bottom-0 flex items-center gap-[5px]">
                    <div className="w-[15px] bg-primary h-1 rounded-[20px]"></div>
                    <div className="w-[45px] bg-primary h-1 rounded-[20px]"></div>
                  </div>
                </h2>
                <div>
                  <p className="text-[15px] text-[#ffffffc0]! leading-6 mb-5">
                    LeadBie — We set up a cold email system, scrape the leads,
                    write the emails, and book you calls with your dream
                    prospects
                  </p>

                  <div className="flex items-center">
                    <Link
                      href="https://www.fiverr.com/s/BR4K6dd"
                      target="_blank"
                      className="bg-transparent rounded-[50%] w-[30px] h-[30px] flex justify-center items-center text-[#fff] hover:text-primary transition-[0.3s]"
                    >
                      <TbBrandFiverr className="text-[21px] " />
                    </Link>
                    <Link
                      href="https://www.linkedin.com/in/hafizur-rahman-960249225"
                      target="_blank"
                      className="ml-[5px] bg-transparent rounded-[50%] w-[30px] h-[30px] flex justify-center items-center text-[#fff] hover:text-primary transition-[0.3s]"
                    >
                      <FaLinkedinIn className="text-[18px] " />
                    </Link>

                    <Link
                      href="https://t.me/Hafizur_rahman03"
                      target="_blank"
                      className="ml-[5px] bg-transparent rounded-[50%] w-[30px] h-[30px] flex justify-center items-center text-[#fff] hover:text-primary transition-[0.3s]"
                    >
                      <FaTelegramPlane className="text-[19px] " />
                    </Link>
                    <Link
                      href="https://wa.me/8801723260439"
                      target="_blank"
                      className="ml-[5px] bg-transparent rounded-[50%] w-[30px] h-[30px] flex justify-center items-center text-[#fff] hover:text-primary transition-[0.3s]"
                    >
                      <FaWhatsapp className="text-[19px] " />
                    </Link>
                  </div>
                </div>
              </div>
              {footerData.map((fData) => {
                return (
                  <div
                    key={fData.id}
                    className={`${
                      fData.name === "OUR LINKS"
                        ? "xl:w-[200px]! lg:w-[16.66667%]! sm:w-[50%] w-full"
                        : "lg:w-[300px]! sm:w-[50%] w-full"
                    } px-[15px] pb-[30px]`}
                  >
                    <h2 className="text-[24px] font-bold text-white! leading-[1.2] pb-2.5 m-[0_0_25px] font-poppins relative">
                      {fData.name}
                      <div className="absolute left-0 bottom-0 flex items-center gap-[5px]">
                        <div className="w-[15px] bg-primary h-1 rounded-[20px]"></div>
                        <div className="w-[45px] bg-primary h-1 rounded-[20px]"></div>
                      </div>
                    </h2>
                    <ul className="">
                      {fData.subLinks.map((fDLink) => {
                        return (
                          <li key={fDLink.id} className="">
                            {fDLink?.link === "" ? (
                              <p className="flex items-center text-[#ffffffc0]! hover:text-white! transition-all duration-1000 p-[.5rem_0rem_.5rem_.9375rem] leading-5 capitalize relative cursor-pointer">
                                <div className="absolute left-[-3px] -top-px h-full flex items-center">
                                  <FaAngleRight className="text-[15px]" />
                                </div>
                                <h6 className="text-[15px] font-normal font-roboto">
                                  {fDLink.name}
                                </h6>
                              </p>
                            ) : (
                              <Link
                                href={fDLink?.link}
                                className="flex items-center text-[#ffffffc0] hover:text-white transition-all duration-1000 p-[.5rem_0rem_.5rem_.9375rem] leading-5 capitalize relative"
                              >
                                <div className="absolute left-[-3px] -top-px h-full flex items-center">
                                  <FaAngleRight className="text-[15px]" />
                                </div>
                                <h6 className="text-[15px] font-normal font-roboto">
                                  {fDLink.name}
                                </h6>
                              </Link>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </footer>
      </div>
      <div className="w-full bg-[#1e1e1e] p-[15px_0] text-center font-roboto">
        <p className="text-[15px] text-[#ffffffa2]! leading-[1.6]">
          © <span className="text-white!">LeadBie</span>. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
