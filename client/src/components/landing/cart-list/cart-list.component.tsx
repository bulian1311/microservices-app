import React from "react";
import { observer } from "mobx-react-lite";
import CartItem from "../cart-item/cart-item.component";
import useStore from "../../../hooks/use-store.hook";

import { Wrapper } from "./cart.list.styles";

const CartList = () => {
  const { cartStore } = useStore();
  return (
    <Wrapper>
      {cartStore.cartList.map((item) => (
        <CartItem cartItem={item} key={item.id} />
      ))}
    </Wrapper>
  );
};

export default observer(CartList);
