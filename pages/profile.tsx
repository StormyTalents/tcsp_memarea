import { HomeIcon } from "@heroicons/react/solid";
import tw, { styled } from "twin.macro";

import MainLayout from "../containers/layout/main-layout/MainLayout";

const ProfilePage = () => {
  return (
    <MainLayout
      breadCrumbs={[
        {
          icon: <HomeIcon />,
          label: "Dashboard",
          name: "dashboard",
          active: false,
        },
        {
          label: "Profile",
          name: "profile",
          active: true,
        },
      ]}
    >
      Profile Page
    </MainLayout>
  );
};

export default ProfilePage;
