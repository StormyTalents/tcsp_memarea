import React from "react";
import tw, { styled } from "twin.macro";

import { RemoveIcon } from "./../icons";

type BadgeProps = {
  color: "gray" | "fireopal" | "sunglow" | "gogreen" | "blueish" | "brand";
  size: "sm" | "lg";
  icon?: React.ReactNode | SVGElement;
  // iconPos?: "left" | "right";
  title?: string;
  variant?: "circle" | "square";
  numVal?: string;
  hasRemoveIcon?: boolean;
  onClickRemove?: () => void;
};

export const Badge = ({
  color,
  size,
  icon,
  //iconPos,
  title,
  variant,
  hasRemoveIcon,
  onClickRemove,
  numVal,
  ...rest
}: BadgeProps) => {
  return (
    <BadgeWrapper color={color} size={size} variant={variant} {...rest}>
      {icon && icon}
      <span>{variant === "square" ? title : numVal}</span>
      {hasRemoveIcon && (
        <button type="button" onClick={onClickRemove} tw="ml-1">
          <RemoveIcon />
        </button>
      )}
    </BadgeWrapper>
  );
};

const BadgeWrapper = styled.div<{
  color: "gray" | "fireopal" | "sunglow" | "gogreen" | "blueish" | "brand";
  size: "sm" | "lg";
  variant: "square" | "circle";
}>`
  max-width: fit-content;
  ${tw`flex items-center leading-[150%] rounded-md`}
  ${({ size }) => (size === "sm" ? tw`py-0.5 px-2.5` : tw`px-3 py-0.5`)}
  ${({ color }) =>
    color === "gray"
      ? tw`bg-gray-100`
      : color === "fireopal"
      ? tw`bg-fireopal-100`
      : color === "sunglow"
      ? tw`bg-sunglow-100`
      : color === "gogreen"
      ? tw`bg-gogreen-100`
      : color === "blueish"
      ? tw`bg-blueish-100`
      : color === "brand"
      ? tw`bg-brand-100`
      : tw`bg-brand-100`}

  svg {
    ${({ size }) => (size === "sm" ? tw`w-3 h-3` : tw`w-3 h-3`)}
    path {
      fill: ${({ color }) =>
        color === "gray"
          ? "#18181B"
          : color === "fireopal"
          ? "#7A2422"
          : color === "sunglow"
          ? "#7A340D"
          : color === "gogreen"
          ? "#1B463D"
          : color === "blueish"
          ? "#144B4D"
          : color === "brand"
          ? "#392C83"
          : "#392C83"};
    }
  }
  span {
    ${({ size }) => (size === "sm" ? tw`text-xs` : tw`text-sm`)}
    ${({ variant }) => variant === "square" && tw`ml-1`}
    ${({ color }) =>
      color === "gray"
        ? tw`text-gray-900`
        : color === "fireopal"
        ? tw`text-fireopal-800`
        : color === "sunglow"
        ? tw`text-sunglow-800`
        : color === "gogreen"
        ? tw`text-gogreen-800`
        : color === "blueish"
        ? tw`text-blueish-800`
        : color === "brand"
        ? tw`text-brand-800`
        : tw`text-brand-800`}
  }
  ${({ variant, size }) =>
    variant === "circle" &&
    (size === "sm" ? tw`w-5! h-5!` : tw`w-[25px]! h-[25px]!`)}
  ${({ variant }) =>
    variant === "circle" && tw`rounded-full! flex justify-center`}
`;
