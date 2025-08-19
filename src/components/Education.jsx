import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Education.css';

function Education() {
  const educationData = [
    {
      institution: 'Global Academy of Technology, Bangalore',
      degree: 'B.E in Artificial Intelligence & Machine Learning',
      duration: 'Ongoing'
    },
    {
      institution: 'Narayana College, Adoni',
      degree: 'Intermediate (11th & 12th)',
      duration: ''
    },
    {
      institution: 'Kiddys School, Adoni',
      degree: 'Primary & High School (1st - 10th)',
      duration: ''
    }
  ];

  return (
    <Container className="education-section">
      <h2 className="text-center mb-5 section-title">Education</h2>
      <Row>
        {educationData.map((edu, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="education-card h-100">
              <Card.Body>
                <Card.Title>{edu.institution}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{edu.degree}</Card.Subtitle>
                {edu.duration && <Card.Text>{edu.duration}</Card.Text>}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Education;
