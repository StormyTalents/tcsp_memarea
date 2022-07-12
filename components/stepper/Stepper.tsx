import tw, { styled } from "twin.macro";
import { Step } from "types";

type StepperProps = {
  totalSteps: Step[];
  currentStep: number;
  darkMode: boolean;
};

export const Stepper = ({
  totalSteps,
  currentStep,
  darkMode,
}: StepperProps) => {
  return (
    <StepperWrapper>
      {totalSteps.map((_v, index) => (
        <StepMarkWrapper
          key={_v.id}
          status={
            currentStep === index
              ? "active"
              : index < currentStep
              ? "completed"
              : "pending"
          }
          darkMode={darkMode}
        >
          <StepMark
            darkMode={darkMode}
            css={[
              index < currentStep
                ? darkMode
                  ? tw`text-black bg-csp-brand border-csp-brand`
                  : tw`text-brand-200 bg-csp-brand border-csp-brand`
                : currentStep === index
                ? darkMode
                  ? tw`border-csp-brand`
                  : tw`text-brand-600 border-csp-brand`
                : darkMode
                ? tw`border-csp-medium-dark`
                : tw`text-gray-400`,
            ]}
          >
            <span>{index + 1}</span>
          </StepMark>
          {_v.label && (
            <span
              css={[
                index < currentStep
                  ? darkMode
                    ? tw`text-gray-600`
                    : tw`text-brand-200`
                  : currentStep === index
                  ? darkMode
                    ? tw`text-csp-brand`
                    : tw`text-brand-600`
                  : tw`text-gray-400`,
              ]}
              tw="uppercase leading-6 mt-2 font-semibold"
            >
              {_v.label}
            </span>
          )}
        </StepMarkWrapper>
      ))}
    </StepperWrapper>
  );
};

const StepperWrapper = styled.div`
  ${tw`flex items-center`}
`;

const StepMark = styled.div<{
  darkMode: boolean;
}>`
  ${tw`w-[50px] h-[50px] rounded-full border-[3px] box-border flex items-center justify-center leading-[18px] text-lg text-white font-bold relative `}
  ${({ darkMode }) =>
    darkMode ? tw`bg-csp-dark border-csp-medium-dark` : tw`bg-[#FCFCFC]`}
`;

const StepMarkWrapper = styled.div<{
  status: "active" | "completed" | "pending";
  darkMode: boolean;
}>`
  ${tw`relative z-10 flex flex-col items-center px-[26px] text-center md:px-10`}

  &::after {
    content: "";
    transform: translateY(-50%);
    z-index: -1;
    ${tw`block absolute top-[25px] h-[3px]  opacity-10 w-full`}
    ${({ darkMode }) => (darkMode ? tw`bg-white` : tw`bg-gray-100`)}
    ${({ status }) => status === "completed" && tw`opacity-100 bg-csp-brand`}
  }

  &::after {
    ${tw`left-[50%]`}
  }

  &:last-child {
    &::after {
      ${tw`hidden`}
    }
  }
`;
