import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { RangeSlider } from "./RangeSlider";

export default {
  title: "CSP Components/RangeSlider",
  component: RangeSlider,
  argTypes: {
    from: {
      type: "number",
    },
    to: {
      type: "number",
    },
    step: {
      type: "number",
    },
  },
} as ComponentMeta<typeof RangeSlider>;

const Template: ComponentStory<typeof RangeSlider> = (args) => (
  <RangeSlider {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  from: 300,
  to: 900,
  step: 10,
};
