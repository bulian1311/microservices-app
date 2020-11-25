import React from "react";
import { observer } from "mobx-react-lite";
import useStore from "../../../hooks/use-store.hook";

import Notification from "../notification/notification.component";

import { Wrapper } from "./notifications.styles";

const Notifications = () => {
  const { notificationsStore } = useStore();

  return (
    <Wrapper>
      {notificationsStore.notifications.map((notification) => (
        <Notification notification={notification} key={Math.random()} />
      ))}
    </Wrapper>
  );
};

export default observer(Notifications);
