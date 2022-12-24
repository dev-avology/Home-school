import React from "react";
import { FeatureGridWrap } from "./style";
import { Paragraph, SubHeading } from "../../../../components";
import { Col, Row } from "react-grid-system";

export const FeatureGrid = ({ data }) => {
  console.log(data);
  return (
    <FeatureGridWrap className="feature_grid_col">
      <div className="feature_img">
        {data?.img ? <img src={data?.img} alt="featureImage" /> : null}
        {data?.img_txt ? (
          <Paragraph
            color="#C7C7C7"
            fontSize="24"
            textAlign="center"
            fontFamily="Times New Roman"
            className="feature_img_txt"
          >
            {data?.img_txt}
          </Paragraph>
        ) : null}
      </div>
      <div className="feature_txt">
        <div className="title mb-25">
          {data?.westlake ? (
            <SubHeading
              color="#101729"
              fontSize="17px"
              fontWeight="600"
              textAlign="center"
            >
              {data?.westlake}
            </SubHeading>
          ) : null}
        </div>
        <div className="feature_info">
          <Row>
            <Col lg={4}>
              <div className="feature_info_col">
                <div>{data?.icon1 ? <img src={data?.icon1} alt="icon"/> : null}</div>
                {data?.classes ? (
                  <Paragraph
                    color="#101729"
                    fontSize="10"
                    textAlign="center"
                    fontFamily="Times New Roman"
                  >
                    {data?.classes}
                  </Paragraph>
                ) : null}
              </div>
            </Col>
            <Col lg={4}>
              <div className="feature_info_col">
                <div>{data?.icon2 ? <img src={data?.icon2} alt="icon"/> : null}</div>
                {data?.bathrooms ? (
                  <Paragraph
                    color="#101729"
                    fontSize="9"
                    textAlign="center"
                    fontFamily="Times New Roman"
                  >
                    {data?.bathrooms}
                  </Paragraph>
                ) : null}
              </div>
            </Col>
            <Col lg={4}>
              <div className="feature_info_col">
                <div>{data?.icon3 ? <img src={data?.icon3} alt="icon"/> : null}</div>
                {data?.students ? (
                  <Paragraph
                    color="#101729"
                    fontSize="9"
                    textAlign="center"
                    fontFamily="Times New Roman"
                  >
                    {data?.students}
                  </Paragraph>
                ) : null}
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </FeatureGridWrap>
  );
};
