import React from "react";

import useStore from "../../../hooks/use-store.hook";

import Block from "../../layout/block/block.component";

import { Wrapper, StyledImg, ImgWrapper, Title } from "./notification.styles";
import { INotification } from "../../../interfaces/notification.interface";

type TProps = {
  notification: INotification;
  timer?: number;
};

const Notification = ({ notification, timer = 2000 }: TProps) => {
  const { notificationsStore } = useStore();

  React.useEffect(() => {
    const timeoutID = setTimeout(() => {
      notificationsStore.deleteNotification(notification.id);
    }, timer);

    return () => clearTimeout(timeoutID);
  }, [notification.id, notificationsStore]);

  return (
    <Wrapper data-testid="notification" visible={true}>
      <ImgWrapper>
        <Block padding={5}>
          <StyledImg src={notification.img} />
        </Block>
      </ImgWrapper>
      <Title>{notification.title} добавлен в корзину</Title>
    </Wrapper>
  );
};

export default Notification;
