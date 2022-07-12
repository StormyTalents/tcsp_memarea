import tw, { styled } from "twin.macro";
import { Menu } from "@headlessui/react";
import { useCallback } from "react";
import { useRouter } from "next/router";

import ChevronDonw from "./../../../assets/icons/chevron-down.svg";

type UserDropDownProps = {
  color?: string;
};

export const UserDropdown = ({ color }: UserDropDownProps) => {
  const router = useRouter();

  const onClickSignOut = useCallback(() => {
    router.push("/auth/login");
  }, [router]);
  return (
    <Menu as="div" tw="relative z-[1000]">
      <Menu.Button tw="flex items-center">
        {({ open }) => (
          <>
            <CustomSpan color={color}>Craig Sartor</CustomSpan>
            <CustomChevronDonw
              color={color}
              css={[open && tw`rotate-180`, tw`transition-all duration-300`]}
            />
          </>
        )}
      </Menu.Button>
      <MenuItems>
        <Menu.Item as="div" tw="px-4 py-3">
          <div tw="font-bold text-sm leading-[150%]">Craig Sartor</div>
          <div tw="text-xs leading-[150%] font-medium">
            craig@creditsimple.com
          </div>
        </Menu.Item>
        <DivideLink />
        <MenuItem as="div" onClick={() => router.push("/profile")}>
          Your profile
        </MenuItem>
        <MenuItem as="div">Settings</MenuItem>
        <DivideLink />
        <MenuItem as="div" onClick={onClickSignOut}>
          Sign Out
        </MenuItem>
      </MenuItems>
    </Menu>
  );
};

const MenuItems = styled(Menu.Items)`
  ${tw`absolute rounded-lg w-[224px] right-0 z-50 bg-white overflow-hidden`}
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
    0px 1px 2px -1px rgba(0, 0, 0, 0.1);
`;

const MenuItem = styled(Menu.Item)`
  ${tw`py-2 px-4 text-gray-500 text-sm leading-[150%] cursor-pointer hover:bg-gray-100 hover:bg-opacity-70  hover:font-semibold`}
`;

const DivideLink = styled.div`
  ${tw`bg-gray-100 w-full h-[1px]`}
`;

const CustomSpan = styled.span<{ color?: string }>`
  ${tw`p-2 text-black text-sm leading-[150%] font-semibold`}
  color: ${({ color }) => color};
`;

const CustomChevronDonw = styled(ChevronDonw)<{ color?: string }>`
  path {
    fill: ${({ color }) => color};
  }
`;
