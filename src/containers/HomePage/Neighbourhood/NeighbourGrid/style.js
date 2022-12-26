import styled from "styled-components";

export const NeighbourGridWrapper = styled.div`
  position: relative;
  padding: 20px 25px;
  background: #ffffff;
  box-shadow: 0px 4px 23px rgba(0, 0, 0, 0.25);
  border-radius: 22px;
  text-align: center;
  @media screen and (max-width:1199px){
    margin-top:80px;
  }
  * {
    position: relative;
    z-index: 2;
  }
  .border {
    width: 100%;
    height: 3px;
    background: linear-gradient(
      90deg,
      #ffffff 1.08%,
      #dd2e44 33.8%,
      #850011 52.5%,
      #dd2e44 69.12%,
      #ffffff 100.8%
    );
  }
  .btn_col {
    background: #c28a60;
    border-radius: 15px;
    padding: 5px;
    color: #fff;
  }
  .number {
    position: absolute;
    top: 10px;
    right: -18px;
    font-size: 220px;
    z-index: 1;
    @media screen and (max-width:767px){
        right: -10px;
        font-size: 170px;
  }
  
`;
