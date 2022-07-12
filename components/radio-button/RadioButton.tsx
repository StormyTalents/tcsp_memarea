import { ChangeEvent } from "react";
import tw, { styled } from "twin.macro";

type RadioButtonProps = {
  idx?: string;
  label?: string;
  variant?: "dark" | "light";
  group?: string;
  checked?: boolean;
  size?: "sm" | "md";
  onClick?: () => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  renderLabel?: () => React.ReactNode;
  defaultChecked?: boolean;
  value?: string;
};

export const RadioButton = ({
  idx,
  label,
  variant,
  group,
  checked,
  defaultChecked,
  onClick,
  onChange,
  size,
  renderLabel,
  value,
}: RadioButtonProps) => {
  return (
    <RadioLabel darkmode={variant} onClick={onClick} size={size}>
      <input
        type="radio"
        id={idx}
        name={group}
        checked={checked}
        onChange={onChange}
        defaultChecked={defaultChecked}
        value={value}
      />
      <span className="checkmark" />
      {renderLabel
        ? renderLabel()
        : label !== "" && <span tw="ml-1.5">{label}</span>}
    </RadioLabel>
  );
};

const RadioLabel = styled.label<{
  darkmode?: "dark" | "light";
  size?: "sm" | "md";
}>`
  ${tw`relative flex items-center text-xs text-gray-500 cursor-pointer`}
  input {
    ${tw`hidden w-0 h-0`}
  }

  span.checkmark {
    border-color: rgb(188, 188, 205);
    background: rgb(250, 250, 254);
    ${tw`flex border rounded-full`}
    ${({ size }) => (size === "md" ? tw`w-6 h-6` : tw`w-4 h-4`)}
  }

  input:checked ~ span.checkmark {
    background: rgb(250, 250, 254);
    ${tw`border-brand-600`};
    ${({ size }) => (size === "md" ? tw`border-[6px]` : tw`border-4`)}
  }

  &:focus {
    span.checkmark {
      ${({ darkmode }) =>
        darkmode === "dark" ? tw`outline-brand-800` : tw`outline-brand-300`}
    }
  }
`;
