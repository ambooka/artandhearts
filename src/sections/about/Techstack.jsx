import React from 'react';
import { Col, Row } from 'react-bootstrap';

function Techstack() {
  const managementPositions = [
    {
      name: 'Jane Doe',
      position: 'Director and Founder',
      img: 'src/Assets/avatar.svg',
    },
    { name: 'John Doe', position: 'Deputy Director', img: 'src/Assets/avatar.svg' },
    { name: 'XXXX XXXX', position: 'Chairperson', img: 'src/Assets/avatar.svg' },
    // Add more positions with their respective names and images
  ];

  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      {managementPositions.map((position, index) => (
        <Col key={index} xs={12} sm={6} md={4} lg={3} className="tech-icon-col">
          <div className="profile-card">
            <img className="circular-image" src={position.img} alt={position.position} />
            <div className="profile-info">
              <span className="position">{position.position}</span>
              <br />
              <span className="name">{position.name}</span>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
