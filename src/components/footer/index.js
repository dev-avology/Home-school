import React from "react";
import { Col, Container, Row } from "react-grid-system";
import { FooterWrapper } from "./style";
import { Img } from "../../components";

import Logo from "../../assets/logo.png";
import { Paragraph } from "../typography";

export const Footer = () => {
  return (
    <FooterWrapper className="footer pv-50">
      <Container>
        <Row>
          <Col lg={6} md={6} sm={12}>
            <div className="logo footer-logo">
              <Img width='100px' className="mb-20" src={Logo} alt="logo" />
              <Paragraph className="fs-16 graycolor fw-500">Building Homeschool Communities</Paragraph>
            </div>
          </Col>
          <Col lg={6} md={6} sm={12}>
            
          </Col>
        </Row>
      </Container>
    </FooterWrapper>
  );
};
