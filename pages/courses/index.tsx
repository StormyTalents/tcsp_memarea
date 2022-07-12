import { useRouter } from "next/router";
import { Button, CreditCard } from "components";
import MainLayout from "containers/layout/main-layout/MainLayout";

import VideoCameraIcon from "./../../assets/icons/video-camera.svg";
import DocumentTextIcon from "./../../assets/icons/document-text.svg";
import { HomeIcon } from "@heroicons/react/solid";

const CoursesPage = () => {
  const router = useRouter();
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
          active: true,
        },
      ]}
    >
      <div tw="flex items-center justify-between my-4">
        <h2 tw="text-csp_neutral-600 font-semibold text-4xl leading-[100%]">
          Courses
        </h2>
        <div tw="flex items-center gap-x-2">
          <Button title="All" color="brand" variant="primary" />
          <Button
            title="My Courses"
            icon={<DocumentTextIcon />}
            variant="primary"
            iconPos="left"
            color="gray"
          />
          <Button
            title="In Progress"
            icon={<VideoCameraIcon />}
            variant="primary"
            iconPos="left"
            color="gray"
          />
        </div>
      </div>
      <div tw="flex gap-4">
        <CreditCard
          title="The Credit Solution Program"
          author="Jorgihno Ojeda"
          percent={20}
          enrolled={4}
          variant="primary"
          status="enrolled"
          onClick={() => router.push("/courses/credit-solution")}
        />
        <CreditCard
          title="The Credit Solution Program"
          percent={0}
          author="Mike Robert"
          variant="primary"
          status="enrolled"
        />
        <CreditCard
          title="The Credit Solution Program"
          status="locked"
          price={27}
          author="Mike Robert"
        />
      </div>
    </MainLayout>
  );
};

export default CoursesPage;
