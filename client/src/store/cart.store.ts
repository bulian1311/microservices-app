import { observable, action, makeObservable } from "mobx";

import RootStore from "./root.store";
import { ICartItem } from "../interfaces/cartItem.interface";

class CartStore {
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;

    makeObservable(this, {
      cartVisible: observable,
      cartList: observable,
      totalPrice: observable,
      setCartVisible: action,
      addToCart: action,
      deleteFromCart: action,
      clearCart: action,
    });
  }

  cartVisible: boolean = false;
  cartList: ICartItem[] = [];
  totalPrice: number = 0;

  setCartVisible = (visible: boolean) => {
    this.cartVisible = visible;
  };

  addToCart = (id: string) => {
    const product = this.findProduct(id);
    if (product) product.inCart = true;

    const cartItem: ICartItem = {
      id: product ? product.id : "",
      title: product ? product.title : "",
      price: product ? product.price : 0,
      img: product ? (product.images.length > 0 ? product.images[0] : "") : "",
      qty: 1,
      producer: product ? product.producer.name : "",
    };

    const existingCartItem = this.cartList.find(
      (item: ICartItem) => item.id === cartItem.id
    );

    if (existingCartItem) {
      this.cartList = this.cartList.map((item: ICartItem) =>
        item.id === cartItem.id ? { ...item, qty: item.qty + 1 } : item
      );
      return;
    }

    this.cartList.push(cartItem);
  };

  deleteFromCart = (id: string) => {
    const existingCartItem = this.cartList.find(
      (item: ICartItem) => item.id === id
    );

    if (existingCartItem && existingCartItem.qty === 1) {
      this.cartList = this.cartList.filter((item: ICartItem) => item.id !== id);
      const product = this.findProduct(id);
      if (product) product.inCart = false;
      return;
    }

    this.cartList = this.cartList.map((item: ICartItem) =>
      item.id === id ? { ...item, qty: item.qty - 1 } : item
    );
  };

  findProduct = (id: string) => {
    return this.rootStore.productStore.products.find((item) => item.id === id);
  };

  clearCart = () => {
    this.cartList = [];
    this.rootStore.productStore.products.forEach(
      (product) => (product.inCart = false)
    );
  };
}

export default CartStore;
