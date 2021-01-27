import { observable, action, makeObservable } from "mobx";
import * as api from "../api";

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
      setProducts: action,
      setCount: action,
      setIsDataOver: action,
      setIsPaginateFetching: action,
      setIsFetching: action,
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
      this.setIsPaginateFetching(true);
    } else {
      this.setIsFetching(true);
    }

    try {
      const { count, products } = await api.fetchProducts({
        searchQuery: this.rootStore.filterStore.searchQuery,
        limit: this.rootStore.filterStore.limit,
        orderBy: this.rootStore.filterStore.orderBy,
        order: this.rootStore.filterStore.order,
        offset: paginate ? this.products.length : 0,
      });

      if (products.length < this.rootStore.filterStore.limit) {
        this.setIsDataOver(true);
      }

      const parsedProducts = this.parseProducts(products);

      if (paginate) {
        this.setProducts([...this.products, ...parsedProducts]);
        this.setIsPaginateFetching(false);
      } else {
        this.setProducts(parsedProducts);
        this.setIsFetching(false);
      }

      this.setCount(count);
    } catch (err) {
      console.error(err.message);

      this.setIsFetching(false);
      this.setIsPaginateFetching(false);
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

  setProducts(products: IProduct[]) {
    this.products = products;
  }

  setCount(count: number) {
    this.count = count;
  }

  setIsDataOver(over: boolean) {
    this.isDataOver = over;
  }

  setIsPaginateFetching(isFetching: boolean) {
    this.isPaginateFetching = isFetching;
  }

  setIsFetching(isFetching: boolean) {
    this.isFetching = isFetching;
  }
}

export default ProductStore;
