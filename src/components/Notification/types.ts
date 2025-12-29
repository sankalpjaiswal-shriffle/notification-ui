type NotificationSeverity = "success" | "info" | "error" | "warning";

type NotificationVariant = "PRIMARY" | "SECONDARY" | "DEFAULT";

type NotificationAction = "all" | "undo" | "close" | "none";

interface CustomVariant {
  typevariant?: NotificationVariant;
}

interface CustomAction {
  actiontype: NotificationAction;
  disabled?: boolean;
}

interface CustomTypography extends CustomVariant {
  disabled?: boolean;
}

interface NotificationProps {
  variant: NotificationVariant;
  severity: NotificationSeverity;
  heading: string;
  description: string;
  disabled?: boolean;
  action?: NotificationAction;
  onOpen: () => void;
  onClose: () => void;
  onUndo: () => void;
  autoHideDuration?: number | null;
}

export type {
  CustomAction,
  CustomTypography,
  NotificationAction,
  NotificationSeverity,
  NotificationVariant,
  CustomVariant,
  NotificationProps,
};
