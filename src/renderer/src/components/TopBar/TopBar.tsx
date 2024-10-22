import { Button, Nav, Navbar } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBug, faCog, faFolderOpen, faList } from '@fortawesome/free-solid-svg-icons'
import { DeviceButton } from './DeviceButton'
import icon from '/src/assets/icon.svg'

const TopBar: React.FC = () => {
  return (
    <Navbar sticky="top" expand={true} className="pt-1 pb-1">
      <Nav>
        <Navbar.Brand href="#home" className="p-0">
          <img src={icon} width="50" height="50" alt="Sidenoder" />
        </Navbar.Brand>
        <Button variant="primary" className="me-1" onClick={() => {}}>
          <FontAwesomeIcon icon={faFolderOpen} /> Browse
        </Button>
        <Button variant="info" id="remote-btn" className="me-1" disabled onClick={() => {}}>
          <FontAwesomeIcon icon={faFolderOpen} /> Remote
        </Button>
        <Button variant="primary" className="me-1" onClick={() => {}}>
          <FontAwesomeIcon icon={faList} /> Remote
        </Button>
        <Button variant="primary" className="me-1" onClick={() => {}}>
          <FontAwesomeIcon icon={faBug} />
        </Button>
        <Button variant="primary" className="me-1" title="Settings" onClick={() => {}}>
          <FontAwesomeIcon icon={faCog} />
        </Button>
      </Nav>
      <Nav className="ms-auto">
        <DeviceButton label="MOUNT" connectionState="disconnected" id="mount-btn" />
        <DeviceButton label="DEVICE" connectionState="connected" id="device-btn" />
        <DeviceButton label="WIRELESS" connectionState="connecting" id="wireless-btn" />
      </Nav>
    </Navbar>
  )
}

export { TopBar }
