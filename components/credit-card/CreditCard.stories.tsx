import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CreditCard } from "./CreditCard";

export default {
  title: "CSP Components/CreditCard",
  component: CreditCard,
} as ComponentMeta<typeof CreditCard>;

const Template: ComponentStory<typeof CreditCard> = (args) => (
  <CreditCard {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  title: "Credit Solution Program",
  variant: "primary",
  percent: 20,
  author: "Primary Card",
  enrolled: 12,
  status: "enrolled",
  price: "12",
};
