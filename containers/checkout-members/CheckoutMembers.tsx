import Image from "next/image";
import tw, { styled } from "twin.macro";

import mikePhoto from "../../assets/img/user_imgs/mike-robert.png";
import mikeSign from "../../assets/img/user_imgs/mike-robert-sign.png";
import waveTop from "../../assets/img/members-wave-top.png";
import waveBottom from "../../assets/img/members-wave-bottom.png";

type CheckoutMembersProps = {
  numberOfMembers: string;
};

export const CheckoutMembers = ({ numberOfMembers }: CheckoutMembersProps) => {
  return (
    <div tw="relative">
      <Image src={waveTop} layout="responsive" />
      <div tw="bg-brand-100 py-[117px] -mt-1">
        <div tw="border-[3px] border-brand-400 border-dashed rounded-2xl max-w-3xl p-6 mx-auto flex flex-col items-center">
          <h4 tw="text-csp_neutral-DarkBG font-bold leading-[150%]">
            Now It's Your Turn to Join the
          </h4>
          <div tw="flex gap-x-2.5 my-[22px] py-2">
            {Array(numberOfMembers.length)
              .fill(null)
              .map((_v, index) => (
                <span
                  css={[
                    numberOfMembers.charAt(index) !== ","
                      ? tw`block px-4 py-2 text-5xl font-bold text-white rounded-lg bg-brand-400`
                      : tw`text-5xl font-bold text-brand-400`,
                  ]}
                >
                  {numberOfMembers.charAt(index)}
                </span>
              ))}
          </div>
          <p tw="text-csp_neutral-DarkBG font-bold leading-[150%]">
            Members Who Upgraded Their Finances and Boosted Their Credit Score
          </p>
          <div tw="flex flex-col items-center">
            <div tw="my-[22px]">
              <Image src={mikePhoto} />
            </div>
            <p tw="text-center italic font-medium text-base leading-[150%] text-csp_neutral-contrast my-[22px]">
              "I'm so happy you've decided to join the thousands of other women
              and men who've decided to boost their credit score and finally
              take control of their finances. The Credit Solution Program is the
              most effective program I've ever created and I can't wait to hear
              about your results."
            </p>
          </div>
          <div tw="flex w-full items-center justify-end">
            <Image src={mikeSign} />
          </div>
        </div>
      </div>
      <Image src={waveBottom} layout="responsive" />
    </div>
  );
};
