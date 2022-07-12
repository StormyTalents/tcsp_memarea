import { ChangeEvent, HTMLProps } from "react";
import tw, { styled } from "twin.macro";

import { TextField } from "../text-field";

type InputFormProps = {
  type?: "email" | "search" | "password";
  state?: "normal" | "success" | "danger" | "disabled";
  size?: "lg" | "sm";
  variant?: "dark" | "light";
  isIcon?: boolean;
  iconType?: "search" | "email" | "password";
  isStateIcon?: boolean;
  label?: string;
  placeholder?: string;
  name?: string;
  value?: string;
  isValid?: string;
  error?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  labelProps?: HTMLProps<HTMLDivElement>;
};

export const CustomInput = ({
  type = "email",
  state = "normal",
  size = "sm",
  isIcon = false,
  iconType = "email",
  variant = "light",
  isStateIcon = false,
  label,
  placeholder,
  name,
  value,
  onChange,
  labelProps,
  ...props
}: InputFormProps) => {
  // if (state === "danger" || state === "success") isIcon = false;
  return (
    <div {...props}>
      {!!label && (
        <div
          tw="text-csp_neutral-contrast text-base font-medium mb-2"
          {...labelProps}
        >
          {label}
        </div>
      )}
      <div tw="relative">
        <InputBodyWrapper darkmode={variant} iconType={iconType}>
          <div>
            <CustomText
              isIcon={isIcon}
              sizeType={size}
              state={state}
              placeholder={placeholder}
              name={name}
              type={type}
              value={value}
              onChange={onChange}
              disabled={
                state === "success" ||
                state === "danger" ||
                state === "disabled"
                  ? true
                  : false
              }
              darkmode={variant}
            />
          </div>
          {isIcon === true && (
            <div
              css={[
                tw`absolute`,
                size === "sm" ? tw`top-3 left-3` : tw`top-[18px] left-[23px]`,
              ]}
            >
              <HeadSvg darkmode={variant} type={iconType} />
            </div>
          )}
        </InputBodyWrapper>
        {isStateIcon && (state === "success" || state === "danger") && (
          <div
            css={[
              tw`absolute`,
              size === "sm" ? tw`right-3 top-3` : tw`right-[14px] top-[14px]`,
            ]}
          >
            <StateSvg type={state} size={size} />
          </div>
        )}
      </div>
    </div>
  );
};

const InputBodyWrapper = styled.div<{
  darkmode?: "dark" | "light";
  iconType?: "search" | "email" | "password";
}>`
  &:hover,
  &:focus {
    path {
      fill: ${({ darkmode, iconType }) =>
        iconType !== "password" &&
        (darkmode === "dark" ? "#6D5FF5" : "#6246ea")};
    }
  }
`;

const CustomText = styled(TextField)<{
  isIcon?: boolean;
  state?: "normal" | "success" | "danger" | "disabled";
  sizeType?: "sm" | "lg";
  darkmode?: "dark" | "light";
}>`
  ${tw`border rounded-lg border-[#BCBCCD] outline-none`}
  padding: ${({ isIcon, sizeType }) =>
    sizeType === "sm"
      ? isIcon === true
        ? "12px 12px 12px 42px"
        : "12px"
      : isIcon === true
      ? "14px 16px 14px 48px"
      : "14px 16px"};
  ${({ darkmode }) => (darkmode ? tw`bg-[#FAFAFE]` : tw`bg-[#FAFAFE]`)}
  color: ${({ darkmode }) => (darkmode === "dark" ? "#FFFFFF" : "#18181B")};

  &:focus {
    border: ${({ state }) => state === "normal" && "1px solid #6246EA"};
  }

  ${({ sizeType }) =>
    sizeType === "sm"
      ? tw`leading-[17.5px] text-sm h-[42px]`
      : tw`leading-6 text-base h-[52px]`}
  border-color: ${({ darkmode, state }) =>
    state === "success"
      ? darkmode === "light"
        ? "#1E6759"
        : "#2BA185"
      : state === "danger" && "#E74F4C"};
  ::placeholder {
    color: ${({ state, darkmode }) =>
      state === "success"
        ? "#1E6759"
        : state === "danger"
        ? "#B12724"
        : darkmode === "dark"
        ? "#A1A1AA"
        : "#BCBCCD"};
  }
  ${({ darkmode }) =>
    darkmode === "dark" ? tw`text-[#A1A1AA]` : tw`text-csp_neutral-DarkBG`}
`;

type HeadSvgProps = {
  darkmode?: "dark" | "light";
  type?: "search" | "email" | "password";
};
const HeadSvg = ({ darkmode, type }: HeadSvgProps) => {
  return (
    <>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {type === "search" && (
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6 1.99997C4.93913 1.99997 3.92172 2.4214 3.17157 3.17155C2.42143 3.92169 2 4.93911 2 5.99997C2 7.06084 2.42143 8.07825 3.17157 8.8284C3.92172 9.57855 4.93913 9.99997 6 9.99997C7.06087 9.99997 8.07828 9.57855 8.82843 8.8284C9.57857 8.07825 10 7.06084 10 5.99997C10 4.93911 9.57857 3.92169 8.82843 3.17155C8.07828 2.4214 7.06087 1.99997 6 1.99997ZM1.13461e-07 5.99997C-0.00012039 5.05568 0.222642 4.12468 0.650171 3.28271C1.0777 2.44074 1.69792 1.71157 2.4604 1.1545C3.22287 0.597426 4.10606 0.228185 5.03815 0.0768059C5.97023 -0.0745733 6.92488 -0.00381595 7.82446 0.283323C8.72404 0.570462 9.54315 1.06587 10.2152 1.72927C10.8872 2.39266 11.3931 3.20531 11.6919 4.10111C11.9906 4.9969 12.0737 5.95056 11.9343 6.88452C11.795 7.81848 11.4372 8.70637 10.89 9.47597L15.707 14.293C15.8892 14.4816 15.99 14.7342 15.9877 14.9964C15.9854 15.2586 15.8802 15.5094 15.6948 15.6948C15.5094 15.8802 15.2586 15.9854 14.9964 15.9876C14.7342 15.9899 14.4816 15.8891 14.293 15.707L9.477 10.891C8.57936 11.5293 7.52335 11.9081 6.42468 11.9861C5.326 12.0641 4.22707 11.8381 3.2483 11.3329C2.26953 10.8278 1.44869 10.063 0.875723 9.12232C0.30276 8.18165 -0.000214051 7.10141 1.13461e-07 5.99997Z"
            fill={darkmode === "dark" ? "#A1A1AA" : "#111928"}
          />
        )}
        {type === "email" && (
          <>
            <path
              d="M2.00305 5.884L10.0001 9.882L17.9971 5.884C17.9674 5.37444 17.7441 4.89549 17.3729 4.54523C17.0016 4.19497 16.5105 3.99991 16.0001 4H4.00005C3.48964 3.99991 2.9985 4.19497 2.62723 4.54523C2.25596 4.89549 2.03266 5.37444 2.00305 5.884Z"
              fill={darkmode === "dark" ? "#A1A1AA" : "#111928"}
            />
            <path
              d="M18 8.11798L10 12.118L2 8.11798V14C2 14.5304 2.21071 15.0391 2.58579 15.4142C2.96086 15.7893 3.46957 16 4 16H16C16.5304 16 17.0391 15.7893 17.4142 15.4142C17.7893 15.0391 18 14.5304 18 14V8.11798Z"
              fill={darkmode === "dark" ? "#A1A1AA" : "#111928"}
            />
          </>
        )}
        {type === "password" && (
          <path
            d="M2 7.5H2.5V7V5C2.5 3.80653 2.97411 2.66193 3.81802 1.81802C4.66193 0.974106 5.80653 0.5 7 0.5C8.19347 0.5 9.33807 0.974106 10.182 1.81802C11.0259 2.66193 11.5 3.80653 11.5 5V7V7.5H12C12.3978 7.5 12.7794 7.65804 13.0607 7.93934C13.342 8.22064 13.5 8.60218 13.5 9V14C13.5 14.3978 13.342 14.7794 13.0607 15.0607C12.7794 15.342 12.3978 15.5 12 15.5H2C1.60218 15.5 1.22064 15.342 0.93934 15.0607C0.658035 14.7794 0.5 14.3978 0.5 14V9C0.5 8.60218 0.658035 8.22064 0.93934 7.93934C1.22064 7.65804 1.60218 7.5 2 7.5ZM10 7.5H10.5V7V5C10.5 4.07174 10.1313 3.1815 9.47487 2.52513C8.8185 1.86875 7.92826 1.5 7 1.5C6.07174 1.5 5.1815 1.86875 4.52513 2.52513C3.86875 3.1815 3.5 4.07174 3.5 5V7V7.5H4H10Z"
            fill={darkmode === "dark" ? "#A1A1AA" : "#71717A"}
            stroke={darkmode === "dark" ? "#A1A1AA" : "#71717A"}
          />
        )}
      </svg>
    </>
  );
};

type StateSvgType = {
  type?: "success" | "danger";
  size?: "lg" | "sm";
};

const StateSvg = ({ type, size }: StateSvgType) => {
  return (
    <>
      {type === "success" ? (
        size === "lg" ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 13L9 17L19 7"
              stroke="#2BA185"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.25 9.75L7.25 12.75L14.75 5.25"
              stroke="#2BA185"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )
      ) : size === "lg" ? (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.0999 11.9999C21.0999 14.4134 20.1412 16.728 18.4346 18.4346C16.728 20.1412 14.4134 21.0999 11.9999 21.0999C9.58643 21.0999 7.27181 20.1412 5.56523 18.4346C3.85865 16.728 2.8999 14.4134 2.8999 11.9999C2.8999 9.58643 3.85865 7.27181 5.56523 5.56523C7.27181 3.85865 9.58643 2.8999 11.9999 2.8999C14.4134 2.8999 16.728 3.85865 18.4346 5.56523C20.1412 7.27181 21.0999 9.58643 21.0999 11.9999ZM13.202 18.002C13.5208 17.6832 13.6999 17.2508 13.6999 16.7999C13.6999 16.349 13.5208 15.9166 13.202 15.5978C12.8832 15.279 12.4508 15.0999 11.9999 15.0999C11.549 15.0999 11.1166 15.279 10.7978 15.5978C10.479 15.9166 10.2999 16.349 10.2999 16.7999C10.2999 17.2508 10.479 17.6832 10.7978 18.002C11.1166 18.3208 11.549 18.4999 11.9999 18.4999C12.4508 18.4999 12.8832 18.3208 13.202 18.002ZM11.9999 5.4999C11.549 5.4999 11.1166 5.67901 10.7978 5.99782C10.479 6.31663 10.2999 6.74903 10.2999 7.1999V11.9999C10.2999 12.4508 10.479 12.8832 10.7978 13.202C11.1166 13.5208 11.549 13.6999 11.9999 13.6999C12.4508 13.6999 12.8832 13.5208 13.202 13.202C13.5208 12.8832 13.6999 12.4508 13.6999 11.9999V7.1999C13.6999 6.74903 13.5208 6.31663 13.202 5.99782C12.8832 5.67901 12.4508 5.4999 11.9999 5.4999Z"
            fill="#D3322F"
            stroke="#D3322F"
          />
        </svg>
      ) : (
        <svg
          width="19"
          height="18"
          viewBox="0 0 19 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.2 9.00005C16.2 10.777 15.4942 12.4812 14.2377 13.7377C12.9812 14.9942 11.277 15.7 9.50005 15.7C7.7231 15.7 6.01893 14.9942 4.76243 13.7377C3.50594 12.4812 2.80005 10.777 2.80005 9.00005C2.80005 7.2231 3.50594 5.51893 4.76243 4.26243C6.01893 3.00594 7.7231 2.30005 9.50005 2.30005C11.277 2.30005 12.9812 3.00594 14.2377 4.26243C15.4942 5.51893 16.2 7.2231 16.2 9.00005ZM10.49 13.59C10.7525 13.3274 10.9 12.9714 10.9 12.6C10.9 12.2287 10.7525 11.8726 10.49 11.6101C10.2274 11.3475 9.87135 11.2 9.50005 11.2C9.12874 11.2 8.77265 11.3475 8.5101 11.6101C8.24755 11.8726 8.10005 12.2287 8.10005 12.6C8.10005 12.9714 8.24755 13.3274 8.5101 13.59C8.77265 13.8525 9.12874 14 9.50005 14C9.87135 14 10.2274 13.8525 10.49 13.59ZM9.50005 4.00005C9.12874 4.00005 8.77265 4.14755 8.5101 4.4101C8.24755 4.67265 8.10005 5.02875 8.10005 5.40005V9.00005C8.10005 9.37135 8.24755 9.72745 8.5101 9.99C8.77265 10.2525 9.12874 10.4 9.50005 10.4C9.87135 10.4 10.2274 10.2525 10.49 9.99C10.7525 9.72745 10.9 9.37135 10.9 9.00005V5.40005C10.9 5.02875 10.7525 4.67265 10.49 4.4101C10.2274 4.14755 9.87135 4.00005 9.50005 4.00005Z"
            fill="#D3322F"
            stroke="#D3322F"
          />
        </svg>
      )}
    </>
  );
};
