import { observable, action, makeObservable } from "mobx";

import RootStore from "./root.store";

class NotificationsStore {
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;

    makeObservable(this, {
      notifications: observable,
      setNotification: action,
      deleteNotification: action,
    });
  }

  notifications: { id: string; img: string; title: string }[] = [];

  setNotification = ({ img, title }: { img: string; title: string }) => {
    this.notifications.push({ img, title, id: String(Math.random()) });
  };

  deleteNotification = (id: string) => {
    this.notifications = this.notifications.filter(
      (notification) => notification.id !== id
    );
  };
}

export default NotificationsStore;
