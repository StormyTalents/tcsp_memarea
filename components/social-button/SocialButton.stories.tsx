import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SocialButton } from "./SocialButton";

export default {
  title: "CSP Components/SocialButton",
  component: SocialButton,
} as ComponentMeta<typeof SocialButton>;

const Template: ComponentStory<typeof SocialButton> = (args) => (
  <SocialButton {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  type: "facebook",
  size: "xs",
  variant: "primary",
  isColorIcon: false,
};
