"use client";
import Image from "next/image";
import { useState } from "react";
import CountUp from "react-countup";
import { useEffect, useRef } from "react";

const HAllProjectOverview = () => {
  const projectOverviewData = [
    {
      id: 1,
      title: "Satisfied Clients",
      number: 30,
      suffix: "+",
      colorCode: "bg-[#029e76] shadow-[0_2px_15px_#029e7680]",
    },
    {
      id: 2,
      title: "Project Completed",
      number: 49,
      suffix: "+",
      colorCode: "bg-[#ffa808] shadow-[0_2px_15px_#ffa80880]",
    },
    {
      id: 3,
      title: "Project Lunched",
      number: 40,
      suffix: "+",
      colorCode: "bg-[#5543d1] shadow-[0_2px_15px_#5543d180]",
    },
    {
      id: 4,
      title: "Years in Business",
      number: 4,
      suffix: "+",
      colorCode: "bg-[#ff586e] shadow-[0_2px_15px_#ff586e80]",
    },
  ];

  const [hasCounted, setHasCounted] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasCounted) {
          setHasCounted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, [hasCounted]);

  return (
    <div id="case-studies" className="relative">
      <div className="absolute left-0 top-0 w-full h-[200px] z-1 bg-primary!"></div>
      <div
        className="xl:w-[1199px]! lg:w-[960px]! md:w-[720px] sm:w-[510px] w-full mx-auto flex items-center justify-center pt-20 relative z-3"
        ref={sectionRef}
      >
        <div className="w-full flex md:flex-row flex-wrap items-center sm:p-[50px_50px_20px] p-[40px_15px_10px] sm:mt-[-100px] -mt-20">
          {projectOverviewData.map((data) => {
            return (
              <div
                key={data.id}
                className="lg:w-[25%]!  sm:w-[50%] w-full px-[15px] mb-[30px]"
              >
                <div className="rounded-sm bg-defaultBG shadow-[0_0_60px_#0000001a] xl:p-[30px] md:p-[30px_10px] p-[30px_10px] hover:translate-y-[-15px] transition-all duration-1000 text-center">
                  <div
                    className={`w-[70px] h-[70px] leading-[70px] rounded-full flex justify-center items-center mx-auto cursor-pointer mb-5 ${data.colorCode}`}
                  >
                    <div className="w-[42px] h-[42px] relative">
                      <Image
                        src={`/assets/images/Home_Page/all_project_overview/icon_${data.id}.png`}
                        fill
                        className="object-contain"
                        alt="project overview"
                      />
                    </div>
                  </div>
                  <h4 className="xl:text-[20px] lg:text-[16px] md:text-[18px] text-[16px] font-normal font-poppins mb-[5px]">
                    {data.title}
                  </h4>
                  <p className="xl:text-[65px] text-[40px] text-primary! font-extrabold leading-none font-poppins">
                    {hasCounted && (
                      <CountUp start={0} end={data.number} duration={11} className="text-primary!" />
                    )}
                    {data?.suffix}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HAllProjectOverview;
