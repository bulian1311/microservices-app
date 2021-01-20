import { observable, action, makeObservable } from "mobx";

import * as api from "../api";

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
      parseCategories: action,
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

      this.parseCategories(categories);
    } catch (err) {
      console.error(err.message);
    }
  };

  parseCategories(categories: { id: string; name: string }[]) {
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

      if (!arr) arr = [];
      arr.push(category.name);
      this.categoriesMap.set(category.name[0], arr);
    });
  }
}

export default CategoryStore;
