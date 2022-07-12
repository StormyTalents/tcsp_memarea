import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CustomInput } from "./CustomInput";

import PlayIcon from "./../../assets/icons/play.svg";

export default {
  title: "Components/CustomInput",
  component: CustomInput,
} as ComponentMeta<typeof CustomInput>;

const Template: ComponentStory<typeof CustomInput> = (args) => (
  <CustomInput {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  variant: "light",
  type: "mail",
  state: "normal",
  placeholder: "Active",
};
