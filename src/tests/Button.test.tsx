import { render, screen, fireEvent } from "@testing-library/react";
import ButtonTest from "../components/Button/Button";
import type { ButtonProps as props } from "../components/Button/types";
import { describe, vi, it, expect } from "vitest";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import SendIcon from "@mui/icons-material/Send";

const onClick = vi.fn();

const ButtonProps: props = {
  variant: "contained",
  label: "button",
  size: "small",
};

describe("Button Component", () => {
  it("Submit Button", () => {
    render(<ButtonTest {...ButtonProps} type="submit" />);
    const submitBtn = screen.getByRole("button");
    expect(submitBtn).toHaveAttribute("type", "submit");
  });

  it("Reset Button", () => {
    render(<ButtonTest {...ButtonProps} type="reset" />);
    const ResetBtn = screen.getByRole("button");
    expect(ResetBtn).toHaveAttribute("type", "reset");
  });

  it("Primary Button", () => {
    render(<ButtonTest {...ButtonProps} color="primary" />);
    const primary = screen.getByRole("button");
    expect(primary).toHaveClass("MuiButton-colorPrimary");
  });

  it("Secondary Button", () => {
    render(<ButtonTest {...ButtonProps} color="secondary" />);
    const secondary = screen.getByRole("button");
    expect(secondary).toHaveClass("MuiButton-colorSecondary");
  });

  it("Success Button", () => {
    render(<ButtonTest {...ButtonProps} color="success" />);
    const success = screen.getByRole("button");
    expect(success).toHaveClass("MuiButton-colorSuccess");
  });

  it("Info Button", () => {
    render(<ButtonTest {...ButtonProps} color="info" />);
    const InfoBtn = screen.getByRole("button");
    expect(InfoBtn).toHaveClass("MuiButton-colorInfo");
  });

  it("Warning Button", () => {
    render(<ButtonTest {...ButtonProps} color="warning" />);
    const WarningBtn = screen.getByRole("button");
    expect(WarningBtn).toHaveClass("MuiButton-colorWarning");
  });

  it("Error Button", () => {
    render(<ButtonTest {...ButtonProps} color="error" />);
    const ErorrBtn = screen.getByRole("button");
    expect(ErorrBtn).toHaveClass("MuiButton-colorError");
  });

  it("Inherit Button", () => {
    render(<ButtonTest {...ButtonProps} color="inherit" />);
    const InheritBtn = screen.getByRole("button");
    expect(InheritBtn).toHaveClass("MuiButton-colorInherit");
  });

  it("Text Button", () => {
    render(<ButtonTest {...ButtonProps} variant="text" />);
    const TextBtn = screen.getByRole("button");
    expect(TextBtn).toHaveClass("MuiButton-text");
  });

  it("Contained Button", () => {
    render(<ButtonTest {...ButtonProps} />);
    const ContainedBtn = screen.getByRole("button");
    expect(ContainedBtn).toHaveClass("MuiButton-contained");
  });

  it("Outlined Button", () => {
    render(<ButtonTest {...ButtonProps} variant="outlined" />);
    const OutlinedBtn = screen.getByRole("button");
    expect(OutlinedBtn).toHaveClass("MuiButton-outlined");
  });

  it("StartIcon Button", () => {
    render(<ButtonTest {...ButtonProps} startIcon={ShoppingCart} />);
    const Button = screen.getByRole("button");
    const StartIcon = screen.getByTestId("ShoppingCartIcon");
    expect(Button).toBeInTheDocument();
    expect(StartIcon).toBeInTheDocument();
  });

  it("EndIcon Button", () => {
    render(<ButtonTest {...ButtonProps} endIcon={SendIcon} />);
    const Button = screen.getByRole("button");
    const EndIcon = screen.getByTestId("SendIcon");
    expect(Button).toBeInTheDocument();
    expect(EndIcon).toBeInTheDocument();
  });

  it("Button with fullWidth", () => {
    render(<ButtonTest {...ButtonProps} fullWidth={true} />);
    const Button = screen.getByRole("button");
    expect(Button).toHaveClass("MuiButton-fullWidth");
  });

  it("Button with onclick handler check", () => {
    render(<ButtonTest {...ButtonProps} onClick={onClick} />);
    const Button = screen.getByRole("button");
    fireEvent.click(Button);
    expect(onClick).toBeCalledTimes(1);
  });

  it("Disabled Button", () => {
    render(<ButtonTest {...ButtonProps} disabled={true} />);
    const Button = screen.getByRole("button");
    expect(Button).toBeDisabled();
  });

  it("Medium Button", () => {
    render(<ButtonTest {...ButtonProps} size="medium" />);
    const mediumBtn = screen.getByRole("button");
    expect(mediumBtn).toHaveClass("MuiButton-sizeMedium");
  });

  it("Large Button", () => {
    render(<ButtonTest {...ButtonProps} size="large" />);
    const LargeBtn = screen.getByRole("button");
    expect(LargeBtn).toHaveClass("MuiButton-sizeLarge");
  });

  it("Button with href link", () => {
    render(<ButtonTest {...ButtonProps} href="#link" />);
    const button = screen.getByRole("link");
    expect(button).toHaveAttribute("href", "#link");
  });

  it("Button with label text", () => {
    render(<ButtonTest {...ButtonProps} label="Test" />);
    const button = screen.getByRole("button");
    const label = screen.getByText(/test/i);
    expect(button).toBeInTheDocument();
    expect(label).toBeInTheDocument();
  });

  //Negative scenario
  it("When button is disabled onClick handler should not work", () => {
    render(<ButtonTest {...ButtonProps} onClick={onClick} disabled={true} />);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
    fireEvent.click(button);
    expect(onClick).not.toBeCalledTimes(1);
  });
});
