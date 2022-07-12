import { useMemo } from "react";
import tw, { styled } from "twin.macro";
import { FaFacebookF, FaTwitter, FaDribbble, FaGoogle } from "react-icons/fa";

import GoogleIconsm from "../../assets/icons/google-sm.svg";
import GoogleIconlg from "../../assets/icons/google.svg";

import FacebookIconsm from "../../assets/icons/facebook-1.svg";
import FacebookIconlg from "../../assets/icons/facebook-2.svg";

type SocialButtonProps = {
  type?: "facebook" | "twitter" | "dribbble" | "google";
  size?: "xs" | "sm" | "lg" | "xl";
  variant?: "primary" | "secondary" | "outline" | "black" | "colorful";
  isColorIcon?: boolean;
  onClick?: () => void;
};

export const SocialButton = ({
  type = "facebook",
  size = "xs",
  variant = "primary",
  isColorIcon = false,
  ...rest
}: SocialButtonProps) => {
  const buttonTitle = useMemo(() => {
    return "Sign in with " + type.charAt(0).toUpperCase() + type.slice(1);
  }, [type]);

  return (
    <StyledButton size={size} variant={variant} typebtn={type} {...rest}>
      <IconWrapper size={size}>
        {type === "facebook" ? (
          isColorIcon ? (
            variant === "secondary" ? (
              <FacebookIconsm />
            ) : size === "xl" ? (
              <FacebookIconlg />
            ) : (
              <FacebookIconsm />
            )
          ) : (
            <FaFacebookF />
          )
        ) : type === "twitter" ? (
          <FaTwitter />
        ) : type === "dribbble" ? (
          <FaDribbble />
        ) : type === "google" ? (
          isColorIcon ? (
            variant === "secondary" ? (
              <GoogleIconsm />
            ) : size === "xl" ? (
              <GoogleIconlg />
            ) : (
              <GoogleIconsm />
            )
          ) : (
            <FaGoogle />
          )
        ) : (
          <FaGoogle />
        )}
      </IconWrapper>
      <TitleWrapper size={size}>{buttonTitle}</TitleWrapper>
    </StyledButton>
  );
};

const StyledButton = styled.button<{
  size?: "xs" | "sm" | "lg" | "xl";
  variant?: "primary" | "secondary" | "outline" | "black" | "colorful";
  typebtn?: "facebook" | "twitter" | "dribbble" | "google";
}>`
  ${tw`flex items-center justify-center w-full gap-2 font-medium text-white border border-transparent rounded-lg`}
  ${({ variant }) => variant === "outline" && tw`border-gray-900 `}
  padding: ${({ size }) => {
    switch (size) {
      case "lg":
        return "10.5px 20px 10.5px 19px";
      case "xl":
        return "14px 24px 14px 23px";
      default:
        return "8px 12px 8px 11px";
    }
  }};
  ${({ variant }) =>
    variant === "primary"
      ? tw`bg-gray-900`
      : variant === "secondary"
      ? tw`bg-white`
      : variant === "outline"
      ? tw`bg-transparent`
      : variant === "black" && tw`bg-gray-900`};
  ${({ variant, typebtn }) => {
    if (variant === "colorful") {
      switch (typebtn) {
        case "facebook":
          return tw`bg-[#35518D]`;
        case "twitter":
          return tw`bg-[#1DA1F2]`;
        case "dribbble":
          return tw`bg-[#EA4C89]`;
        case "google":
          return tw`bg-[#4284F4]`;
      }
    }
  }}
  ${({ variant }) =>
    (variant === "secondary" || variant === "outline") && tw`text-gray-900`}
  ${({ variant, typebtn, size }) =>
    variant === "outline" &&
    (typebtn === "facebook" || typebtn === "google") &&
    size === "xl" &&
    tw`border-[#BCBCCD]`}
`;

const IconWrapper = styled.div<{ size: "xs" | "sm" | "lg" | "xl" }>`
  ${({ size }) =>
    size === "xl" ? tw`text-lg` : size === "xs" ? tw`text-sm` : tw`text-base`}
`;

const TitleWrapper = styled.div<{ size: "xs" | "sm" | "lg" | "xl" }>`
  ${({ size }) =>
    size === "xl"
      ? tw`text-base leading-6`
      : size === "xs"
      ? tw`text-xs leading-[18px]`
      : tw`text-sm leading-[21px]`}
`;
