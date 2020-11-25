import React from "react";

import { observer } from "mobx-react-lite";

import CartList from "../cart-list/cart-list.component";
import CartForm from "../cart-form/cart-form.component";
import CloseButton from "../close-button/close-button.component";
import Block from "../../layout/block/block.component";

import useStore from "../../../hooks/use-store.hook";

import { Wrapper } from "./cart.styles";

const Cart = () => {
  const { cartStore } = useStore();
  const handleClose = () => {
    cartStore.setCartVisible(false);
  };

  return (
    <Wrapper>
      <Block gridArea="EmptyCart">
        <CloseButton handleClose={handleClose} />
        {cartStore.cartList.length > 0 ? (
          <>
            <CartList />
            <CartForm />
          </>
        ) : (
          <h1>Корзина пуста</h1>
        )}
      </Block>
    </Wrapper>
  );
};

export default observer(Cart);
