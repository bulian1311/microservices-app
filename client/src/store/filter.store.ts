import { observable, action, makeObservable } from "mobx";

import RootStore from "./root.store";

class FilterStore {
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;

    makeObservable(this, {
      searchQuery: observable,
      limit: observable,
      orderBy: observable,
      order: observable,
      setSearchQuery: action,
    });
  }

  searchQuery: string = "";
  limit: number = 12;
  orderBy: "RANDOM()" | "price" | "title" | "id" = "RANDOM()";
  order: "ASC" | "DESC" = "ASC";

  setSearchQuery = (query: string) => {
    this.searchQuery = query;
  };
}

export default FilterStore;
