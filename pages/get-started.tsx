import tw, { styled } from "twin.macro";
import { useState, useMemo, useRef } from "react";
import { ChevronLeftIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";

import { Button } from "components/button";
import { Sidebar } from "components/sidebar";
import { Stepper } from "components/stepper";

import { Step } from "types";
import PlayIcon from "assets/icons/play.svg";

const SignUp = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const totalSteps = useMemo<Array<Step>>(() => {
    return [
      {
        id: "1",
        value: "setup",
        label: "Setup",
      },
      {
        id: "2",
        value: "onboarding",
        label: "Onboarding",
      },
      {
        id: "3",
        value: "launch",
        label: "Launch",
      },
    ];
  }, []);

  return (
    <main tw="text-center w-full overflow-hidden flex">
      <Sidebar expand={false} />
      <div tw="pt-[56px] pb-[232px] w-full">
        <div tw="flex justify-center mb-[96px]">
          <Stepper
            totalSteps={totalSteps}
            currentStep={currentStep}
            darkMode={false}
          />
        </div>
        <div>
          <div tw="flex justify-center">
            <VideoPlayer />
          </div>
          {currentStep === 0 ? (
            <motion.div
              key={"setuplayout_motion"}
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <SetupLayout setCurrentStep={setCurrentStep} />
            </motion.div>
          ) : (
            currentStep === 1 && (
              <motion.div
                key={"onboardinglayout_motion"}
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <OnboardingLayout setCurrentStep={setCurrentStep} />
              </motion.div>
            )
          )}
        </div>
      </div>
    </main>
  );
};

type LayoutProp = {
  setCurrentStep: Function;
};

const SetupLayout = ({ setCurrentStep }: LayoutProp) => {
  const backToOverview = () => {};

  return (
    <div>
      <h1 tw="text-csp_neutral-600 font-medium text-4xl mb-6">
        Setting Up Your Account
      </h1>
      <div tw="flex justify-center mb-[45px]">
        <p tw="text-platinum-600 max-w-[636px]">
          The 800 Club Community is a precious resource full of experts in the
          industry and people just like who are on their journies to financial
          freedom.
        </p>
      </div>
      <div tw="flex justify-center mb-2">
        <Button
          variant="primary"
          color="brand"
          size="lg"
          title="I Understand, Continue To Step 2"
          onClick={() => setCurrentStep(1)}
        />
      </div>
      <div tw="flex justify-center">
        <button
          tw="text-gray-600 font-medium px-5 py-[10px] flex"
          onClick={backToOverview}
        >
          <ChevronLeftIcon tw="w-5 h-5 mt-[2px] mr-2" />
          <p>Back to Overview</p>
        </button>
      </div>
    </div>
  );
};

const OnboardingLayout = ({ setCurrentStep }: LayoutProp) => {
  return (
    <div>
      <h1 tw="text-csp_neutral-600 font-medium text-4xl mb-6">
        How To Use The Community
      </h1>
      <div tw="flex justify-center mb-[45px]">
        <p tw="text-platinum-600 max-w-[636px]">
          The 800 Club Community is a precious resource full of experts in the
          industry and people just like who are on their journies to financial
          freedom.
        </p>
      </div>
      <div tw="flex justify-center mb-2">
        <Button
          variant="primary"
          color="brand"
          size="lg"
          title="Launch The Community!"
          onClick={() => setCurrentStep(2)}
        />
      </div>
      <div tw="flex justify-center">
        <button
          tw="text-gray-600 font-medium px-5 py-[10px] flex"
          onClick={() => setCurrentStep(0)}
        >
          <ChevronLeftIcon tw="w-5 h-5 mt-[2px] mr-2" />
          <p>Back a step</p>
        </button>
      </div>
    </div>
  );
};

const VideoPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const vidRef = useRef<HTMLVideoElement>(null);

  const onClickPlay = () => {
    vidRef.current?.play();
    setPlaying(true);
  };

  return (
    <div tw="w-[600px] relative rounded overflow-hidden mb-12">
      <video
        ref={vidRef}
        width="100%"
        height="100%"
        muted
        onEnded={() => setPlaying(false)}
      >
        <source
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      {!playing && (
        <>
          <div tw="absolute top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-opacity-70">
            <div tw="hover:scale-105 duration-300" onClick={onClickPlay}>
              <PlayIcon />
            </div>
          </div>
          <PlayerMask />
        </>
      )}
    </div>
  );
};

const PlayerMask = styled.div`
  ${tw`absolute top-0 z-10 w-full h-[408px] bg-black opacity-50`}
`;

export default SignUp;
