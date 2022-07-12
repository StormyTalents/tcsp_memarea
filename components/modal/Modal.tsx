import { useEffect, useState } from "react";
import tw, { styled } from "twin.macro";
import Image from "next/image";
import Lottie from "react-lottie";

import ArrowBlackIcon from "../../assets/icons/arrow-circle-right-black.svg";
import CloseIcon from "./../../assets/icons/close.svg";

import { Button } from "../button";

import checkAnimData from "../../assets/lottie/Animated_Checkmark.json";
import warnAnimData from "../../assets/lottie/Bouncing_Warning_Sign.json";

export const HIDE_MODEL = 0;
export const WARNING_MODEL = 1;
export const CONFIRM_MODEL = 2;

type ModalProps = {
  oldPrice: number;
  newPrice: number;
  show: number;
  onClose: () => void;
  onClick: () => void;
};

export const Modal = ({
  show,
  onClose,
  onClick,
  oldPrice,
  newPrice,
}: ModalProps) => {
  return (
    <ModalType show={show} onClose={onClose}>
      {show === CONFIRM_MODEL ? (
        <ConfirmType onClick={onClick} />
      ) : show === WARNING_MODEL ? (
        <WarningType
          onClick={onClick}
          oldPrice={oldPrice}
          newPrice={newPrice}
          onClose={onClose}
        />
      ) : null}
    </ModalType>
  );
};

const ConfirmType = ({ onClick }) => {
  return (
    <div tw="flex justify-center w-full h-full items-center">
      <ConfirmImgWrapper onClick={onClick}>
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: checkAnimData,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice",
            },
          }}
          height="180px"
          width="180px"
        />
      </ConfirmImgWrapper>
    </div>
  );
};

const WarningType = ({ oldPrice, newPrice, onClick, onClose }) => {
  return (
    <div tw="w-full h-full items-center text-center flex flex-col md:gap-4 gap-4">
      <WarningImgWrapper tw="flex justify-center">
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: warnAnimData,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice",
            },
          }}
          height="180px"
          width="180px"
        />
      </WarningImgWrapper>
      <h1 tw="uppercase text-[#F05252]! text-[30px]! leading-6! md:text-[48px]! md:leading-[72px]!">
        hold on
      </h1>
      <p tw="text-[#FAFAFA]!">
        As a new member, I&apos;m prepared to offer you an ever larger
        discount... You can get the Settle Your Debts Bundle for the insane
        price of only:
      </p>
      <p tw="pt-4">
        <span tw="pr-2 line-through font-medium text-white text-[30px]">
          $67
        </span>
        <span tw="md:text-[48px]! text-[30px]! leading-3 font-bold text-[#FFE688]!">
          $33.50
        </span>
      </p>
      <p tw="text-[#FAFAFA]! leading-[72px]">
        You will only see this offer today, here and now. Click &rsquo;Add This
        Upgrade&rsquo; to add the bundle to your order today!
      </p>
      <div tw="pt-8 flex gap-4">
        <div>
          <Button
            color="brand"
            variant="primary"
            title="No Thanks"
            tw="text-white border w-[124px]! min-w-[124px]! px-3 border-white font-medium"
            onClick={onClose}
          />
        </div>
        <div>
          <Button
            color="brand"
            variant="primary"
            title="Add To Order"
            tw="bg-csp-sunglow-200 text-black font-medium"
            onClick={onClick}
            icon={<ArrowBlackIcon />}
          />
        </div>
      </div>
    </div>
  );
};

type ModalTyperops = {
  show: number;
  onClose: () => void;
  children: React.ReactNode;
};

const ModalType = ({ show, onClose, children }: ModalTyperops) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  if (isBrowser) {
    return (
      <>
        {show === CONFIRM_MODEL || show === WARNING_MODEL ? (
          <StyledModalOverlay>
            <StyledModal>
              {show === WARNING_MODEL && (
                <CloseIconWrapper
                  tw="text-white"
                  href="#"
                  onClick={handleCloseClick}
                >
                  <CloseIcon />
                </CloseIconWrapper>
              )}
              <StyledModalBody>{children}</StyledModalBody>
            </StyledModal>
          </StyledModalOverlay>
        ) : null}
      </>
    );
  } else {
    return null;
  }
};

const StyledModalBody = styled.div`
  ${tw`h-full`}
`;

const StyledModal = styled.div`
  ${tw`box-border relative flex items-center justify-center p-5 rounded-lg`}
  background: linear-gradient(133.64deg, #191242 0%, #392c83 100%);
  border: 1px solid #392c83;
  box-shadow: 0px 36px 103px -12px rgba(57, 44, 131, 0.48);
  ${tw`min-w-[300px] min-h-[630px] md:min-w-[593px]`}
`;
const StyledModalOverlay = styled.div`
  ${tw`fixed top-0 left-0 z-10 flex items-center justify-center w-full h-full`}
`;

const WarningImgWrapper = styled.div`
  position: relative;
`;

const ConfirmImgWrapper = styled.div`
  ${tw`relative`}
`;

const CloseIconWrapper = styled.a`
  ${tw`absolute top-5 right-5`}
`;
