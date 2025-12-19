import { Alert, Button, IconButton, Snackbar, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import type { NotificationAction, NotificationVariant } from "./Notification";

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

export const StyledButton = styled(Button, {
  shouldForwardProp: (props) => props !== "variant",
})<CustomVariant>(({ typevariant }) => ({
  color: typevariant === "primary" ? "inherit" : "#212121",
  height: 20,
  width: 20,
}));

export const StyledIconButton = styled(IconButton, {
  shouldForwardProp: (props) => props !== "variant",
})<CustomVariant>(({ typevariant }) => ({
  color: typevariant === "primary" ? "inherit" : "#212121",
  height: 24,
  width: 24,
}));

export const StyledAlert = styled(Alert)<CustomAction>(
  ({ actiontype, disabled }) => ({
    display: "flex",
    alignItems: "center",
    boxSizing: "border-box",
    minWidth: 344,
    height: actiontype === "all" ? 64 : actiontype === "none" ? 40 : 56,
    maxWidth: 544,
    width: "100%",
    padding: "8px 16px",
    borderRadius: 4,
    "& .MuiAlert-action": {
      padding: "0px",
      marginRight: "0px",
    },
    ...(disabled && {
      "&.MuiAlert-root": {
        color: "#9e9e9e",
        opacity: 0.7,
      },
      "&.MuiAlert-icon": {
        color: "#9e9e9e",
        opacity: 0.7,
      },
    }),
  })
);

export const StyledSnackBar = styled(Snackbar)<CustomAction>(
  ({ actiontype, disabled }) => ({
    minWidth: 344,
    maxWidth: 544,
    boxSizing: "border-box",
    height: actiontype === "all" ? 64 : actiontype === "none" ? 40 : 56,
    padding: "8px 16px",
    ...(disabled && {
      "&.MuiSnackbarContent-root": { color: "#9e9e9e", opacity: 0.7 },
    }),
  })
);

export const StyledTypography = styled(Typography)<CustomTypography>(
  ({ disabled, typevariant }) => ({
    color: typevariant === "secondary" && !disabled ? "#212121" : "inherit",
    ...(disabled && {
      "& .MuiTypography-body2": {
        color: "textDisabled",
      },
    }),
  })
);
