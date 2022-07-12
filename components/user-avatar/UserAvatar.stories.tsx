import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { UserAvatar } from "./UserAvatar";

export default {
  title: "Components/UserAvatar",
  component: UserAvatar,
} as ComponentMeta<typeof UserAvatar>;

const Template: ComponentStory<typeof UserAvatar> = (args) => (
  <UserAvatar {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  variant: "primary",
  size: "lg",
  name: "Peter Hazard",
};
