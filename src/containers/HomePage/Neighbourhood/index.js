import React from "react";
import { Col, Container, Row } from "react-grid-system";
import { NeighbourWrapper } from "./style";
import { NeighbourCol } from "./NeighbourGrid";
import Data from "./data";
import { SecHeading, SubHeading } from "../../../components/typography/index";
import { Paragraph } from "../../../components/typography/index";
import Box from "@mui/material/Box";
import {TextField, Checkbox, FormControlLabel } from "@mui/material";

export const Neighbour = () => {
  return (
    <NeighbourWrapper className="neighbour_sec">
      <Container>
        <div className="neighbour_inner">
          <SecHeading color="#FFC107">Homeschool-Friendly Neighborhoods</SecHeading>
        </div>
        <Row>
          {Data?.map((item, index) => {
            return (
              <Col className={item.class} key={index} xl={3} lg={6} md={6} sm={12}>
                <NeighbourCol data={item} />
              </Col>
            );
          })}
        </Row>
        <Paragraph className="fs-16 lh-19 mt-40" color="#101729">
          *Phase 1 is subject to change to a homeschool community in Washington
          county.
        </Paragraph>
        <Row className="neighbour_txt" justify="between">
          <Col lg={6} md={12}>
            <ul>
              <li>
                I am a homebuilder interested in building a homeschool
                community.
              </li>
              <li>
                I am a commercial builder and interested in building some of the
                resources offered in a homeschool community.
              </li>
            </ul>
            <div className="form_sec">
              <SubHeading color="#101729" className="fs-16 lh-19 mt-40">Check all that apply:</SubHeading>
              <Box component="form">
              <Row>
                <Col lg={12}>
                <FormControlLabel className="checkbox" control={<Checkbox />} label="I am a homebuilder." />
                </Col>
                <Col lg={12}>
                <FormControlLabel className="checkbox mb-50" control={<Checkbox />} label="I am a commercial builder." />
                </Col>
                <Col lg={6}>
                <TextField
                  id="outlined-basic"
                  placeholder="COMPANY NAME"
                  variant="outlined"
                />
                </Col>
                <Col lg={6}>
                <TextField
                  id="outlined-basic"
                  placeholder="CONTACT NAME"
                  variant="outlined"
                />
                </Col>
                <Col lg={12}>
                <TextField
                  id="outlined-basic"
                  placeholder="EMAIL ADDRESS"
                  variant="outlined"
                />
                </Col>
                <Col lg={12}>
                <TextField
                  id="outlined-basic"
                  placeholder="CONTACT NUMBER (OPTIONAL)"
                  variant="outlined"
                />
                </Col>
                <Col lg={12}>
                  <button className="form_btn fs-28 lh-34 fw-600">I am interested in building & selling homeschool communities</button>
                </Col>
              </Row>  
              </Box>
            </div>
            <div className="form_sec">
              <SubHeading color="#101729" className="fs-16 lh-19 mt-40">Check all that apply:</SubHeading>
              <Box component="form">
              <Row>
                <Col lg={12}>
                <FormControlLabel className="checkbox mb-50" control={<Checkbox />} label="I am a realtor and plan to tell my clients about homeschool communities" />
                </Col>
                <Col lg={6}>
                <TextField
                  id="outlined-basic"
                  placeholder="COMPANY NAME"
                  variant="outlined"
                />
                </Col>
                <Col lg={6}>
                <TextField
                  id="outlined-basic"
                  placeholder="CONTACT NAME"
                  variant="outlined"
                />
                </Col>
                <Col lg={12}>
                <TextField
                  id="outlined-basic"
                  placeholder="EMAIL ADDRESS"
                  variant="outlined"
                />
                </Col>
                <Col lg={12}>
                <TextField
                  id="outlined-basic"
                  placeholder="CONTACT NUMBER (OPTIONAL)"
                  variant="outlined"
                />
                </Col>
                <Col lg={12}>
                  <button className="form_btn fs-28 lh-34 fw-600">I am a realtor interested in selling homes in a homeschool community</button>
                </Col>
              </Row>  
              </Box>
            </div>
          </Col>
          <Col lg={6} md={12}>
            <ul>
              <li>
                I would be interested in renting my home out daily or quarterly
                to homeschool groups for passive income opportunity.
              </li>
              <li>
                I am a skilled parent and would open a class out of my home
                because I am passionate about the skill I possess and welcome
                income opportunity.
              </li>
              <li>
                I am an instructor and would open a class out of my home because
                I am passionate about teaching and welcome income opportunity.{" "}
              </li>
              <li>
              I am a skilled parent or teacher, and am interested in presenting parent workshops in the auditorium and welcome income opportunity.
              </li>
              <li>
                I am interested in creating sports league opportunities and/or
                coaching in a homeschool community.
              </li>
              <li>
                I am interested in having my children learn in a home
                environment, with access to additional resources for parents and
                academic opportunities for my kids.
              </li>
              <li>
                I homeschool my kids and love that everything is centralized. It
                takes a village to raise a child.
              </li>
              <li>
                I am a student and wish to build my own curriculum tailored to
                my personal talents and interests.
              </li>
              <li>
                I like other features this community offers such as meals
                provided to parents and their families and the patrons assisting
                families on campus.
              </li>
              <li>
                I'm a homebuyer and think this community just sounds cool to
                live in.
              </li>
            </ul>
            <div className="form_sec">
              <SubHeading color="#101729" className="fs-16 lh-19 mt-40">Check all that apply:</SubHeading>
              <Box component="form">
              <Row>
              <Col lg={12}>
                <FormControlLabel className="checkbox" control={<Checkbox />} label="I would like to live in a homeschool community." />
                </Col>
              <Col lg={12}>
                <FormControlLabel className="checkbox" control={<Checkbox />} label="I am a teacher or skilled parent and am interested in serving a homeschool community." />
                </Col>
                <Col lg={12}>
                <FormControlLabel className="checkbox" control={<Checkbox />} label="I wish we had something like this in our existing community." />
                </Col>
                <Col lg={12}>
                <FormControlLabel className="checkbox mb-50" control={<Checkbox />} label="I advocate for homeschool communities." />
                </Col>
                <Col lg={6}>
                <TextField
                  id="outlined-basic"
                  placeholder="FIRST NAME"
                  variant="outlined"
                />
                </Col>
                <Col lg={6}>
                <TextField
                  id="outlined-basic"
                  placeholder="LAST NAME"
                  variant="outlined"
                />
                </Col>
                <Col lg={12}>
                <TextField
                  id="outlined-basic"
                  placeholder="EMAIL ADDRESS"
                  variant="outlined"
                />
                </Col>
                <Col lg={12}>
                  <button className="form_btn fs-28 lh-34 fw-600">I am a homebuyer interested in living in a homeschool community</button>
                </Col>
              </Row>  
              </Box>
            </div>
          </Col>
        </Row>
      </Container>
    </NeighbourWrapper>
  );
};
