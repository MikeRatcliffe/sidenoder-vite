import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRefresh, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { type IconDefinition } from "@fortawesome/fontawesome-svg-core";

const DeviceButton: React.FC<{
  label: string;
  connectionState: "disconnected" | "connecting" | "connected";
  id: string | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}> = ({ label, connectionState, id, onClick, disabled = false }) => {
  let icon: IconDefinition;
  let variant: string;

  switch (connectionState) {
    case "disconnected":
      icon = faRefresh;
      variant = "danger";
      break;
    case "connecting":
      icon = faRefresh;
      variant = "warning";
      break;
    case "connected":
      icon = faCheckCircle;
      variant = "success";
      break;
  }

  return (
    <Button
      variant={variant}
      onClick={onClick}
      size="sm"
      className="me-1"
      id={id}
      disabled={disabled}
    >
      <FontAwesomeIcon
        icon={icon}
        className={connectionState === "connecting" ? "fa-spin" : ""}
      />{" "}
      | {label}:
      <br />
      {connectionState}
    </Button>
  );
};

export { DeviceButton };
