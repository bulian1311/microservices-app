import React from "react";
import { Droppable } from "react-beautiful-dnd";

import TaskList from "../task-list/task-list.component";

import useStore from "../../hooks/use-store.hook";

import { Wrapper, Title, TaskListWrapper } from "./column.styles";

type TProps = {
  columnId: string;
};

const Column = ({ columnId }: TProps) => {
  const { columnStore } = useStore();

  const column = columnStore.getColumnById(columnId);

  return (
    <Wrapper>
      <Title>{column.title}</Title>
      <Droppable droppableId={column.id}>
        {(provided, snapshot) => (
          <TaskListWrapper
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            <TaskList columnId={columnId} />
            {provided.placeholder}
          </TaskListWrapper>
        )}
      </Droppable>
    </Wrapper>
  );
};

export default Column;
