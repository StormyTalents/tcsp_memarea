import Image from "next/image";
import { useMemo } from "react";
import tw, { styled } from "twin.macro";

type UserAvatarProps = {
  img: string;
  variant?: "primary" | "secondary";
  size?: "xl" | "lg" | "md" | "base" | "sm";
  name: string;
};

export const UserAvatar = ({
  img = "",
  name,
  variant = "primary",
  size = "base",
}: UserAvatarProps) => {
  const getSize = useMemo(() => {
    switch (size) {
      case "xl":
        return "144px";
      case "lg":
        return "80px";
      case "md":
        return "48px";
      case "base":
        return "32px";
      case "sm":
        return "24px";
    }
  }, [size]);

  const initials = useMemo(() => {
    const fullName = name.split(" ");
    return (
      fullName.shift().charAt(0) + fullName.pop().charAt(0)
    ).toUpperCase();
  }, [name]);

  return (
    <AvatarWrapper size={getSize} variant={variant}>
      {img !== "" ? (
        <div>
          <Image src={img} width={getSize} height={getSize} />
        </div>
      ) : (
        <NameContainer size={size}>{initials}</NameContainer>
      )}
    </AvatarWrapper>
  );
};

const AvatarWrapper = styled.div<{
  size?: string;
  variant?: "primary" | "secondary";
}>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: ${({ variant }) => (variant === "primary" ? "100%" : "4px")};
  ${tw`flex items-center justify-center overflow-hidden bg-[#F3F4F6] text-center`}
`;

const NameContainer = styled.div<{
  size?: "xl" | "lg" | "md" | "base" | "sm";
}>`
  ${tw`font-medium text-[#111928]`}
  font-size: ${({ size }) =>
    size === "xl"
      ? "48px"
      : size === "lg"
      ? "30px"
      : size === "md"
      ? "16px"
      : "12px"}
`;
