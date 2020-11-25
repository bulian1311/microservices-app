import styled from "styled-components";

export const Wrapper = styled.div<{ gridArea?: string; padding?: number }>`
  grid-area: ${(props) => props.gridArea};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${(props) => (props.padding ? `${props.padding / 16}em` : "1.25em")};
  box-shadow: 3px 3px 5px #c6c6c6, -3px -3px 5px #ffffff;
  border-radius: 8px;
`;
