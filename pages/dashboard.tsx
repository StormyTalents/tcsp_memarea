import tw, { styled } from "twin.macro";
import { useState } from "react";
import {
  ArrowCircleRightIcon,
  HomeIcon,
  InformationCircleIcon,
  ChevronRightIcon,
  XIcon,
} from "@heroicons/react/solid";
import Lottie from "react-lottie";

import { useRouter } from "next/router";

import { CreditCard, UpcomingCard, ModalDialog, Button } from "../components";
import MainLayout from "../containers/layout/main-layout/MainLayout";

import Donut from "./../assets/icons/donut.svg";
import Fire from "./../assets/icons/fire.svg";
import Discuss from "./../assets/icons/discuss.svg";
import NoCommentIcon from "./../assets/icons/comment-no.svg";
import { BreadCrumb } from "../types";
import bannerLottieJson from "assets/lottie/banner_community.json";
import { RangeSlider } from "components/range-slider";

const Dashboard = () => {
  const router = useRouter();
  const [breadCrumbs] = useState<Array<BreadCrumb>>([
    {
      name: "dashboard",
      label: "Dashboard",
      icon: <HomeIcon tw="w-5 h-5" />,
      active: false,
    },
  ]);

  const [comments, setComments] = useState(13);
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  return (
    <MainLayout breadCrumbs={breadCrumbs} color="#50497C">
      <div>
        <div tw="text-gray-600 text-xl font-bold">
          Hey, <span tw="text-brand">Craig</span>
        </div>
        <h1 tw="text-gray-600 text-4xl leading-[100%] font-semibold">
          Your Learning Dashboard
        </h1>
      </div>
      <BannerWrapper>
        <h2>Join The Community</h2>
        <p tw="max-w-[543px] text-white leading-[200%] text-base font-normal">
          To get the most out of this program, you will need a CURRENT copy of
          your 3 bureau credit report and all 3 scores.
        </p>
        <StyledButton onClick={() => setOpenDialog(true)}>
          <span tw="mr-3">Learn More</span>
          <ArrowCircleRightIcon tw="w-5 h-5 text-white" />
        </StyledButton>
        <BannerImgWrapper>
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: bannerLottieJson,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
              },
            }}
            height="503px"
            width="503px"
          />
        </BannerImgWrapper>
      </BannerWrapper>
      <StaticsWrapper>
        <StaticCardWrapper>
          <div>
            <Donut />
          </div>
          <div tw="ml-2">
            <h3>2/3</h3>
            <p>Course completed</p>
          </div>
        </StaticCardWrapper>
        <StaticCardWrapper>
          <div>{comments > 0 ? <Discuss /> : <NoCommentIcon />}</div>
          <div tw="ml-2">
            <h3>{comments}</h3>
            <p>Commnets Made</p>
          </div>
        </StaticCardWrapper>
        <StaticCardWrapper>
          <div>
            <Fire />
          </div>
          <div tw="ml-2">
            <h3>4</h3>
            <p>Day Login Streak</p>
          </div>
        </StaticCardWrapper>
      </StaticsWrapper>
      <div tw="flex gap-4">
        <div tw="w-1/2">
          <SubTitle>Upcoming Events</SubTitle>
          <UpcomingCard
            title="You and your Debt"
            content="Learn about all the things to do with debt and other things in this live event"
            name="Jorgihno Ojeda"
            eventType="Live Event"
            day="March 7"
            time="3:00 PM EST"
            tw="mt-6"
            color="#50497C"
          />
        </div>
        <div tw="w-1/2">
          <div tw="flex items-center justify-between">
            <SubTitle>Recent Courses</SubTitle>
            <button
              tw="text-base text-brand-600 font-semibold"
              onClick={() => router.push("/courses")}
            >
              <div tw="flex">
                <p>Link</p>
                <ChevronRightIcon tw="w-4 h-4 mt-[4px] ml-2" />
              </div>
            </button>
          </div>
          <div tw="flex gap-2 mt-6">
            <CreditCard
              title="The Credit Solution Program"
              author="Mike Robert"
              variant="primary"
              percent={12}
              status="enrolled"
              color="#50497C"
            />
            <CourseShowUpWrapper>
              <InformationCircleIcon tw="w-[65px] h-[65px] text-[#50497C]" />
              <p tw="text-[#50497C] font-medium text-base leading-[150%]">
                Start another course for it to show up in here
              </p>
            </CourseShowUpWrapper>
          </div>
        </div>
      </div>
      <ModalDialog open={openDialog} setOpen={setOpenDialog}>
        <ModalDialogWrapper>
          <div
            tw="mb-5 flex justify-end cursor-pointer"
            onClick={() => setOpenDialog(false)}
          >
            <XIcon tw="w-4 h-4" />
          </div>
          <h1 tw="text-center font-bold text-[#50497C] text-2xl mb-4">
            What is your credit score?
          </h1>
          <p tw="text-[#2C2836] max-w-[452px] mb-4">
            To help us help you, we need to know your credit score so we can
            appropriately deliver content.
          </p>
          <RangeSlider from={300} to={900} variant="secondary" />
          <div tw="mt-5 flex justify-center">
            <Button
              variant="primary"
              title="Update My Score"
              color="brand"
              onClick={() => setOpenDialog(false)}
            />
          </div>
        </ModalDialogWrapper>
      </ModalDialog>
    </MainLayout>
  );
};

const StyledButton = styled.button`
  ${tw`rounded-lg py-3 px-5 font-medium text-base leading-[150%] flex items-center text-white bg-[#6246EA]`}
`;

const BannerWrapper = styled.div`
  background: radial-gradient(
    140.89% 740.97% at 34.18% 140.89%,
    #fafafe 0%,
    rgba(250, 250, 254, 0.1) 55.43%,
    rgba(98, 70, 234, 0.03) 100%
  );

  ${tw`relative p-8 my-8 py-[56px] rounded-lg`}
  h2 {
    ${tw`text-4xl leading-[54px] font-bold text-csp_neutral-DarkBG`}
  }

  p {
    ${tw`my-4 text-[#50497C]`}
  }
`;

const BannerImgWrapper = styled.div`
  ${tw`absolute bottom-[-83px] right-[-30px]`}
`;

const SubTitle = styled.h2`
  ${tw`text-[#50497C] text-2xl leading-[36px] font-semibold`}
`;

const StaticsWrapper = styled.div`
  ${tw`flex items-center justify-between gap-4 my-16`}
`;

const StaticCardWrapper = styled.div`
  ${tw`flex items-center flex-grow p-6 rounded-lg bg-white`}

  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px -1px rgba(0, 0, 0, 0.1);

  h3 {
    ${tw`text-4xl leading-[100%] font-bold text-gray-800`}
  }

  p {
    ${tw`text-lg leading-[150%] font-medium text-gray-400`}
  }
`;

const CourseShowUpWrapper = styled.div`
  ${tw`flex flex-col items-center justify-center text-center border-2 border-[#BCBCCD] border-dashed rounded-lg px-[30px] w-1/2`}
`;

const ModalDialogWrapper = styled.div`
  ${tw`pt-5 pb-8 rounded-lg px-5`}

  background: radial-gradient(
      97% 105.49% at 100% -2.94%,
      #f4e9fc 0%,
      #e3e6f9 31.92%,
      #fafafe 68.12%
    );
  border: 3px solid rgba(255, 255, 255, 0.45);
  box-shadow: 0px 1px 3px rgba(129, 126, 251, 0.13),
    0px 9px 21px -16px rgba(98, 70, 234, 0.07);
`;

export default Dashboard;
