import { ChangeEvent } from "react";
import tw, { styled } from "twin.macro";
type CheckboxProps = {
  variant: "default" | "squared";
  checked?: boolean;
  darkmode?: boolean;
  label?: string;
  name: string;
  size?: "sm" | "md";
  defaultChecked?: boolean;
  renderLabel?: () => React.ReactNode;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
};

export const Checkbox = ({
  checked,
  variant = "default",
  darkmode,
  label,
  name,
  size,
  defaultChecked,
  renderLabel,
  onChange,
  value,
}: CheckboxProps) => {
  return (
    <CheckBoxWrapper variant={variant} darkmode={darkmode} size={size}>
      <input
        type="checkbox"
        name={name}
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={onChange}
        value={value}
      />
      <span className="checkmark">
        <div>
          <svg
            width="10"
            height="8"
            viewBox="0 0 10 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.5498 7.08301C3.72559 7.25879 4.02441 7.25879 4.2002 7.08301L9.36816 1.91504C9.54395 1.73926 9.54395 1.44043 9.36816 1.26465L8.73535 0.631836C8.55957 0.456055 8.27832 0.456055 8.10254 0.631836L3.88379 4.85059L1.89746 2.88184C1.72168 2.70605 1.44043 2.70605 1.26465 2.88184L0.631836 3.51465C0.456055 3.69043 0.456055 3.98926 0.631836 4.16504L3.5498 7.08301Z"
              fill="white"
            />
          </svg>
        </div>
      </span>
      {renderLabel
        ? renderLabel()
        : label !== "" && <span className="label">{label}</span>}
    </CheckBoxWrapper>
  );
};

const CheckBoxWrapper = styled.label<{
  darkmode: boolean;
  variant: "default" | "squared";
  size?: "sm" | "md";
}>`
  ${tw`flex items-center cursor-pointer min-w-[16px] min-h-[16px]`}
  input {
    ${tw`hidden w-0 h-0`}

    &:checked + .checkmark {
      ${tw`border-0 bg-brand-600`}
      div {
        visibility: visible;
      }
    }
  }

  .checkmark {
    ${tw`flex items-center justify-center flex-shrink-0 text-sm text-white border border-gray-300 bg-gray-50`}
    ${({ variant }) => (variant === "default" ? tw`rounded-full` : tw`rounded`)}
    ${({ darkmode }) => darkmode && tw`bg-gray-700 border-gray-800`}
    ${({ size }) => (size === "md" ? tw`w-5 h-5` : tw`w-4 h-4`)}

    div {
      visibility: hidden;
    }
  }

  .label {
    ${tw`ml-2 text-sm text-gray-500`}
  }
`;
