import tw, { styled } from "twin.macro";
import { useRouter } from "next/router";
import { Tab } from "@headlessui/react";
import { HomeIcon } from "@heroicons/react/solid";

import ChevronLeft from "./../../../assets/icons/chevron-left.svg";

import MainLayout from "../../../containers/layout/main-layout/MainLayout";
import { CourseSection } from "../../../containers/course-section";

import { CourseHead } from "../../../components/course-head";
import { Button } from "../../../components";
import { testCourses } from "../../../utils/constants";
import { Resources } from "../../../containers/resources";

const CourseDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const courseTitle = "The Credit Solution Program";
  const author = "Mike Robert";

  return (
    <MainLayout
      breadCrumbs={[
        {
          name: "dashboard",
          label: "Dashboard",
          icon: <HomeIcon tw="w-4 h-4" />,
          active: false,
        },
        {
          name: "courses",
          label: "Courses",
          active: false,
        },
        {
          name: id as string,
          label: id as string,
          active: true,
        },
      ]}
    >
      <CourseHeaderWrapper>
        <Button
          color="black"
          variant="primary"
          iconOnly={true}
          icon={<ChevronLeft />}
          onClick={() => router.back()}
        />

        <TitleWrapper>
          <h1>{courseTitle}</h1>
          <p>{author}</p>
        </TitleWrapper>
      </CourseHeaderWrapper>

      <CourseHead
        progress={60}
        sectionTitle="Section I"
        courseTitle={`How Does Your "Credit" Actually Work?`}
      />

      <Tab.Group>
        <StyledTabList as="div">
          <TabItem>Lessons</TabItem>
          <TabItem>Resources</TabItem>
          <TabItem>Discussion</TabItem>
        </StyledTabList>
        <Tab.Panels>
          <Tab.Panel as="div" tw="py-2">
            <CourseSection
              number={1}
              title="Understanding Your Credit"
              courses={testCourses}
              status="active"
            />
            <CourseSection
              number={2}
              title="Credit Reports &amp; Credit Scores - Two Parts To The Puzzle"
              courses={testCourses}
              status="locked"
              tw="mt-2"
            />
            <CourseSection
              number={3}
              title="What You Can Do To Improve Your Credit, Starting Now"
              courses={testCourses}
              status="locked"
              tw="mt-2"
            />
          </Tab.Panel>
          <Tab.Panel as="div">
            <Resources />
          </Tab.Panel>
          <Tab.Panel>Content 3</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </MainLayout>
  );
};

const CourseHeaderWrapper = styled.div`
  ${tw`flex items-center min-h-[218px] px-4 rounded-lg`}
  background: linear-gradient(278.88deg, #77dcc0 0%, #00acae 100%);
`;

const TitleWrapper = styled.div`
  ${tw`ml-4`}
  h1 {
    ${tw`text-white font-bold text-4xl leading-[150%]`}
  }
  p {
    ${tw`text-sm font-bold leading-[150%] text-[#C1FDF0]`}
  }
`;

const StyledTabList = styled(Tab.List)`
  ${tw`border-b border-gray-300`}
`;

type TabItemProps = {
  children: string;
};

const TabItem = ({ children }: TabItemProps) => {
  return (
    <Tab>
      {({ selected }) => (
        <span
          tw="text-base leading-[150%] px-4 py-2 flex"
          css={[
            selected
              ? tw`font-bold border-b-2 text-brand border-b-brand`
              : tw`font-medium text-gray-400`,
          ]}
        >
          {children}
        </span>
      )}
    </Tab>
  );
};

export default CourseDetailPage;
