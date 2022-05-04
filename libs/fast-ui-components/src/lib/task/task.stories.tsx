import { Story } from "@storybook/react";
import React from "react";

import Task, { TaskProps } from "./task";

export default {
  component: Task,
  title: "Task",
};

const Template: Story<TaskProps> = (args) => <Task {...args} />;

export const Default = Template.bind({});

Default.args = {
  task: {
    id: "1",
    title: "Test Task",
    state: "TASK_INBOX",
    updatedAt: new Date(2021, 0, 1, 9, 0),
  },
  onPinTask: () => console.log("onPinTask"),
  onArchiveTask: () => console.log("onArchiveTask"),
};

export const Seconary = Template.bind({});

Seconary.args = {
  task: Default.args.task,
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task!,
    state: "TASK_PINNED",
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task!,
    state: "TASK_ARCHIVED",
  },
};
