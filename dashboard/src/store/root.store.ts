import CulumnStore from "./column.store";
import TaskStore from "./task.store";

class RootStore {
  columnStore: CulumnStore;
  taskStore: TaskStore;

  constructor() {
    this.columnStore = new CulumnStore(this);
    this.taskStore = new TaskStore(this);
  }
}

export default RootStore;
