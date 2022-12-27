import React from "react";
import { Col, Container, Row } from "react-grid-system";
import { HeaderWrapper } from "./style";

import Logo from "../../assets/logo.png";

export const Header = () => {
  return (
    <HeaderWrapper className="header pv-10">
      <Container>
        <Row>
          <Col lg={3} md={6} sm={12}>
            <div className="logo">
              <a href="/"><img src={Logo} alt="logo" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </HeaderWrapper>
  );
};
