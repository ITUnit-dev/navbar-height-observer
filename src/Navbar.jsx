import { useContext } from "react";
import { useEffect } from "react";
import { useRef } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { observer } from "mobx-react-lite";
import { Context } from "./main";

function BasicExample() {
  const refNav = useRef(null);

  const { store } = useContext(Context);
  useEffect(() => {
    if (!refNav.current) return;
    const resizeObserver = new ResizeObserver(() => {
      console.log(refNav.current.offsetHeight);
      store.setHeight(refNav.current.offsetHeight);
    });
    resizeObserver.observe(refNav.current);
    return () => resizeObserver.disconnect();
  }, []);

  return (
    <Navbar ref={refNav} expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" s>
                Something
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default observer(BasicExample);
