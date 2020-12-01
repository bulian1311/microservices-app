import styled from "styled-components";

export const Wrapper = styled.div<{ isDragging: boolean }>`
  padding: 8px;
  margin-bottom: 8px;
  border: 1px solid lightgray;
  border-radius: 2px;
  background-color: ${(props) => (props.isDragging ? "lightgreen" : "white")};
  display: flex;
`;
