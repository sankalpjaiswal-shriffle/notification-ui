import InfoIcon from "@mui/icons-material/Info";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DangerousIcon from "@mui/icons-material/Dangerous";
import WarningIcon from "@mui/icons-material/Warning";

export const severityIcon = {
  success: <CheckCircleIcon sx={{ fontSize: 24 }} />,
  info: <InfoIcon sx={{ fontSize: 24 }} />,
  error: <DangerousIcon sx={{ fontSize: 24 }} />,
  warning: <WarningIcon sx={{ fontSize: 24 }} />,
};

export const variantObj = {
  primary: "filled",
  secondary: "standard",
  default: "secondary",
};

export const notificationAction = {
  all: "all",
  undo: "undo",
  close: "close",
  none: "none",
};

export const notificationHeight = {
  all: 64,
  oneButton: 56,
  none: 40,
};
