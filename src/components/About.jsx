import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css';

function About() {
  return (
    <Container className="about-section">
      <h2 className="text-center mb-4 section-title">About Me</h2>
      <Row className="justify-content-center">
        <Col md={8}>
          <p className="lead text-center">
            I am a passionate and driven student pursuing a Bachelor of Engineering in Artificial Intelligence and Machine Learning at Global Academy of Technology in Bangalore. My journey in technology started from my early school days and has evolved into a deep interest in full-stack development and intelligent systems. I am dedicated to building innovative and impactful solutions. Currently based in Bangalore, I am actively seeking opportunities to apply my skills to real-world challenges.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
