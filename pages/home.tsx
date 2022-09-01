import tw, { styled } from "twin.macro";
import { ArrowCircleRightIcon } from "@heroicons/react/solid";
import { ReactNode } from "react";

import HomeBannerImg from "../assets/img/banner_home.svg";
import ConnectImg from "../assets/img/connect_home.svg";
import IssueImg from "../assets/img/issue_home.svg";
import PrivateImg from "../assets/img/private_home.svg";
import TeamworkImg from "../assets/img/teamwork_home.svg";

import { Sidebar, Button } from "../components";

const Home = () => {
  return (
    <main tw="flex text-platinum-600 w-full overflow-hidden">
      <Sidebar expand={false} />
      <section tw="w-full">
        <BasicWrapper tw="pt-[93px]">
          <h1 tw="leading-[90px] text-[60px]">
            <span tw="text-csp_neutral-600 font-medium ">Learn. Motivate.</span>
            <TitleSpan>Inspire.</TitleSpan>
          </h1>
          <div tw="flex justify-center mt-[30px] mb-[45px] ">
            <p tw="w-[863px]">
              The 800 Club Community is a precious resource full of experts in
              the industry and people just like who are on their journies to
              financial freedom. Join the community today to see why it’s one of
              the most benificial parts of our program.
            </p>
          </div>
          <div tw="flex justify-center mb-[45px]">
            <Button
              variant="primary"
              title="Setup Your Free Account"
              color="brand"
              size="xl"
              icon={<ArrowCircleRightIcon tw="h-5 w-5" />}
            />
          </div>
          <div tw="flex justify-center">
            <ImgWrapper padding="-44px">
              <HomeBannerImg />
            </ImgWrapper>
          </div>
          <Wave1>
            <img src="/wave1_home.png" />
          </Wave1>
        </BasicWrapper>
        <ContactWrapper>
          <ContactItem>
            <div tw="mr-[130px] flex flex-col justify-center">
              <h6>FULLY INTEGRATED</h6>
              <h3>A Place To Connect, Discuss & Improve</h3>
              <div>
                <p tw="max-w-[608px]">
                  The 800 Club Community is a precious resource full of experts
                  in the industry and people just like who are on their journies
                  to financial freedom. Join the community today to see why it’s
                  one of the most benificial parts of our program. Join the
                  community today to see why it’s one of the most benificial
                  parts of our program.
                </p>
              </div>
            </div>
            <div>
              <ConnectImg />
            </div>
          </ContactItem>

          <ContactItem>
            <div>
              <IssueImg />
            </div>
            <div tw="ml-[64px] flex flex-col justify-center">
              <h6>FIX YOUR SPECIFIC ISSUES</h6>
              <h3>Dedicated Spaces, For Any Situation</h3>
              <div>
                <p tw="max-w-[608px]">
                  The 800 Club Community is a precious resource full of experts
                  in the industry and people just like who are on their journies
                  to financial freedom. Join the community today to see why it’s
                  one of the most benificial parts of our program. Join the
                  community today to see why it’s one of the most benificial
                  parts of our program.
                </p>
              </div>
            </div>
          </ContactItem>

          <ContactItem>
            <div tw="mr-[67px] flex flex-col justify-center">
              <h6>LIKE A PRIVATE COACH</h6>
              <h3>Something Confusing? Ask a Question</h3>
              <div>
                <p tw="max-w-[608px]">
                  The 800 Club Community is a precious resource full of experts
                  in the industry and people just like who are on their journies
                  to financial freedom. Join the community today to see why it’s
                  one of the most benificial parts of our program. Join the
                  community today to see why it’s one of the most benificial
                  parts of our program.
                </p>
              </div>
            </div>
            <div>
              <PrivateImg />
            </div>
          </ContactItem>
          <Wave2>
            <img src="/wave2_home.png" />
          </Wave2>
        </ContactWrapper>
        <BasicWrapper tw="pt-[64px]">
          <h1 tw="font-bold text-csp_neutral-600 text-[30px] mb-9">
            Teamwork Makes The Dream Work
          </h1>
          <div tw="flex justify-center">
            <p tw="w-[796px]">
              The 800 Club Community is a precious resource full of experts in
              the industry and people just like who are on their journies to
              financial freedom. Join the community today to see why it’s one of
              the most benificial parts of our program.
            </p>
          </div>
          <div tw="flex justify-center">
            <ImgWrapper padding="-130px">
              <TeamworkImg />
            </ImgWrapper>
          </div>
        </BasicWrapper>
        <BasicWrapper tw="pb-[80px]">
          <h1 tw="font-bold text-csp_neutral-600 text-[30px] mb-[108px]">
            Weekly Exclusive Content Hosted by the Pros
          </h1>
          <div tw="flex gap-[67px] justify-center mb-[50px]">
            <EventItem title="Live Q&As">
              <p>
                Learn about all the things to do with debt and other things in
                this live event
              </p>
            </EventItem>
            <EventItem title="Live Events">
              <p>
                Learn about all the things to do with debt and other things in
                this live event
              </p>
            </EventItem>
            <EventItem title="Weekly Support">
              <p>
                Learn about all the things to do with debt and other things in
                this live event
              </p>
            </EventItem>
          </div>
          <JoinContent>
            <h1 tw="text-[30px] font-bold mb-4">Ready To Join Our Family?</h1>
            <div tw="flex justify-center mb-[50px]">
              <p tw="max-w-[796px]">
                The 800 Club Community is a precious resource full of experts in
                the industry and people just like who are on their journies to
                financial freedom.
              </p>
            </div>
            <div tw="flex justify-center mb-[11px]">
              <Button
                variant="primary"
                title="I’m Ready, Show Me How To Join!"
                color="brand"
                size="xl"
                icon={<ArrowCircleRightIcon tw="h-5 w-5" />}
              />
            </div>
            <p tw="font-bold text-sm">
              Absolutely FREE with your 800 Club Membership!
            </p>
          </JoinContent>
        </BasicWrapper>
      </section>
    </main>
  );
};

const BasicWrapper = styled.div`
  ${tw`text-center bg-[#FCFCFC]`}
`;

const TitleSpan = styled.span`
  background: linear-gradient(90deg, #6246ea 0%, #30d1ce 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  ${tw`font-extrabold`}
`;

const Wave1 = styled.div`
  width: 100%;
  height: 200px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const Wave2 = styled.div`
  width: 100%;
  background: white;
  height: 200px;
  position: absolute;
  bottom: 0px;
  transform: translate(-72px, 50px);
  img {
    width: 100%;
    height: 100%;
  }
`;

const ImgWrapper = styled.div<{
  padding?: string;
}>`
  transform: ${({ padding }) => `translate(${padding}, 0px)`};
`;

const ContactWrapper = styled.div`
  ${tw`flex flex-col gap-[72px] pl-12 bg-gray-100 relative`}
`;

const ContactItem = styled.div`
  ${tw`flex justify-start 2xl:justify-center z-[1]`}
  h3 {
    ${tw`text-csp_neutral-600 font-bold text-[30px] mb-6`}
  }
  h6 {
    ${tw`text-sm font-bold text-brand-600`}
  }
`;

type EventItemProps = {
  title?: string;
  children?: ReactNode;
};

const EventItem = ({ title, children }: EventItemProps) => {
  return (
    <EventItemWrapper>
      <div tw="flex justify-center mb-7">
        <svg
          width="44"
          height="27"
          viewBox="0 0 44 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.940552 4.5C0.940552 3.30653 1.49524 2.16193 2.48258 1.31802C3.46993 0.474106 4.80906 0 6.20537 0H21.9998C23.3962 0 24.7353 0.474106 25.7226 1.31802C26.71 2.16193 27.2647 3.30653 27.2647 4.5V22.5C27.2647 23.6935 26.71 24.8381 25.7226 25.682C24.7353 26.5259 23.3962 27 21.9998 27H6.20537C4.80906 27 3.46993 26.5259 2.48258 25.682C1.49524 24.8381 0.940552 23.6935 0.940552 22.5V4.5ZM33.9852 6.9885C33.548 7.17523 33.1803 7.4623 32.9232 7.81757C32.6661 8.17283 32.5297 8.58226 32.5295 9V18C32.5297 18.4177 32.6661 18.8272 32.9232 19.1824C33.1803 19.5377 33.548 19.8248 33.9852 20.0115L39.25 22.2615C39.6513 22.4329 40.0971 22.5138 40.5452 22.4965C40.9932 22.4793 41.4287 22.3644 41.8103 22.1629C42.1919 21.9614 42.5069 21.6799 42.7255 21.3451C42.944 21.0104 43.0589 20.6334 43.0591 20.25V6.75C43.0589 6.36662 42.944 5.98965 42.7255 5.65486C42.5069 5.32007 42.1919 5.03857 41.8103 4.83706C41.4287 4.63556 40.9932 4.52073 40.5452 4.50348C40.0971 4.48623 39.6513 4.56713 39.25 4.7385L33.9852 6.9885Z"
            fill="#F05252"
          />
        </svg>
      </div>
      <h6 tw="text-platinum-700 text-lg font-semibold mb-[13px]">{title}</h6>
      {children}
    </EventItemWrapper>
  );
};

const EventItemWrapper = styled.div`
  ${tw`w-[296px] flex flex-col py-8`}
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px -1px rgba(0, 0, 0, 0.1);
`;

const JoinContent = styled.div`
  ${tw`relative text-csp_neutral-600 pb-[110px] pt-[110px]`}
  background-image: url('/img/join_banner.svg');
  background-position: center;
  background-repeat: no-repeat;
`;

export default Home;
