import Image from "next/image";

const HNewsLetter = () => {
  return (
    <div
      className="relative bg-[#b1df56]! lg:pt-20 pt-[50px] lg:pb-[50px] pb-5"
      style={{
        background: "url('/assets/images/Home_Page/newsletter_bg.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="xl:w-[1199px]! lg:w-[960px]! md:w-[720px] sm:w-[510px] w-full mx-auto flex md:flex-row flex-col items-center">
        <div className="lg:w-[33.33333%]! md:w-[41.66667%] w-full px-[15px] sm2:mb-[30px] mb-2.5">
          <div className="w-full xl:h-[369px]! md:h-[289px] sm2:h-[510px] h-[370px] relative">
            <Image
              src="/assets/images/Home_Page/NewsLetter_Main_Image.png"
              fill
              className="object-contain Image-Transform-Animation"
              alt="news letter main image"
            />
          </div>
        </div>
        <div className="lg:w-[66.66667%]! md:w-[58.33333%] w-full font-poppins md:px-[15px]! sm:px-0 px-[15px] md:mb-0! sm:mb-[30px] mb-2.5">
          <div className="xl:mb-10 sm2:mb-[30px] mb-5">
            <h5 className="inline-block text-center xl:text-[21px] text-[18px] text-[#fffffff6]! font-poppins font-normal -mb-0.5">
              NewSletter
            </h5>
            <h2 className="lg:text-[60px] sm:text-[42px] text-[30px] text-white! font-extrabold leading-[1.1] mb-[15px]">
              Subscribe to Our Newsletter
            </h2>
            <p className="sm2:text-[16px] text-[14px] text-[#fffffff6]! sm2:leading-[25px] leading-5 font-poppins font-light sm2:mb-4 mb-0">
              Get monthly insights on strategy, design, and technology—no spam,
              just practical tips to grow your business.
            </p>
          </div>
          <div className="lg:w-[501px] w-full h-auto sm:mb-5 mb-0 relative">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full bg-white sm2:text-[15px] text-[13px] placeholder:text-defaultText text-defaultText font-normal border-white lg:p-[10px_160px_10px_30px] sm2:p-[10px_160px_10px_20px] p-[10px_120px_10px_20px] lg:h-14! sm2:h-[50px] h-[45px] hover:shadow-[0_10px_60px_-10px_#c4c4c48e] focus:shadow-[0_10px_60px_-10px_#c4c4c48e] focus:outline-none transition-all duration-300 ease-in-out font-roboto rounded-2xl"
            />
            <div className="absolute right-0 bottom-0 h-full sm2:py-1 py-0.5 sm2:pr-1 pr-0.5 flex items-center">
              <button className="w-fit h-full lg:text-[15px]! sm2:text-[14px] text-[12px] font-medium leading-normal lg:px-[35px] sm2:px-[30px] px-6 text-white! hover:bg-primary bg-primaryHover transition-all duration-500 rounded-[15px] uppercase cursor-pointer">
                {/* bg-linear3 bg-size-[200%] hover:bg-right bg-left */}
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HNewsLetter;
