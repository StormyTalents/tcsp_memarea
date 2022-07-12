import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CreditSolutionCard } from "./CreditSolutionCard";

export default {
  title: "CSP Components/CreditSolutionCard",
  component: CreditSolutionCard,
} as ComponentMeta<typeof CreditSolutionCard>;

const Template: ComponentStory<typeof CreditSolutionCard> = (args) => (
  <CreditSolutionCard {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  progress: 10,
  programTitle: "The Credit Solution Program",
};
