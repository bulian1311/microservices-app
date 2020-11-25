import React from "react";
import { observer } from "mobx-react-lite";

import useStore from "../../../hooks/use-store.hook";

import Block from "../../layout/block/block.component";
import CardBody from "../card-body/card-body.component";
import Button from "../../layout/button/button.component";
import Producer from "../producer/producer.component";
import Slider from "../slider/slider.component";
import CloseButton from "../close-button/close-button.component";
import CartItemMini from "../cart-item-mini/cart-item-mini.component";

import Icon from "../../layout/icon/icon.component";
import notfoundImg from "../../../resources/images/notfound.png";

import { IProduct } from "../../../interfaces/product.interface";

import {
  Wrapper,
  Image,
  Title,
  Description,
  Price,
  Buttons,
  ButtonsIcon,
  ButtonsText,
} from "./card-item.styles";

type TProps = {
  product: IProduct;
};

const CardItem = ({ product }: TProps) => {
  const { cartStore, notificationsStore } = useStore();
  const [open, setOpen] = React.useState<boolean>(false);
  const [body, setBody] = React.useState<"desc" | "form" | "">("");
  const images = product.images.length === 0 ? [notfoundImg] : product.images;
  const [imgs, setImgs] = React.useState<string[]>(images);

  const handleCloseFullCard = () => {
    setOpen(false);
    setBody("");
  };

  const handleQestionButton = () => {
    setOpen(true);
    setBody("form");
  };

  const handleOpenCard = () => {
    setOpen(true);
    setBody("desc");
  };

  const addToCart = () => {
    cartStore.addToCart(product.id);
    notificationsStore.setNotification({
      img: product.images[0],
      title: product.title,
    });
  };

  return (
    <Wrapper open={open}>
      {product.inCart && <CartItemMini product={product} />}
      {open ? <CloseButton handleClose={handleCloseFullCard} /> : ""}
      <Block gridArea="Image">
        {open ? (
          <Slider images={imgs} />
        ) : (
          <Image
            onClick={() => setOpen(true)}
            src={imgs[0]}
            onError={() => setImgs([notfoundImg])}
          />
        )}
      </Block>
      <Block gridArea="Description">
        {open ? (
          <CardBody body={body} product={product} />
        ) : (
          <React.Fragment>
            <Title>
              {product.title.slice(0, 20)}
              {product.title.length > 20 ? "..." : ""}
            </Title>
            <Description>
              {product.description.slice(0, 200) + "..."}
            </Description>
          </React.Fragment>
        )}
      </Block>
      <Block gridArea="Price">
        <Price>{product.price} &#8381;</Price>
      </Block>
      <Block gridArea="Producer">
        <Producer producer={product.producer.name} />
      </Block>
      <Block gridArea="Buttons">
        <Buttons open={open}>
          <Button onClick={addToCart}>
            {open ? (
              "В корзину"
            ) : (
              <>
                <ButtonsIcon>
                  <Icon type="cart" />
                </ButtonsIcon>
                <ButtonsText>В корзину</ButtonsText>
              </>
            )}
          </Button>

          <Button reverse={body === "form"} onClick={handleQestionButton}>
            {open ? (
              "Задать вопрос"
            ) : (
              <>
                <ButtonsIcon>
                  <Icon type="cart" />
                </ButtonsIcon>
                <ButtonsText>Задать вопрос</ButtonsText>
              </>
            )}
          </Button>
          <Button reverse={body === "desc"} onClick={handleOpenCard}>
            Подробнее
          </Button>
        </Buttons>
      </Block>
    </Wrapper>
  );
};

export default observer(CardItem);
