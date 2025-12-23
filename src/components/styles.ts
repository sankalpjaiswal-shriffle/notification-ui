import {
  Alert,
  Box,
  Button,
  IconButton,
  Snackbar,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  NOTIFICATION_ACTION,
  NOTIFICATION_HEIGHT,
  NOTIFICATION_PADDING,
} from "./constant";

import type { CustomAction, CustomTypography, CustomVariant } from "./types";

const StyledButton = styled(Button, {
  shouldForwardProp: (props) => props !== "variant",
})<CustomVariant>(({ typevariant }) => ({
  color: typevariant === "PRIMARY" ? "inherit" : "#212121",
  height: 24,
  width: 24,
}));

const StyledAlert = styled(Alert)<CustomAction>(({ actiontype, disabled }) => ({
  display: "flex",
  alignItems: "center",
  boxSizing: "border-box",
  minWidth: 344,
  height:
    actiontype === NOTIFICATION_ACTION.ALL
      ? NOTIFICATION_ACTION.ALL
      : actiontype === NOTIFICATION_ACTION.NONE
      ? NOTIFICATION_HEIGHT.NONE
      : NOTIFICATION_HEIGHT.BUTTON,
  maxWidth: 544,
  width: "100%",
  padding: `${NOTIFICATION_PADDING.VERTICAl} ${NOTIFICATION_PADDING.HORIZONATAL}`,
  borderRadius: 4,
  "& .MuiAlert-action": {
    padding: "0px",
    marginRight: "0px",
  },
  ...(disabled && {
    "&.MuiAlert-root": {
      color: "#9e9e9e",
      opacity: 0.7,
      backgroundColor: "#fff",
    },
    "&.MuiAlert-icon": {
      color: "#9e9e9e",
      opacity: 0.7,
    },
    "& .MuiSvgIcon-root": {
      color: "#9e9e9e",
      opacity: 0.7,
    },
  }),
}));

const StyledSnackBar = styled(Snackbar)<CustomAction>(
  ({ actiontype, disabled }) => ({
    minWidth: 344,
    maxWidth: 544,
    boxSizing: "border-box",
    height:
      actiontype === NOTIFICATION_ACTION.ALL
        ? NOTIFICATION_HEIGHT.ALL
        : actiontype === NOTIFICATION_ACTION.NONE
        ? NOTIFICATION_HEIGHT.NONE
        : NOTIFICATION_HEIGHT.BUTTON,
    padding: `${NOTIFICATION_PADDING.VERTICAl} ${NOTIFICATION_PADDING.HORIZONATAL}`,
    ...(disabled && {
      "&.MuiSnackbarContent-root": {
        color: "#9e9e9e",
        opacity: 0.7,
      },
    }),
  })
);

const StyledTypography = styled(Typography)<CustomTypography>(
  ({ disabled, typevariant }) => ({
    color: typevariant === "SECONDARY" && !disabled ? "#212121" : "inherit",
    ...(disabled && {
      "& .MuiTypography-body2": {
        color: "textDisabled",
      },
    }),
  })
);

const StyledBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  boxSizing: "border-box",
}));

export {
  StyledBox,
  StyledAlert,
  StyledSnackBar,
  StyledButton,
  StyledIconButton,
  StyledTypography,
};
