import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Skills.css';

// Skill data remains the same
const skills = [
  { name: 'JavaScript', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' },
  { name: 'Python', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg' },
  { name: 'Java', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg' },
  { name: 'C', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg' },
  { name: 'React', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg' },
  { name: 'MySQL', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg' },
  { name: 'HTML5', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg' },
  { name: 'CSS3', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg' },
];

function Skills() {
  return (
    <Container className="skills-section">
      <h2 className="text-center mb-5 section-title">Technical Skills</h2>
      <Row className="justify-content-center">
        {skills.map(skill => (
          // Use different column sizes for different breakpoints
          <Col xs={4} sm={3} md={2} key={skill.name} className="text-center mb-4">
            <div className="skill-card">
              <img src={skill.logo} alt={`${skill.name} logo`} className="skill-logo" />
              <p className="mt-2">{skill.name}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Skills;
