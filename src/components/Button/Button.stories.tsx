import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import { fn } from "storybook/test";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import SendIcon from "@mui/icons-material/Send";

const meta: Meta<typeof Button> = {
  title: "components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: "select",
      options: ["text", "contained", "outlined"],
    },
    color: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "success",
        "info",
        "warning",
        "error",
        "inherit",
      ],
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
  },
  args: {
    onClick: fn(),
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

const Primary: Story = {
  args: {
    variant: "contained",
    color: "primary",
    size: "small",
    label: "Primary",
  },
};

const Secondary: Story = {
  args: {
    variant: "contained",
    color: "secondary",
    size: "medium",
    label: "Secondary",
  },
};

const Success: Story = {
  args: {
    variant: "contained",
    color: "success",
    size: "large",
    label: "Success",
  },
};

const Info: Story = {
  args: {
    variant: "contained",
    color: "info",
    size: "large",
    label: "Info",
  },
};

const Warning: Story = {
  args: {
    variant: "contained",
    color: "warning",
    size: "large",
    label: "Warning",
  },
};

const Error: Story = {
  args: {
    variant: "contained",
    color: "error",
    size: "large",
    label: "Error",
  },
};

const TextBtn: Story = {
  args: {
    variant: "text",
    color: "success",
    size: "small",
    label: "text",
  },
};

const ContainedBtn: Story = {
  args: {
    variant: "contained",
    color: "info",
    size: "small",
    label: "Contained",
  },
};

const OutlinedBtn: Story = {
  args: {
    variant: "outlined",
    color: "warning",
    size: "medium",
    label: "Outlined",
  },
};

const StartIconBtn: Story = {
  args: {
    variant: "contained",
    color: "success",
    size: "medium",
    label: "Start Icon",
    startIcon: ShoppingCart,
  },
};

const EndIconBtn: Story = {
  args: {
    variant: "contained",
    color: "info",
    size: "medium",
    label: "End Icon",
    endIcon: SendIcon,
  },
};

const LoadingBtn: Story = {
  args: {
    variant: "contained",
    color: "info",
    size: "medium",
    label: "End Icon",
    endIcon: SendIcon,
    loading: true,
    loadingPosition: "end",
  },
};

const DisabledBtn: Story = {
  args: {
    variant: "contained",
    color: "info",
    size: "medium",
    label: "Disabled",
    disabled: true,
  },
};

const HrefBtn: Story = {
  args: {
    variant: "contained",
    color: "info",
    size: "medium",
    label: "Button",
    href: "#link",
  },
};

export {
  Primary,
  Secondary,
  Success,
  Info,
  Warning,
  Error,
  TextBtn,
  ContainedBtn,
  OutlinedBtn,
  StartIconBtn,
  EndIconBtn,
  LoadingBtn,
  DisabledBtn,
  HrefBtn,
};
