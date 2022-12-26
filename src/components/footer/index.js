import React from "react";
import { Col, Container, Row } from "react-grid-system";
import { FooterWrapper } from "./style";
import { Img } from "../../components";

import Logo from "../../assets/logo.png";
import { Paragraph, SubHeading } from "../typography";
import {LocalPhone, Mail} from '@mui/icons-material';
export const Footer = () => {
  return (
    <FooterWrapper className="footer pv-50 mt-40" >
      <Container>
        <Row align="end">
          <Col lg={4} md={4} sm={12}>
            <div className="logo footer-logo">
              <Img width='100px' className="mb-20" src={Logo} alt="logo" />
              <Paragraph className="fs-16 graycolor fw-500">Building Homeschool Communities</Paragraph>
            </div>
          </Col>
          <Col lg={8} md={8} sm={12}>
             <div className="contact_info">
              <div>
                <SubHeading color="#101729" className="fs-18 lh-21 pb-20">Contact</SubHeading>
                <a href="tel:+801941-2815"><LocalPhone/> +801 - 941-2815</a>
                <a href="mailto:hautestyle@gmail.com"><Mail/> hautestyle@gmail.com</a>
              </div>
             </div>
          </Col>
        </Row>
      </Container>
    </FooterWrapper>
  );
};
