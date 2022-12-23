import React from "react";
import { Col, Container, Row } from "react-grid-system";
import { CommunityInfoWrapper } from "./style";
import { InfoCol } from "./InfoCol";
import Data from "./data";
import { SecHeading } from "../../../components/typography/index";
export const CommunityInfo = () => {
  return (
    <CommunityInfoWrapper className="com_info">
      <Container>
        <div className="com_info_inner">
          <SecHeading>What Living In A Homeschool Community Means</SecHeading>
        </div>
        <Row>
          {Data?.map((item, index) => {
            return (
              <Col className={item.class} key={index} lg={3} md={6} sm={12}>
                <InfoCol data={item}/>
              </Col>
            );
          })}
        </Row>
      </Container>
    </CommunityInfoWrapper>
  );
};
