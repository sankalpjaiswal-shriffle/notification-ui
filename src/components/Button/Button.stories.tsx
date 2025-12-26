import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import { fn } from "storybook/test";
import type { ButtonProps } from "./types";
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

const ButtonWrapper = (args: ButtonProps) => {
  return <Button {...args} onClick={() => args?.onClick?.()} />;
};

const Primary: Story = {
  render: (args) => <ButtonWrapper {...args} />,
  args: {
    variant: "contained",
    color: "primary",
    size: "small",
    label: "Primary",
  },
};

const Secondary: Story = {
  render: (args) => <ButtonWrapper {...args} />,
  args: {
    variant: "contained",
    color: "secondary",
    size: "medium",
    label: "Secondary",
  },
};

const Success: Story = {
  render: (args) => <ButtonWrapper {...args} />,
  args: {
    variant: "contained",
    color: "success",
    size: "large",
    label: "Success",
  },
};

const Info: Story = {
  render: (args) => <ButtonWrapper {...args} />,
  args: {
    variant: "contained",
    color: "info",
    size: "large",
    label: "Info",
  },
};

const TextBtn: Story = {
  render: (args) => <ButtonWrapper {...args} />,
  args: {
    variant: "text",
    color: "success",
    size: "small",
    label: "text",
  },
};

const ContainedBtn: Story = {
  render: (args) => <ButtonWrapper {...args} />,
  args: {
    variant: "contained",
    color: "info",
    size: "small",
    label: "Contained",
  },
};

const OutlinedBtn: Story = {
  render: (args) => <ButtonWrapper {...args} />,
  args: {
    variant: "outlined",
    color: "warning",
    size: "medium",
    label: "Outlined",
  },
};

const StartIconBtn: Story = {
  render: (args) => <ButtonWrapper {...args} />,
  args: {
    variant: "contained",
    color: "success",
    size: "medium",
    label: "Start Icon",
    startIcon: ShoppingCart,
  },
};

const EndIconBtn: Story = {
  render: (args) => <ButtonWrapper {...args} />,
  args: {
    variant: "contained",
    color: "info",
    size: "medium",
    label: "Start Icon",
    endIcon: SendIcon,
  },
};

const DisabledBtn: Story = {
  render: (args) => <ButtonWrapper {...args} />,
  args: {
    variant: "contained",
    color: "info",
    size: "medium",
    label: "Disabled",
    disabled: true,
  },
};

export {
  Primary,
  Secondary,
  Success,
  Info,
  TextBtn,
  ContainedBtn,
  OutlinedBtn,
  StartIconBtn,
  EndIconBtn,
  DisabledBtn,
};
