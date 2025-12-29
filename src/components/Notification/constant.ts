import InfoIcon from "@mui/icons-material/Info";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DangerousIcon from "@mui/icons-material/Dangerous";
import WarningIcon from "@mui/icons-material/Warning";

const SEVERITY_ICONS = {
  success: CheckCircleIcon,
  info: InfoIcon,
  error: DangerousIcon,
  warning: WarningIcon,
};

const VARIANT = {
  PRIMARY: "filled",
  SECONDARY: "standard",
  DEFAULT: "secondary",
};

const NOTIFICATION_ACTION = {
  ALL: "all",
  UNDO: "undo",
  CLOSE: "close",
  NONE: "none",
};

const NOTIFICATION_HEIGHT = {
  ALL: 64,
  BUTTON: 56,
  NONE: 40,
};

const NOTIFICATION_PADDING = {
  VERTICAl: "8px",
  HORIZONATAL: "16px",
};

const TEXT = {
  OPEN: "Open",
  CLICKAWAY: "clickaway",
  UNDO: "Undo",
};

export {
  NOTIFICATION_ACTION,
  NOTIFICATION_HEIGHT,
  NOTIFICATION_PADDING,
  VARIANT,
  TEXT,
  SEVERITY_ICONS,
};
