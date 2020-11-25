import React from "react";
import { observer } from "mobx-react-lite";

import Button from "../../layout/button/button.component";
import Icon from "../../layout/icon/icon.component";
import useStore from "../../../hooks/use-store.hook";

import { Wrapper, ButtonWrapper } from "./navbar.styles";

const Navbar = () => {
  const { cartStore, categoryStore } = useStore();

  const searchHandler = () => {
    categoryStore.setCategoryVisible(false);
    cartStore.setCartVisible(false);
  };

  const categoriesHandler = () => {
    categoryStore.setCategoryVisible(true);
    cartStore.setCartVisible(false);
  };
  const cartHandler = () => {
    categoryStore.setCategoryVisible(false);
    cartStore.setCartVisible(true);
  };

  return (
    <Wrapper>
      <ButtonWrapper>
        <Button
          circle={true}
          reverse={!categoryStore.categoryVisible && !cartStore.cartVisible}
          onClick={searchHandler}
        >
          <Icon type="search2" width={1.1} />
        </Button>
      </ButtonWrapper>
      <ButtonWrapper>
        <Button
          circle={true}
          reverse={categoryStore.categoryVisible}
          onClick={categoriesHandler}
        >
          <Icon type="categories" width={1.1} />
        </Button>
      </ButtonWrapper>
      <ButtonWrapper>
        <Button
          circle={true}
          reverse={cartStore.cartVisible}
          onClick={cartHandler}
        >
          <Icon type="cart" width={1.1} />
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default observer(Navbar);
