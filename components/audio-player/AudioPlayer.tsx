import tw, { styled } from "twin.macro";
import { Range } from "react-range";
import { DownloadIcon } from "@heroicons/react/outline";

import { Resource } from "../../types";
import { Button } from "../button";
import { useCallback, useEffect, useState, useRef } from "react";
import { PauseIcon, PlayIcon, VolumeUpIcon } from "@heroicons/react/solid";

type AudioPlayerProps = {
  audio: Resource;
};

export const AudioPlayer = ({ audio }: AudioPlayerProps) => {
  const [videoProgress, setVideoProgress] = useState([0]);

  const {
    curTime,
    duration,
    playing,
    setPlaying,
    setClickedTime,
    volume,
    setVolume,
  } = useAudioPlayer();

  const onClickPlayButton = useCallback(() => {
    setPlaying(!playing);
  }, [playing]);

  const formatTime = (seconds) => {
    const hr = Math.floor(seconds / 3600) + " : ";
    const min = ("0" + Math.floor((seconds % 3600) / 60)).slice(-2) + " : ";
    const sec = ("0" + Math.floor(seconds % 60)).slice(-2);
    return hr + min + sec;
  };

  const audioRef = useRef();

  return (
    <AudioPlayerWrapper>
      <audio id="audio" ref={audioRef}>
        <source src={audio.file} />
        Your browser does not support the <code>audio</code> element.
      </audio>
      <div tw="flex items-center justify-between">
        <TitleWrapper>
          <h4>{audio.title}</h4>
          <p>{audio.course}</p>
        </TitleWrapper>
        <Button
          color="brand"
          variant="outline"
          title="Download Audio"
          iconPos="left"
          icon={<DownloadIcon tw="w-5 h-5" />}
        />
      </div>

      <div tw="flex items-center gap-20 mt-4">
        <div tw="flex items-center w-3/4">
          <button tw="bg-white mr-4" onClick={onClickPlayButton}>
            {!playing ? (
              <PlayIcon tw="w-12 h-12 text-brand" />
            ) : (
              <PauseIcon tw="w-12 h-12 text-brand" />
            )}
          </button>
          <div tw="w-full relative">
            <Range
              step={5}
              max={100}
              min={0}
              values={videoProgress}
              onChange={(values) => {
                setClickedTime((duration * Number(values)) / 100);
              }}
              renderTrack={({ props, children }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                  }}
                  tw="rounded-full relative w-full h-[18px] bg-platinum-200 flex items-center"
                >
                  <div
                    tw="absolute h-[14px] top-0.5 left-0.5 bg-gray-700 z-50 rounded-full"
                    style={{
                      width: `${(100 * curTime) / duration}%`,
                    }}
                  >
                    {children}
                  </div>
                </div>
              )}
              renderThumb={({ props }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: 0,
                    width: 0,
                    backgroundColor: "#999",
                  }}
                />
              )}
            />
            <div tw="flex items-center justify-between absolute w-full">
              <span>{formatTime(curTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>
        </div>
        <div tw="flex items-center flex-grow">
          <button tw="mr-5">
            <VolumeUpIcon tw="w-6 h-6 text-brand" />
          </button>
          <Range
            step={10}
            max={100}
            min={0}
            values={volume}
            onChange={(values) => setVolume([...values])}
            renderTrack={({ props, children }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                }}
                tw="rounded-full relative w-full h-[18px] bg-platinum-200 flex items-center"
              >
                <div
                  tw="absolute h-[14px] top-0.5 left-0.5 bg-gray-700 z-50 rounded-full"
                  style={{
                    width: `${(100 * volume[0]) / 100}%`,
                  }}
                >
                  {children}
                </div>
              </div>
            )}
            renderThumb={({ props }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: 0,
                  width: 0,
                  backgroundColor: "#999",
                }}
              />
            )}
          />
        </div>
      </div>
    </AudioPlayerWrapper>
  );
};

function useAudioPlayer() {
  const [duration, setDuration] = useState(0);
  const [curTime, setCurTime] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [clickedTime, setClickedTime] = useState(0);
  const [volume, setVolume] = useState([75]);

  useEffect(() => {
    const audio = document.getElementById("audio") as HTMLAudioElement;

    // state setters wrappers
    const setAudioData = () => {
      setDuration(audio.duration);
      setCurTime(audio.currentTime);
    };

    const setAudioTime = () => setCurTime(audio.currentTime);

    // DOM listeners: update React state on DOM events
    audio.addEventListener("canplay", setAudioData);
    audio.addEventListener("timeupdate", setAudioTime);
    audio.volume = Number(volume) / 100;

    // React state listeners: update DOM on React state changes
    playing ? audio.play() : audio.pause();

    if (clickedTime && clickedTime !== curTime) {
      audio.pause();
      audio.currentTime = clickedTime;
      audio.play();
      setClickedTime(null);
    }

    // effect cleanup
    return () => {
      audio.removeEventListener("loadeddata", setAudioData);
      audio.removeEventListener("timeupdate", setAudioTime);
    };
  });

  return {
    curTime,
    duration,
    playing,
    setPlaying,
    setClickedTime,
    volume,
    setVolume,
  };
}

const AudioPlayerWrapper = styled.div`
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
    0px 1px 2px -1px rgba(0, 0, 0, 0.1);
  ${tw`p-8 bg-white rounded-lg`}
`;

const TitleWrapper = styled.div`
  ${tw``}
  h4 {
    ${tw`font-bold text-2xl leading-[150%] text-gray-800`}
  }
  p {
    ${tw`text-gray-400 font-bold text-base leading-[150%]`}
  }
`;
