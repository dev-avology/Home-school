import React from "react";
import { NeighbourGridWrapper } from "./style";
import { Paragraph, SubHeading } from "../../../../components";
import Location from "../../../../assets/location.png";

export const NeighbourCol = ({ data }) => {
  return (
    <NeighbourGridWrapper className="neighbour_col">
      {data?.number ? (
        <Paragraph
          className="fw-600 lh-17 mb-15 number"
          color="#DEE9F2"
        >
          {data?.number}
        </Paragraph>
      ) : null}
      <SubHeading
        className="fs-22 fw-600 lh-24"
        color="#6D767E"
        textAlign="center"
      >
        PHASE
      </SubHeading>
      {data?.year ? (
        <Paragraph
          className="fs-16 fw-600 lh-17 mb-15"
          color="#999B9E"
          textAlign="center"
        >
          Projected to begin in {data?.year}
        </Paragraph>
      ) : null}
      <div className="border"></div>
      <Paragraph
        className="fs-16 fw-500 lh-17 mt-15 mb-5"
        color="#003580"
        textAlign="center"
      >
        ONE new <br /> <b>HOMESCHOOL CAMPUS</b> <br />
        in
      </Paragraph>
      {data?.address ? (
        <Paragraph
          className="fs-16 fw-600 lh-17 mb-15"
          color="#101729"
          textAlign="center"
        >
          {data?.address}
        </Paragraph>
      ) : null}
      <img src={Location} alt="location" />
      <div className="btn_col fs-15 fw-600 lh-20 mt-20">$ TBD</div>
    </NeighbourGridWrapper>
  );
};
