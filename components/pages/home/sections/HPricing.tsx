"use client";
import Button from "@/components/shared/ui-kit/Button";
import { useState } from "react";
import { FaAngleRight, FaCheck } from "react-icons/fa";

type HPricingProps = {
  pageName?: string;
};

const HPricing: React.FC<HPricingProps> = ({ pageName = "Home" }) => {
  const pricingData = [
    {
      id: 1,
      plan: "Basic",
      price: 290,
      description: "FReach out to 1500 prospects/month",
      pricingList: [
        { id: 1, name: "Account setup" },
        { id: 2, name: "Email template setup" },
        { id: 3, name: "A/B Testing" },
        { id: 4, name: "1 campaigns" },
        { id: 5, name: "1500 Lead Included" },
        { id: 6, name: "Email delivery schedule" },
        { id: 7, name: "Analytics & reporting" },
      ],
      button: "Start Basic",
    },

    {
      id: 2,
      plan: "Standart",
      price: 500,
      description: "Reach out to 3000 prospects/month",
      pricingList: [
        { id: 1, name: "Account setup" },
        { id: 2, name: "Email template setup" },
        { id: 3, name: "A/B Testing" },
        { id: 4, name: "3 campaigns" },
        { id: 5, name: "3000 Lead Included" },
        { id: 6, name: "Email delivery schedule" },
        { id: 7, name: "Analytics & reporting" },
      ],
      button: "Choose Standard",
    },

    {
      id: 3,
      plan: "Premium",
      price: 800,
      description: "FReach out to 5000 prospects/month",
      pricingList: [
        { id: 1, name: "Account setup" },
        { id: 2, name: "Email template setup" },
        { id: 3, name: "A/B Testing" },
        { id: 4, name: "5 campaigns" },
        { id: 5, name: "5000 Lead Included" },
        { id: 6, name: "Email delivery schedule" },
        { id: 7, name: "Analytics & reporting" },
      ],
      button: "Go Premium",
    },
  ];
  const [onHoverPricingCard, setOnHoverPricingCard] = useState("Standart Plan");

  return (
    <div>
      <div id="pricing" className="xl:w-[1199px]! lg:w-[960px]! md:w-[720px] sm:w-[510px] w-full mx-auto flex flex-col items-center lg:pt-[115px]! sm:pt-[70px] pt-[50px] lg:pb-[85px]! sm:pb-10 pb-5">
        <div
          className={`${
            pageName === "Home"
              ? ""
              : pageName === "PricingTable"
                ? "hidden"
                : ""
          } w-full text-center font-poppins mb-[30px]`}
        >
          <h5 className="inline-block xl:text-[22px]! lg:text-[16px] text-[18px] font-semibold -mb-0.5">
            PRICING
          </h5>
          <h2 className="xl:text-[60px]! lg:text-[40px]! sm:text-[42px] text-[30px] text-black! font-extrabold leading-[1.2] mb-2">
            CHOOSE PLAN
          </h2>
        </div>
        <div className="w-full flex flex-wrap">
          {pricingData.map((pCard) => {
            return (
              <div
                key={pCard.id}
                className={`px-[15px] font-poppins mb-[30px] ${
                  pCard.plan === "Premium Plan"
                    ? "xl:w-[33%] w-full"
                    : "xl:w-[33%]! md:w-[50%] w-full"
                }`}
                onMouseEnter={() => {
                  setOnHoverPricingCard(pCard.plan);
                }}
              >
                <div
                  className={`xl:h-auto h-full text-center sm2:p-[35px_28px] p-[25px] shadow-[1px_0_50px_#0000001a] transition-all duration-[0.8s] relative ${
                    onHoverPricingCard === pCard.plan
                      ? "mt-0 "
                      : "xl:mt-[25px] mt-0"
                  } rounded-sm`}
                >
                  <h1
                    className={`xl:text-[32px] text-[24px] ${
                      onHoverPricingCard === pCard.plan ? "text-black!" : ""
                    } font-semibold leading-[1.2] mb-2`}
                  >
                    {pCard.plan}
                  </h1>
                  <h2
                    className={`text-[50px] transition-all duration-[0.8s] text-primary!
                    font-bold xl:mb-5 mb-3`}
                  >
                    ${pCard.price}
                    <small
                      className={`text-[15px] transition-all duration-[0.8s] text-primary! font-semibold`}
                    >
                      /Month
                    </small>
                  </h2>
                  <p
                    className={`sm2:text-[16px] text-[15px] transition-all duration-[0.8s] ${
                      onHoverPricingCard === pCard.plan
                        ? ""
                        : "text-defaultText"
                    } leading-[1.6] mb-[25px] font-roboto`}
                  >
                    {pCard.description}
                  </p>
                  <ul
                    className={`py-[15px] text-left border-t transition-all duration-[0.8s] ${
                      onHoverPricingCard === pCard.plan
                        ? "border-t-[#ffffff4a]"
                        : "border-t-[#0000000d]"
                    }`}
                  >
                    {pCard.pricingList.map((pList) => {
                      return (
                        <li
                          key={pList.id}
                          className={`flex items-center transition-all duration-[0.8s] ${
                            onHoverPricingCard === pCard.plan
                              ? ""
                              : "text-defaultText"
                          }`}
                        >
                          <span
                            className={`sm2:w-[26px] w-[22px] sm2:h-[26px] h-[22px] flex justify-center items-center rounded-full transition-all duration-[0.8s] ${
                              onHoverPricingCard === pCard.plan
                                ? "bg-[#ffffff59] "
                                : "bg-[#e7e7e775] text-primary!"
                            }`}
                          >
                            <FaCheck className="sm2:text-[13px] text-[11px]" />
                          </span>
                          <h6 className="sm2:pl-3.5 pl-2 py-2 sm2:text-[16px] text-[14px] leading-[1.6] font-roboto">
                            {pList.name}
                          </h6>
                        </li>
                      );
                    })}
                  </ul>

                  <Button
                    text={pCard.button}
                    link="/"
                    customClassName="w-fit flex mx-auto"
                    border="p-[2px]"
                    borderLinearGradient={true}
                    borderLinearGradientPadding={`xl:p-[12px_37px]! md:p-[12px_30px] sm3:p-[10px_23px] p-[9px_28px] bg-transparent!
                    `}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-full flex justify-center px-[15px] sm3:mt-[30px] mt-[15px]">
          <p className="md:text-[15px] sm2:text-[14px] text-[12px] font-light font-poppins leading-normal bg-[#7455f83d] text-black! md:p-[10px_30px]! sm:p-[7px_24px] p-[6px_20px] rounded-[50px] text-center mx-auto">
            We tailor scopes and can quote fixedprice projects on request.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HPricing;
