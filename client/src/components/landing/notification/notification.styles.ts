import styled from "styled-components";

export const Wrapper = styled.div<{ visible: boolean }>`
  width: 21.5625em;
  display: ${(props) => (props.visible ? "flex" : "none")};
  justify-content: start;
  align-items: center;
  margin-bottom: 1rem;
`;

export const StyledImg = styled.img`
  width: 4.1875em;
  height: 4.1875em;
  border-radius: 3px;
`;

export const ImgWrapper = styled.div`
  width: 4.6875em;
  margin-right: 1.5rem;
`;

export const Title = styled.span`
  font-size: 1.3125;
  line-height: 1.190em;
`;
