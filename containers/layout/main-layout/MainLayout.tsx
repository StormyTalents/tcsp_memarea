import React from "react";
import tw, { styled } from "twin.macro";

import { Sidebar } from "../../../components";
import { Header } from "../../../containers/layout/header";
import { BreadCrumb } from "../../../types";

type MainLayoutProps = {
  children: React.ReactNode;
  breadCrumbs: Array<BreadCrumb>;
  color?: string;
};

const MainLayout = ({ children, breadCrumbs, color }: MainLayoutProps) => {
  return (
    <MainWrapper>
      <Sidebar />
      <section tw="flex-grow px-12">
        <Header breadCrumbs={breadCrumbs} color={color} />
        <div tw="pb-12">{children}</div>
      </section>
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  ${tw`flex`}
  background: radial-gradient(
    97% 105.49% at 100% -2.94%,
    #f4e9fc 0%,
    #e3e6f9 31.92%,
    #fafafe 68.12%
  );
`;

export default MainLayout;
