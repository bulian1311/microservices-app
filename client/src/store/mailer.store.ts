import { observable, action, makeObservable, runInAction } from "mobx";
import { mailer } from "../api";

import RootStore from "./root.store";

class MailerStore {
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;

    makeObservable(this, {
      isMailSended: observable,
      errorMessage: observable,
      name: observable,
      phone: observable,
      email: observable,
      message: observable,
      prefer: observable,
      date: observable,
      address: observable,
      setValue: action,
      clearForm: action,
      sendMessage: action,
      sendCart: action,
    });
  }

  isMailSended: boolean = false;
  errorMessage: string | null = null;
  name: string = "";
  phone: string = "";
  email: string = "";
  message: string = "";
  prefer: string = "phone";
  date: string = "";
  address: string = "";

  setValue = (name: string, value: string) => {
    switch (name) {
      case "name":
        this.name = value;
        break;
      case "email":
        this.email = value;
        break;
      case "phone":
        this.phone = value;
        break;
      case "message":
        this.message = value;
        break;
      case "prefer":
        this.prefer = value;
        break;
      case "date":
        this.date = value;
        break;
      case "address":
        this.address = value;
        break;
    }
  };

  clearForm = () => {
    this.name = "";
    this.phone = "";
    this.email = "";
    this.message = "";
  };

  sendMessage = async () => {
    this.isMailSended = true;

    try {
      await mailer.sendMessage({
        name: this.name,
        phone: this.phone,
        email: this.email,
        message: this.message,
        prefer: this.prefer,
        date: this.date,
        address: this.address,
      });
      runInAction(() => {
        this.isMailSended = false;
        this.message = "";
      });
    } catch (err) {
      runInAction(() => {
        this.errorMessage = err.message;
        this.isMailSended = false;
      });
    }
  };

  sendCart = async () => {
    this.isMailSended = true;
    try {
      await mailer.sendCart(
        {
          name: this.name,
          phone: this.phone,
          email: this.email,
          message: this.message,
          prefer: this.prefer,
          date: this.date,
          address: this.address,
        },
        {
          cartList: this.rootStore.cartStore.cartList,
          total: 0,
          qty: 0,
        }
      );

      this.rootStore.cartStore.clearCart();
    } catch (err) {
      runInAction(() => {
        this.errorMessage = err.message;
        this.isMailSended = false;
      });
    }
  };
}

export default MailerStore;
