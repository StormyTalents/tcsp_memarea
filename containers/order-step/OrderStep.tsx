import tw, { styled } from "twin.macro";
import { useState, useRef } from "react";

import { Button } from "components/button";

import PlayIcon from "./../../assets/icons/play.svg";
import ArrowBlackIcon from "./../../assets/icons/arrow-circle-right-black.svg";

import {
  Modal,
  HIDE_MODEL,
  WARNING_MODEL,
  CONFIRM_MODEL,
} from "../../components/modal";

type OrderStepProps = {
  onSkip?: () => void;
};

export const OrderStep = ({ onSkip }: OrderStepProps) => {
  const [playing, setPlaying] = useState(false);
  const vidRef = useRef<HTMLVideoElement>(null);
  const [showModal, setShowModal] = useState(HIDE_MODEL);

  const onClickPlay = () => {
    vidRef.current?.play();
    setPlaying(true);
  };

  const handleClick = () => {
    setShowModal(HIDE_MODEL);
    onSkip();
  };

  return (
    <div>
      <h1 tw="mt-16 mb-5 md:mb-[9px] text-center">
        Check out this amazing offer
      </h1>
      <p tw="mb-[30px] md:mb-[45px]">
        If you do not know your current score, you will need to figure it out
        before joining the community.
      </p>
      <div tw="relative z-0 m-auto md:w-[600px] w-[328px] overflow-hidden rounded-xl">
        <video
          ref={vidRef}
          width="100%"
          height="100%"
          muted
          onEnded={() => setPlaying(false)}
        >
          <source
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        {!playing && (
          <>
            <div tw="absolute top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-opacity-70">
              <MediaPlayButton onClick={onClickPlay}>
                <PlayIcon />
              </MediaPlayButton>
            </div>
            <PlayerMask />
          </>
        )}
      </div>
      <div tw="mt-5 flex flex-col items-center gap-1">
        <Button
          color="brand"
          variant="primary"
          title="Add To Order"
          tw="bg-csp-sunglow-200 text-black font-medium"
          onClick={() => setShowModal(CONFIRM_MODEL)}
          icon={<ArrowBlackIcon />}
        />
        <Button
          color="brand"
          variant="text"
          title="Skip This Step For Now"
          onClick={() => setShowModal(WARNING_MODEL)}
        />
      </div>

      <Modal
        onClose={() => setShowModal(HIDE_MODEL)}
        show={showModal}
        onClick={handleClick}
        oldPrice={67}
        newPrice={33.5}
      />
    </div>
  );
};

const MediaPlayButton = styled.button`
  ${tw`flex items-center justify-center w-24 h-24 rounded-full bg-csp-brand`}
`;

const PlayerMask = styled.div`
  ${tw`absolute top-0 z-10 w-full h-full bg-black opacity-50`}
`;
