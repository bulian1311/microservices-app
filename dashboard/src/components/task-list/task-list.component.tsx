import React from "react";
import Task from "../task/task.component";
import useStore from "../../hooks/use-store.hook";

type TProps = {
  columnId: string;
};

const TaskList = ({ columnId }: TProps) => {
  const { columnStore } = useStore();

  const taskList = columnStore.getTaskList(columnId);

  return (
    <>
      {taskList.map((task: any, index: number) => (
        <Task key={task.id} task={task} index={index} />
      ))}
    </>
  );
};

export default TaskList;
