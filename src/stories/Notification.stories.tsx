import type { Meta, StoryObj } from "@storybook/react";
import Notification, {
  type NotificationProps,
} from "../components/Notification";
import { fn } from "storybook/test";
import { useState } from "react";
import { Box } from "@mui/material";

const meta: Meta<typeof Notification> = {
  title: "Components/Notification",
  component: Notification,
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
      options: ["primary", "secondary", "default"],
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

type Story = StoryObj<typeof Notification>;

const NotificationWrapper = (args: NotificationProps) => {
  const [open, setOpen] = useState(true);

  return (
    <Box>
      <Notification
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
    variant: "primary",
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
    variant: "secondary",
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
    variant: "default",
    heading: "Success",
    description: "Task completed",
    action: "all",
  },
};
