import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { UpcomingCard } from "./UpcomingCard";

export default {
  title: "CSP Components/UpcomingCard",
  component: UpcomingCard,
} as ComponentMeta<typeof UpcomingCard>;

const Template: ComponentStory<typeof UpcomingCard> = (args) => (
  <UpcomingCard {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  title: "You and your Debt",
  content:
    "Learn about all the things to do with debt and other things in this live event",
  name: "Jorgihno Ojeda",
  eventType: "Live Event",
  day: "March 7",
  time: "3:00 PM EST",
};
