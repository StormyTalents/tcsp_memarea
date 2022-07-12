import tw, { styled } from "twin.macro";
import { useRouter } from "next/router";
import {
  AcademicCapIcon,
  DocumentDownloadIcon,
  FireIcon,
  HomeIcon,
  SupportIcon,
  UserGroupIcon,
} from "@heroicons/react/solid";

import { SidebarLink } from "./navigation-sidebar-link";
import { FinancialAlert } from "./FinancialAlert";
import { Route as TRoute } from "../../types";

import LogoTitle from "../../assets/icons/LogoTitle.svg";
import Logo from "../../assets/icons/logo.svg";
import Setting1 from "../../assets/icons/sidebar-setting1.svg";
import Setting2 from "../../assets/icons/sidebar-setting2.svg";
import Setting3 from "../../assets/icons/sidebar-setting3.svg";

const ROUTES: TRoute[] = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: <HomeIcon tw="w-6 h-6" />,
    status: "active",
  },
  {
    title: "Courses",
    url: "/courses",
    icon: <AcademicCapIcon tw="w-6 h-6" />,
    status: "active",
  },
  {
    title: "Community",
    url: "/community",
    icon: <UserGroupIcon tw="w-6 h-6" />,
    status: "active",
  },
  {
    title: "Offers",
    url: "/offers",
    icon: <FireIcon tw="w-6 h-6" />,
    status: "comming_soon",
  },
  {
    title: "Resources",
    url: "/resources",
    icon: <DocumentDownloadIcon tw="w-6 h-6" />,
    status: "active",
  },
  {
    title: "Support",
    url: "/support",
    icon: <SupportIcon tw="w-6 h-6" />,
    status: "active",
  },
];

type SidebarProps = {
  expand?: boolean;
  eventShow?: boolean;
};

// expand state will be inside here, this is only for testing...
export const Sidebar = ({ expand = true, eventShow = false }: SidebarProps) => {
  const route = useRouter();

  return (
    <SidebarWrapper expand={expand}>
      <div>
        <LogoContainer expand={expand} />
        <div>
          {ROUTES.slice(0, 4).map((item, index) => (
            <SidebarLink
              key={index}
              title={item.title}
              visited={route.pathname === item.url}
              to={item.url}
              expand={expand}
              icon={item.icon}
              status={item.status}
            />
          ))}
        </div>
        <DivideLine />
        <div>
          {ROUTES.slice(4, 6).map((item, index) => (
            <SidebarLink
              key={index}
              title={item.title}
              visited={route.pathname === item.url}
              to={item.url}
              expand={expand}
              icon={item.icon}
              status={item.status}
            />
          ))}
        </div>
      </div>
      {expand === false ? (
        <div tw="px-[22px]">
          <SettingWrapper>
            <Setting1 />
          </SettingWrapper>
          <SettingWrapper>
            <Setting2 />
          </SettingWrapper>
          <SettingWrapper>
            <Setting3 />
          </SettingWrapper>
        </div>
      ) : (
        eventShow === true && expand === true && <FinancialAlert />
      )}
    </SidebarWrapper>
  );
};

const SidebarWrapper = styled.div<{
  expand?: boolean;
}>`
  ${tw`bg-white flex flex-col justify-between border-r-2 border-[#E5E7EB] min-h-screen z-10`}
  width: ${({ expand = true }) => (expand === true ? "300px" : "64px")}
`;

const SettingWrapper = tw.div`
    py-4
`;

type LogoContainerProps = {
  expand?: boolean;
};

const LogoContainer = ({ expand = true }: LogoContainerProps) => {
  return (
    <LogoContainerWrapper expand={expand}>
      <div>
        <Logo />
      </div>
      {expand === true ? (
        <div>
          <LogoTitle />
        </div>
      ) : null}
    </LogoContainerWrapper>
  );
};

const LogoContainerWrapper = styled.div<{
  expand?: boolean;
}>`
  ${tw`flex gap-[6px] pt-6 justify-center max-h-screen`}
  padding-bottom: ${({ expand = true }) => (expand === true ? "64px" : "35px")};
`;

const DivideLine = styled.hr`
  ${tw`w-full my-2 border border-gray-200`}
`;
