import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 8px;
  border: 1px solid lightgray;
  border-radius: 2px;
  width: 330px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  padding: 8px;
`;

export const TaskListWrapper = styled.div<{ isDraggingOver: boolean }>`
  padding: 8px;
  background-color: ${(props) => (props.isDraggingOver ? "skyblue" : "white")};
  flex-grow: 1;
  min-height: 100px;
`;
