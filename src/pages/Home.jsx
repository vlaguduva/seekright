import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import SeekRightIcon from '../components/SeekRightIcon';
import { useTheme } from '../components/ThemeContext';

const Home = () => {
  const { darkMode } = useTheme();

  return (
    <Container className={darkMode ? 'min-vh-99 d-flex flex-column justify-content-center bg-dark text-white' : 'min-vh-99 d-flex flex-column justify-content-center bg-light text-dark'}>
      <Row className="mb-4">
        <Col className="text-center">
          <SeekRightIcon width="64" height="64" className="home-icon" />
          <h1>Welcome to SeekRight</h1>
          <p className="lead">Your comprehensive AI assessment tool.</p>
          <Button variant="primary" href="/about">Learn More</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Features</h2>
          <ul>
            <li>AI-driven assessments</li>
            <li>User-friendly interface</li>
            <li>Real-time data analysis</li>
            <li>Comprehensive reporting tools</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Home; 