import React from "react";
import { Col, Container, Row } from "react-grid-system";
import { FeatureRentalWrap } from "./style";
import { SecHeading } from "../../../components";
import { FeatureGrid } from "./FeatureGrid";
import { Paragraph } from "../../../components";
import Data from "./data";

export const FeatureRental = () => {
  return (
    <FeatureRentalWrap className="feature_sec">
      <Container>
        <div className="feature_inner">
          <SecHeading color="#FFC107" className="mb-20">
            Featured Rentals
          </SecHeading>
          <Paragraph
            color="#C28A60"
            fontSize="24"
            fontWeight="700"
            lineHeight="28px"
            textAlign="center"
            fontFamily="Times New Roman"
          >
            Visit some of our best properties selected just for you
          </Paragraph>
        </div>
        <Row justify="space-between" className="feature_grid">
          {Data?.map((item, index) => {
            return (
              <Col key={index} xxl={3} xl={4} sm={12}>
                <FeatureGrid data={item} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </FeatureRentalWrap>
  );
};
