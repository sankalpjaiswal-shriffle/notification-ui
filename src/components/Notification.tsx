import { Undo } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Typography, type SnackbarCloseReason } from "@mui/material";
import { useState } from "react";

import InfoIcon from "@mui/icons-material/Info";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DangerousIcon from "@mui/icons-material/Dangerous";
import WarningIcon from "@mui/icons-material/Warning";
import {
  StyledAlert,
  StyledButton,
  StyledIconButton,
  StyledSnackBar,
  StyledTypography,
} from "./Notification.styles";

export type NotificationSeverity = "success" | "info" | "error" | "warning";

export type NotificationVariant = "primary" | "secondary" | "default";

export type NotificationAction = "all" | "undo" | "close" | "none";

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
const severityIcon = {
  success: <CheckCircleIcon sx={{ fontSize: 24 }} />,
  info: <InfoIcon sx={{ fontSize: 24 }} />,
  error: <DangerousIcon sx={{ fontSize: 24 }} />,
  warning: <WarningIcon sx={{ fontSize: 24 }} />,
};

const variantObj = {
  primary: "filled",
  secondary: "standard",
  default: "secondary",
};

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
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              boxSizing: "border-box",
              marginRight: 0,
            }}
          >
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
          </Box>
        </>
      );
    }

    if (action === "undo") {
      return (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <StyledButton
            typevariant={variant}
            size="small"
            onClick={handleUndo}
            disabled={disabled}
          >
            <Undo />
            Undo
          </StyledButton>
        </Box>
      );
    }

    if (action === "close") {
      return (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <StyledIconButton
            aria-label="close"
            size="small"
            onClick={handleClose}
            disabled={disabled}
            typevariant={variant}
          >
            <CloseIcon />
          </StyledIconButton>
        </Box>
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
