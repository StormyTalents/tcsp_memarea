import tw, { styled } from "twin.macro";
import { DownloadIcon } from "@heroicons/react/outline";
import { DocumentTextIcon } from "@heroicons/react/solid";

import PdfResourceIcon from "./../../assets/icons/pdf-resource-icon.svg";
import VideoResourceIcon from "./../../assets/icons/video-resource-icon.svg";
import AudioResourceIcon from "./../../assets/icons/audio-resource-icon.svg";
import { Button } from "../../components/button";
import { Badge } from "../../components/badge";

type ResourceProps = {
  title: string;
  course: string;
  type: "pdf" | "mov" | "audio";
  onClickView?: () => void;
};

export const Resource = ({
  title,
  course,
  type,
  onClickView,
  ...rest
}: ResourceProps) => {
  return (
    <ResourceWrapper {...rest}>
      <TopWrapper>
        {type === "pdf" ? (
          <PdfResourceIcon />
        ) : type === "audio" ? (
          <AudioResourceIcon />
        ) : (
          <VideoResourceIcon />
        )}
        <Badge
          color="sunglow"
          icon={<DocumentTextIcon />}
          title="PDF"
          size="sm"
          tw="absolute bottom-4 left-4"
        />
      </TopWrapper>
      <DetailWrapper>
        <div tw="border-b border-b-gray-200 py-4">
          <h4 tw="text-gray-800 font-semibold text-xl leading-[150%]">
            {title}
          </h4>
          <p tw="text-gray-400 font-bold text-xs leading-[150%]">{course}</p>
        </div>
        <div tw="flex items-center justify-between py-4">
          <Button
            color="gray"
            variant="outline"
            title="Download"
            icon={<DownloadIcon tw="w-5 h-5" />}
          />
          <Button
            color="brand"
            title="View Online"
            variant="primary"
            onClick={onClickView}
          />
        </div>
      </DetailWrapper>
    </ResourceWrapper>
  );
};

const ResourceWrapper = styled.div`
  ${tw`flex-grow overflow-hidden bg-white rounded-lg`}

  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
    0px 1px 2px -1px rgba(0, 0, 0, 0.1);
`;

const TopWrapper = styled.div`
  ${tw`flex items-center justify-center py-[30px] relative`}

  background: linear-gradient(104.32deg, #6246ea 0%, #392c83 100%);
`;

const DetailWrapper = styled.div`
  ${tw`px-4`}
`;
