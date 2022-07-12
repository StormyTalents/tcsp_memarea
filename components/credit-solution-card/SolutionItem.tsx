import tw, { styled } from "twin.macro";
import { DocumentTextIcon } from "@heroicons/react/solid";
import DocumentSvg from "../../assets/icons/solution-card-document.svg";
import AcceptSvg from "../../assets/icons/solution-card-accept.svg";
import DeclineSvg from "../../assets/icons/solution-card-decline.svg";
import PreviewSvg from "../../assets/icons/solution-card-preview.svg";

const SvgType = {
  accept: <AcceptSvg />,
  decline: <DeclineSvg />,
  preview: <PreviewSvg />,
};

type SolutionItemProps = {
  type?: string;
  text?: string;
};

export const SolutionItem = ({ type, text }: SolutionItemProps) => {
  return (
    <SolutionItemWrapper>
      <div>{SvgType[type]}</div>
      <div tw="mt-1 w-4">
        <DocumentTextIcon />
      </div>
      <div>
        <h1>{text}</h1>
      </div>
    </SolutionItemWrapper>
  );
};

const SolutionItemWrapper = styled.div`
  ${tw`flex gap-4 px-6 py-4 transition duration-200 cursor-pointer active:text-brand-600 active:font-bold hover:bg-gray-50 active:bg-[#EEF0FF]!`}
`;
