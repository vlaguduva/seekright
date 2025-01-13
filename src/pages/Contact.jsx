import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import SeekRightIcon from '../components/SeekRightIcon';
import { useTheme } from '../components/ThemeContext';

const Contact = () => {
  const { darkMode, mode } = useTheme();

  return (
    <Container className={darkMode ? 'my-5 bg-dark text-white' : 'my-5 bg-light text-dark'}>
      
      <Row className="mb-4">
        <Col className="text-center">
          <SeekRightIcon width="64" height="64" className="contact-icon" />
          <h1>Contact Us</h1>
          <p className="lead">We'd love to hear from you!</p>
        </Col>
      </Row>
      <Row>
        <Col md={8} className="mx-auto">
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" required />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" required />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Your message" required />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3">
              Send Message
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact; 