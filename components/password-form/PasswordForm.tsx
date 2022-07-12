import tw from "twin.macro";

import { CustomInput } from "./../custom-input";
import { FormEvent, ReactNode, useState } from "react";
import { PwdStrength } from "./pwd-strength-indicator";
import ViewSVG from "../../assets/icons/eye-off.svg";
import ViewOffSVG from "../../assets/icons/eye-on.svg";

type PasswordProps = {
  placeholder?: string;
  icon?: ReactNode;
};

export const PasswordForm = ({
  placeholder = "Password",
  icon,
}: PasswordProps) => {
  const [passState, setPassState] = useState("");
  const [visibleState, setVisibleState] = useState(false);
  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <div tw="mb-[42px]">
      <h1 tw="text-4xl font-bold text-center px-4 text-[30px]! md:text-[32px]! md:px-0">
        Choose your password
      </h1>
      <form onSubmit={onSubmitHandler} tw="mt-8 relative mx-4 md:mx-0">
        <CustomInput
          name="confirm_password"
          placeholder={placeholder}
          value={passState}
          size="lg"
          type={visibleState === true ? "email" : "password"}
          onChange={(event) => {
            setPassState(event.target.value);
          }}
          isIcon={true}
          iconType="password"
        />
        <PwdStrength password={passState} />
        <div
          tw="absolute top-4 right-4 cursor-pointer"
          onClick={() => setVisibleState(!visibleState)}
        >
          {visibleState ? <ViewOffSVG /> : <ViewSVG />}
        </div>
      </form>
    </div>
  );
};
