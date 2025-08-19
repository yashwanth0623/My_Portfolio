import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Contact.css';

function Contact() {
  return (
    <Container className="contact-section">
      <h2 className="text-center mb-4 section-title">Get in Touch</h2>
      <Row className="justify-content-center text-center">
        <Col md={6}>
          <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out to me.</p>
          <p><strong>Email:</strong> <a href="mailto:yashwanthmantha2005@gmail.com">yashwanthmantha2005@gmail.com</a></p>
          <p><strong>Phone:</strong> +91 9985223310</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
