import styled from "styled-components";
export const PostGridColWrap = styled.div`
  position: relative;
  .post_grid_col img {
    width: 100%;
  }
  h3 {
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #6d767e;
    text-align: center;
    margin-top: 0;
  }
  .post_img img {
    width: 100%;
  }
  .post_img {
    position: relative;
    z-index: 2;
    &:after {
      content: "";
      position: absolute;
      top: 18px;
      left: 50%;
      width: 90%;
      height: 100%;
      background: rgba(16, 23, 41, 0.4);
      border-radius: 20%;
      transform: translateX(-50%);
      filter: blur(21.5px);
      z-index: -1;
    }
  }
  .post_grid_text {
    background: red;
    padding: 10px;
  }
  .img_txt {
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    left: 50%;
    width: 100%;
    text-align: center;
    z-index: 3;
  }
  .img_txt p {
    font-family: "Times New Roman";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: #cdcdcd;
  }
  .post_info span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #455467;
  }
  .post_grid_text {
    padding: 30px 20px;
    margin: -15px 20px 0;
    border-radius: 10px;
    background: #ffffff;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2);
  }
  .post_info span:nth-child(2) {
    padding: 0 10px;
  }

  .post_info {
    display: flex;
    justify-content: center;
    padding: 40px 0 20px;
  }
  .img_txt a {
    border: none;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(2.5px);
    font-family: Times New Roman;
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
  }
  .post_address {
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      font-size: 16px;
      margin-right: 5px;
    }
    span {
      display: block;
      font-size: 12px;
      line-height: 15px;
      text-align: center;
      color: #6d767e;
    }
  }
  .post_info span:nth-child(2):after {
    content: "•";
    margin-left: 5px;
  }
  .post_info span:nth-child(2):before {
    content: "•";
    margin-right: 5px;
  }
  .post_col_2 {
    .post_info span {
      font-size: 16px;
    }
    .post_col_2 .post_img:hover {
      transform: scale(1.1);
      transition: 0.3s;
    }
  }
`;
