import { observable, action, makeObservable } from "mobx";
import { DropResult } from "react-beautiful-dnd";

import RootStore from "./root.store";

class ColumnStore {
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;

    makeObservable(this, {
      columnOrder: observable,
      columnMap: observable,
      onDropStart: action,
      getColumnById: action,
    });
  }

  columnOrder = ["column-1", "column-2", "column-3"];
  columnMap: any = {
    "column-1": {
      id: "column-1",
      title: "To do",
      taskIds: ["task-1", "task-2", "task-3", "task-4", "task-5"],
    },
    "column-2": {
      id: "column-2",
      title: "In progress",
      taskIds: [],
    },
    "column-3": {
      id: "column-3",
      title: "Done",
      taskIds: [],
    },
  };

  getColumnById = (id: string) => {
    return this.columnMap[id];
  };

  getTaskList = (columnId: string) => {
    const column = this.getColumnById(columnId);
    const taskMap = this.rootStore.taskStore.taskMap;

    return column.taskIds.map((taskId: string) => taskMap[taskId]);
  };

  onDropStart = async (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination) return; // Toast...

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
      // Toast...
    }

    const startColunm = this.columnMap[source.droppableId];
    const finishColumn = this.columnMap[destination.droppableId];

    if (startColunm === finishColumn) {
      const newTaskIds = [...startColunm.taskIds];
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);
      const newColumn = { ...startColunm, taskIds: newTaskIds };

      this.columnMap = { ...this.columnMap, [newColumn.id]: newColumn };

      return;
    }

    const startTaskIds = [...startColunm.taskIds];
    startTaskIds.splice(source.index, 1);

    const newStartColumn = { ...startColunm, taskIds: startTaskIds };
    const finishTaskIds = [...finishColumn.taskIds];

    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinishColumn = { ...finishColumn, taskIds: finishTaskIds };

    this.columnMap = {
      ...this.columnMap,
      [newStartColumn.id]: newStartColumn,
      [newFinishColumn.id]: newFinishColumn,
    };
  };
}

export default ColumnStore;
