import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

import Techstack from '../Techstack';
import Aboutcard from '../AboutCard';

function AboutView() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: 'center', padding: '10px' }}>
          <Col
            md={7}
            style={{
              justifyContent: 'center',
              paddingTop: '30px',
              paddingBottom: '50px',
            }}
          >
            <h1 style={{ fontSize: '2.1em', paddingBottom: '20px' }}>
              Know Who <strong className="purple">We are</strong>
            </h1>
            <Aboutcard />
          </Col>
        </Row>
        <h1 className="project-heading">
          <strong className="purple"> Our Team </strong>
        </h1>

        <Techstack />
      </Container>
    </Container>
  );
}

export default AboutView;
