import tw from "twin.macro";
import { HTMLProps, useState } from "react";

type TextFieldProps = HTMLProps<HTMLInputElement> & {
  variant?: "primary" | "secondary";
  rounded?: boolean;
  label?: string;
  error?: string;
};

export const TextField = ({
  variant,
  rounded,
  label,
  id,
  placeholder,
  type,
  name,
  required,
  error,
  ...rest
}: TextFieldProps) => {
  const [invalid, setInvalid] = useState(false);
  const [dirty, setDirty] = useState(false);

  const onBlurHandler = () => {
    setDirty(true);
  };

  return (
    <div tw="w-full">
      {label && (
        <label
          htmlFor={id}
          tw="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          {label}
        </label>
      )}

      <input
        type={type}
        id={id}
        name={name}
        css={[
          rounded && tw`rounded-lg`,
          variant === "primary" &&
            tw`bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light`,
        ]}
        tw="shadow-sm w-full"
        placeholder={placeholder}
        required={required}
        onBlur={onBlurHandler}
        {...rest}
      />
      {error && invalid && dirty && (
        <p tw="mt-2 text-sm text-red-600 dark:text-red-500">{error}</p>
      )}
    </div>
  );
};
