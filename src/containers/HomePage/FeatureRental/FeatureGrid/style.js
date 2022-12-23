import styled from "styled-components";

export const FeatureGridWrap = styled.section`
  overflow: hidden;
  position: relative;
    background: #ffffff;
    box-shadow: -10px 10px 25px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    padding:15px;
  .feature_img {
    position:relative;
    img {
      width: 100%;
    }
    .feature_img_txt {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    } 
  }
  .feature_info_col{
    text-align:center;
  }
`;
