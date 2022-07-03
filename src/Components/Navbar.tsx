import React from "react";
import { Container, Form, Nav, Navbar } from "react-bootstrap";
import { Link, Route, Routes } from "react-router-dom";
import AddZodiacButton from "./AddZodiacButton";
import LanguagesSelect from "./LanguagesSelect";

export default function NavbarComponent() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Hroscope-Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/zodiac">
              Zodiac
            </Nav.Link>
            <Nav.Link as={Link} to="/languages">
              Languages
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Routes>
            <Route path="/Zodiac" element={<LanguagesSelect />} />
          </Routes>
          <Routes>
            <Route path="/Zodiac/:lang" element={<AddZodiacButton />} />
          </Routes>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
