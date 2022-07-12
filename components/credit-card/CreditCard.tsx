import Image from "next/image";
import tw, { styled } from "twin.macro";

import CardImage from "./../../assets/img/credit-card.png";
import { ProgressBar } from "../progress-bar";
import { Badge } from "../../components/badge";
import { Button } from "./../../components/button";

import {
  AcademicCapIcon,
  ArrowCircleRightIcon,
  LockClosedIcon,
} from "@heroicons/react/solid";

type CreditCardProps = {
  title: string;
  percent?: number;
  author?: string;
  enrolled?: number;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  status?: "enrolled" | "locked";
  price?: number;
  color?: string;
};

export const CreditCard = ({
  percent = 0,
  author,
  enrolled = 0,
  variant = "primary",
  title,
  onClick,
  status,
  price,
  color,
}: CreditCardProps) => {
  return (
    <CreditCardWrapper variant={variant} onClick={onClick}>
      <div tw="min-h-[160px] relative object-cover">
        <StyledImage src={CardImage} layout="fill" />
        <div
          css={[
            tw`absolute z-50 w-full h-full`,
            status === "locked" && tw`bg-white bg-opacity-75`,
          ]}
        >
          {enrolled > 0 && (
            <Badge
              variant="square"
              color={status === "enrolled" ? "gogreen" : "sunglow"}
              size="sm"
              tw="absolute top-2 right-2"
              title={
                status === "enrolled"
                  ? "Enrolled"
                  : status === "locked"
                  ? "Locked"
                  : ""
              }
              icon={
                status === "enrolled" ? (
                  <AcademicCapIcon tw="w-5 h-5" />
                ) : (
                  <LockClosedIcon tw="w-5 h-5" />
                )
              }
            />
          )}
        </div>
      </div>

      <div tw="px-4 pt-4">
        <div>
          <StyledTitle color={color}>{title}</StyledTitle>
          {author && (
            <p tw="uppercase font-bold text-[#BCBCCD] pt-2">{author}</p>
          )}
        </div>
        <div tw="pt-9 pb-[15px] flex items-center w-full">
          {status === "enrolled" && (
            <>
              {percent > 0 ? (
                <div tw="w-full">
                  <ProgressBar percent={percent} variant="primary" />
                  {variant === "primary" && (
                    <div tw="flex justify-between mt-2">
                      <p tw="text-[#BCBCCD]">
                        Progress:&nbsp;<ImportantSpan>{percent}%</ImportantSpan>
                      </p>
                      {enrolled > 0 && (
                        <p>
                          Users Enrolled:&nbsp;
                          <ImportantSpan>
                            {enrolled?.toLocaleString()}
                          </ImportantSpan>
                        </p>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <div tw="flex w-full justify-end">
                  <Button
                    color="brand"
                    title="Start Course"
                    icon={<ArrowCircleRightIcon tw="h-4 w-4 text-white" />}
                    variant="primary"
                  />
                </div>
              )}
            </>
          )}

          {status === "locked" && (
            <div tw="flex items-center justify-between w-full">
              {price && (
                <span tw="font-bold text-2xl text-black">
                  ${price.toFixed(2)}
                </span>
              )}
              <StyledButton>
                <span tw="mr-3">Learn More</span>
                <ArrowCircleRightIcon tw="w-5 h-5 text-black" />
              </StyledButton>
            </div>
          )}
        </div>
      </div>
    </CreditCardWrapper>
  );
};

const CreditCardWrapper = styled.div<{
  variant: string;
}>`
  ${tw`bg-[#FAFAFE] text-[#A3A3A3] text-xs flex-grow rounded-lg max-w-[336px]`}

  box-shadow: 0px 0px 0px 4px rgba(255, 255, 255, 0.5),
    0px 1px 6px rgba(129, 126, 251, 0.25),
    0px 12px 27px -14px rgba(98, 70, 234, 0.27);
`;

const ImportantSpan = tw.span`
text-[#50497C] font-bold
`;

const StyledImage = styled(Image)`
  border-radius: 8px 8px 0 0;
  height: 160px;
  width: 300px;
`;

const StyledButton = styled.button`
  ${tw`rounded-lg py-3 px-5 font-medium text-sm leading-[150%] flex items-center text-black bg-sunglow-200`}
`;

const StyledTitle = styled.h1<{ color?: string }>`
  ${tw`font-semibold text-[#3F3F46] text-xl`}
  color: ${({ color }) => color};
`;
