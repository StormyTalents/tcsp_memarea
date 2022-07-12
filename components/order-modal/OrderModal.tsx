import tw from "twin.macro";

type ModalProps = {
  id?: string;
};

export const OrderModal = ({ id }: ModalProps) => {
  return (
    <div
      id={id}
      tabIndex={-1}
      aria-hidden="true"
      tw="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full"
    >
      <div tw="relative p-4 w-full max-w-2xl h-full md:h-auto">
        <div tw="relative bg-white rounded-lg shadow ">Modal</div>
      </div>
    </div>
  );
};
