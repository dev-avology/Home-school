import styled from "styled-components";

export const InfoColWrap = styled.section`
  overflow: hidden;
  position: relative;
  padding-top: 80px;
  .info_img {
    padding: 0 30px;
    height: 270px;
  }

  .info_img img {
    width: 100%;
    height:100%;
    object-fit:contain;
  }

  .info_col_1 .info_img {
    padding: 0;
  }
`;
