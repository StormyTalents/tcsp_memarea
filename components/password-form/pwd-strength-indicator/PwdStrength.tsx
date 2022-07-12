import { useState } from "react";
import tw, { styled } from "twin.macro";

type PwdStrengthProps = {
  password: string;
};

const state = ["Weak", "OK", "Strong"];

export const PwdStrength = ({ password }: PwdStrengthProps) => {
  const checkpassword = (password) => {
    let strength = 0;
    if (password.length >= 4) {
      if (password.match(/[a-zA-Z]+/)) {
        strength += 1;
      }
      if (password.match(/[0-9]+/)) {
        strength += 1;
      }
      if (password.match(/[$@#&!]+/)) {
        strength += 1;
      }
    }

    return strength;
  };
  const strength = checkpassword(password);
  return (
    <StrengthWrapper>
      {state.map((item, index) => (
        <StrengthActiveBar key={index} isActive={strength >= index + 1} />
      ))}
      <p tw="font-semibold text-sm! text-black my-2">
        {strength > 0 && state[strength - 1]}
      </p>
    </StrengthWrapper>
  );
};

const StrengthWrapper = styled.div`
  ${tw`relative flex gap-2 font-semibold`}
`;
const StrengthActiveBar = styled.div<{
  isActive?: boolean;
}>`
  ${tw`w-[66px] md:w-[90px] h-1 rounded-[19px] my-[18px] bg-[#A1A1AA]`}
  background: ${({ isActive = false }) => !!isActive && "#F05252"};
  &:nth-of-type(2) {
    background: ${({ isActive = false }) => !!isActive && "#F99D07"};
  }
  &:nth-of-type(3) {
    background: ${({ isActive = false }) => !!isActive && "#2BA185"};
  }
`;
