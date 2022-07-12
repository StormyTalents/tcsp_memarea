import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Resource } from "./Resource";

export default {
  title: "CSP Components/Resource",
  component: Resource,
} as ComponentMeta<typeof Resource>;

const Template: ComponentStory<typeof Resource> = (args) => (
  <Resource {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  title: "Credit Solution",
  course: "Credit Solution Program",
  type: "pdf",
};
