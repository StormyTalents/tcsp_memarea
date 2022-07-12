import tw, { styled } from "twin.macro";
import Image from "next/image";

import SuperCharger from "../../assets/img/SUPERCHARGE.png";
import { Button } from "../button";
import ArrowBlackIcon from "./../../assets/icons/arrow-circle-right-black.svg";

export const FinancialAlert = () => {
  return (
    <FinancialWrapper>
      <div tw="absolute top-[-110px] left-2"></div>
      <div tw="pt-[83px] text-center text-white font-bold uppercase">
        <p tw="pb-2">Ready to</p>
        <Image
          src={SuperCharger}
          width="205px"
          height="25px"
          alt="super charger image"
        />
        <p tw="pb-[22px]">Your Score?</p>
      </div>
      <div>
        <Button
          color="brand"
          variant="primary"
          title="Upgrade Now"
          tw="bg-csp-sunglow-200 text-black font-medium min-w-[204px]"
          icon={<ArrowBlackIcon />}
        />
      </div>
    </FinancialWrapper>
  );
};

const FinancialWrapper = styled.div`
  ${tw`px-[26px] py-3.5 mx-6 mb-[72px] relative rounded-[15px]`}

  background: linear-gradient(271.15deg, #7fdac0 0%, #17b5b5 100%);
  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.1),
    0px 2px 4px -2px rgba(0, 0, 0, 0.05);
`;
