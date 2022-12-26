import styled from "styled-components";

export const NeighbourWrapper = styled.section`
  overflow: hidden;
  position: relative;
  padding-top: 40px;
  .neighbour_inner {
    margin-bottom: 150px;
    @media screen and (max-width:1199px){
      margin-bottom:20px;
    }
  }
  .neighbour_txt {
    padding-top: 130px;
    ul {
      list-style: none;
      padding-left: 20px;
      margin: 0;
      li {
        color: #455467;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 0.02em;
        padding-bottom: 15px;
        position:relative;
        &:before {
          content: "•";
          color: #47af22;
          position: absolute;
          left: -20px;
          font-size: 22px;
        }
      }
    }
    &>div:first-child{
      padding-right:50px !important;
    }
    &>div:last-child{
      padding-left:50px !important;
    }
    @media screen and (max-width:991px){
      padding-top:50px;
    }
  }
  .form_sec {
    label.checkbox {
      text-align: left;
      display: flex;
      span {
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 0.02em;
        color: #455467;
      }
    }
  }
  .form_sec input::placeholder {
    font-family: "Times New Roman";
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #101729;
    text-align: center;
    display: block;
    width: 100%;
    opacity: 1;
  }
  .form_sec .MuiTextField-root {
    width: 100% !important;
    margin-bottom: 20px;
    fieldset {
      border: 0;
    }
  }
  .form_sec .MuiTextField-root input {
    box-shadow: 0px 0px 10px rgb(0 0 0 / 25%) !important;
    padding: 10px 10px 13px;
  }
  .form_btn {
    background: #ffc107;
    border-radius: 18px;
    color: #fff;
    border: 0;
    padding: 25px;
    margin-top: 30px;
    margin-bottom: 60px;
    position: relative;
    &:before {
      content: "";
      position: absolute;
      top: 18px;
      left: 50%;
      width: 90%;
      height: 100%;
      background: rgba(16, 23, 41, 0.4);
      border-radius: 20%;
      -webkit-transform: translateX(-50%);
      -ms-transform: translateX(-50%);
      transform: translateX(-50%);
      -webkit-filter: blur(21.5px);
      filter: blur(21.5px);
      z-index: -1;
    }
  }
`;
