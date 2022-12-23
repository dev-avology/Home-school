import React from "react";
import { Col, Container, Row } from "react-grid-system";
import { FeatureRentalWrap } from "./style";
import { SecHeading } from "../../../components";
import { FeatureGrid } from "./FeatureGrid";
import Data from "./data";

export const FeatureRental = () => {
  return (
    <FeatureRentalWrap className="feature_sec">
      <Container>
        <div className="feature_inner">
          <SecHeading color="#FFC107" className="mb-20">Featured Rentals</SecHeading>
          <p>Visit some of our best properties selected just for you</p>
        </div>
        <Row justify="space-between">
          {Data?.map((item, index) => {
            return (
              <Col key={index} lg={3} md={12}>
                <FeatureGrid data={item} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </FeatureRentalWrap>
  );
};
