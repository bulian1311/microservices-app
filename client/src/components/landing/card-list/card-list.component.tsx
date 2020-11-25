import React from "react";
import { observer } from "mobx-react-lite";

import CardItem from "../card-item/card-item.component";

import useStore from "../../../hooks/use-store.hook";

import Icon from "../../layout/icon/icon.component";

import { Wrapper, Preloader } from "./card-list.styles";

const CardList = () => {
  const { productStore } = useStore();

  return (
    <Wrapper>
      {productStore.isFetching ? (
        <Preloader>
          <Icon type="preloader-dark" width={4} />
        </Preloader>
      ) : (
        productStore.products.map((product) => (
          <CardItem key={Math.random() * Math.random()} product={product} />
        ))
      )}
    </Wrapper>
  );
};

export default observer(CardList);
