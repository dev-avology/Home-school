import React from "react";
import { Col, Container, Row } from "react-grid-system";
import { PostGridWrapper } from "./style";
import { SubHeading, BannerHeading, Button } from "../../../components";
import { PostGridCol } from "./PostGridCol";
import Data from "./data";

export const PostGrid = () => {
  return (
    <PostGridWrapper className="post_grid">
      <Container>
        <div className="post_grid_inner">
        </div>
        <Row>
          {Data?.map((item, index) => {
            return (
              <Col className={item.class} key={index} lg={4} md={12}>
                <PostGridCol data={item} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </PostGridWrapper>
  );
};
