import type { SvgIconProps } from "@mui/material";
import type React from "react";

type variant = "text" | "contained" | "outlined";
type size = "small" | "medium" | "large";
type type = "button" | "submit" | "reset";
type color =
  | "primary"
  | "secondary"
  | "success"
  | "error"
  | "inherit"
  | "warning"
  | "info";

interface ButtonProps {
  label: string;
  variant: variant;
  size: size;
  color?: color;
  disabled?: boolean;
  onClick?: () => void;
  startIcon?: React.ElementType<SvgIconProps>;
  endIcon?: React.ElementType<SvgIconProps>;
  fullWidth?: boolean;
  type?: type;
  href?: string;
}

export type { ButtonProps };
