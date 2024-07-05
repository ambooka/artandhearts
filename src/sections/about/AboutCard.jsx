import React from 'react';
import Card from 'react-bootstrap/Card';

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: 'justify' }}>
            <span className="purple">Art And Hearts </span>
            Art and Hearts is a community-based organization in Kilifi County, Kenya, that empowers
            youth, children, and young mothers through art. We utilize art as a tool for social
            awareness, mental health promotion, and economic opportunity creation. This concept
            paper outlines our mission, achievements, future plans, and current needs.{' '}
            <span className="purple">CBOs, Kenya</span>
            at the Ministry of Internal Affairs and the Ministry of Gender, Labor, and Social
            Development.
            <br />
            <br />
            <h1 style={{ fontSize: '2.1em', paddingTop: '20px' }}>
              <strong className="purple">Background</strong>
            </h1>
            Kilifi County faces challenges like drug use and crime, often affecting youth. Art and
            Hearts believes art can be a powerful force for positive change. We provide art and
            crocheting classes, organize art exhibitions, and conduct outreach programs to:
            <br />
            <ul>
              <li>Address social issues like drug abuse and crime through artistic expression.</li>
              <li>
                Advocate for a sober and drug-free society by promoting positive alternatives.
              </li>
              <li>
                Equip young people with creative skills, fostering self-expression and confidence.
              </li>
              <li>Promote mental well-being by incorporating art therapy techniques.</li>
            </ul>
            <br />
            <br />
            <h1 style={{ fontSize: '2.1em', paddingTop: '20px' }}>
              <strong className="purple">Our Approach</strong>
            </h1>
            Art and Hearts uses artistic approaches to achieve its goals:
            <ul>
              <li>
                Art Classes and Workshops: We offer art and crocheting classes to individuals of all
                ages, particularly targeting youth, children, and young mothers. These classes
                provide a safe space for creative exploration, skill development, and
                self-discovery.
              </li>
              <li>
                Art Exhibitions: We organize art exhibitions to showcase the artistic talents within
                Kilifi and raise awareness about social issues. These events bring the community
                together and provide a platform for artistic expression.
              </li>
              <li>
                Community Outreach: We partner with local organizations like Upendo Children&apos;s
                Home to offer art therapy programs and empower young people in need.
              </li>
              <li>
                Art and Hearts Clubs: We plan to establish Art and Hearts Clubs in schools across
                Kilifi County. These clubs will provide a continuous platform for artistic
                engagement and positive youth development.
              </li>
            </ul>
            <br />
            <br />
            <h1 style={{ fontSize: '2.1em', paddingTop: '20px' }}>
              <strong className="purple">Achievements and Impact</strong>
            </h1>
          </p>
          <ul>
            <li>
              Successfully organized a well-received art exhibition in collaboration with local
              stakeholders.
            </li>
            <li>
              Provided ongoing art and crocheting classes, equipping participants with creative skills.
            </li>
            <li>
              Partnered with Upendo Children&quote;s Home to deliver art therapy programs, promoting
              mental well-being.
            </li>
            <li>
              Trained and created employment opportunities for local artisans through partnerships
              like Soko Kenya Industry.
            </li>
          </ul>


          <h1 style={{ fontSize: '2.1em', paddingTop: '20px' }}>
            Future Plans
          </h1>
          <ul>
            <li>Expand our reach and impact by establishing Art and Hearts Clubs in numerous Kilifi
              schools.
            </li>
            <li>Empower more teenagers, young mothers, and creatives in Kilifi County through ongoing
              programs and mentorship.
            </li>
            <li>Establish a dedicated community art space in Kilifi County to serve as a central hub for
              artistic activity, exhibitions, and education.
            </li>
          </ul>
          <h1 style={{ fontSize: '2.1em', paddingTop: '20px' }}>Current Needs
          </h1>
          <ul>
            <li>Art supplies to sustain and expand our art classes and workshops.</li>
            <li>Logistics support for organizing events,exhibitions and outreaches.</li>
            <li>Marketing assistance to promote our artwork and initiatives to a wider audience.</li>
            <li>Professional mental health personnel to provide support and guidance for our art therapy
              programs.
            </li>
          </ul>
          <h1 style={{ fontSize: '2.1em', paddingTop: '20px' }}>
            <strong className="purple">Vision</strong>
          </h1>
          A crime free,drug free and safe kilifi empowered by a vibrant arts community
          <br />
          <br />
          <h1 style={{ fontSize: '2.1em', paddingTop: '20px' }}>
            <strong className="purple">Mission</strong>
          </h1>
          Unite artists and empower youth through art based programs that promote social awareness,
          mental health and economic opportunity.
          <br />
          <br />
          <h1 style={{ fontSize: '2.1em', paddingTop: '20px' }}>Conclution</h1>
            <p>
              Art and Hearts is a passionate organization committed to using art as a catalyst for positive
              social change in Kilifi County. By empowering youth, children, and young mothers through art,
              we aim to cultivate a more vibrant, creative, and drug-free community. We welcome your
              support in achieving our goals and creating a lasting impact on Kilifi&quot;s future</p>
            <p style={{ color: 'rgb(155 126 172)'}}>&quot;Restoring Hope in the community&quot; </p>
        </blockquote>

      </Card.Body>
    </Card>
);
}

export default AboutCard;
