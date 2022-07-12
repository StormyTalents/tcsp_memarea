import { useState } from "react";
import tw, { styled } from "twin.macro";

import { RadioButton } from "../radio-button";

const items = [
  {
    value: "can_not_afford",
    label: "I can't afford the subscription payments right now",
  },
  {
    value: "achieved",
    label: "I've achieved what I joined the program to do",
  },
  {
    value: "no_enough_time",
    label: "I don't have enough time to use my membership",
  },
  {
    value: "not_like_paying_fee",
    label: "I don't like paying a monthly fee for anything",
  },
  {
    value: "not_expected",
    label: "It's not what I expected",
  },
  {
    value: "other",
    label: "Other",
  },
];

export const FeedbackForm = () => {
  const [feedback, setFeedback] = useState("");
  const onClickItem = (item: string) => {
    setFeedback(item);
  };

  return (
    <FeedbackFormWrapper>
      {items.map((_v, index) => (
        <div tw="flex items-center my-2" key={index}>
          <RadioButton
            idx={`${index}__radio`}
            group="feedback"
            onClick={() => onClickItem(_v.value)}
          />
          <label
            tw="ml-1.5 text-gray-800 font-medium cursor-pointer"
            onClick={() => onClickItem(_v.value)}
            htmlFor={`${index}__radio`}
          >
            {_v.label}
          </label>
        </div>
      ))}
      {feedback === "other" && (
        <div tw="mt-6">
          <textarea
            tw="border border-gray-200 rounded-lg px-[13px] py-5 bg-gray-50 w-full min-h-[300px] placeholder:text-gray-500 font-medium"
            placeholder="Please explain why you are closing your account"
          />
        </div>
      )}
    </FeedbackFormWrapper>
  );
};

const FeedbackFormWrapper = styled.div`
  ${tw`relative`}
`;
