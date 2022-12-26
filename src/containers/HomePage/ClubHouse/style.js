import styled from "styled-components";

export const ClubHouseWrap = styled.section`
  overflow: hidden;
  position: relative;
  background: linear-gradient(76.09deg, #7b89a5 2.64%, #cbdeed 91.86%);
  padding: 80px 0;
  img {
    width: 100%;
    @media screen and (max-width:575px){
      max-width:50%;
      margin:0 auto;
      display:block;
    }
  }
  ul {
    padding-left: 20px;
    margin: 0 0 85px;
    @media screen and (max-width:575px){
      margin: 0 0 40px;
    }
    li {
      color: #fff;
      font-family: Inter;
      font-size: 20px;
      font-weight: 600;
      line-height: 24px;
      letter-spacing: 0.02em;
      text-align: left;
      @media screen and (max-width:575px){
        font-size: 16px;
      line-height: 20px;
      }
    }
  }
`;
