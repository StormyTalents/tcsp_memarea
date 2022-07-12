import React from "react";
import tw, { styled } from "twin.macro";
import Link from "next/link";
import { Badge } from "components/badge";

type SidebarLinkProps = {
  icon?: React.ReactNode;
  title?: string;
  visited?: boolean;
  expand?: boolean;
  to?: string;
  active?: boolean;
  status?: "active" | "disabled" | "comming_soon";
};

export const SidebarLink = ({
  title,
  visited,
  expand,
  to,
  active,
  icon,
  status,
}: SidebarLinkProps) => {
  return (
    <Link href={to} passHref>
      <LinkWrapper visited={visited} active={active}>
        {icon && icon}
        {expand === true && <span>{title}</span>}
        {expand === true && status === "comming_soon" && (
          <Badge title="Coming Soon" color="brand" size="sm" />
        )}
      </LinkWrapper>
    </Link>
  );
};

const LinkWrapper = styled.div<{
  visited?: boolean;
  active?: boolean;
}>`
  ${tw`flex gap-4 px-[22px] py-3 bg-white transition duration-200 relative cursor-pointer items-center`}

  background: ${({ visited }) => (visited ? "#EEF0FF" : "white")};
  font-weight: ${({ visited }) => (visited === true ? "700" : "500")};
  color: ${({ visited }) => (visited === true ? "#6246EA" : "#111928")};

  &:hover {
    background: ${({ visited = false }) => visited !== true && "#FAFAFA"};
  }

  &:after {
    content: "";
    width: 3px;
    height: 32px;
    margin: 8px 0 8px;
    background: #6246ea;
    left: 0;
    top: 0;
    position: absolute;
    border-radius: 0 2px 2px 0;
    display: ${({ visited = false }) => visited === false && "none"};
  }
`;
