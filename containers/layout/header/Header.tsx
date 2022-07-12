import { Breadcrumb } from "components/breadcrumb";
import React from "react";
import tw, { styled } from "twin.macro";

import { BreadCrumb } from "../../../types";
import { UserDropdown } from "../user-dropdown";
import BellIcon from "./../../../assets/icons/bell.svg";

type HeaderPros = {
  breadCrumbs: Array<BreadCrumb>;
  color?: string;
};

export const Header = ({ breadCrumbs, color }: HeaderPros) => {
  return (
    <header tw="flex items-center justify-between min-h-[64px]">
      <Breadcrumb breadcrumbs={breadCrumbs} />

      <div tw="flex items-center">
        <div tw="px-2 items-center flex">
          <button>
            <CustomBellIcon color={color} />
          </button>
        </div>
        <UserDropdown color={color} />
      </div>
    </header>
  );
};

const CustomBellIcon = styled(BellIcon)<{
  color?: string;
}>`
  path {
    fill: ${({ color }) => color};
  }
`;
