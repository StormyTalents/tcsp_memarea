import tw, { styled } from "twin.macro";
import { QuestionMarkCircleIcon } from "@heroicons/react/solid";

export const SecurityCodeInput = ({ ...props }) => {
  return (
    <div {...props}>
      <label tw="text-csp_neutral-contrast font-medium text-base leading-[150%]">
        Security Code
      </label>
      <div tw="relative mt-2">
        <StyledInput
          type="text"
          name="security_code"
          placeholder="Security Code"
          tw="border border-csp_neutral-contrast1 rounded-lg w-full"
        />
        <QuestionMarkCircleIcon tw="w-[18px] h-[18px] absolute top-1/2 -translate-y-1/2 right-2" />
      </div>
    </div>
  );
};

const StyledInput = styled.input`
  &::placeholder {
    ${tw`text-sm text-csp_neutral-contrast1`}
  }
`;
