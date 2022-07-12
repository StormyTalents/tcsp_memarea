import tw, { styled } from "twin.macro";

type MessageFieldProps = {
  variant?: "dark" | "light";
  placeholder?: string;
  size?: "lg" | "sm";
};
export const MessageField = ({
  variant = "light",
  placeholder,
  size = "lg",
}: MessageFieldProps) => {
  return (
    <div>
      <TextArea darkmode={variant} placeholder={placeholder} size={size} />
    </div>
  );
};

const TextArea = styled.textarea<{
  darkmode?: "dark" | "light";
  size?: string;
}>`
  ${tw`rounded-lg px-5 py-[13px] border text-white`}
  resize: none;
  ${({ darkmode }) =>
    darkmode === "dark" ? tw`bg-gray-700` : tw`bg-[#FAFAFE]`}
  ${({ darkmode }) =>
    darkmode === "dark" ? tw`text-white` : tw`text-[#2C2836]`}
  ${({ darkmode }) =>
    darkmode === "dark" ? tw`border-gray-600` : tw`border-[#BCBCCD]`}
  ::placeholder {
    ${({ darkmode }) =>
      darkmode === "dark" ? tw`text-gray-400` : tw`text-[#BCBCCD]`}
  }

  ${({ size }) => (size === "lg" ? tw`w-[360px]` : tw`w-[320px]`)}
  ${({ size }) => (size === "lg" ? tw`h-[230px]` : tw`h-[210px]`)}

  &:focus {
    border-color: #6246ea;
  }

  ::-webkit-scrollbar {
    width: 3px;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ darkmode }) =>
      darkmode === "dark" ? "#a1a1aa" : "#71717A"};
    outline: 1px solid slategrey;
    border-radius: 5px;
  }
`;
