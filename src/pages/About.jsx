import React from 'react';
import { Container, Row, Col, Card, Button, ToggleButton, ButtonGroup } from 'react-bootstrap';
import SeekRightIcon from '../components/SeekRightIcon';
import { useTheme } from '../components/ThemeContext';
import './About.css';

const About = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <Container className={darkMode ? 'my-5 bg-dark text-white' : 'my-5 bg-light text-dark'}>
      <Row className="mb-4">
        <Col className="text-center">
          <SeekRightIcon width="64" height="64" className="about-icon" />
          <h1>About SeekRight</h1>
          <p className="lead">Your comprehensive AI assessment tool.</p>
        </Col>
      </Row>
      <Row>
        <Col md={6} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Our Mission</Card.Title>
              <Card.Text>
                At SeekRight, we aim to provide the best tools and resources for assessment of various concepts, ideas and assets using AI. Our mission is to simplify the process and ensure that our users have access to the most accurate and up-to-date information.
              </Card.Text>
              <Button variant="primary" href="/contact">Contact Us</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Our Vision</Card.Title>
              <Card.Text>
                We envision a world where compliance quality reporting is seamless and efficient. Our goal is to empower businesses and individuals with the knowledge and tools they need to succeed in their compliance efforts.
              </Card.Text>
              <Button variant="primary" href="/services">Our Services</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Why Choose Us?</h2>
          <ul>
            <li>Expertise in compliance quality reporting.</li>
            <li>User-friendly tools and resources.</li>
            <li>Dedicated support and guidance.</li>
            <li>Continuous updates and improvements.</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default About; 