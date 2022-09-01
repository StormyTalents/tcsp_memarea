import tw, { styled } from "twin.macro";
import { useMemo, useState } from "react";
import Lottie from "react-lottie";

import { Stepper, Button } from "components";
import { Step } from "types";

import ArrowIcon from "./../assets/icons/arrow_right.svg";
import * as animData from "../assets/lottie/business-achievement-by-businessman.json";
import { AccountSetup, OrderStep } from "containers";

export default function Home() {
  const [isStopped, setIsStopped] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const totalSteps = useMemo<Array<Step>>(() => {
    return [
      {
        id: "1",
        value: "order_placed",
        label: "Order Placed",
      },
      {
        id: "2",
        value: "secret_offer",
        label: "Secret Offer",
      },
      {
        id: "3",
        value: "account_setup",
        label: "Account Setup",
      },
    ];
  }, []);

  const onClickGetStarted = () => {
    setCurrentStep(1);
  };

  return (
    <HomeWrapper>
      <Stepper
        darkMode={true}
        totalSteps={totalSteps}
        currentStep={currentStep}
      />
      {currentStep === 0 ? (
        <>
          <div tw="w-[254px] h-[221px] md:w-[491px] md:h-[426px]">
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: animData,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
              height="100%"
              width="100%"
              isStopped={isStopped}
            />
          </div>
          <h1 tw="mt-[11px] mb-[19px]">Welcome to CSP</h1>
          <p>
            Praesent felis ex. Integer dui magna, porta ut fringilla nec,
            aliquet eu lorem. Phasellus ac ex sit amet velit laoreet mollis.
          </p>
          <div tw="mt-12">
            <Button
              variant="primary"
              color="brand"
              icon={<ArrowIcon />}
              title="Get Started"
              onClick={onClickGetStarted}
            />
          </div>
        </>
      ) : currentStep === 1 ? (
        <OrderStep onSkip={() => setCurrentStep(2)} />
      ) : (
        <AccountSetup />
      )}
    </HomeWrapper>
  );
}

const HomeWrapper = styled.section`
  ${tw`flex flex-col items-center min-h-screen py-16 overflow-x-hidden bg-gradient-to-br from-primary-dark to-medium-dark`}
  h1 {
    ${tw`md:text-4xl text-3xl text-white leading-[54px] font-bold`}
  }

  p {
    ${tw`text-base text-white max-w-[650px] leading-6 text-center px-[32px] md:px-0`}
  }
`;
