import { observable, action, makeObservable, runInAction } from "mobx";
import { api } from "../api";

import RootStore from "./root.store";

import { IProduct } from "../interfaces/product.interface";

class ProductStore {
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;

    makeObservable(this, {
      products: observable,
      count: observable,
      isFetching: observable,
      isPaginateFetching: observable,
      isDataOver: observable,
      fetchProducts: action,
    });
  }

  products: IProduct[] = [];
  count: number = 0;
  isFetching: boolean = false;
  isPaginateFetching: boolean = false;
  isDataOver: boolean = false;

  fetchProducts = async (paginate: boolean) => {
    this.isDataOver = false;

    if (paginate) {
      this.isPaginateFetching = true;
    } else {
      this.isFetching = true;
    }

    try {
      const { products, count } = await api.fetchProducts({
        searchQuery: this.rootStore.filterStore.searchQuery,
        limit: this.rootStore.filterStore.limit,
        orderBy: this.rootStore.filterStore.orderBy,
        order: this.rootStore.filterStore.order,
        offset: paginate ? this.products.length : 0,
      });

      if (products.length < this.rootStore.filterStore.limit) {
        runInAction(() => {
          this.isDataOver = true;
        });
      }

      const parsedProducts = this.parseProducts(products);

      runInAction(() => {
        if (paginate) {
          this.products = [...this.products, ...parsedProducts];
          this.isPaginateFetching = false;
        } else {
          this.products = parsedProducts;
          this.isFetching = false;
        }

        this.count = count;
      });
    } catch (err) {
      console.error(err.message);
      runInAction(() => {
        this.isFetching = false;
        this.isPaginateFetching = false;
      });
    }
  };

  parseProducts(products: any[]): IProduct[] {
    const cartList = this.rootStore.cartStore.cartList;

    const parsedProducts = products.map((product) => {
      const cartItem = cartList.find((item) => item.id === product.id);
      return {
        ...product,
        images: JSON.parse(product.images),
        specifications: JSON.parse(product.specifications),
        producer: JSON.parse(product.producer),
        inCart: cartItem ? true : false,
      };
    });

    return parsedProducts;
  }
}

export default ProductStore;
