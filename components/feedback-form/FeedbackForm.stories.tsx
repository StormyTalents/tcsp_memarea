import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { FeedbackForm } from "./FeedbackForm";

export default {
  title: "CSP Components/FeedbackForm",
  component: FeedbackForm,
} as ComponentMeta<typeof FeedbackForm>;

const Template: ComponentStory<typeof FeedbackForm> = (args) => (
  <FeedbackForm {...args} />
);

export const Primary = Template.bind({});
