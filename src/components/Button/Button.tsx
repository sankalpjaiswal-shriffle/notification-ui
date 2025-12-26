import { Button as ButtonMUI } from "@mui/material";
import type { ButtonProps } from "./types";

const Button = ({
  label,
  variant,
  size,
  color,
  disabled,
  onClick,
  startIcon: StartIcon,
  endIcon: EndIcon,
}: ButtonProps) => {
  return (
    <ButtonMUI
      sx={{
        fontWeight: "bold",
      }}
      variant={variant}
      size={size}
      color={color}
      onClick={onClick}
      disabled={disabled}
      startIcon={StartIcon ? <StartIcon /> : undefined}
      endIcon={EndIcon ? <EndIcon /> : undefined}
    >
      {label}
    </ButtonMUI>
  );
};

export default Button;
