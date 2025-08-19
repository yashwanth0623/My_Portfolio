import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-white text-center p-3 mt-5">
      <Container>
        <p>&copy; {new Date().getFullYear()} M Yashwanth. All Rights Reserved.</p>
      </Container>
    </footer>
  );
}

export default Footer;
