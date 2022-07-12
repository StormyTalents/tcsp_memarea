import { Disclosure } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/solid";
import tw, { styled } from "twin.macro";

export const CheckoutFaq = () => {
  const faqs = [
    {
      id: "faq_1",
      title: "What do I get when I join the Credit Solution Program?",
      description:
        "<p>The instant you become a Credit Solution Member, you can start training right away. Inside the members area you'll find downloadable resources & video and written training that you can follow. Instructions to access your online members area will arrive within a few minutes by email, followed by exclusive members only emails to help you get started with the program. </p> <p>You also have the power of other members like you on your side through our members only Facebook group. You're now part of a growing community that can help improve your credit and transform you into a new - stronger version of you - always prepared to be the best you can be with your finances. You'll gain the confidence required to make the right decisions so you can always be successful as your family's provider.</p>",
    },
    {
      id: "faq_2",
      title: "What do I get when I join the Credit Solution Program?",
      description:
        "<p>The instant you become a Credit Solution Member, you can start training right away. Inside the members area you'll find downloadable resources & video and written training that you can follow. Instructions to access your online members area will arrive within a few minutes by email, followed by exclusive members only emails to help you get started with the program. </p> <p>You also have the power of other members like you on your side through our members only Facebook group. You're now part of a growing community that can help improve your credit and transform you into a new - stronger version of you - always prepared to be the best you can be with your finances. You'll gain the confidence required to make the right decisions so you can always be successful as your family's provider.</p>",
    },
    {
      id: "faq_3",
      title: "What do I get when I join the Credit Solution Program?",
      description:
        "<p>The instant you become a Credit Solution Member, you can start training right away. Inside the members area you'll find downloadable resources & video and written training that you can follow. Instructions to access your online members area will arrive within a few minutes by email, followed by exclusive members only emails to help you get started with the program. </p> <p>You also have the power of other members like you on your side through our members only Facebook group. You're now part of a growing community that can help improve your credit and transform you into a new - stronger version of you - always prepared to be the best you can be with your finances. You'll gain the confidence required to make the right decisions so you can always be successful as your family's provider.</p>",
    },
  ];

  return (
    <div tw="max-w-3xl mx-auto mb-[141px]">
      <h4 tw="text-3xl leading-[150%] text-csp_neutral-DarkBG  py-8 font-bold text-center">
        Frequently Asked Questions
      </h4>
      <div>
        {faqs.map((_faqItem) => (
          <Disclosure key={_faqItem.id}>
            {({ open }) => (
              <StyledDisclosureWrapper tw="py-5 px-4">
                <Disclosure.Button tw="w-full flex justify-between items-center">
                  {({ open }) => (
                    <>
                      <div tw="text-left font-bold text-lg leading-[23.4px] text-csp_neutral-DarkBG">
                        {_faqItem.title}
                      </div>

                      <button
                        type="button"
                        tw="text-brand text-xs bg-brand-100 transition-all duration-300 ease-in-out rounded-full"
                        css={[open && tw`rotate-90`]}
                      >
                        <ChevronRightIcon tw="w-5 h-5" />
                      </button>
                    </>
                  )}
                </Disclosure.Button>
                <Disclosure.Panel tw="flex pt-4 items-end justify-between">
                  <FaqDetail
                    dangerouslySetInnerHTML={{ __html: _faqItem.description }}
                  />
                </Disclosure.Panel>
              </StyledDisclosureWrapper>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
};

const StyledDisclosureWrapper = styled.div`
  ${tw`bg-[#FAFAFE] rounded-lg mb-4`}
  border: 3px solid rgba(255, 255, 255, 0.45);
  box-shadow: 0px 1px 3px rgba(129, 126, 251, 0.13),
    0px 9px 21px -16px rgba(98, 70, 234, 0.07);
`;

const FaqDetail = styled.div`
  p {
    ${tw`text-csp_neutral-contrast text-sm leading-[150%] mb-2`}
  }
`;
