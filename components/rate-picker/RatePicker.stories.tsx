import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { RatePicker } from "./RatePicker";

export default {
  title: "CSP Components/RatePicker",
  component: RatePicker,
} as ComponentMeta<typeof RatePicker>;

const Template: ComponentStory<typeof RatePicker> = (args) => (
  <RatePicker {...args} />
);

export const Primary = Template.bind({});
