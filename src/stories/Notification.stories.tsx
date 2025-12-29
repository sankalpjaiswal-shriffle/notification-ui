import type { Meta, StoryObj } from "@storybook/react";
import NotificationTest from "../components/Notification/Notification";
import type { NotificationProps } from "../components/Notification/types";
import { fn } from "storybook/test";
import { useState } from "react";
import { Box } from "@mui/material";

const meta: Meta<typeof NotificationTest> = {
  title: "Components/Notification",
  component: NotificationTest,
  argTypes: {
    heading: {
      control: "select",
      options: ["Success", "Info", "Warning", "Error"],
    },
    severity: {
      control: "select",
      options: ["success", "info", "warning", "error"],
    },
    variant: {
      control: "select",
      options: ["PRIMARY", "SECONDARY", "DEFAULT"],
    },
    description: {
      control: "text",
    },
    action: {
      control: "select",
      options: ["all", "undo", "close", "none"],
    },
  },
  args: {
    onOpen: fn(),
    onClose: fn(),
  },
};

export default meta;

type Story = StoryObj<typeof NotificationTest>;

const NotificationWrapper = (args: NotificationProps) => {
  const [open, setOpen] = useState(true);

  return (
    <Box>
      <NotificationTest
        {...args}
        onOpen={() => {
          setOpen(true);
          args.onOpen?.();
        }}
        onClose={() => {
          setOpen(false);
          args.onClose?.();
        }}
      />
    </Box>
  );
};

//Primary
export const Primary: Story = {
  render: (args) => <NotificationWrapper {...args} />,
  args: {
    severity: "success",
    variant: "PRIMARY",
    heading: "Success",
    description: "Task completed",
    action: "all",
  },
};

//Secondary
export const Secondary: Story = {
  render: (args) => <NotificationWrapper {...args} />,
  args: {
    severity: "success",
    variant: "SECONDARY",
    heading: "Success",
    description: "Task completed",
    action: "all",
  },
};

//Default
export const Default: Story = {
  render: (args) => <NotificationWrapper {...args} />,
  args: {
    severity: "success",
    variant: "DEFAULT",
    heading: "Success",
    description: "Task completed",
    action: "all",
  },
};
