import React from "react";
import { Col, Container, Row } from "react-grid-system";
import { ClubHouseWrap } from "./style";
import { SubHeading, SecHeading } from "../../../components";
import { Paragraph } from "../../../components";
import Image1 from "../../../assets/clubhouse_img.png";
import Image2 from "../../../assets/sample.png";

export const ClubHouse = () => {
  return (
    <ClubHouseWrap className="club_house_sec">
      <Container>
        <Row>
           <Col lg={6}>
              <div className="club_house_text">
                 <SecHeading textAlign="left">Clubhouse & <br/> Campus Grounds</SecHeading>
                 <ul>
                    <li>Reserve the Auditorium & Science Lab</li>
                    <li>Access to the Library Bookstore, Football, Track, & Soccer fields</li>
                    <li>Enjoy campus grounds with your family</li>
                    <li>No parking issues with our zoning ordinance</li>
                    <li>Onsite teacher patrons to assist families</li>
                    <li>Amazing Parent Workshops</li>
                    <li>Dinners supplied to families for busy moms</li>
                    <li>In a secure, gated community.</li>
                 </ul>
                 <Row align="center" justify="between">
                    <Col lg={4}>
                        <img src={Image2} alt="Sample Subdivision"/>
                    </Col>
                    <Col lg={7}>
                        <div className="sample pr-50">
                            <SubHeading fontSize="24" fontweight="600" lineHeight="29px">Up to 10 family members per year package deals offered</SubHeading>
                            <Paragraph fontSize="12" fontweight="500" lineHeight="15px">*Monthly Membership fees not included. Residents pay into monthly membership fees plus HOA fees</Paragraph>
                        </div>
                    </Col>
                 </Row>
              </div>
           </Col>
           <Col lg={6}>
              <div className="club_house_img">
                  <img src={Image1} alt="Club house image"/>
              </div>
           </Col>
        </Row>
      </Container>
    </ClubHouseWrap>
  );
};
