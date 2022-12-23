import styled from "styled-components";

export const FooterWrapper = styled.footer`
  position: relative;
  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.12);
  .contact_info{
    display:flex;
    justify-content:flex-start;
    align-items:center;
    flex-direction:column;
    div{
      margin: 0 auto;
    }
    a{
      display:flex;
      align-items:flex-end;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      color: #6D767E;
      margin-top:20px;
      svg{
        font-size:16px;
        margin-right:10px;
        color:#455467;
      }
      &:hover{
        color:#FFC107;
      }
    }
  }
  .footer-logo{
    text-align:center;
    p{
      text-align:center;
    }
  }
  }
`;
