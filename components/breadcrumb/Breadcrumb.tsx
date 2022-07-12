import React from "react";
import tw, { styled } from "twin.macro";
import { ChevronRightIcon } from "@heroicons/react/solid";

import { BreadCrumb } from "../../types";

type BreadcrumbProps = {
  breadcrumbs: Array<BreadCrumb>;
};

export const Breadcrumb = ({ breadcrumbs }: BreadcrumbProps) => {
  return (
    <BreadcrumbWrapper>
      {breadcrumbs.length > 0 &&
        breadcrumbs?.map((_breadcrumbItem, index) => (
          <BreadCrumbItem
            active={_breadcrumbItem.active}
            key={_breadcrumbItem.name}
          >
            {_breadcrumbItem.icon && (
              <span className="breadcrumb_icon">{_breadcrumbItem.icon}</span>
            )}
            <span className="breadcrumb_label">{_breadcrumbItem.label}</span>
            {index < breadcrumbs.length - 1 && (
              <ChevronRightIcon tw="w-4 h-4 text-gray-400 mx-4" />
            )}
          </BreadCrumbItem>
        ))}
    </BreadcrumbWrapper>
  );
};

const BreadcrumbWrapper = styled.div`
  ${tw`flex items-center`}
`;

const BreadCrumbItem = styled.div<{
  active: boolean;
}>`
  ${tw`flex items-center cursor-pointer`}
  .breadcrumb_icon {
    ${tw`text-gray-700`}
  }
  .breadcrumb_label {
    ${tw`text-gray-700 font-medium text-sm leading-[150%] ml-4`}
    ${({ active }) => (!active ? tw`text-gray-700` : tw`text-gray-500`)}
  }
`;
