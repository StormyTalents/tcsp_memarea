import { CheckIcon, EyeIcon } from "@heroicons/react/solid";
import tw, { styled } from "twin.macro";

import { Badge } from "./../../components/badge";
import { Course } from "../../types";
import { DocumentIcon, ArrowCircleRight } from "./../icons";

type CourseItemProps = {
  course: Course;
};

export const CourseItem = ({ course, ...rest }: CourseItemProps) => {
  return (
    <CourseItemWrapper status={course.status} {...rest}>
      <div tw="flex items-center flex-grow">
        <DocumentIcon />
        <span tw="ml-2">{course.title}</span>
        {course.status !== "not_started" && (
          <Badge
            icon={
              course.status === "completed" ? (
                <CheckIcon tw="h-5 w-5 text-gogreen-900" />
              ) : (
                <EyeIcon tw="h-5 w-5 text-sunglow-900" />
              )
            }
            title={course.status === "completed" ? "Completed" : "In Progress"}
            color={course.status === "completed" ? "gogreen" : "sunglow"}
            size="sm"
            tw="ml-2"
          />
        )}
      </div>

      <ArrowCircleRight />
    </CourseItemWrapper>
  );
};

const CourseItemWrapper = styled.div<{
  status: "in_progress" | "completed" | "not_started";
}>`
  ${tw`flex items-center justify-between rounded-lg h-[60px] px-4 border cursor-pointer mb-2`}
  ${({ status }) =>
    status === "completed"
      ? tw`border-gogreen-400 bg-gogreen-50`
      : tw`bg-white border-platinum-300`}
  svg {
    path {
      fill: ${({ status }) =>
        status === "in_progress"
          ? "#535353"
          : status === "completed"
          ? "#45BC9E"
          : "#535353"};
    }
  }

  span {
    ${tw`font-medium text-base leading-[100%]`}
    ${({ status }) =>
      status === "completed" ? tw`text-gogreen-700` : tw`text-platinum-600`}
  }
`;
