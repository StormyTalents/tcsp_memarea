import tw, { styled } from "twin.macro";

import { Button } from "components/button";
import ArrowCircleRight from "./../../assets/icons/arrow-circle-right.svg";

type CourseHeadProps = {
  progress: number;
  sectionTitle: string;
  courseTitle: string;
};
export const CourseHead = ({
  progress = 0,
  sectionTitle,
  courseTitle,
  ...rest
}: CourseHeadProps) => {
  return (
    <CoursHeadWrapper {...rest}>
      {progress > 0 && <ProgressBar progress={progress} />}
      <HeadContentWrapper>
        <div>
          <div tw="text-platinum-400 font-bold uppercase text-base leading-[150%]">
            {sectionTitle}
          </div>
          <h2 tw="text-platinum-700 font-bold text-xl leading-[150%]">
            {courseTitle}
          </h2>
        </div>
        <div>
          <Button
            color="brand"
            variant="primary"
            title={progress === 0 ? "Start Course" : "Resume Course"}
            icon={<ArrowCircleRight />}
          />
        </div>
      </HeadContentWrapper>
    </CoursHeadWrapper>
  );
};

const CoursHeadWrapper = styled.div`
  ${tw`overflow-hidden bg-white rounded-lg max-w-[688px] mx-auto -translate-y-1/2`}
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1),
    0px 4px 6px rgba(0, 0, 0, 0.05);
`;

const HeadContentWrapper = styled.div`
  ${tw`flex items-center justify-between py-6 px-7`}
`;

const ProgressBar = styled.div<{
  progress: number;
}>`
  ${tw`relative h-4 bg-platinum-200`}
  &::before {
    content: ${({ progress }) => `"${progress}%"`};
    ${tw`absolute top-0 left-0 flex items-center justify-end h-4 pr-2 text-sm font-semibold text-right text-white bg-brand leading-[150%]`}
    width: ${({ progress }) => `${progress}%`}
  }
`;
