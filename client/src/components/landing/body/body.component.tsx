import React from "react";
import { observer } from "mobx-react-lite";

import Container from "../../layout/container";
import Slogan from "../slogan/slogan.component";
import Search from "../search/search.component";
import SortBar from "../sort-bar/sort-bar.component";
import CardList from "../card-list/card-list.component";
import ShowMore from "../show-more/show-more.component";
import Contacts from "../contacts/contacts.component";
import Cart from "../cart/cart.component";
import Categories from "../categories/categories.component";

import useStore from "../../../hooks/use-store.hook";

import { SubContainer, MobileLogo } from "./body.styles";

function Body() {
  const store = useStore();
  const { cartVisible } = store.cartStore;
  const { categoryVisible } = store.categoryStore;

  if (cartVisible) {
    return (
      <SubContainer>
        <Slogan
          mainText="Корзина заказов"
          subText=" последний шаг до организации мероприятия"
        />
        <Cart />
      </SubContainer>
    );
  }

  if (categoryVisible) {
    return (
      <Container>
        <Slogan
          mainText="каталог категорий"
          subText="сортировка аттракционов по категориям"
        />
        <Categories />
      </Container>
    );
  }

  return (
    <Container>
      {/* <MobileLogo>Magmer</MobileLogo> */}
      <Slogan
        mainText="Находить а не искать"
        subText="Тысячи различных аттракционов для любого праздника"
      />
      <Search />
      <SortBar />
      <CardList />
      <ShowMore />
      <Contacts />
    </Container>
  );
}

export default observer(Body);
