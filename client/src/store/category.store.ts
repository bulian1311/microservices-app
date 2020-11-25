import { observable, action, makeObservable, runInAction } from "mobx";

import { api } from "../api";

import RootStore from "./root.store";

class CategoryStore {
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;

    makeObservable(this, {
      categoryVisible: observable,
      categoriesMap: observable,
      setCategoryVisible: action,
      fetchCategories: action,
    });
  }

  categoryVisible: boolean = false;
  categoriesMap: Map<string, string[]> = new Map();

  setCategoryVisible = (visible: boolean) => {
    this.categoryVisible = visible;
  };

  fetchCategories = async () => {
    try {
      const categories = await api.fetchCategories();
      if (!categories) return;

      categories.sort((a: any, b: any) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });

      categories.forEach((category) => {
        let arr = this.categoriesMap.get(category.name[0]);

        runInAction(() => {
          if (!arr) arr = [];
          arr.push(category.name);
          this.categoriesMap.set(category.name[0], arr);
        });
      });
    } catch (err) {
      console.error(err.message);
    }
  };
}

export default CategoryStore;
