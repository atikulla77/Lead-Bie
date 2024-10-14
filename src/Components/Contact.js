import React, { useRef } from "react";
import { HiOutlineCheck } from "react-icons/hi";

import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const EmailInputValue = useRef();
  const NameInputValue = useRef();
  const MassageInputValue = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_j7ddeeewg1", "template_ehiivm6", form.current, {
        publicKey: "tpCdvYv1ol_oVGJoE",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          EmailInputValue.current.value = "";
          NameInputValue.current.value = "";
          MassageInputValue.current.value = "";
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <main
      className={`w-full h-full relative pt-[1.5rem] xl:pb-[3rem] pb-[0px] bg-[#F3F8FD] SatoshiFont`}
      id="Contact"
    >
      <div className="mx-auto xl:w-[1200px] w-[100%] h-[100%] relative z-[1] flex justify-center items-center bg-[#1e1345] xl:rounded-[20px] rounded-[0px] desktop3:px-[64px] stext2:px-[15px] px-0 py-[64px]">
        <div className="flex justify-center flex-col w-full text-white">
          <div className="px-[15px]">
            <h1 className="stext2:text-[38px] md2:text-[36px] sm:text-[36px] sm2:text-[30px] sm5:text-[26px] sm4:text-[22px] sm3:text-[20px] text-[17.5px] stext2:font-semibold font-bold md:leading-[58px] sm:leading-[45px] sm2:leading-[38px] sm5:leading-[36px] sm3:leading-[32px] leading-[25px] text-center">
              Are you ready to shatter your lead{" "}
              <br className="sm2:flex hidden" />
              flow bottleneck?
            </h1>
            <p
              className="text-[15px] text-center py-[8px] px-[24px] bg-[#fff3] font-[700] rounded-[10px] mx-auto border-[1px] border-[#ffffff33] mt-[20px] "
              style={{ width: "fit-content" }}
            >
              What can you expect from our call?
            </p>
            <div className="stext2:w-[840px] w-[100%] flex stext2:flex-row flex-col stext2:justify-between justify-center mx-auto">
              <div className="flex md:flex-row flex-col md:justify-between justify-center items-center border-[1px] border-[#ffffff33] bg-transparent rounded-[10px] md:w-[415px] w-[98%] md:py-[10px] py-[15px] px-[20px] mt-[25px] stext2:mx-0 mx-auto">
                <div className="bg-[#03BFFF] p-[4px] rounded-[50%] border-[1px] border-[#ffffff59]">
                  <HiOutlineCheck className="w-[18px] h-[18px] " />
                </div>

                <p className="sm4:text-[16px] text-[15px] text-center font-[500] md:pt-0 pt-[16px]">
                  We will audit your current outbound marketing
                </p>
              </div>
              <div className="flex md:flex-row flex-col md:justify-between justify-center items-center border-[1px] border-[#ffffff33] bg-transparent rounded-[10px] md:w-[400px] w-[98%] md:py-[10px] py-[15px] px-[20px] mt-[25px] stext2:mx-0 mx-auto">
                <div className="bg-[#03BFFF] p-[4px] rounded-[50%] border-[1px] border-[#ffffff59]">
                  <HiOutlineCheck className="w-[18px] h-[18px] " />
                </div>

                <p className="sm4:text-[16px] text-[15px] text-center font-[500] md:pt-0 pt-[16px]">
                  After the audit, we’ll come up with a strategy
                </p>
              </div>
            </div>
          </div>
          <div className="stext2:w-[840px] w-[100%] bg-white desktop3:rounded-[20px] rounded-none mx-auto mt-[40px]">
            <div className="stext2:w-[700px] sm4:w-[90%] w-[98%] GeologicaFont mx-auto text-center shadow-[0_1px_8px_0_#00000014] border-[1px] border-[#1a1a1a1a] sm5:my-[70px] my-[40px] rounded-[10px]">
              <div
                className="flex items-center z-[2] sm4:text-[28px] text-[22px] EarthOrbiterFont select-none text-black w-full border-b-[1px] border-b-[#1a1a1a1a] sm4:p-[30px] p-[20px] mx-auto justify-center"
              >
                {/* <img src={logo} className=" w-[142px] select-none" /> */}
                <p className="font-semibold">
                  Lead<span className="text-[#03BFFF] font-semibold">Bie</span>
                </p>
              </div>
              <form
                className="md:m-[30px] m-[15px]"
                ref={form}
                onSubmit={sendEmail}
              >
                <div className="grid md:gap-6 gap-0 md:grid-cols-2 text-left">
                  <div className="mb-4" data-aos="fade-right ">
                    <label className="relative">
                      <input
                        type="text"
                        ref={NameInputValue}
                        name="user_name"
                        autoComplete="off"
                        required
                        placeholder=""
                        className="inputStyleIng  border-[2px] border-[#03BFFF] text-black text-sm rounded-lg focus:ring-[#03BFFF] focus:border-[#03BFFF] block w-full p-2.5 dark:!bg-transparent dark:border-[#03BFFF] placeholder-[#pffffff9c] dark:focus:ring-[#03BFFF] dark:focus:border-[#03BFFF] font-[500] outline-none"
                      />
                      <span className="inputStyleIngText text-sm text-black text-opacity-80 bg-[#fff] absolute left-2 top-3 px-1 transition duration-200 input-text cursor-text">
                        Your Name
                      </span>
                    </label>
                  </div>
                  <div className="mb-4" data-aos="fade-down-right">
                    <label className="relative">
                      <input
                        type="email"
                        ref={EmailInputValue}
                        name="user_email"
                        autoComplete="off"
                        required
                        placeholder=""
                        className="inputStyleIng  border-[2px] border-[#03BFFF] text-black text-sm rounded-lg focus:ring-[#03BFFF] focus:border-[#03BFFF] block w-full p-2.5 dark:!bg-transparent dark:border-[#03BFFF] placeholder-[#pffffff9c] dark:focus:ring-[#03BFFF] dark:focus:border-[#03BFFF] font-[500] outline-none"
                      />
                      <span className="inputStyleIngText text-sm text-black text-opacity-80 bg-[#fff] absolute left-2 top-3 px-1 transition duration-200 input-text cursor-text">
                        Email address
                      </span>
                    </label>
                  </div>
                </div>
                <div className="mb-6 text-left" data-aos="fade-up">
                  <label className="relative">
                    <textarea
                      type="text"
                      ref={MassageInputValue}
                      name="message"
                      autoComplete="off"
                      required
                      rows="13"
                      placeholder=""
                      className="inputStyleIng  border-[2px] border-[#03BFFF] text-black text-sm rounded-lg focus:ring-[#03BFFF] focus:border-[#03BFFF] sm6:block hidden w-full p-2.5 dark:!bg-transparent dark:border-[#03BFFF] placeholder-[#pffffff9c] dark:focus:ring-[#03BFFF] dark:focus:border-[#03BFFF] font-[500] outline-none"
                    />
                    <textarea
                      type="text"
                      ref={MassageInputValue}
                      name="message"
                      autoComplete="off"
                      required
                      rows="10"
                      placeholder=""
                      className="inputStyleIng  border-[2px] border-[#03BFFF] text-black text-sm rounded-lg focus:ring-[#03BFFF] focus:border-[#03BFFF] sm6:hidden block w-full p-2.5 dark:!bg-transparent dark:border-[#03BFFF] placeholder-[#pffffff9c] dark:focus:ring-[#03BFFF] dark:focus:border-[#03BFFF] font-[500] outline-none"
                    />
                    <span className="inputStyleIngText text-sm text-black text-opacity-80 bg-[#fff] absolute left-2 top-3 px-1 transition duration-200 input-text cursor-text">
                      Your message
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  value="Submit Now"
                  className="text-[14px] px-[22px] py-[8px] rounded-[50px] hover:!bg-transparent bg-[#03BFFF] text-[#fff] hover:text-[#03BFFF] border-[2px] border-[#03BFFF] transition-[0.4s]"
                >
                  Submit Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
