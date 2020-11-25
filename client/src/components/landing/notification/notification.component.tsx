import React from "react";

import useStore from "../../../hooks/use-store.hook";

import Block from "../../layout/block/block.component";

import { Wrapper, StyledImg, ImgWrapper, Title } from "./notification.styles";
import { INotification } from "../../../interfaces/notification.interface";

type TProps = {
  notification: INotification;
};

const Notification = ({ notification }: TProps) => {
  const { notificationsStore } = useStore();
  //const [visible, setVisible] = React.useState<boolean>(true);

  React.useEffect(() => {
    const timeoutID = setTimeout(() => {
      notificationsStore.deleteNotification(notification.id);
      //setVisible(false);
    }, 2000);

    return () => clearTimeout(timeoutID);
  }, [notification.id, notificationsStore]);

  return (
    <Wrapper visible={true}>
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
