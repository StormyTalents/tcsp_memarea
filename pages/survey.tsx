import { useState, useCallback, ChangeEvent } from "react";
import tw, { styled } from "twin.macro";
import { useRouter } from "next/router";

import { Button, Checkbox, RadioButton } from "../components";

const SurveyPage = () => {
  const router = useRouter();

  const [gender, setGender] = useState<string>("Male");
  const onChangeGender = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    e.target.checked && setGender(e.target.value);
  }, []);

  const [age, setAge] = useState("20");
  const onChangeAge = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    e.target.checked && setAge(e.target.value);
  }, []);

  const [reasons, setReasons] = useState([]);
  const onChangeReason = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setReasons((prev) => [...prev, e.target.value]);
    } else {
      setReasons((prev) => [...prev.filter((item) => item !== e.target.value)]);
    }
  }, []);

  const onClickNext = useCallback(() => {
    window.localStorage.setItem(
      "survey_result",
      JSON.stringify({
        gender,
        age,
        reasons,
      })
    );
    router.push("/checkout");
  }, [gender, age, reasons]);

  return (
    <SurveyPageMainWrapper>
      <SurveyWrapper>
        <div>
          <h3>1. Are you a...</h3>
          <ItemsWrapper>
            <ItemWrapper>
              <RadioButton
                size="md"
                group="gender"
                value="Male"
                defaultChecked
                renderLabel={() => <ItemLabel>Male</ItemLabel>}
                onChange={onChangeGender}
              />
            </ItemWrapper>
            <ItemWrapper>
              <RadioButton
                size="md"
                group="gender"
                value="Female"
                renderLabel={() => <ItemLabel>Female</ItemLabel>}
                onChange={onChangeGender}
              />
            </ItemWrapper>
          </ItemsWrapper>
        </div>
        <div>
          <h3>2. What&apos;s your age range?</h3>
          <ItemsWrapper>
            <ItemWrapper>
              <RadioButton
                size="md"
                group="age"
                value="20"
                renderLabel={() => <ItemLabel>20s</ItemLabel>}
                defaultChecked
                onChange={onChangeAge}
              />
            </ItemWrapper>
            <ItemWrapper>
              <RadioButton
                size="md"
                group="age"
                value="30"
                renderLabel={() => <ItemLabel>30s</ItemLabel>}
                onChange={onChangeAge}
              />
            </ItemWrapper>
            <ItemWrapper>
              <RadioButton
                size="md"
                group="age"
                label="40s"
                value="40"
                renderLabel={() => <ItemLabel>40s</ItemLabel>}
                onChange={onChangeAge}
              />
            </ItemWrapper>
            <ItemWrapper>
              <RadioButton
                size="md"
                group="age"
                value="50"
                renderLabel={() => <ItemLabel>50s</ItemLabel>}
                onChange={onChangeAge}
              />
            </ItemWrapper>
            <ItemWrapper>
              <RadioButton
                size="md"
                group="age"
                value="60"
                renderLabel={() => <ItemLabel>60s</ItemLabel>}
                onChange={onChangeAge}
              />
            </ItemWrapper>
          </ItemsWrapper>
        </div>
        <div>
          <h3>
            3. Why do you want the <i>Credit Solution?</i>
          </h3>
          <ItemsWrapper>
            <ItemWrapper>
              <Checkbox
                name="reasons"
                variant="squared"
                size="md"
                value="reason_1"
                renderLabel={() => (
                  <ItemLabel>
                    I want to qualify for the best financing on a home, car, or
                    business loan
                  </ItemLabel>
                )}
                onChange={onChangeReason}
              />
            </ItemWrapper>
            <ItemWrapper>
              <Checkbox
                name="reasons"
                variant="squared"
                size="md"
                value="reason_2"
                renderLabel={() => (
                  <ItemLabel>
                    I want to qualify for the best financing on a home, car, or
                    business loan
                  </ItemLabel>
                )}
                onChange={onChangeReason}
              />
            </ItemWrapper>
            <ItemWrapper>
              <Checkbox
                name="reasons"
                value="reason_3"
                variant="squared"
                size="md"
                renderLabel={() => (
                  <ItemLabel>
                    I want to qualify for the best financing on a home, car, or
                    business loan
                  </ItemLabel>
                )}
                onChange={onChangeReason}
              />
            </ItemWrapper>
          </ItemsWrapper>
        </div>
        <div tw="flex flex-col justify-center">
          <Button
            title="Next Step"
            color="brand"
            variant="primary"
            fullWidth
            onClick={onClickNext}
          />
          <button
            type="button"
            tw="text-brand mt-2 text-center"
            onClick={onClickNext}
          >
            Skip this step
          </button>
        </div>
      </SurveyWrapper>
    </SurveyPageMainWrapper>
  );
};

const SurveyPageMainWrapper = styled.div`
  ${tw`min-h-screen pt-20 pb-20`}
  background: radial-gradient(
    97% 105.49% at 100% -2.94%,
    #f4e9fc 0%,
    #e3e6f9 31.92%,
    #fafafe 100%
  );
`;

const ItemsWrapper = styled.div`
  ${tw`bg-[#FAFAFE] rounded-lg mb-6`}
  border: 3px solid rgba(255, 255, 255, 0.45);
  box-shadow: 0px 1px 3px rgba(129, 126, 251, 0.13),
    0px 9px 21px -16px rgba(98, 70, 234, 0.07);
`;

const ItemWrapper = styled.div`
  ${tw`px-[18px] py-[18px] transition-all duration-200 ease-in-out`}
  &:hover {
    ${tw`bg-brand-100`}
  }
`;

const ItemLabel = styled.span`
  ${tw`ml-[18px] font-medium text-base leading-[150%] text-black`}
`;

const SurveyWrapper = styled.div`
  ${tw`max-w-xl mx-auto `}

  h3 {
    ${tw`font-bold text-lg leading-[23.4px] mb-4`}
  }
`;

export default SurveyPage;
