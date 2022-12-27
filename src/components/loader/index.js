import styled, { keyframes } from "styled-components";
import Logo from "../../assets/logo.png";

export const Loader = () => {
  return (
    <WrapperLoader className="flex alignCenter justifyCenter">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
    </WrapperLoader>
  );
};

const zoomin = keyframes`
0%{
    transform: scale(0.1);
}
100%{
    transform: scale(1) ;
}

`;

const WrapperLoader = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  .logo {
    text-align: center;
    animation-name: ${zoomin};
    animation-duration: 2.5s;
    animation-iteration-count: linear;
  }
`;
