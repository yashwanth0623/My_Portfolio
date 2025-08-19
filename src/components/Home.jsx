import React from 'react';
import { Container } from 'react-bootstrap';
import './Home.css';

function Home() {
  return (
    <Container fluid className="home-section">
      <div className="home-content">
        
        {/* The div has been replaced with this img tag */}
        <img 
          src="/pic.jpg" 
          alt="M Yashwanth profile picture" 
          className="profile-pic mb-4" 
        />
        
        <h1 className="display-4 fw-bold">M YASHWANTH</h1>
        <p className="lead">Aspiring AI & Machine Learning Engineer | Full Stack Developer</p>
        
        <div className="social-links-wrapper mt-4">
          <div className="d-flex justify-content-center flex-wrap">
            <a href="https://github.com/yashwanth0623" target="_blank" rel="noopener noreferrer" className="btn btn-social me-2 mb-2">GitHub</a>
            <a href="https://www.linkedin.com/in/yashwanth-m-/" target="_blank" rel="noopener noreferrer" className="btn btn-social ms-2 mb-2">LinkedIn</a>
          </div>
          <div className="d-flex justify-content-center">
            <a href="https://x.com/yashwanth_zzz" target="_blank" rel="noopener noreferrer" className="btn btn-social mt-2">X (Twitter)</a>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Home;
