import React from "react";

import useStore from "../../../hooks/use-store.hook";

import Producer from "../producer/producer.component";
import Button from "../../layout/button/button.component";
import { ICartItem } from "../../../interfaces/cartItem.interface";
import {
  Wrapper,
  Img,
  Title,
  Counter,
  Count,
  Price,
  Delete,
  CartBlock,
} from "./cart-item.styles";

type TProps = {
  cartItem: ICartItem;
};

const CartItem = ({ cartItem }: TProps) => {
  const { cartStore } = useStore();
  return (
    <Wrapper>
      <Img src={cartItem.img} />
      <Title>{cartItem.title}</Title>
      <CartBlock>
        <Producer producer={cartItem.producer} />
      </CartBlock>
      <CartBlock>
        <Counter>
          <Button small onClick={() => cartStore.deleteFromCart(cartItem.id)}>
            -
          </Button>
          <Count>{cartItem.qty}</Count>
          <Button small onClick={() => cartStore.addToCart(cartItem.id)}>
            +
          </Button>
        </Counter>
      </CartBlock>
      <CartBlock>
        <Price>{cartItem.price}</Price>
      </CartBlock>
      <CartBlock>
        <Delete onClick={() => cartStore.deleteFromCart(cartItem.id)}>
          Удалить
        </Delete>
      </CartBlock>
    </Wrapper>
  );
};

export default CartItem;
