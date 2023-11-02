import React from "react";
import { Row, Container, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer>
      <Container className="fixed-bottom">
        <Row>
          <Col className="text-center py-3">
            Copyright &copy;{new Date().getFullYear()} made with 💖 by Ayan
            Rafiqi
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
