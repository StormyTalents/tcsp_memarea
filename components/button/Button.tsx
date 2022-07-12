import tw, { styled } from "twin.macro";

type ButtonProps = {
  variant: "primary" | "secondary" | "outline" | "text";
  color:
    | "brand"
    | "black"
    | "deep_gray"
    | "gray"
    | "white"
    | "fireopal"
    | "gogreen";
  icon?: React.ReactNode;
  children?: React.ReactNode;
  title?: string;
  size?: "xs" | "sm" | "base" | "lg" | "xl";
  iconPos?: "left" | "right";
  iconOnly?: boolean;
  onClick?: () => void;
  fullWidth?: boolean;
};

export const Button = ({
  variant = "primary",
  icon,
  title,
  children,
  size = "base",
  iconPos = "right",
  onClick,
  iconOnly,
  color,
  fullWidth,
  ...rest
}: ButtonProps) => {
  return (
    <StyledButton
      css={[
        color === "brand" &&
          (variant === "outline"
            ? tw`bg-white border border-brand-600 text-brand-600 hover:bg-brand-50 focus:border-transparent focus:outline-brand-300`
            : tw`bg-brand-600 hover:bg-brand-800 focus:bg-brand-600 focus:outline-brand`),

        color === "black" &&
          (variant === "outline"
            ? tw`text-gray-800 bg-white border border-gray-800 hover:bg-gray-800 focus:outline-gray`
            : tw`bg-gray-800 hover:bg-gray-800 focus:bg-gray-800 focus:outline-gray`),
        color === "gray" &&
          (variant === "outline"
            ? tw`text-gray-800 bg-white border border-gray-200 hover:text-white hover:bg-gray-800 focus:outline-gray-100`
            : tw`text-black bg-gray-200 hover:bg-gray-300 focus:bg-gray-200 focus:outline-gray-100`),
        color === "white" &&
          tw`text-black bg-white hover:bg-gray-100 focus:bg-white focus:outline-brand`,
        color === "fireopal" &&
          (variant === "outline"
            ? tw`bg-white border text-fireopal-600 border-fireopal-600 hover:bg-fireopal-700 focus:bg-white focus:outline-fireopal`
            : tw`text-white bg-fireopal-500 hover:bg-fireopal-800 focus:bg-fireopal-500 focus:outline-fireopal`),
        color === "gogreen" &&
          (variant === "outline"
            ? tw`text-green-500 bg-white border border-green-500 hover:bg-green-500 focus:outline-gogreen`
            : tw`text-white bg-green-500 hover:bg-green-800 focus:bg-green-500 focus:outline-gogreen`),
        color === "deep_gray" &&
          tw`text-white bg-gray-700 hover:bg-gray-800 focus:bg-gray-700 focus:outline-gray`,

        iconOnly ? tw`rounded-full` : tw`rounded-lg`,

        size === "xs" && (iconOnly ? tw`p-1` : tw`px-3 py-2 text-xs`),
        size === "sm" && (iconOnly ? tw`p-2` : tw`px-3 py-2 text-sm`),
        size === "base" && (iconOnly ? tw`p-2.5` : tw`text-sm py-2.5 px-5`),
        size === "lg" && (iconOnly ? tw`p-3` : tw`px-5 py-3 text-base`),
        size === "xl" && (iconOnly ? tw`p-3.5` : tw`text-base py-3.5 px-6`),

        fullWidth && tw`w-full min-w-full`,
      ]}
      onClick={onClick}
      {...rest}
    >
      {children ? (
        children
      ) : (
        <>
          {iconPos === "left" && icon && !iconOnly && (
            <div
              css={[
                (size === "xs" || size === "sm" || size === "base") && tw`mr-2`,
                (size === "xl" || size === "lg") && tw`mr-3`,
              ]}
            >
              {icon}
            </div>
          )}
          {!iconOnly && <span>{title}</span>}
          {iconOnly && icon && <div>{icon}</div>}
          {iconPos === "right" && icon && !iconOnly && (
            <div
              css={[
                (size === "xs" || size === "sm" || size === "base") && tw`ml-2`,
                (size === "xl" || size === "lg") && tw`ml-3`,
              ]}
            >
              {icon}
            </div>
          )}
        </>
      )}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  ${tw`flex items-center justify-center font-medium text-white transition-all duration-300 ease-in-out rounded-lg font-main`}
`;
