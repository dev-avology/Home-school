import React, {useState} from "react";
import { Col, Container, Row } from "react-grid-system";
import { BannerWrapper } from "./style";
import { Overlay } from "../../../components/overlay";
import {
  SubHeading,
  BannerHeading,
  Button,
  Paragraph,
} from "../../../components";
import ExampleTrackChild from "../Banner/VoteToggle/index";
import { StyledEngineProvider, CssVarsProvider } from "@mui/joy/styles";
import Image from "../../../assets/imagee.png"

import { East } from "@mui/icons-material";

export const Banner = () => {
  const [count, setCount] = useState(0);
  return (
    <BannerWrapper className="banner">
      <Overlay
        color="linear-gradient(1.15deg, rgba(0, 0, 0, 0.5) 61.89%, rgba(0, 0, 0, 0) 98.7%);"
        className="overlay"
      >
        <Container>
          <Row justify="center" align="center">
            <Col sm={12}>
              <div className="banner_inner">
                <SubHeading className="mv-0" textAlign="center">
                  Building homeschool communities
                </SubHeading>
                <BannerHeading className="mv-0">
                  DRIVING <b>CHANGE</b> IN <b>EDUCATION</b>{" "}
                </BannerHeading>
                <Button href="/community-project" className="mt-20">
                  Read on <East style={{ verticalAlign: "middle" }} />
                </Button>
              </div>
            </Col>
          </Row>
          <div>
            <Row align="center" className="pv-50">
              <Col lg={4}>
                <div className="toggle_inner">
                  <div class="vote_col">
                    <Paragraph color="#FFC107" className="fs-18 lh-22 fw-600" textAlign="center">{count}</Paragraph>
                    <Paragraph className="fs-14 lh-17 fw-600 pv-30" textAlign="center">I advocate for homeschool communities</Paragraph>
                    <StyledEngineProvider injectFirst>
                      <CssVarsProvider>
                        <ExampleTrackChild onClick={() => setCount(count + 1)} />
                      </CssVarsProvider>
                    </StyledEngineProvider>
                  </div>
                  <div class="vote_col">
                    <Paragraph color="#FFC107" className="fs-18 lh-22 fw-600" textAlign="center">{count}</Paragraph>
                    <Paragraph className="fs-14 lh-17 fw-600 pv-30" textAlign="center">I advocate for homeschool communities</Paragraph>
                    <StyledEngineProvider injectFirst>
                      <CssVarsProvider>
                        <ExampleTrackChild onClick={() => setCount(count + 1)} />
                      </CssVarsProvider>
                    </StyledEngineProvider>
                  </div>
                  <div class="vote_col">
                    <Paragraph color="#FFC107" className="fs-18 lh-22 fw-600" textAlign="center">{count}</Paragraph>
                    <Paragraph className="fs-14 lh-17 fw-600 pv-30" textAlign="center">I advocate for homeschool communities</Paragraph>
                    <StyledEngineProvider injectFirst>
                      <CssVarsProvider>
                        <ExampleTrackChild onClick={() => setCount(count + 1)} />
                      </CssVarsProvider>
                    </StyledEngineProvider>
                  </div>
                </div>
              </Col>
              <Col lg={4}>
                <img src={Image} alt="Imagecenter" style={{width:"100%"}} />
              </Col>
              <Col lg={4}>
              <div className="toggle_inner">
                  <div class="vote_col">
                    <Paragraph color="#FFC107" className="fs-18 lh-22 fw-600" textAlign="center">{count}</Paragraph>
                    <Paragraph className="fs-14 lh-17 fw-600 pv-30" textAlign="center">I advocate for homeschool communities</Paragraph>
                    <StyledEngineProvider injectFirst>
                      <CssVarsProvider>
                        <ExampleTrackChild onClick={() => setCount(count + 1)} />
                      </CssVarsProvider>
                    </StyledEngineProvider>
                  </div>
                  <div class="vote_col">
                    <Paragraph color="#FFC107" className="fs-18 lh-22 fw-600" textAlign="center">{count}</Paragraph>
                    <Paragraph className="fs-14 lh-17 fw-600 pv-30" textAlign="center">I advocate for homeschool communities</Paragraph>
                    <StyledEngineProvider injectFirst>
                      <CssVarsProvider>
                        <ExampleTrackChild onClick={() => setCount(count + 1)} />
                      </CssVarsProvider>
                    </StyledEngineProvider>
                  </div>
                  <div class="vote_col">
                    <Paragraph color="#FFC107" className="fs-18 lh-22 fw-600" textAlign="center">{count}</Paragraph>
                    <Paragraph className="fs-14 lh-17 fw-600 pv-30" textAlign="center">I advocate for homeschool communities</Paragraph>
                    <StyledEngineProvider injectFirst>
                      <CssVarsProvider>
                        <ExampleTrackChild onClick={() => setCount(count + 1)} />
                      </CssVarsProvider>
                    </StyledEngineProvider>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </Overlay>
    </BannerWrapper>
  );
};
