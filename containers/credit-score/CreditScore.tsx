import { RangeSlider } from "components/range-slider";
import { Rating } from "components/rating";
import { useMemo, useState } from "react";
import tw from "twin.macro";
import { Button } from "../../components/button";
import ArrowIcon from "./../../assets/icons/arrow_right.svg";
import ExternalLink from "./../../assets/icons/external-link.svg";
import IdentityMark from "./../../assets/icons/IdentityIQ-Registered.svg";
import SecurityLogo from "./../../assets/icons/logo-security.svg";

export const CreditScore = () => {
  const [haveCopy, setHaveCopy] = useState<"yes" | "no">();
  const onClickContinue = () => {};

  const companyInfos = useMemo(() => {
    return [
      {
        name: "security.org",
        score: 4.5,
        logo: <SecurityLogo />,
      },
      {
        name: "security.org",
        score: 5,
        logo: <SecurityLogo />,
      },
      {
        name: "security.org",
        score: 4,
        logo: <SecurityLogo />,
      },
    ];
  }, []);

  return (
    <>
      {haveCopy === undefined && (
        <div tw="max-w-[600px]">
          <h1 tw="text-center">
            Do you have a current copy of your credit report?
          </h1>
          <p tw="mt-8">
            Your credit rating is needed so we can customize your experience and
            give you the best value we can. Different rating cohorts require
            different guidance and suggestions to improve their scores.
          </p>
          <div tw="flex flex-col items-center mt-12 gap-5">
            <Button
              color="brand"
              title="Yes"
              variant="primary"
              tw="w-[320px]"
              onClick={() => setHaveCopy("yes")}
            />
            <Button
              color="brand"
              title="No"
              variant="primary"
              tw="w-[320px]"
              onClick={() => setHaveCopy("no")}
            />
          </div>
        </div>
      )}
      {haveCopy === "yes" && (
        <div>
          <h1 tw="text-center">What is your credit score?</h1>
          <p tw="mt-8">
            If you do not know your credit score, you will not be able to make
            the most of this training.
          </p>
          <div tw="h-48">
            <RangeSlider from={300} to={900} variant="primary" />
          </div>
          <div tw="flex justify-center items-center flex-col gap-4">
            <Button
              color="brand"
              title="Continue"
              tw="w-[244px]"
              variant="primary"
              icon={<ArrowIcon />}
              onClick={onClickContinue}
            />
            <Button
              color="brand"
              variant="text"
              tw="w-[244px]"
              title="I'll get my score later"
            />
          </div>
        </div>
      )}
      {haveCopy === "no" && (
        <div>
          <h1 tw="text-center">Your Credit Score is Vital to your Success</h1>
          <p tw="mt-8">
            You can get your score from any service, but we recommend the one
            below. On top ofyour three Credit Scores, they will also secure your
            identity.
          </p>
          <div tw="h-48 mt-12">
            <div tw="flex justify-center">
              <IdentityMark />
            </div>
            <div tw="flex items-center justify-center gap-x-5 mt-5">
              {companyInfos.map((info, index) => (
                <div tw="flex flex-col items-center justify-center" key={index}>
                  <Rating score={info.score} />
                  <div>{info.logo}</div>
                </div>
              ))}
            </div>
          </div>
          <div tw="flex justify-center items-center flex-col">
            <Button
              color="brand"
              title="Get Your Credit Score Now"
              variant="secondary"
              icon={<ExternalLink />}
              onClick={onClickContinue}
            />
            <Button color="brand" variant="text" title="Opens in new tab" />
            <Button
              variant="text"
              color="brand"
              tw="w-[244px] mt-4"
              title="Skip This Step For Now"
            />
          </div>
        </div>
      )}
    </>
  );
};
