import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FireIcon, PlayIcon } from "@heroicons/react/solid";

import { Button } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  title: "Primary Button",
  variant: "primary",
  color: "brand",
};

export const ButtonWithIcon = Template.bind({});

ButtonWithIcon.args = {
  title: "Button with Icon",
  variant: "primary",
  color: "brand",
  icon: <PlayIcon tw="w-5 h-5" />,
};

export const CircleButton = Template.bind({});

CircleButton.args = {
  title: "",
  variant: "primary",
  color: "brand",
  icon: <FireIcon tw="w-5 h-5" />,
  iconOnly: true,
};
