import { Undo } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import { Typography, type SnackbarCloseReason } from "@mui/material";
import { useState } from "react";
import type {
  NotificationAction,
  NotificationSeverity,
  NotificationVariant,
} from "./Notification.types";

import {
  StyledAlert,
  StyledBox,
  StyledButton,
  StyledIconButton,
  StyledSnackBar,
  StyledTypography,
} from "./Notification.styles";
import { severityIcon, variantObj } from "./Notification.constant";

export interface NotificationProps {
  variant: NotificationVariant;
  severity: NotificationSeverity;
  heading: string;
  description: string;
  disabled?: boolean;
  action?: NotificationAction;
  onOpen: () => void;
  onClose: () => void;
  autoHideDuration?: number | null;
}

const Notification = ({
  variant,
  severity,
  heading,
  description,
  onOpen,
  onClose,
  disabled = false,
  action = "none",
  autoHideDuration = null,
}: NotificationProps) => {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(true);
    onOpen();
  }

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
    onClose();
  };

  const handleUndo = () => {
    console.log("Undo");
  };

  const actions = () => {
    if (action === "none") return;

    if (action === "all") {
      return (
        <>
          <StyledBox>
            <StyledIconButton
              aria-label="close"
              size="small"
              onClick={handleClose}
              disabled={disabled}
              typevariant={variant}
            >
              <CloseIcon />
            </StyledIconButton>

            <StyledButton
              typevariant={variant}
              size="small"
              onClick={handleUndo}
              disabled={disabled}
            >
              <Undo />
              Undo
            </StyledButton>
          </StyledBox>
        </>
      );
    }

    if (action === "undo") {
      return (
        <StyledBox>
          <StyledButton
            typevariant={variant}
            size="small"
            onClick={handleUndo}
            disabled={disabled}
          >
            <Undo />
            Undo
          </StyledButton>
        </StyledBox>
      );
    }

    if (action === "close") {
      return (
        <StyledBox>
          <StyledIconButton
            aria-label="close"
            size="small"
            onClick={handleClose}
            disabled={disabled}
            typevariant={variant}
          >
            <CloseIcon />
          </StyledIconButton>
        </StyledBox>
      );
    }
  };

  return (
    <div>
      <button onClick={handleOpen}>Open</button>
      <StyledSnackBar
        actiontype={action}
        open={open}
        autoHideDuration={autoHideDuration}
        onClose={handleClose}
        disabled={disabled}
      >
        <StyledAlert
          actiontype={action}
          elevation={6}
          role="alert"
          icon={severityIcon[severity]}
          variant={variantObj[variant] as any}
          severity={severity}
          action={actions()}
          disabled={disabled}
        >
          <Typography
            variant="h3"
            textAlign={"start"}
            fontSize={14}
            fontWeight={600}
          >
            {heading}
          </Typography>
          {description && (
            <StyledTypography
              variant="body2"
              typevariant={variant}
              fontSize={12}
              textAlign={"start"}
              disabled={disabled}
            >
              {description}
            </StyledTypography>
          )}
        </StyledAlert>
      </StyledSnackBar>
    </div>
  );
};

export default Notification;
