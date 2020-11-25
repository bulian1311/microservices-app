import React from "react";

import Block from "../../layout/block/block.component";

import { Wrapper, StyledImg, ImgWrapper, Title } from "./cart-item-mini.styles";
import { IProduct } from "../../../interfaces/product.interface";

type TProps = {
  product: IProduct;
};

const CartItemMini = ({ product }: TProps) => {
  return (
    <Wrapper>
      <ImgWrapper>
        <Block padding={5}>
          <StyledImg src={product.images[0]} />
        </Block>
      </ImgWrapper>
      <Title>{product.title} добавлен в корзину</Title>
    </Wrapper>
  );
};

export default CartItemMini;
