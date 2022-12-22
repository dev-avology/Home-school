import styled from "styled-components";

export const Overlay = styled.div`
  background: ${(props) =>
    props?.color ? `${props?.color}` : `#00000021`};
`;
