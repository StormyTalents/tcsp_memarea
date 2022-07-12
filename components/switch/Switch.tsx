import tw, { styled } from "twin.macro";

type SwitchProps = {
  checked: boolean;
  name: string;
  label?: string;
  darkmode?: boolean;
};

export const Switch = ({ checked, name, label, darkmode }: SwitchProps) => {
  return (
    <SwitchWrapper htmlFor={name} darkmode={darkmode}>
      <input type="checkbox" id={name} name={name} checked={checked} />
      <span className="toggler" />
      {!!label && <span className="label">{label}</span>}
    </SwitchWrapper>
  );
};

const SwitchWrapper = styled.label<{
  darkmode?: boolean;
}>`
  ${tw`flex items-center cursor-pointer`}
  input {
    ${tw`hidden w-0 h-0`}

    &:checked {
      & + span.toggler {
        ${tw`bg-brand`}
        &::before {
          ${tw`-translate-x-full left-[calc(100% - 2px)] border-brand bg-white`}
        }
      }
    }

    &:focus {
      & + span.toggler {
        ${({ darkmode }) =>
          darkmode ? tw`outline-brand-800` : tw`outline-brand`}
      }
    }
  }

  span.toggler {
    ${tw`w-9 h-5 rounded-[40px] relative transition-all duration-300 ease-in-out`}

    ${({ darkmode }) => (darkmode ? tw`bg-gray-600` : tw`bg-gray-200`)}

    &::before {
      content: "";
      ${tw`block absolute top-1/2 -translate-y-1/2 left-0.5 w-4 h-4 rounded-full  transition-all duration-300 ease-in-out`}
      ${({ darkmode }) =>
        darkmode
          ? tw`bg-gray-400 border-gray-400`
          : tw`bg-white border-gray-300`}
    }
  }

  span.label {
    ${tw`flex items-center text-gray-500 ml-1.5`}
  }
`;
