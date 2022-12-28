import React, { useState } from "react";
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
import Image from "../../../assets/imagee.png";

import { East } from "@mui/icons-material";
import { useCookies } from 'react-cookie';


export const Banner = () => {
  const [cookies, setCookie] = useCookies(['user']);
  const [count1, setCount1] = useState(parseInt(cookies.count1) ? parseInt(cookies.count1) : 0);
  const [count2, setCount2] = useState(parseInt(cookies.count2) ? parseInt(cookies.count2) : 0);
  const [count3, setCount3] = useState(parseInt(cookies.count3) ? parseInt(cookies.count3) : 0);
  const [count4, setCount4] = useState(parseInt(cookies.count4) ? parseInt(cookies.count4) : 0);
  const [count5, setCount5] = useState(parseInt(cookies.count5) ? parseInt(cookies.count5) : 0);
  const [count6, setCount6] = useState(parseInt(cookies.count6) ? parseInt(cookies.count6) : 0);

  function Toggle1(event) {
    if (event.target.checked) {
      setCount1( count1 + 1);
      setCookie('count1', count1 + 1 , { path: '/' });
    } else {
      setCount1(count1 - 1);
      setCookie('count1', count1 - 1, { path: '/' });
    }
  }

  function Toggle2(event) {
    if (event.target.checked) {
      setCount2(count2 + 1);
      setCookie('count2', count2 + 1 , { path: '/' });
    } else {
      setCount2(count2 - 1);
      setCookie('count2', count2 - 1 , { path: '/' });
    }
  }

  function Toggle3(event) {
    if (event.target.checked) {
      setCount3(count3 + 1);
      setCookie('count3', count3 + 1 , { path: '/' });
    } else {
      setCount3(count3 - 1);
      setCookie('count3', count3 - 1 , { path: '/' });
    }
  }

  function Toggle4(event) {
    if (event.target.checked) {
      setCount4(count4 + 1);
      setCookie('count4', count4 + 1 , { path: '/' });
    } else {
      setCount4(count4 - 1);
      setCookie('count4', count4 - 1 , { path: '/' });
    }
  }

  function Toggle5(event) {
    if (event.target.checked) {
      setCount5(count5 + 1);
      setCookie('count5', count5 + 1 , { path: '/' });
    } else {
      setCount5(count5 - 1);
      setCookie('count5', count5 - 1 , { path: '/' });
    }
  }

  function Toggle6(event) {
    if (event.target.checked) {
      setCount6(count6 + 1);
      setCookie('count6', count6 + 1 , { path: '/' });
    } else {
      setCount6(count6 - 1);
      setCookie('count6', count6 - 1 , { path: '/' });
    }
  }
  
  return (
      
    <BannerWrapper className="banner">
      {cookies.count}
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
                  <div className="vote_col">
                    <Paragraph
                      color="#FFC107"
                      className="  fw-600"
                      textAlign="center"
                      fontSize="18"
                      lineHeight="22px"
                    >
                      {count1}
                    </Paragraph>
                    <Paragraph
                      className=" fw-600 pv-30"
                      textAlign="center"
                      fontSize="14"
                      lineHeight="17px"
                    >
                      I advocate for <br /> homeschool <br /> communities
                    </Paragraph>
                    <StyledEngineProvider injectFirst>
                      <CssVarsProvider>
                        <ExampleTrackChild Cookies={cookies?.count1} Toggle={Toggle1} />
                      </CssVarsProvider>
                    </StyledEngineProvider>
                  </div>
                  <div className="vote_col">
                    <Paragraph
                      color="#FFC107"
                      className="  fw-600"
                      textAlign="center"
                      fontSize="18"
                      lineHeight="22px"
                    >
                      {count2}
                    </Paragraph>
                    <Paragraph
                      className=" fw-600 pv-30"
                      textAlign="center"
                      fontSize="14"
                      lineHeight="17px"
                    >
                      I want this in <br /> my existing <br /> community
                    </Paragraph>
                    <StyledEngineProvider injectFirst>
                      <CssVarsProvider>
                        <ExampleTrackChild Cookies={cookies?.count2} Toggle={Toggle2} />
                      </CssVarsProvider>
                    </StyledEngineProvider>
                  </div>
                  <div className="vote_col">
                    <Paragraph
                      color="#FFC107"
                      className="  fw-600"
                      textAlign="center"
                      fontSize="18"
                      lineHeight="22px"
                    >
                      {count3}
                    </Paragraph>
                    <Paragraph
                      className=" fw-600 pv-30"
                      textAlign="center"
                      fontSize="14"
                      lineHeight="17px"
                    >
                      I want to <br /> build this
                    </Paragraph>
                    <StyledEngineProvider injectFirst>
                      <CssVarsProvider>
                        <ExampleTrackChild Cookies={cookies?.count3} Toggle={Toggle3} />
                      </CssVarsProvider>
                    </StyledEngineProvider>
                  </div>
                </div>
              </Col>
              <Col lg={4}>
                <img src={Image} alt="Imagecenter" style={{ width: "100%" }} />
              </Col>
              <Col lg={4}>
                <div className="toggle_inner">
                  <div className="vote_col">
                    <Paragraph
                      color="#FFC107"
                      className="  fw-600"
                      textAlign="center"
                      fontSize="18"
                      lineHeight="22px"
                    >
                      {count4}
                    </Paragraph>
                    <Paragraph
                      className=" fw-600 pv-30"
                      textAlign="center"
                      fontSize="14"
                      lineHeight="17px"
                    >
                      I want to live <br /> here
                    </Paragraph>
                    <StyledEngineProvider injectFirst>
                      <CssVarsProvider>
                        <ExampleTrackChild Cookies={cookies?.count4} Toggle={Toggle4} />
                      </CssVarsProvider>
                    </StyledEngineProvider>
                  </div>
                  <div className="vote_col">
                    <Paragraph
                      color="#FFC107"
                      className="  fw-600"
                      textAlign="center"
                      fontSize="18"
                      lineHeight="22px"
                    >
                      {count5}
                    </Paragraph>
                    <Paragraph
                      className=" fw-600 pv-30"
                      textAlign="center"
                      fontSize="14"
                      lineHeight="17px"
                    >
                      I want to <br /> serve here
                    </Paragraph>
                    <StyledEngineProvider injectFirst>
                      <CssVarsProvider>
                        <ExampleTrackChild Cookies={cookies?.count5} Toggle={Toggle5} />
                      </CssVarsProvider>
                    </StyledEngineProvider>
                  </div>
                  <div className="vote_col">
                    <Paragraph
                      color="#FFC107"
                      className="  fw-600"
                      textAlign="center"
                      fontSize="18"
                      lineHeight="22px"
                    >
                      {count6}
                    </Paragraph>
                    <Paragraph
                      className=" fw-600 pv-30"
                      textAlign="center"
                      fontSize="14"
                      lineHeight="17px"
                    >
                      I will tell my <br /> clients about <br /> it
                    </Paragraph>
                    <StyledEngineProvider injectFirst>
                      <CssVarsProvider>
                        <ExampleTrackChild Cookies={cookies?.count6} Toggle={Toggle6} />
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
