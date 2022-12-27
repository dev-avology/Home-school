import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-grid-system";
import { BackButtonWrapper } from "./style";

export const BackButton = (props) => {
  return (
    <BackButtonWrapper className="pt-50 pb-10">
      <Container>
        <Row>
          <Col lg={12} md={12} sm={12}>
            <a href={props?.link} style={{color:"#455467"}} >{props?.text}</a>
          </Col>
        </Row>
      </Container>
    </BackButtonWrapper>
  );
};
