import tw, { styled } from "twin.macro";
import { Button } from "../button";
import PdfAvatar from "../../assets/icons/download-pdf.svg";

type DownloadFileProps = {
  fileType?: string;
  title: string;
};

const fileTypeArray = {
  pdf: <PdfAvatar />,
};

export const DownloadFile = ({ fileType, title }: DownloadFileProps) => {
  return (
    <DownloadFileWrapper>
      <div tw="flex gap-4 p-4">
        <div>{fileTypeArray[fileType]}</div>
        <h1 tw="text-xl font-semibold text-[#3F3F46]">{title}</h1>
        <p tw="uppercase pt-[7px] text-xs font-bold text-[#A3A3A3]">
          {fileType}
        </p>
      </div>
      <div tw="flex pr-4 py-[13px]">
        <p tw="uppercase pr-4 pt-[9px] text-[#A3A3A3] text-xs font-bold leading-[18px]">
          view online
        </p>
        <div>
          <Button
            color="brand"
            variant="primary"
            title="Download"
            tw="px-7 py-2 min-w-[155px]"
          />
        </div>
      </div>
    </DownloadFileWrapper>
  );
};

const DownloadFileWrapper = styled.div`
  ${tw`flex justify-between bg-white rounded-lg`}
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px -1px rgba(0, 0, 0, 0.1);
`;
