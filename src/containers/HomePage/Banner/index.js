import React from "react";
import { Col, Container, Row } from "react-grid-system";
import { BannerWrapper } from "./style";
import { Overlay } from "../../../components/overlay";
import { SubHeading, BannerHeading, Button } from "../../../components";

import {East} from '@mui/icons-material';


export const Banner = () => {
  return (
    <BannerWrapper className="banner">
      <Overlay
        color="linear-gradient(1.15deg, rgba(0, 0, 0, 0.5) 61.89%, rgba(0, 0, 0, 0) 98.7%);"
        className="overlay"
      >
        <Container>
            <Row justify="center" align="center">
                <Col sm={12} >
                <div className="banner_inner">
                    <SubHeading className="mv-0">Building homeschool communities</SubHeading>
                    <BannerHeading className="mv-0">THE <b>WAY</b> OF THE <b>FUTURE</b> </BannerHeading>
                    <Button href="#" className="mt-20">Read on <East style={{verticalAlign:"middle"}}/></Button>
                </div>
                </Col>
            </Row>
        </Container>
      </Overlay>
    </BannerWrapper>
  );
};
