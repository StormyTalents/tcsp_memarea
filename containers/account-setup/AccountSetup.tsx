import tw, { styled } from "twin.macro";
import { useState } from "react";

import { Button, PasswordForm } from "components";
import { CreditScore } from "containers/credit-score";
import ArrowIcon from "./../../assets/icons/arrow_right.svg";

export const AccountSetup = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const onClickContinue = () => {
    setCurrentStep(currentStep + 1);
  };

  return (
    <div tw="flex flex-col items-center mt-[120px] md:mt-[202px] lg:mt-[198px]">
      {currentStep === 0 && (
        <div tw="mb-16">
          <h1 tw="text-center  px-[32px] md:px-0">
            Let&rsquo;s get your account set up
          </h1>
          <p tw="mt-[22px]">
            Please answer these questions to the best of your ability so we can
            give you the best experience possible!
          </p>
          <p tw="mt-8 font-medium text-sm! text-center text-[#D4D4D8]!">
            Email Address:
          </p>
          <p>
            <GlowMail>craig@creditsimple.com</GlowMail>
          </p>
          <div tw="flex justify-center items-center mt-8">
            <Button
              title="My email is correct!"
              variant="primary"
              color="brand"
              icon={<ArrowIcon />}
              onClick={onClickContinue}
            />
          </div>
          <p tw="mt-4">The email address listed is incorrect</p>
        </div>
      )}

      {currentStep === 1 && (
        <>
          <PasswordForm />
          <div>
            <Button
              color="brand"
              title="Continue"
              variant="primary"
              icon={<ArrowIcon />}
              onClick={onClickContinue}
            />
          </div>
        </>
      )}

      {currentStep === 2 && <CreditScore />}
    </div>
  );
};

const GlowMail = styled.span`
  background: linear-gradient(271.15deg, #7fdac0 0%, #17b5b5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

  text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1),
    0px 1px 30px rgba(117, 215, 191, 0.5);
  font-size: 24px;
  font-weight: 700;
`;
