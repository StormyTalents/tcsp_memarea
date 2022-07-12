import tw, { styled } from "twin.macro";
import { useMemo, useState } from "react";
import { Range, getTrackBackground, Direction } from "react-range";
import ThumbDots from "./../../assets/icons/thumb-dots.svg";

type RangeSliderProps = {
  from?: number;
  to?: number;
  step?: number;
  variant: "primary" | "secondary";
};

export const RangeSlider = ({
  from,
  to,
  step,
  variant = "primary",
}: RangeSliderProps) => {
  const [value, setValue] = useState<number[]>([from] || [0]);

  const getRangeProperty = (type = "color") => {
    return value[0] < 580
      ? type === "color"
        ? "#F05252"
        : "POOR"
      : value[0] < 670
      ? type === "color"
        ? "#F99D07"
        : "FAIR"
      : value[0] < 740
      ? type === "color"
        ? "#2BA185"
        : "GOOD"
      : value[0] < 800
      ? type === "color"
        ? "#17B5B5"
        : "GREAT"
      : value[0] < to
      ? type === "color"
        ? "#7FDAC0"
        : "EXCELLENT"
      : type === "color"
      ? "#7FDAC0"
      : "EXCELLENT";
  };

  const color = useMemo(() => {
    return getRangeProperty("color");
  }, [value]);

  return (
    <div>
      <div tw="flex items-center pt-10">
        <Range
          step={1}
          min={from || 0}
          max={to || 100}
          values={value}
          onChange={(values) => setValue([...values])}
          renderTrack={({ props, children }) => (
            <div
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              style={{
                ...props.style,
                height: "36px",
                display: "flex",
                width: "100%",
              }}
            >
              <div
                ref={props.ref}
                style={{
                  height: "8px",
                  width: "100%",
                  borderRadius: "4px",
                  background: getTrackBackground({
                    values: [...value],
                    colors: [`${color}`, "#A1A1AA"],
                    min: from || 0,
                    max: to || 100,
                  }),

                  alignSelf: "center",
                }}
              >
                {children}
              </div>
            </div>
          )}
          renderThumb={({ props }) => (
            <ThumbDiv
              {...props}
              style={{
                ...props.style,
                minHeight: "24px",
                minWidth: "24px",
                backgroundColor: "white",
                borderRadius: "100%",
                outline: "none",
              }}
            >
              <HandlerWithTip color={color}>
                <span>
                  <ThumbDots class="svg" />
                  {value}
                  <svg
                    width="24"
                    height="7"
                    viewBox="0 0 24 7"
                    fill={color}
                    xmlns="http://www.w3.org/2000/svg"
                    tw="absolute top-[33px]"
                  >
                    <path
                      d="M9.17158 5.67058L6.34315 2.84215C4.84286 1.34186 2.80802 0.499001 0.686292 0.499001H23.3137C21.192 0.499001 19.1571 1.34185 17.6569 2.84214L14.8284 5.67057C13.2663 7.23267 10.7337 7.23267 9.17158 5.67058Z"
                      fill={color}
                    />
                  </svg>
                </span>
              </HandlerWithTip>
            </ThumbDiv>
          )}
        />
      </div>
      {variant === "secondary" && (
        <div tw="flex justify-between font-bold text-sm">
          <p tw="text-fireopal-600">{from}</p>
          <p tw="text-gogreen-600">{to}</p>
        </div>
      )}
      <h2 tw="font-medium text-xl leading-[150%] text-center text-white">
        <span css={[variant === "secondary" && tw`text-[#2C2836]`]}>
          I have an
        </span>
        <CreditStateText color={color} title={getRangeProperty("text")}>
          &nbsp;{getRangeProperty("text")}&nbsp;
        </CreditStateText>
        <span css={[variant === "secondary" && tw`text-[#2C2836]`]}>
          Credit Score
        </span>
      </h2>
    </div>
  );
};

const HandlerWithTip = styled.div<{
  left?: number;
  color?: string;
}>`
  span {
    background: ${({ color }) => color};
    ${tw`px-3 py-2 rounded-lg text-white absolute -top-12 left-2.5 -translate-x-1/2 w-24 flex justify-center text-lg font-bold h-[34px] items-center `}
    .svg {
      ${tw`absolute left-1`}
    }
  }
`;

const ThumbDiv = styled.div`
  background: linear-gradient(104.32deg, #dfe3ff 0%, #a3a8fe 100%);
  border: 1px solid #d4d4d8;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
    0px 1px 2px -1px rgba(0, 0, 0, 0.1);
`;

const CreditStateText = styled.span<{
  color?: string;
  title?: string;
}>`
  ${tw`font-bold text-[24px]`}
  color: ${({ color }) => color};
  text-shadow: ${({ title }) =>
    title === "EXCELLENT"
      ? "0px 2px 5px rgba(0, 0, 0, 0.42), 0px 1px 30px rgba(117, 215, 191, 0.5)"
      : ""};
`;
