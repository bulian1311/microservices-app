import React from "react";
import { Draggable } from "react-beautiful-dnd";

import { Wrapper } from "./task.styles";

type TProps = {
  task: any;
  index: number;
};

const Task = ({ task, index }: TProps) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <Wrapper
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          {task.content}
        </Wrapper>
      )}
    </Draggable>
  );
};

export default Task;
