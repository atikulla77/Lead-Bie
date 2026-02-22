"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa";
import { LuAlignJustify } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [mobileNav, setMobileNav] = useState(false);

  const NavbarAPI = [
    { id: 1, navName: "Home", link: "/" },
    { id: 2, navName: "Services", link: "#services" },
    { id: 3, navName: "Pricing", link: "#pricing" },
    { id: 4, navName: "Our Process", link: "#our-process" },
    { id: 5, navName: "Testmonial", link: "#testmonial" },
    { id: 6, navName: "Contact Us", link: "#contact-us" },
  ];

  const [isSticky, setIsSticky] = useState(false);
  const [normalSlide, setNormalSlide] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 90) {
        setNormalSlide(false);
        setIsSticky(true);
      } else {
        setNormalSlide(true);
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Normal / Sticky Navbar */}
      <div
        className={`bg-defaultBG ${
          normalSlide ? "" : "shadow-[0px_0px_5px_#7c7c7c1a]"
        } ${
          isSticky
            ? "fixed top-0 left-0 z-100 w-full transition-all duration-[0.9s] StickyNavbarAnimation"
            : "relative z-100"
        }`}
      >
        <div
          className={`xl:w-[1199px]! lg:w-[960px]! md:w-[720px] sm:w-[510px] w-full mx-auto md:px-[15px] sm:px-0 px-[15px] flex justify-between items-center ${
            normalSlide
              ? "xl:h-[132px]! sm:h-[90px] h-[75px] transition-all duration-1000"
              : "sm:h-[90px] h-[75px]"
          }`}
        >
          <Link
            href="/"
            className="flex items-center text-[21px] font-earthorbiter cursor-pointer select-none"
          >
            <p className="font-semibold text-black!">
              Lead<span className="text-primary! font-semibold">Bie</span>
            </p>
          </Link>

          <div className="flex items-center">
            {/* Desktop Nav */}
            <ul className="lg:flex hidden items-center">
              {NavbarAPI.map((nav) => {
                const isActive = pathname === nav.link;
                return (
                  <li
                    key={nav.id}
                    className={`text-[15px] text-black group font-medium ${
                      isSticky
                        ? "xl:p-[35px_15px] p-[35px_12px]"
                        : "xl:p-[55px_15px] p-[35px_12px]"
                    } cursor-pointer transition relative nav_manu`}
                  >
                    <Link href={nav.link} className="flex items-center gap-1.5">
                      <span
                        className={`nav_manu_text ${
                          isActive
                            ? "text-primaryHover!"
                            : "group-hover:text-primaryHover!"
                        }`}
                      >
                        {nav.navName}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* <Button
              text="Contact Us"
              link="/contact-us"
              padding="lg:p-[14px_37px] md:p-[12px_30px] p-[9px_20px]"
              customClassName="sm:w-fit w-full ml-5 sm:flex hidden"
              bgLinearGradient={true}
            /> */}

            <button className="ml-[15px] lg:hidden flex">
              <LuAlignJustify
                className={`text-[25px] text-defaultText cursor-pointer ${
                  mobileNav ? "hidden" : ""
                }`}
                onClick={() => setMobileNav(true)}
              />
              <RxCross2
                className={`text-[25px] text-defaultText relative z-52 ${
                  mobileNav ? "hidden" : "hidden"
                }`}
                onClick={() => setMobileNav(false)}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Spacer when sticky */}
      <div
        className={`w-full ${
          normalSlide ? "h-0" : "xl:h-[90px]! sm:h-[90px] h-[75px]"
        }`}
      ></div>

      {/* Mobile Navbar */}
      <div
        className={`fixed w-full h-screen inset-0 flex justify-start bg-[#00000075] z-100 ${
          mobileNav ? "lg:hidden flex" : "hidden"
        }`}
      >
        <div className="relative w-full h-full">
          <div className="w-[280px] h-full absolute left-0 top-0 z-51 bg-defaultBG shadow-[3px_0px_30px_0px_#272c2f] overflow-y-auto">
            <div className="sm:py-2.5 py-[5px]">
              <div className="sm:w-40 w-[130px] h-auto relative m-[25px_20px]">
                <h1 className="flex items-center text-[21px] font-earthorbiter cursor-pointer select-none">
                  <p className="font-semibold text-black!">
                    Lead<span className="text-primary! font-semibold">Bie</span>
                  </p>
                </h1>
              </div>
            </div>

            <ul className="px-5">
              {NavbarAPI.map((nav, index) => {
                const isActive = pathname === nav.link;
                const isLast = index === NavbarAPI.length - 1;
                return (
                  <div key={nav.id}>
                    <Link href={nav.link}>
                      <li
                        className="text-[14px] font-medium py-2 leading-[30px] flex items-center justify-between gap-1.5 cursor-pointer transition group relative"
                        onClick={() => setMobileNav(false)}
                      >
                        <span
                          className={`${
                            isActive
                              ? "text-primaryHover!"
                              : "group-hover:text-primaryHover!"
                          } transition-all duration-1000`}
                        >
                          {nav.navName}
                        </span>
                      </li>
                    </Link>
                    {!isLast && (
                      <div className="w-full h-px bg-[#838383] opacity-[0.1]"></div>
                    )}
                  </div>
                );
              })}
            </ul>

            {/* Social Links */}
            <div className="pt-[30px] pb-5 flex items-center justify-center">
              {[
                {
                  href: "https://www.fiverr.com/s/BR4K6dd",
                  icon: <TbBrandFiverr className="text-[21px] " />,
                },
                {
                  href: "https://www.linkedin.com/in/hafizur-rahman-960249225",
                  icon: <FaLinkedinIn className="text-[18px] " />,
                },
                {
                  href: "https://t.me/Hafizur_rahman03",
                  icon: <FaTelegramPlane className="text-[19px] " />,
                },
                {
                  href: "https://wa.me/8801723260439",
                  icon: <FaWhatsapp className="text-[20px] " />,
                },
              ].map((social, i) => (
                <div
                  key={i}
                  className="w-10 h-10 leading-[38px] rounded-full text-primary border border-primary flex justify-center items-center mx-1 cursor-pointer transition-all duration-1000"
                >
                  <Link href={social.href} target="_blank">
                    {social.icon}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Backdrop close button */}
          <div className="absolute right-0 top-0 w-full flex justify-center">
            <div className="xl:w-[1199px]! lg:w-[960px]! md:w-[720px] sm:w-[510px] w-full sm:h-[90px] h-[75px] flex justify-end items-center mx-auto md:px-[15px] sm:px-0 px-[15px]">
              <RxCross2
                className="text-[25px] text-[#ffffff] relative z-52 cursor-pointer"
                onClick={() => setMobileNav(false)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
