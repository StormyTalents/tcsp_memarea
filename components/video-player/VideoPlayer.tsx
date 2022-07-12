import { PlayIcon } from "@heroicons/react/solid";
import { useCallback, useRef, useState } from "react";
import tw, { styled } from "twin.macro";

type VideoPlayerProps = {
  video: string;
};

export const VideoPlayer = ({ video, ...rest }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const onClickPlay = useCallback(() => {
    if (!isPlaying) {
      setIsPlaying(true);
      videoRef.current.play();
    } else {
      setIsPlaying(false);
      videoRef.current.pause();
    }
  }, [videoRef, isPlaying]);

  return (
    <VideoPlayerWrapper {...rest}>
      <video id="video1" ref={videoRef} src={video}></video>

      {!isPlaying && (
        <Overlay tw="flex items-center justify-center absolute w-full h-full z-50 top-0 left-0">
          <button tw="flex items-center justify-center" onClick={onClickPlay}>
            <PlayIcon tw="w-16 h-16 text-brand bg-white rounded-full" />
          </button>
        </Overlay>
      )}
    </VideoPlayerWrapper>
  );
};

const VideoPlayerWrapper = styled.div`
  ${tw`relative overflow-hidden rounded-lg min-h-[300px]`}
  video {
  }
`;

const Overlay = styled.div`
  ${tw`absolute top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-gray-600 bg-opacity-70`}
`;
