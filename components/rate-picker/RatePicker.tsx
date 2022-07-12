import { RadioButton } from "../radio-button";

type RatePickerProps = {
  min: number;
  max: number;
  minLabel?: string;
  maxLabel?: string;
};

export const RatePicker = ({
  min = 0,
  max = 10,
  minLabel = "No Chance",
  maxLabel = "Absolutely Will",
}: RatePickerProps) => {
  return (
    <div>
      <div tw="flex items-center justify-between">
        {!!minLabel && <span>{minLabel}</span>}
        {!!maxLabel && <span>{maxLabel}</span>}
      </div>
      <div tw="flex items-center justify-between">
        {Array(max - min)
          .fill(null)
          .map((_v, index) => (
            <div tw="flex-col items-center justify-center" key={index}>
              <RadioButton group="feedback" key={index} />
              <span tw="block text-center text-[#50497C] font-semibold mt-[10px]">
                {index + 1}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
};
