import tw, { styled } from "twin.macro";

import { validCreditcard } from "../../utils";
import VisaCard from "../../assets/img/cards/visa.svg";
import MasterCard from "../../assets/img/cards/mastercard.svg";
import AmexCard from "../../assets/img/cards/amex.svg";
import DiscoverCard from "../../assets/img/cards/discover.svg";

type CardNumberInputProps = {
  placeholder?: string;
  onChange?: () => void;
  value?: string;
};

export const CardNumberInput = ({
  onChange,
  value,
  placeholder,
}: CardNumberInputProps) => {
  const validation = validCreditcard(value ?? "");

  return (
    <div>
      <label tw="text-csp_neutral-contrast font-medium text-base leading-[150%]">
        Card Number
      </label>
      <div tw="mt-2 relative">
        <StyledInput
          tw="w-full border border-csp_neutral-contrast1 rounded-lg"
          type="text"
          name="card_number"
          onChange={onChange}
          value={value}
          placeholder={placeholder}
        />
        <span tw="absolute">
          {validation.type === "AmEx" ? (
            <AmexCard />
          ) : validation.type === "Discover" ? (
            <DiscoverCard />
          ) : validation.type === "Visa" ? (
            <VisaCard />
          ) : validation.type === "MasterCard" ? (
            <MasterCard />
          ) : null}
        </span>
      </div>
    </div>
  );
};

const StyledInput = styled.input`
  &::placeholder {
    ${tw`text-gray-300 text-sm leading-[125%]`}
  }
`;
