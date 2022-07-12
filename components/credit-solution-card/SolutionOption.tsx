import tw, { styled } from "twin.macro";
import { ReactChildren, ReactNode, useState } from "react";
import ArrowDown from "../../assets/icons/arrow_down.svg";
import ArrowUp from "../../assets/icons/arrow_up.svg";

type SolutionOptionProps = {
  section?: string;
  complete?: string;
  name?: string;
  children?: ReactNode;
};

export const SolutionOption = ({
  section,
  complete,
  name,
  children,
}: SolutionOptionProps) => {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return (
    <div>
      <div
        tw="bg-gray-100 border-b border-gray-200 px-6 py-4 "
        onClick={toggle}
      >
        <div tw="flex justify-between pb-2 text-[#A3A3A3]">
          <p tw="font-bold uppercase  text-sm">{section}</p>
          <p tw="text-xs font-semibold">{complete}</p>
        </div>
        <div tw="flex justify-between">
          <h1 tw="text-[#272727] text-xl font-bold">{name}</h1>
          <div tw="mt-[10px]">
            <ArrowDown
              css={[
                tw`transition-all duration-500 rotate-0`,
                isShowing && tw`rotate-180`,
              ]}
            />
          </div>
        </div>
      </div>
      <div>
        <div
          css={[
            tw`h-0 overflow-hidden transition-all duration-500 ease-in-out bg-white`,
            isShowing && tw`h-[192px]`,
          ]}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
