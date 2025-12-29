import { useState } from "react";

import {
  StyledAlert,
  StyledBox,
  StyledButton,
  StyledSnackBar,
  StyledTypography,
} from "./styles";

import { type SnackbarCloseReason } from "@mui/material";
import { Undo } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";

import { SEVERITY_ICONS, VARIANT, NOTIFICATION_ACTION, TEXT } from "./constant";
import type { NotificationProps } from "./types";

const Notification = ({
  variant,
  severity,
  heading,
  description,
  onOpen,
  onClose,
  onUndo,
  disabled = false,
  action = "none",
  autoHideDuration = null,
}: NotificationProps) => {
  const [open, setOpen] = useState(false);
  const Icon = SEVERITY_ICONS[severity];

  const handleOpen = () => {
    setOpen(true);
    onOpen();
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === TEXT.CLICKAWAY) {
      return;
    }
    setOpen(false);
    onClose();
  };

  const handleUndo = () => {
    onUndo();
  };

  const actions = () => {
    switch (action) {
      case NOTIFICATION_ACTION.NONE:
        return;

      case NOTIFICATION_ACTION.ALL:
        return (
          <StyledBox>
            <StyledButton
              aria-label="close"
              size="small"
              onClick={handleClose}
              disabled={disabled}
              typevariant={variant}
            >
              <CloseIcon sx={{ fontSize: 20 }} />
            </StyledButton>

            <StyledButton
              typevariant={variant}
              size="small"
              onClick={handleUndo}
              disabled={disabled}
            >
              <Undo sx={{ fontSize: 20 }} />
              {TEXT.UNDO}
            </StyledButton>
          </StyledBox>
        );
      case NOTIFICATION_ACTION.UNDO:
        return (
          <StyledBox>
            <StyledButton
              typevariant={variant}
              size="small"
              onClick={handleUndo}
              disabled={disabled}
            >
              <Undo sx={{ fontSize: 20 }} />
              {TEXT.UNDO}
            </StyledButton>
          </StyledBox>
        );

      case NOTIFICATION_ACTION.CLOSE:
        return (
          <StyledBox>
            <StyledButton
              aria-label="close"
              size="small"
              onClick={handleClose}
              disabled={disabled}
              typevariant={variant}
            >
              <CloseIcon sx={{ fontSize: 20 }} />
            </StyledButton>
          </StyledBox>
        );
    }
  };

  return (
    <>
      <button onClick={handleOpen}>{TEXT.OPEN}</button>
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
          icon={<Icon sx={{ fontSize: 24 }} />}
          variant={VARIANT[variant] as any}
          severity={severity}
          action={actions()}
          disabled={disabled}
        >
          <StyledTypography
            variant="h3"
            textAlign={"start"}
            fontSize={14}
            fontWeight={600}
          >
            {heading}
          </StyledTypography>
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
    </>
  );
};

export default Notification;
