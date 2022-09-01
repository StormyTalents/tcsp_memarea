import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Disclosure, Transition } from "@headlessui/react";
import tw, { styled } from "twin.macro";
import {
  LockClosedIcon,
  ArrowCircleRightIcon,
  PlusCircleIcon,
} from "@heroicons/react/solid";
import { ArrowCircleRightIcon as OutlinedArrowCircleRightIcon } from "@heroicons/react/outline";

import { CustomersThink } from "../containers/customers-think";
import { CheckoutMembers } from "../containers/checkout-members";
import { CheckoutFaq } from "../containers/checkout-faq";
import { Checkbox, SocialButton, CustomInput, Button } from "../components";
import { CardNumberInput } from "../components/cardnumber-input";
import { SecurityCodeInput } from "../components/security-code-input";
import { OrderSummary } from "../containers/order-summary";
import { TrustyFeedback } from "../containers/trusty-feedback";

import LogoImg from "./../assets/img/Logo.png";
import CreditBadge from "./../assets/icons/credit-badge.svg";
import VisaCard from "../assets/img/cards/visa.svg";
import DiscoverCard from "../assets/img/cards/discover.svg";
import AmexCard from "../assets/img/cards/amex.svg";
import Mastercard from "../assets/img/cards/mastercard.svg";
import aPlusImage from "../assets/img/a-plus-rating.png";
import trustedSiteImage from "../assets/img/trusted-site.png";
import moneyBackImage from "../assets/img/money-back.png";

const CheckoutPage = () => {
  const router = useRouter();
  useEffect(() => {
    const surveyResult = window.localStorage.getItem("survey_result");
    if (!surveyResult) {
      router.push("/survey");
    }
  }, []);

  const [opened, setOpened] =
    useState<"account" | "account_detail" | "address_detail" | "payment">(
      "account"
    );

  const processOrder = useCallback(() => {
    window.localStorage.removeItem("survey_result");
  }, []);

  return (
    <CheckoutPageWrapper>
      <div tw="max-w-6xl mx-auto flex gap-x-8">
        <div tw="w-3/4">
          <div tw="flex items-center justify-between py-8">
            <Image src={LogoImg} alt="logo image" />
            <div tw="flex items-center">
              <LockClosedIcon color="#50497C" tw="w-5 h-5" />
              <span tw="ml-2 text-[#50497C] font-semibold text-xs leading-[150%] uppercase">
                Secure Checkout
              </span>
            </div>
          </div>
          <div tw="flex items-start">
            <Checkbox variant="squared" name="boost_credit" defaultChecked />
            <p tw="ml-2 font-medium text-sm leading-normal text-csp_neutral-DarkBG">
              Yes, I am ready to{" "}
              <strong>
                boost my credit score up to 136 points in as little as 30 days
              </strong>
              . I realize today&apos;s special price of just $97 &amp;27 may not
              last. If in the next 90 days I am not thrilled with my results, I
              can get a full and fast refund...
            </p>
          </div>
          <div tw="flex items-center justify-center py-6">
            <CreditBadge />
            <div tw="ml-2.5">
              <h2 tw="text-csp_neutral-DarkBG font-bold text-xl leading-[30px]">
                Satisfaction Guaranteed
              </h2>
              <p tw="italic font-semibold text-xs leading-[18px] text-csp_neutral-contrast ">
                Not for sale on Amazon or any other website
              </p>
            </div>
          </div>
          <div>
            <Disclosure>
              {({ open }) => (
                <StyledDisclosureWrapper css={[open ? tw`p-6` : tw`p-4`]}>
                  <Disclosure.Button
                    tw="w-full flex justify-between items-center"
                    onClick={() => setOpened("account")}
                  >
                    {({ open }) => (
                      <>
                        <div>
                          <div
                            tw="text-left font-bold text-lg leading-[23.4px]"
                            css={[
                              open
                                ? tw`text-csp_neutral-DarkBG`
                                : tw`text-csp_neutral-contrast1`,
                            ]}
                          >
                            Your Account
                          </div>
                          {open && (
                            <p tw="font-medium text-xs leading-[150%] text-csp_neutral-contrast1 text-left py-2">
                              Please login or create an account
                            </p>
                          )}
                        </div>

                        {!open && <div tw="text-brand text-xs">Edit</div>}
                      </>
                    )}
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel tw="flex pt-4 items-end justify-between">
                      <div tw="flex flex-col gap-y-4 flex-grow">
                        <SocialButton variant="outline" type="facebook" />
                        <SocialButton variant="outline" type="google" />
                      </div>
                      <div tw="flex flex-col justify-between items-center max-w-[15px] px-4">
                        <span tw="w-[1px] h-8 bg-brand-100" />
                        <span tw="italic text-csp_neutral-contrast text-sm leading-[150%] font-bold">
                          OR
                        </span>
                        <span tw="w-[1px] h-8 bg-brand-100" />
                      </div>
                      <div tw="flex flex-col gap-y-4 flex-grow">
                        <CustomInput label="Email Address" />
                        <Button
                          variant="primary"
                          color="brand"
                          title="Continue with email"
                          icon={<ArrowCircleRightIcon tw="w-4 h-4" />}
                        />
                      </div>
                    </Disclosure.Panel>
                  </Transition>
                </StyledDisclosureWrapper>
              )}
            </Disclosure>
            <Disclosure>
              {({ open, close }) => (
                <StyledDisclosureWrapper css={[open ? tw`p-6` : tw`p-4`]}>
                  <Disclosure.Button
                    tw="w-full flex justify-between items-center"
                    onClick={() => setOpened("account_detail")}
                  >
                    {({ open }) => (
                      <>
                        <div>
                          <div
                            tw="text-left font-bold text-lg leading-[23.4px]"
                            css={[
                              open
                                ? tw`text-csp_neutral-DarkBG`
                                : tw`text-csp_neutral-contrast1`,
                            ]}
                          >
                            Account Details
                          </div>
                          {open && (
                            <p tw="font-medium text-xs leading-[150%] text-csp_neutral-contrast1 text-left py-2">
                              These details will be used to create your account
                            </p>
                          )}
                        </div>

                        {!open && <div tw="text-brand text-xs">Edit</div>}
                      </>
                    )}
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel tw="flex flex-col">
                      <div tw="flex gap-x-4">
                        <CustomInput
                          tw="flex-grow"
                          label="First Name"
                          placeholder="Jhone"
                        />
                        <CustomInput
                          tw="flex-grow"
                          label="Last Name"
                          placeholder="Doe"
                        />
                      </div>
                      <div tw="mt-2">
                        <CustomInput
                          label="Phone number"
                          placeholder="(352) 343 5222"
                        />
                      </div>
                      <div tw="flex justify-between items-center mt-4">
                        <button
                          type="button"
                          tw="text-csp-brand text-sm font-medium leading-[150%]"
                        >
                          Back to account
                        </button>
                        <Button
                          color="brand"
                          title="Save &amp; Continue"
                          icon={<ArrowCircleRightIcon tw="w-5 h-5" />}
                          variant="primary"
                        />
                      </div>
                    </Disclosure.Panel>
                  </Transition>
                </StyledDisclosureWrapper>
              )}
            </Disclosure>
            <Disclosure>
              {({ open, close }) => (
                <StyledDisclosureWrapper css={[open ? tw`p-6` : tw`p-4`]}>
                  <Disclosure.Button
                    tw="w-full flex justify-between items-center"
                    onClick={() => setOpened("address_detail")}
                  >
                    {({ open }) => (
                      <>
                        <div>
                          <div
                            tw="text-left font-bold text-lg leading-[23.4px]"
                            css={[
                              open
                                ? tw`text-csp_neutral-DarkBG`
                                : tw`text-csp_neutral-contrast1`,
                            ]}
                          >
                            Address Details
                          </div>
                          {open && (
                            <p tw="font-medium text-xs leading-[150%] text-csp_neutral-contrast1 text-left py-2">
                              Add your address details below
                            </p>
                          )}
                        </div>

                        {!open && <div tw="text-brand text-xs">Edit</div>}
                      </>
                    )}
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel tw="flex flex-col">
                      <div tw="flex mt-4 flex-col">
                        <CustomInput
                          tw="flex-grow"
                          label="Address"
                          placeholder="123 Finance Street"
                        />
                        <button
                          type="button"
                          tw="text-xs leading-[150%] font-semibold text-csp-brand flex items-center"
                        >
                          <PlusCircleIcon tw="w-5 h-5" />
                          <span tw="p-2">Add Address Line 2 (Optional)</span>
                        </button>
                      </div>
                      <div tw="mt-4">
                        <CustomInput label="City" placeholder="San Francisco" />
                      </div>
                      <div tw="flex gap-x-4 mt-4">
                        <CustomInput
                          tw="flex-grow"
                          label="State"
                          placeholder="Califonia"
                        />
                        <CustomInput
                          tw="flex-grow"
                          label="Zip Code"
                          placeholder="52341"
                        />
                      </div>
                      <div tw="flex justify-between items-center mt-8">
                        <button
                          type="button"
                          tw="text-csp-brand text-sm font-medium leading-[150%]"
                        >
                          Back to address
                        </button>
                        <Button
                          color="brand"
                          title="Save &amp; Continue"
                          icon={<ArrowCircleRightIcon tw="w-5 h-5" />}
                          variant="primary"
                        />
                      </div>
                    </Disclosure.Panel>
                  </Transition>
                </StyledDisclosureWrapper>
              )}
            </Disclosure>
            <Disclosure>
              {({ open, close }) => (
                <StyledDisclosureWrapper css={[open ? tw`p-6` : tw`p-4`]}>
                  <Disclosure.Button
                    tw="w-full flex justify-between items-center"
                    onClick={() => setOpened("payment")}
                  >
                    {({ open }) => (
                      <>
                        <div>
                          <div
                            tw="text-left font-bold text-lg leading-[23.4px]"
                            css={[
                              open
                                ? tw`text-csp_neutral-DarkBG`
                                : tw`text-csp_neutral-contrast1`,
                            ]}
                          >
                            Payment
                          </div>
                          {open && (
                            <p tw="font-medium text-xs leading-[150%] text-csp_neutral-contrast1 text-left py-2">
                              All transactions are secure and encrypted
                            </p>
                          )}
                        </div>

                        {!open && <div tw="text-brand text-xs">Edit</div>}
                      </>
                    )}
                  </Disclosure.Button>
                  <Transition
                    show={open}
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel tw="flex flex-col">
                      <div tw="border border-brand  rounded-lg p-2 flex items-center justify-between mt-4">
                        <div tw="flex items-center">
                          <span tw="rounded-full border border-[#BCBCCD] p-2.5 flex"></span>
                          <span tw="text-black text-base ml-2.5">
                            Credit Card
                          </span>
                        </div>
                        <div tw="flex items-center">
                          <button tw="ml-[18px]">
                            <VisaCard />
                          </button>
                          <button tw="ml-[18px]">
                            <AmexCard />
                          </button>
                          <button tw="ml-[18px]">
                            <DiscoverCard />
                          </button>
                          <button tw="ml-[18px]">
                            <Mastercard />
                          </button>
                        </div>
                      </div>
                      <div tw="mt-8">
                        <CardNumberInput placeholder="Enter Credit Card Number" />
                      </div>
                      <div tw="flex gap-x-2 mt-4">
                        <CustomInput
                          label="Expiration Date"
                          placeholder="Expiration Date (MM/YY)"
                          tw="flex-grow"
                        />
                        <SecurityCodeInput tw="flex-grow" />
                      </div>
                      <div tw="mt-6">
                        <Checkbox
                          label="Save my payment method"
                          variant="squared"
                          name="save_payment"
                        />
                      </div>
                      <div tw="pt-7 font-semibold text-xs leading-[150%]">
                        By clicking the “Yes! Process My Order” button below,
                        you agree to our{" "}
                        <span tw="text-brand">
                          Terms of Use, Privacy Statement,
                        </span>{" "}
                        that you are over 18, and that your membership{" "}
                        <strong>
                          will automatically continue at the same monthly
                          membership fee charged to your payment method until
                          you cancel. You may cancel at any time to avoid future
                          charges
                        </strong>
                        . To cancel, go to your Account and click “Cancel
                        Membership.”
                      </div>

                      <div tw="flex justify-center mt-8">
                        <StyledOrderButton onClick={processOrder}>
                          <span tw="font-bold">YES!</span> &nbsp; Process My
                          Order{" "}
                          <span>
                            <OutlinedArrowCircleRightIcon tw="w-5 h-5" />
                          </span>
                        </StyledOrderButton>
                      </div>
                    </Disclosure.Panel>
                  </Transition>
                </StyledDisclosureWrapper>
              )}
            </Disclosure>
          </div>
        </div>
        <div tw="flex-grow">
          <div tw="flex justify-end items-center gap-x-2 py-4">
            <Image src={aPlusImage} alt="A Plus Rating" />
            <Image src={trustedSiteImage} alt="A Plus Rating" />
          </div>
          <OrderSummary
            course={{
              title: "The Credit Solution Program",
              description: "Includes the 800 Club Monthly Membership",
              price: 27,
              id: "course_27",
              status: "not_started",
            }}
            bonuses={[
              {
                id: "bonus_1",
                title: "100% Proven “Done-for-You” Letter Kit",
                price: 14,
              },
              {
                id: "bonus_2",
                title: "100% Secret Guaranteed Approval $5,000 Credit Lines",
                price: 14,
              },
              {
                id: "bonus_2",
                title: "How to Get Credit Lines up to $50,000+",
                price: 14,
              },
              {
                id: "bonus_3",
                title: "10 Ways to Make an Extra $1,000 per Month",
                price: 14,
              },
              {
                id: "bonus_4",
                title: "Building Business Credit",
                price: 14,
              },
            ]}
          />
        </div>
      </div>
      <div tw="max-w-6xl mx-auto">
        <TrustyFeedback
          feedbacks={[
            {
              id: "feedback_1",
              title: "100% Protected",
              description:
                "When you place your order it will be protected by 256-bit encrypted SSL - the same technology that Amazon uses to protect online transactions!",
              img: trustedSiteImage,
            },
            {
              id: "feedback_2",
              title: "100% Risk Free",
              description:
                "If in the next 90 days your  score hasn't improved - or if you aren't satisfied for any reason - just return your purchase for a full refund.",
              img: moneyBackImage,
            },
            {
              id: "feedback_3",
              title: "100% Protected",
              description:
                "You get 3 EXTRA layers of purchase protection from TrustedSite, the world's leading site security authority",
              img: trustedSiteImage,
            },
          ]}
        />
      </div>
      <CheckoutMembers numberOfMembers="71,321" />
      <CustomersThink />
      <CheckoutFaq />
      <Address>
        1990 North California Blvd, Suite 830, Walnut Creek, CA 94596 USA -
        1-800-940-0346
      </Address>
    </CheckoutPageWrapper>
  );
};

const StyledDisclosureWrapper = styled.div`
  ${tw`bg-[#FAFAFE] rounded-lg mb-4`}
  border: 3px solid rgba(255, 255, 255, 0.45);
  box-shadow: 0px 1px 3px rgba(129, 126, 251, 0.13),
    0px 9px 21px -16px rgba(98, 70, 234, 0.07);
`;

const CheckoutPageWrapper = styled.main`
  ${tw`min-h-screen`}
  background: radial-gradient(
    97% 105.49% at 100% -2.94%,
    #f4e9fc 0%,
    #e3e6f9 31.92%,
    #fafafe 100%
  );
`;

const StyledOrderButton = styled.button`
  ${tw`flex items-center text-white rounded-lg py-[14px] px-6 bg-brand-600 hover:bg-brand-800 focus:bg-brand-600 focus:outline-brand`}
`;

const Address = styled.div`
  ${tw`text-csp_neutral-contrast1 font-medium text-sm leading-[150%] py-[73px] text-center`}
`;

export default CheckoutPage;
