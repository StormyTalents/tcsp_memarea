import tw, { styled } from "twin.macro";

import { Button } from "../button";
import { UserAvatar } from "../user-avatar";

import VideoSvg from "../../assets/icons/upcoming-video.svg";
import SmallVideoSvg from "../../assets/icons/upcoming-small-video.svg";
import SmallCalendarSvg from "../../assets/icons/upcoming-small-calendar.svg";
import SmallClockSvg from "../../assets/icons/upcoming-small-clock.svg";

type UpcomingCardProps = {
  name?: string;
  title?: string;
  content?: string;
  day?: string;
  time?: string;
  eventType?: string;
  img?: string;
  color?: string;
};

export const UpcomingCard = ({
  name,
  title,
  content,
  day,
  time,
  eventType,
  img = "",
  color,
  ...props
}: UpcomingCardProps) => {
  return (
    <UpcomingCardWrapper {...props}>
      {/* <div tw="mb-[22px]">
        <VideoSvg />
      </div> */}
      <StyledTitleWrapper color={color}>
        <h1>{title}</h1>
        <p>{content}</p>
      </StyledTitleWrapper>
      <div tw="flex gap-6 mt-[70px] mb-4">
        <DetailWrapper color={color}>
          <SmallVideoSvg tw="mt-[6px]" />
          <span>{eventType}</span>
        </DetailWrapper>
        <DetailWrapper color={color}>
          <SmallCalendarSvg tw="mt-1" />
          <span>{day}</span>
        </DetailWrapper>
        <DetailWrapper color={color}>
          <SmallClockSvg tw="mt-1" />
          <span>{time}</span>
        </DetailWrapper>
      </div>
      <hr tw="mb-[28px]" />
      <div tw="flex justify-between">
        <div tw="flex gap-4">
          <UserAvatar variant="primary" name={name} size="md" img={img} />
          <UserNameWrapper color={color}>
            <p>HOSTED BY</p>
            <h1>{name}</h1>
          </UserNameWrapper>
        </div>
        <div>
          <Button
            color="brand"
            variant="primary"
            title="RSVP"
            icon={<SmallClockLightSvg />}
            iconPos="left"
            tw="min-w-[112px] border border-[#535353]"
          />
        </div>
      </div>
    </UpcomingCardWrapper>
  );
};

const DetailWrapper = styled.div<{
  color: string;
}>`
  ${tw`flex gap-[10px] uppercase text-platinum-400 text-xs font-bold`}
  color: ${({ color }) => color};
  span {
    ${tw`mt-[5px]`}
  }
  path {
    fill: ${({ color }) => color};
  }
`;

const UpcomingCardWrapper = styled.div`
  ${tw`w-[512px] bg-[#fafafe] px-4 pt-[52px] pb-4`}

  border-radius: 8px;
  border: 3px solid rgba(255, 255, 255, 0.45);
  box-shadow: 0px 1px 3px rgba(129, 126, 251, 0.13),
    0px 9px 21px -16px rgba(98, 70, 234, 0.07);
`;

const StyledTitleWrapper = styled.div<{ color: string }>`
  h1 {
    ${tw`font-semibold text-[18px] text-[#404040] mb-3`}
    color: ${({ color }) => color};
  }
  p {
    ${tw`font-normal text-[#535353]`}
    color: ${({ color }) => color};
  }
`;

const UserNameWrapper = styled.div<{ color: string }>`
  p {
    ${tw`font-bold text-xs text-[#BCBCCD]`}
  }
  h1 {
    ${tw`font-semibold text-[#404040] leading-[27px]`}
    color: ${({ color }) => color};
  }
`;

const SmallClockLightSvg = styled(SmallClockSvg)`
  path {
    fill: white;
  }
`;
