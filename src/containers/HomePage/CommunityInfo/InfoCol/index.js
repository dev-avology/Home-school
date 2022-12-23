import React from "react";
import { InfoColWrap } from "./style";
import { Paragraph } from "../../../../components";

export const InfoCol = ({ data }) => {
  return (
    <InfoColWrap className="info_col">
      <div className="info_img">
        {data?.img ? <img src={data?.img} alt="infoImage"/> : null}
      </div>
      <div className="info_text">
        {data?.description ? <Paragraph>{data?.description}</Paragraph> : null}
      </div>
    </InfoColWrap>
  );
};
