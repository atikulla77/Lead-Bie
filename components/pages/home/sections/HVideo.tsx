"use client";

const HVideo = () => {
  return (
    <div>
      <div className="xl:w-[1199px]! lg:w-[960px]! md:w-[720px] sm:w-[510px] w-full mx-auto md:px-0 px-[15px] flex flex-col items-center justify-center lg:pt-[115px]! sm:pt-20 pt-[50px] lg:pb-[22px]! sm:pb-10 pb-5">
        <div className="text-center md:px-0 px-[15px]">
          <h2 className="lg:text-[40px]! md:text-[30px] sm3:text-[22px] text-[17px] text-black! font-poppins font-bold lg:leading-[55px]! md:leading-[37px] sm3:leading-normal leading-[22px] mb-2">
            Watch How PENTABITE can
            <br className="md:flex hidden" /> transform your eCommerce <br className="md:flex hidden" /> Business in Minutes!!
          </h2>
        </div>

        <div className="md:w-[87%] w-full h-full relative rounded-2xl lg:mt-[50px] sm3:mt-[30px] mt-[15px]">
          <div
            className="w-full h-full relative"
            style={{ paddingTop: "56.25%" }}
          >
            <iframe
              src="https://fast.wistia.net/embed/iframe/ak65dbrl7a?seo=false&videoFoam=true"
              title="Watch how ZOYEQ can transform your eCommerce business"
              allow="fullscreen"
              allowFullScreen
              loading="lazy"
              className="absolute top-0 left-0 h-full w-full"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HVideo;
