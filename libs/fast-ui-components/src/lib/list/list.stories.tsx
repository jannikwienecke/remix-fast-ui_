import { Story, Meta } from "@storybook/react";
import { List, ListProps } from "./list";

export default {
  component: List,
  title: "List",
} as Meta;

const Template: Story<ListProps> = (args) => <List {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
