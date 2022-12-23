import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-grid-system";
import { BackButtonWrapper } from "./style";

export const BackButton = (props) => {
  return (
    <BackButtonWrapper className="pv-10">
      <Container>
        <Row>
          <Col lg={12} md={12} sm={12}>
            <Link to={props?.link}>{props?.text}</Link>
          </Col>
        </Row>
      </Container>
    </BackButtonWrapper>
  );
};
