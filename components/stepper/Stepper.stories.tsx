import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Stepper } from "./Stepper";

export default {
  title: "CSP Components/Stepper",
  component: Stepper,
  argTypes: {
    totalSteps: {
      control: "object",
    },
    currentStep: {
      control: "number",
    },
  },
} as ComponentMeta<typeof Stepper>;

const Template: ComponentStory<typeof Stepper> = (args) => (
  <Stepper {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  totalSteps: [
    {
      id: "1",
      label: "Step 1",
      value: "step_1",
    },
    {
      id: "2",
      label: "Step 2",
      value: "step_2",
    },
    {
      id: "3",
      label: "Step 3",
      value: "step_3",
    },
  ],
  currentStep: 2,
};
