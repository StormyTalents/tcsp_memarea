import tw, { styled } from "twin.macro";
import { useMemo } from "react";
import { Disclosure } from "@headlessui/react";
import { LockClosedIcon } from "@heroicons/react/solid";

import ChevronUpIcon from "./../../assets/icons/chevron-up.svg";
import { romanize } from "./../../utils";
import { Course } from "../../types";
import { CourseItem } from "../../components/course-item";
import { QuizeBanner } from "../../components/quize-banner";

type CourseSectionProps = {
  number: number;
  title: string;
  courses: Course[];
  status: "locked" | "active";
};

export const CourseSection = ({
  number,
  title,
  courses,
  status,
  ...rest
}: CourseSectionProps) => {
  const sectionTitle = useMemo(() => {
    return `Section ${romanize(number)}: ${title}`;
  }, [number, title]);
  return (
    <CourseSectionWrapper as="div" {...rest}>
      {({ open }) => (
        <>
          <Disclosure.Button
            tw="flex justify-between items-center w-full"
            css={[status === "locked" && tw`opacity-50`]}
          >
            <div
              css={[
                status !== "locked"
                  ? tw`text-platinum-800`
                  : tw`text-platinum-600`,
              ]}
              tw="font-semibold text-lg leading-[150%] flex items-center gap-2"
            >
              {status === "locked" && <LockClosedIcon tw="h-5 w-5" />}
              <span>{sectionTitle}</span>
            </div>
            <div tw="flex items-center text-xs font-semibold leading-[19.5px] text-platinum-400">
              {status !== "locked" && (
                <span tw="mr-2">1/3 Lessons Complete</span>
              )}

              <ChevronUpIcon
                tw="w-5 h-5 text-purple-500 transition-all duration-300 ease-in-out"
                css={[open && tw`transform rotate-180`]}
              />
            </div>
          </Disclosure.Button>
          <Disclosure.Panel tw="px-4 pt-4 pb-2 text-sm text-gray-500">
            <div>
              {courses?.map((_courseItem) => (
                <CourseItem key={_courseItem.id} course={_courseItem} />
              ))}
            </div>
            <QuizeBanner title="Pass the Quiz to proceed to Section II" />
          </Disclosure.Panel>
        </>
      )}
    </CourseSectionWrapper>
  );
};

const CourseSectionWrapper = styled(Disclosure)`
  ${tw`px-4 py-4 rounded-lg`}

  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
    0px 1px 2px -1px rgba(0, 0, 0, 0.1);
`;
