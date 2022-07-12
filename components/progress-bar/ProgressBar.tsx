import tw, { styled } from "twin.macro";

type ProgressBarProps = {
  percent?: number;
  percentPos?: "left" | "center";
  variant?: "primary" | "secondary";
};

export const ProgressBar = ({
  percent,
  percentPos,
  variant = "primary",
  ...rest
}: ProgressBarProps) => {
  return (
    <ProgressBarWrapper
      percent={percent}
      variant={variant}
      percentPos={percentPos}
      {...rest}
    />
  );
};

const ProgressBarWrapper = styled.div<{
  variant?: "primary" | "secondary";
  percent?: number;
  percentPos?: "left" | "center";
}>`
  ${tw`relative w-full rounded-[18px]`}

  background: ${({ variant }) =>
    variant === "primary" ? "#DFE3FF" : "rgba(247, 249, 249, 0.45)"};

  height: ${({ variant }) => (variant === "primary" ? "8px" : "18px")};

  &:after {
    content: ${({ variant, percent, percentPos }) =>
      percentPos === "left"
        ? variant === "primary"
          ? "''"
          : "'" + percent + "%'"
        : "''"};
    background: #6246ea;
    position: absolute;
    width: ${({ percent }) => percent}%;
    height: ${({ variant }) => (variant === "primary" ? "8px" : "18px")};
    border-radius: 18px;
    text-align: right;
    font-size: 14px;
    padding-right: 10px;
    font-weight: 700;
    color: white;
  }

  &:before {
    content: ${({ variant, percent, percentPos }) =>
      percentPos === "center"
        ? variant === "primary"
          ? "''"
          : "'" + percent + "%'"
        : "''"};
    z-index: 1;
    position: absolute;
    width: 100%;
    text-align: center;
    font-size: 14px;
    font-weight: 700;
    color: white;
  }
`;
