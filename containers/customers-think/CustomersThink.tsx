import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import tw, { styled } from "twin.macro";

import "swiper/css";

import { CustomerThought } from "../../types";
import UserImage from "../../assets/img/user_imgs/karen.png";
import QuoteMark from "../../assets/icons/quote-mark.svg";

export const CustomersThink = () => {
  const thoughts: CustomerThought[] = [
    {
      id: "thought_1",
      name: "April Oliver",
      date: "October 29, 2020",
      user_avatar: UserImage,
      thought:
        "Thank you Credit Solution!! I was able to raise my Experian score by seventy four points.  Heading to the 700 club!",
    },
    {
      id: "thought_2",
      name: "Antonio Aceves II",
      date: "December 2, 2020",
      user_avatar: UserImage,
      thought:
        "I'm almost there trying to reach the 800's.  This club has shown me alot.  I believe this program is one of the best out there if not THE BEST!! THANK YOU CREDIT SOLUTION.  If followed correctly it will do wonders for your credit!  Just got approved for a 15k Discover card!!!",
    },
    {
      id: "thought_3",
      name: "Leticia Nicole",
      date: "October 8, 2020",
      user_avatar: UserImage,
      thought:
        "$1,400 collections of 4+ years REMOVED!!!Thank you validation letter, and thank you credit solution program!!",
    },
  ];
  return (
    <SlideWrapper>
      <Swiper
        slidesPerView={3}
        spaceBetween={100}
        slidesPerGroup={1}
        centeredSlides={true}
        loop={true}
        loopFillGroupWithBlank={true}
        tw="h-[300px]"
      >
        {thoughts.map((_thoughtItem) => (
          <SwiperSlide key={_thoughtItem.id}>
            {({ isActive }) => (
              <div tw="flex items-center h-full w-[528px]">
                <SlideItem isActive={isActive}>
                  <div tw="flex items-center justify-between">
                    <div tw="flex items-center gap-x-2.5 py-2.5">
                      <div tw="relative w-10 h-10 rounded-full flex items-center   overflow-hidden ">
                        <Image src={_thoughtItem.user_avatar} layout="fill" />
                      </div>
                      <span tw="text-gray-800 text-sm font-bold leading-[150%]">
                        {_thoughtItem.name}
                      </span>
                      <span tw="text-gray-400 text-xs leading-[150%]">
                        {_thoughtItem.date}
                      </span>
                    </div>
                    <QuoteMark />
                  </div>
                  <div tw="text-csp_neutral-contrast text-sm leading-[150%]">
                    {_thoughtItem.thought}
                  </div>
                </SlideItem>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </SlideWrapper>
  );
};

const SlideItem = styled.div<{
  isActive: boolean;
}>`
  ${tw`flex flex-col px-10 py-4 rounded-2xl w-[528px] cursor-pointer`}
  box-shadow: 0px 6px 10px -15px black;
`;

const SlideWrapper = styled.div`
  ${tw`flex items-center`}
`;
