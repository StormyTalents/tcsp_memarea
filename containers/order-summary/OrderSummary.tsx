import Image from "next/image";
import tw, { styled } from "twin.macro";
import { useMemo } from "react";
import { CheckCircleIcon } from "@heroicons/react/solid";

import { Course, CourseBonus } from "../../types";
import courseDefaultThumb from "../../assets/img/course-overview.png";

type OrderSummaryProps = {
  course: Course;
  bonuses?: CourseBonus[];
};

export const OrderSummary = ({
  course,
  bonuses,
  ...props
}: OrderSummaryProps) => {
  if (bonuses.length < 1) {
    return <div>No Bonuses</div>;
  }

  const savedValue = useMemo(() => {
    return bonuses
      .map((item) => item.price)
      .reduce((prev, item) => prev + item, bonuses[0].price);
  }, [bonuses]);
  return (
    <OrderSummaryWrapper {...props}>
      <Heading>Order Summary</Heading>
      <CourseOverview>
        <Image src={course.thumb ?? courseDefaultThumb} alt={course.title} />
        <div>
          <h4 tw="font-bold text-sm leading-[150%] text-csp_neutral-DarkBG">
            {course.title}
          </h4>
          <p tw="font-medium text-xs leading-[150%]">{course.description}</p>
        </div>
        <span tw="font-bold text-base leading-[150%] text-right">
          ${course.price}
        </span>
      </CourseOverview>
      <BonusSection>
        <div tw="bg-[#EDFAFD] text-csp_neutral-DarkBG font-bold text-[10px] leading-[150%] rounded-lg py-2 px-4">
          {bonuses.length} Free Bonuses Added!
          <span tw="text-[#38859A]">(${savedValue} value)</span>
        </div>
        {bonuses.map((_bonusItem) => {
          return <BonusItem key={_bonusItem.id} bonus={_bonusItem} />;
        })}
      </BonusSection>
      <SummarySection>
        <dl tw="text-csp_neutral-DarkBG">
          <dt>Total Value</dt>
          <dd>${course.price + savedValue}</dd>
        </dl>
        <dl tw="text-fireopal-500">
          <dt>My Savings</dt>
          <dd>-${savedValue}</dd>
        </dl>
      </SummarySection>
      <div tw="flex items-center justify-between mt-2">
        <span tw="text-[#38859A] font-bold text-base leading-[150%]">
          Today's Price
        </span>
        <span tw="text-[#38859A] font-bold text-base leading-[150%]">
          ${course.price}
        </span>
      </div>
    </OrderSummaryWrapper>
  );
};

type BonusItemProps = {
  bonus: CourseBonus;
};

const BonusItem = ({ bonus }: BonusItemProps) => {
  return (
    <div tw="flex items-center justify-between py-2">
      <div tw="flex items-center">
        <CheckCircleIcon tw="w-4 h-4 text-gogreen" />
        <p tw="font-semibold text-xs leading-[15 0%] text-csp_neutral-contrast ml-2.5">
          <strong tw="text-gogreen">Bonus:</strong>
          {bonus.title}
        </p>
      </div>
      <span tw="font-bold text-sm leading-[150%] text-csp_neutral-contrast ml-10">
        ${bonus.price}
      </span>
    </div>
  );
};

const OrderSummaryWrapper = styled.div`
  ${tw`bg-[#FAFAFE] rounded-lg mb-4 p-6`}
  border: 3px solid rgba(255, 255, 255, 0.45);
  box-shadow: 0px 1px 3px rgba(129, 126, 251, 0.13),
    0px 9px 21px -16px rgba(98, 70, 234, 0.07);
`;

const Heading = styled.div`
  ${tw`font-semibold text-base leading-[150%] mb-4`}
`;
const CourseOverview = styled.div`
  ${tw`py-6 px-2.5 flex items-center justify-center gap-x-2.5 border-t border-b border-t-gray-300 border-b-gray-300 my-2`}
`;

const BonusSection = styled.div``;

const SummarySection = styled.div`
  ${tw`pt-2 pb-2 my-2 border-t border-b border-t-gray-300 border-b-gray-300`}

  dl {
    ${tw`flex items-center justify-between mb-2 text-sm font-semibold`}
  }
`;
