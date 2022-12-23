import styled from "styled-components";

export const SubHeading = styled.h3`
  font-weight:  ${(props) =>
    props?.fontWeight ? `${props?.fontWeight}` : `500`};
  font-size: ${(props) =>
    props?.fontSize ? `${props?.fontSize}` : `28px`};
  line-height: ${(props) =>
    props?.lineHeight ? `${props?.lineHeight}` : `34px`};
  letter-spacing: 0.02em;
  color: ${(props) =>
    props?.color ? `${props?.color}` : `#fff`};
`;

export const BannerHeading = styled.h1`
  font-family: "Suwannaphum";
  font-size: 58px;
  line-height: 105px;
  letter-spacing: 0.02em;
  color: #fff;
  font-weight: 400;
`;

export const Paragraph = styled.p`
  ${(props) =>
    props?.fontsize ? `font-size:${props?.fontsize}px` : ``};
  font-weight: 600;
  line-height: 19px;
  letter-spacing: 0.02em;
  text-align: center;
  margin: 0;
  color: ${(props) =>
    props?.color ? `${props?.color}` : `#fff`};
`;

export const Button = styled.a`
  border: 3px solid #ffffff;
  border-radius: 44px;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #fff;
  padding: 15px 30px;
  display: inline-block;
  text-transform: capitalize;
  svg {
    margin-left: 5px;
  }
`;

export const SecHeading = styled.h2`
  font-weight: 600;
  font-size: 45px;
  line-height: 54px;
  letter-spacing: 0.02em;
  color: ${(props) =>
    props?.color ? `${props?.color}` : `#fff`};
  text-align: center;
`;