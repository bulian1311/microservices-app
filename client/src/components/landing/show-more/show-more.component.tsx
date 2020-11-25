import React from "react";
import { observer } from "mobx-react-lite";

import useStore from "../../../hooks/use-store.hook";

import Button from "../../layout/button/button.component";
import Icon from "../../layout/icon/icon.component";

import { Wrapper } from "./show-more.styles";

const ShowMore = () => {
  const { productStore } = useStore();

  const fetchMore = () => {
    productStore.fetchProducts(true);
  };

  if (
    productStore.isDataOver ||
    productStore.products.length === 0 ||
    productStore.isFetching
  ) {
    return <></>;
  }

  return (
    <Wrapper>
      <Button onClick={fetchMore} disabled={productStore.isPaginateFetching}>
        {productStore.isPaginateFetching ? (
          <Icon type="preloader-dark" width={1.6} />
        ) : (
          "Показать еще"
        )}
      </Button>
    </Wrapper>
  );
};

export default observer(ShowMore);
