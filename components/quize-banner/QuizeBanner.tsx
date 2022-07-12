import { Button } from "../button";
import tw, { styled } from "twin.macro";
import { InformationCircleIcon } from "@heroicons/react/solid";

import Donut from "./../../assets/icons/donut.svg";

type QuizeBannerProps = {
  title: string;
  onTakeQuize?: () => void;
};

export const QuizeBanner = ({ title, onTakeQuize }: QuizeBannerProps) => {
  return (
    <QuizeBannerWrapper>
      <Donut />
      <div tw="ml-4">
        <div tw="text-white font-bold text-lg leading-[150%] mb-3 flex items-center gap-1">
          <span>{title}</span>
          <InformationCircleIcon tw="text-white w-5 h-5" />
        </div>
        <Button
          variant="primary"
          color="white"
          tw="bg-sunglow-300"
          title="Take the Quiz"
        />
      </div>
    </QuizeBannerWrapper>
  );
};

const QuizeBannerWrapper = styled.div`
  ${tw`rounded-lg h-[160px] w-full text-white flex items-center px-[30px]`}
  background: linear-gradient(104.32deg, #535353 0%, #1a1a1a 100%);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
    0px 1px 2px -1px rgba(0, 0, 0, 0.1);
`;
