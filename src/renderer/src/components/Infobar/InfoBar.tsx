import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBattery3,
  faTag,
  faUserCircle,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";
import { Storage } from "./Storage";

const InfoBar: React.FC = () => {
  const userName = "Mike Ratcliffe";
  const firmwareVersion = "12.0-v69";
  const batteryLevel = 100;
  const batteryCharge = "AC";
  const wifi = "On";
  const ip = "192.168.1.145";
  const title =
    "Temperature: 24.7°C\nMax Current: 1.7A\nMax Voltage: 5V\nMax Power: 8.5W";

  return (
    <Row className="ms-1 me-1">
      <Col xs={8}>
        <Row>
          <Col>
            <FontAwesomeIcon icon={faUserCircle} /> User: <br />
            <small id="device-user-name">{userName}</small>
          </Col>
          <Col>
            <FontAwesomeIcon icon={faTag} /> FW: <br />
            <span id="device-firmware-version">{firmwareVersion}</span>
          </Col>
          <Col>
            <div title={title}>
              <FontAwesomeIcon icon={faBattery3} className="me-1" />
              <span id="device-battery-level">{batteryLevel}</span>% <br />
              <small>
                Charge: <span id="device-battery-charge">{batteryCharge}</span>
              </small>
            </div>
          </Col>
          <Col>
            <FontAwesomeIcon icon={faWifi} className="me-1" />
            <span id="device-wifi">{wifi}</span>
            <br />
            <small>
              IP: <span id="device-ip">{ip}</span>
            </small>
          </Col>
        </Row>
      </Col>
      <Col xs={4}>
        <Storage size="112G" used="96G" />
      </Col>
    </Row>
  );
};

export { InfoBar };
