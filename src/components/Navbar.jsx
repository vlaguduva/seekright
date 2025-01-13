import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../components/ThemeContext';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { IoHome, IoList, IoInformationCircle, IoMail, IoSunny, IoMoon } from 'react-icons/io5';
import SeekRightIcon from './SeekRightIcon';
import '../styles/Navbar.css';

function NavBar() {
  const { darkMode, mode, toggleDarkMode } = useTheme();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Home', icon: <IoHome /> },
    { path: '/assessment', label: 'Assessment', icon: <IoList /> },
    { path: '/about', label: 'About', icon: <IoInformationCircle /> },
    { path: '/contact', label: 'Contact', icon: <IoMail /> },
  ];

  return (
    <Navbar bg={mode} variant={mode} expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <SeekRightIcon width="32" height="32" className="nav-icon" />
          <span className="brand-name">SeekRight</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setIsMenuOpen(!isMenuOpen)} />
        <Navbar.Collapse id="basic-navbar-nav" className={isMenuOpen ? 'show' : ''}>
          <Nav className="me-auto">
            {navLinks.map(link => (
              <Nav.Link
                key={link.path}
                as={Link}
                to={link.path}
                className={location.pathname === link.path ? 'active' : ''}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.icon}
                {link.label}
              </Nav.Link>
            ))}
          </Nav>
          <Button variant="outline-secondary" onClick={toggleDarkMode} className="ms-2">
            {darkMode ? <IoSunny /> : <IoMoon />}
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;