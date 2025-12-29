import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import Notification from "../components/Notification";
import type { NotificationProps } from "../components/Notification";
import { describe, expect, it, vi } from "vitest";

const onOpen = vi.fn();
const onClose = vi.fn();

const notificationProps: NotificationProps = {
  variant: "primary",
  severity: "success",
  heading: "Success",
  description: "Task completed",
  onOpen: onOpen,
  onClose: onClose,
};

describe("Notification component", () => {
  const consoleSpy = vi.spyOn(console, "log");

  it("Notification open", () => {
    render(<Notification {...notificationProps} />);

    fireEvent.click(screen.getByText("Open"));
    expect(onOpen).toHaveBeenCalledTimes(1);
  });

  it("Notification with heading and description", () => {
    render(<Notification {...notificationProps} action="none" />);
    fireEvent.click(screen.getByText("Open"));
    expect(screen.getByText("Success")).toBeInTheDocument();
    expect(screen.getByText("Task completed")).toBeInTheDocument();
  });

  it("Notification with undo button", () => {
    render(<Notification {...notificationProps} action="undo" />);
    fireEvent.click(screen.getByText("Open"));
    expect(
      screen.getByText("UNDO", {
        exact: false,
      })
    ).toBeInTheDocument();
  });

  it("Notificatin with close button", () => {
    render(<Notification {...notificationProps} action="close" />);
    fireEvent.click(screen.getByText("Open"));
    expect(screen.getByLabelText("close")).toBeInTheDocument();
  });

  it("Disabled notification with Undo and close button ", () => {
    render(<Notification {...notificationProps} action="all" disabled />);
    fireEvent.click(screen.getByText("Open"));
    expect(
      screen.getByText("UNDO", {
        exact: false,
      })
    ).toBeDisabled();
    expect(screen.getByLabelText("close")).toBeDisabled();
  });

  it("Close notfication using close button", () => {
    render(<Notification {...notificationProps} action="close" />);
    fireEvent.click(screen.getByText("Open"));
    const closeBtn = screen.getByLabelText("close");
    fireEvent.click(closeBtn);
    expect(closeBtn).not.toBeVisible();
  });

  it("Notification Undo button working", () => {
    render(<Notification {...notificationProps} action="undo" />);
    fireEvent.click(screen.getByText("Open"));
    const undoBtn = screen.getByText("UNDO", { exact: false });
    fireEvent.click(undoBtn);
    expect(consoleSpy).toHaveBeenCalledTimes(1);
    expect(consoleSpy).toHaveBeenCalledWith("Undo");
  });

  it("Notification with action none", () => {
    render(<Notification {...notificationProps} action="none" />);
    fireEvent.click(screen.getByText("Open"));
    const undoBtn = screen.queryByText("UNDO", { exact: false });
    const closeBtn = screen.queryByLabelText("close");
    expect(closeBtn).toBeNull();
    expect(undoBtn).not.toBeInTheDocument();
    expect(closeBtn).not.toBeInTheDocument();
  });

  //Negative scenario
  it("Not closing notification when clickaway event", async () => {
    render(<Notification {...notificationProps} action="close" />);
    fireEvent.click(screen.getByText("Open"));

    await userEvent.click(document.body);

    await waitFor(() => {
      expect(onClose).not.toHaveBeenCalled();
    });
  });

  it("When disabled is true on notification click not working ", () => {
    render(
      <Notification {...notificationProps} action="close" disabled={true} />
    );
    fireEvent.click(screen.getByText("Open"));
    const closeBtn = screen.getByLabelText("close");
    expect(closeBtn).toBeDisabled();
    fireEvent.click(closeBtn);
    expect(onClose).not.toHaveBeenCalled();
  });

  it("When pass invalid action to notification", () => {
    render(<Notification {...notificationProps} action="test" />);
    fireEvent.click(screen.getByText("Open"));

    const closeBtn = screen.queryByLabelText("close");
    const undoBtn = screen.queryByText("UNDO");
    expect(closeBtn).not.toBeInTheDocument();
    expect(undoBtn).not.toBeInTheDocument();
  });
});
