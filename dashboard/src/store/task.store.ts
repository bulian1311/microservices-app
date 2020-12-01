import { observable, makeObservable } from "mobx";

import RootStore from "./root.store";

class TaskStore {
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;

    makeObservable(this, {
      taskMap: observable,
    });
  }

  taskMap: any = {
    "task-1": { id: "task-1", content: "111 asdafsg fdgdgdfg fgdfgdg" },
    "task-2": { id: "task-2", content: "222 asdafsg fdgdgdfg fgdfgdg" },
    "task-3": { id: "task-3", content: "333 asdafsg fdgdgdfg fgdfgdg" },
    "task-4": { id: "task-4", content: "444 asdafsg fdgdgdfg fgdfgdg" },
    "task-5": { id: "task-5", content: "555 asdafsg fdgdgdfg fgdfgdg" },
  };
}

export default TaskStore;
