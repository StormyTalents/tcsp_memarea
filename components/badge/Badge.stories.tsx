import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PlayIcon } from "@heroicons/react/solid";

import { Badge } from "./Badge";

export default {
  title: "Components/Badge",
  component: Badge,
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  color: "gray",
  size: "sm",
  icon: <PlayIcon tw="w-5 h-5" />,
  title: "Primary Badge",
  variant: "square",
  numVal: "1",
  hasRemoveIcon: false,
};
