import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { MessageField } from "./MessageField";

export default {
  title: "Components/MessageField",
  component: MessageField,
} as ComponentMeta<typeof MessageField>;

const Template: ComponentStory<typeof MessageField> = (args) => (
  <MessageField {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  variant: "light",
  placeholder: "Placeholder",
  size: "small",
};
