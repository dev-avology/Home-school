import React from "react";
import { Col, Container, Row } from "react-grid-system";
import { PostGridColWrap } from "./style";
import { Button } from "../../../../components";

export const PostGridCol = ({data}) => {
    console.log(data);
  return (
    <PostGridColWrap className="post_grid_col">
        {data?.title ? (
            <h3>{data?.title}</h3>
        ) : null}
        <div className="post_img">
          {data?.img ? (
              <img src={data?.img} />
          ) : null}
          <div className="img_txt">
            {data?.imgText ? (
                <p>{data?.imgText} </p>
            ) : null}
            {data?.imgTextLink ? (
                <Button>{data?.imgTextLink}</Button>
            ) : null}
          </div>
        </div>
        <div className="post_grid_text">
          <div class="post_info">
          {data?.classno ? (
              <span>{data?.classno}</span>
          ) : null}
          {data?.students ? (
              <span>{data?.students}</span>
          ) : null}
          {data?.location ? (
              <span>{data?.location}</span>
          ) : null}
          </div>
          <div className="post_address">
          {data?.address ? (
              <span>{data?.address}</span>
          ) : null}
          </div>
        </div>
    </PostGridColWrap>
  );
};
