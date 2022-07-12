import tw, { styled } from "twin.macro";

import { ProgressBar } from "../progress-bar";
import { SolutionOption } from "./SolutionOption";
import { SolutionItem } from "./SolutionItem";

import CardImg from "../../assets/img/credit-solution.svg";

const itemArray = [
  [
    { type: "decline", text: "The Real Cost of Bad Credit" },
    { type: "accept", text: "The Real Cost of Bad Credit" },
    { type: "preview", text: "The Real Cost of Bad Credit" },
  ],
  [
    { type: "decline", text: "The Real Cost of Bad Credit" },
    { type: "accept", text: "The Real Cost of Bad Credit" },
    { type: "preview", text: "The Real Cost of Bad Credit" },
  ],
  [
    { type: "decline", text: "The Real Cost of Bad Credit" },
    { type: "accept", text: "The Real Cost of Bad Credit" },
    { type: "preview", text: "The Real Cost of Bad Credit" },
  ],
];

type CreditSolutionCardProps = {
  progress: number;
  programTitle: string;
};

export const CreditSolutionCard = ({
  progress,
  programTitle,
}: CreditSolutionCardProps) => {
  return (
    <div tw="w-[432px] relative">
      <div>
        <CardImg />
      </div>
      <ProgressWrapper>
        <h1 tw="pt-[21px] pb-4 text-center text-[24px] font-bold">
          {programTitle}
        </h1>
        <ProgressBar percent={progress} variant="secondary" />
      </ProgressWrapper>
      <ContentWrapper>
        {itemArray.map((item, index) => (
          <SolutionOption
            key={`item_${index}`}
            section="section1"
            complete="1/3 Lessons Complete"
            name="Understanding Your Credit"
          >
            {item.map((value, index) => (
              <SolutionItem
                key={`sub_item_${index}`}
                type={value.type}
                text={value.text}
              />
            ))}
          </SolutionOption>
        ))}
      </ContentWrapper>
    </div>
  );
};

const ProgressWrapper = styled.div`
  background: rgba(255, 255, 255, 0.39);
  box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.21);
  backdrop-filter: blur(40px);
  border-radius: 17px;
  ${tw`absolute top-7 left-4 w-[400px] overflow-hidden`}
`;

const ContentWrapper = styled.div`
  ${tw`bg-white h-[1024px]`}
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
    0px 1px 2px -1px rgba(0, 0, 0, 0.1);
`;
