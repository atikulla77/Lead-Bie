import React from "react";
import { Link } from "react-scroll";

function BusinessCurrently() {
  const BusinessCurrentlyCardList = [
    {
      id: 1,
      tittle: "Revenue Targets",
      description:
        "Are you feeling uncertain you won't be able to hit revenue targets?",
    },
    {
      id: 2,
      tittle: "Lack of Growth",
      description:
        "Frustrated that your business isn't growing as fast as you want?",
    },
    {
      id: 3,
      tittle: "Lack of Time",
      description:
        "Do you not have the time and energy to spend on endless prospecting?",
    },
    {
      id: 4,
      tittle: "Burned by Agencies",
      description:
        "Have you worked with lead gen agencies who over-promise but under-deliver?",
    },
  ];

  return (
    <>
      <div className="w-full h-[100%] bg-[#F3F8FD] SatoshiFont">
        <div className="xl:w-[1230px] w-[96%] h-[100%]  relative mx-auto sm2:pb-[4rem] pb-[3rem]">
          <p className="sm:text-[32px] sm2:text-[27px] sm5:text-[23px] sm3:text-[20px] text-[18px] font-[700] text-black py-[8px] text-center sm5:mb-[40px] mb-[30px]">
            Is your business currently facing
            <br className="sm:hidden flex" /> these issues?
          </p>
          <div
            className="flex flex-wrap justify-between items-center w-full  relative  text-black "
            data-aos="fade-up"
          >
            {BusinessCurrentlyCardList.map((key) => {
              return (
                <div
                  className="stext2:w-[595px] w-[98%] bg-white border-[2px] border-[#dae5ed] sm2:p-[32px] sm4:p-[25px] p-[20px] rounded-[20px] relative sm5:mb-[30px] mb-[15px] mx-auto"
                  key={key.id}
                >
                  <p
                    className="flex sm5:text-[15px] sm:text-[14px] text-[13px] bg-[#ebf0ff] border-[2px] border-[#ebf0ff] rounded-[50px] sm5:py-[8px] sm4:py-[5px] py-[2px] sm5:px-[16px] sm4:px-[11px] px-[8px] text-center font-medium"
                    style={{ width: "fit-content" }}
                  >
                    {key.tittle}
                  </p>
                  <p className="sm2:text-[24px] sm5:text-[20px] sm4:text-[19px] text-[15px] font-[700] mt-[15px]">
                    {key.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-full h-[100%] bg-[#1e1345] SatoshiFont">
        <div className="md:w-[720px] w-[95%] h-[100%]  relative mx-auto py-[5rem] text-center">
          <p
            className="sm:text-[15px] sm2:text-[14px] text-[12px] text-white py-[8px] px-[24px] bg-[#fff3] font-[700] rounded-[25px] mx-auto border-[1px] border-[#ffffff33]"
            style={{ width: "fit-content" }} data-aos="fade-up"
          >
            THAT'S WHY WE'RE HERE TO HELP
          </p>
          <h1 className="md:text-[47px] sm:text-[36px] sm2:text-[30px] sm5:text-[26px] sm4:text-[22px] sm3:text-[20px] text-[17.5px] font-semibold md:leading-[55px] sm:leading-[45px] sm2:leading-[38px] sm5:leading-[35px] sm4:leading-[29px] sm3:leading-[26px] leading-[22.5px] sm2:pt-[20px] pt-[15px] text-white" data-aos="fade-up">
            We make sure your calendar is
            <br className="" />{" "}
            <span className="sm5:border-b-[3px] border-b-[2px] border-[#03BFFF]">
              filled
            </span>{" "}
            with sales meetings with
            <br className="" /> prospects you want to work with
          </h1>
          <p className="md2:text-[18px] sm:text-[15px] sm2:text-[14px] sm4:text-[13px] text-[12px] font-[400] text-[#ffffffbf] sm2:pt-[15px] pt-[10px] sm4:pb-[26px] pb-[20px]" data-aos="fade-up">
            We take all the headaches and hassle of prospecting out of your
            hands so you can
            <br className="sm4:flex hidden" /> focus on closing the leads we
            send you every week.
          </p>
          <Link
            to="Contact"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
            aria-current="page"
            className="w-[98%] flex justify-center md2:text-[16px] text-[14px] py-[15px] sm5:border-[1.6px] border-[1px] rounded-[50px] border-[#03BFFF] text-[#fff] bg-[#03BFFF] transition-[0.3s] cursor-pointer font-semibold mx-auto mt-[10px] "
          >
            Connect Us
          </Link>
          <div className="w-full bg-[#261856] sm:p-[64px] sm6:p-[37px] sm4:p-[25px] p-[15px] rounded-[20px] border-[2px] border-[#ffffff26] mt-[40px]" data-aos="fade-up">
            <h1 className="md2:text-[40px] sm:text-[36px] sm2:text-[30px] sm5:text-[26px] sm4:text-[22px] sm3:text-[20px] text-[17.5px] font-bold md:leading-[52px] sm:leading-[45px] sm2:leading-[38px] sm5:leading-[36px] sm3:leading-[32px] leading-[25px] text-white ">
              And the best part is - we do it
              <br className="" /> all for you
            </h1>
            <p
              className="sm:text-[15px] sm2:text-[14px] text-[12px] text-white py-[8px] px-[24px] bg-[#fff3] font-[700] rounded-[10px] mx-auto border-[1px] border-[#ffffff33] mt-[25px]"
              style={{ width: "fit-content" }}
            >
              What does that mean for you?
            </p>
            <div className="w-[100%] border-[1px] border-[#ffffff33] rounded-[10px] sm6:p-[24px] sm4:p-[15px] p-[15px] mt-[20px]">
              <p className="text-white sm:text-[20px] sm2:text-[18px] sm4:text-[16px] text-[14px]"> 
                You don't have to learn cold email tech, buy any lead scraping
                software, or hire anyone on your team to manage the system.
                SImply give us your calendar & we book meetings for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BusinessCurrently;
