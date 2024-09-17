// import React from "react";
import "./home.css"; // Assuming you are using an external CSS file
import { Container, Row, Col, Button } from "react-bootstrap";
import TechStacks from "../helper/helper";

const Portfolio = () => {
  return (
    <Container>
      {/* Title Section */}
      <Row>
        <Col>
          <h1>PORTFOLIO</h1>
          <p>
            Full Stack Developer years of experience in designing & developing
            robust & scalable applications for Intel Automation Factories
            worldwide. Owning end-to-end product delivery from requirement
            analysis, design & development to deployment & production for
            PowerSchool products.
          </p>
          <p>
            <strong>
              I am looking for a Full Time Opportunity as a Software Developer
             
            </strong>
            <br />
          </p>
        </Col>
      </Row>

      {/* Job Section */}
      <Row className="job-entry">
        <Col sm={2} className="timeline">
          <p>Now</p>
        </Col>
        <Col sm={10}>
          <h3 className="job_header">PowerSchool</h3>
          <p>Software Development Engineer - 2</p>
          <p>
            Building a messaging application with a
            focus on user interface components and services. Worked with cross
            functional teams with developing and maintaining from scrach, where
            I have contributed to a complex software project involving various
            technologies and tools. My work includes developing and maintaining
            <strong> TypeScript and JavaScript </strong>
            codebases, implementing <strong> AWS Lambda functions</strong>
          </p>
          <p> {<TechStacks/>}</p>
          <Button className="more_details_class" variant="outline-secondary" href="https://www.powerschool.com/">Know More</Button>
        </Col>
      </Row>

      <hr />

      <Row className="job-entry">
        <Col sm={2} className="timeline">
          <p>July 2022 - July 2023</p>
        </Col>
        <Col sm={10}>
          <h3 className="job_header">PowerSchool</h3>
          <p>Software Development Engineer - 1</p>
          <br></br> Worked on a comprehensive micro frontend (MFE) application
          using a variety of modern technologies. The frontend was built with{" "}
          <strong>React </strong> and<strong> TypeScript</strong>, ensuring a
          robust and maintainable codebase,while <strong>SASS </strong> and
          scoped<strong> CSS</strong> were employed for styling components to
          prevent conflicts. Webpack was utilized for bundling{" "}
          <strong> JavaScript</strong> files and assets.
          <p>
            <li>
              <strong>Component Development:</strong> Created and managed
              various UI components for appointment sign-ups and post
              management,<p> ensuring a seamless user experience.</p>
            </li>
          </p>
          <p>
            <li>
              <strong>Service Integration:</strong> Implemented API services for
              data handling, including saving and deleting posts.
            </li>
          </p>
          <p>
            <li>
              <strong>State Management:</strong> Utilized context management for
              maintaining state across different parts of the application.
            </li>
          </p>
          <p>
            <li>
              <strong>Styling and Theming:</strong> Applied scoped CSS and SASS
              for consistent and conflict-free styling across the micro
              frontend.
            </li>
          </p>
          <p>
            <li>
              <strong>Localization:</strong> Integrated translation support to
              cater to a diverse user base.
            </li>
          </p>
          <li>
            <strong>Error Handling:</strong> Created error component that is
            used in the application to display or toast errors.
          </li>
          <Button className="more_details_class" variant="outline-secondary"href="https://www.powerschool.com/">Know More </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Portfolio;
