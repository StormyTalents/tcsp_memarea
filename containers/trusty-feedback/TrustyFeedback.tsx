import Image from "next/image";

import { TrustyFeedback as TrustyFeedbackItem } from "../../types";

type TrustyFeedbackProps = {
  feedbacks: TrustyFeedbackItem[];
};

export const TrustyFeedback = ({ feedbacks }: TrustyFeedbackProps) => {
  return (
    <div tw="flex gap-x-10 py-11">
      {feedbacks.map((_feedbackItem) => (
        <div key={_feedbackItem.id} tw="flex flex-col items-center justify-end">
          <Image src={_feedbackItem.img} />
          <div tw="font-bold text-[20px] leading-[150%]">
            {_feedbackItem.title}
          </div>
          <div tw="font-medium text-xs leading-[150%] text-csp_neutral-contrast text-center">
            {_feedbackItem.description}
          </div>
        </div>
      ))}
    </div>
  );
};
