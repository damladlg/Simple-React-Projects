import React from "react";
import Banner from "./Banner";
import PopularTags from "./PopularTags";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const HomePage = () => {
  return (
    <>
      <Banner />
      <Container>
        <Row>
          <Col sm={9}>sm=9</Col>
          <Col sm={3}>
            <PopularTags />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
