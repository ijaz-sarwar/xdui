//import { Container } from "@material-ui/core";
import React from "react";
import "./Footer.css";
import { Row, Col } from "react-bootstrap";
import { Container } from "@material-ui/core";

function Footer() {
  return (
    <div className="footer">
      <Container>
        <Row>
          <span>© COPYRIGHT XDGURU.COM</span>

          <Col className="span_footer">
            <span className="footer_style">Home</span>
            <span className="footer_style">Articles</span>
            <span className="footer_style">ADOBE XD SHORTCUTS</span>
            <span className="footer_style">CONTACT OR SUBMIT FREEBIE</span>
            <span className="footer_style">YOUTUBE</span>
            <span className="footer_style">TWITTER</span>
            <span className="footer_style">TERMS</span>
            <span className="footer_style">PRIVACY</span>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
