import React from "react";

import useStore from "../../../hooks/use-store.hook";

import Block from "../../layout/block/block.component";
import CloseButton from "../close-button/close-button.component";

import {
  Wrapper,
  Container,
  CategoryItem,
  FirstChar,
} from "./categories.styles";

const Categories = () => {
  const { categoryStore, filterStore, productStore } = useStore();

  const handleClose = () => {
    categoryStore.setCategoryVisible(false);
  };

  const handleClick = (category: string) => {
    categoryStore.setCategoryVisible(false);
    filterStore.setSearchQuery(category);
    productStore.fetchProducts(false);
  };

  const renderCategories = () => {
    const arrElem: React.ReactNode[] = [];

    categoryStore.categoriesMap.forEach((val, key) => {
      arrElem.push(
        <React.Fragment key={Math.random()}>
          <FirstChar>{key}</FirstChar>
          {val.map((category: string) => (
            <CategoryItem key={category} onClick={() => handleClick(category)}>
              {category}
            </CategoryItem>
          ))}
        </React.Fragment>
      );
    });

    return arrElem;
  };

  return (
    <Wrapper>
      <CloseButton handleClose={handleClose} />
      <Block gridArea="Categories">
        <Container>{renderCategories()}</Container>
      </Block>
    </Wrapper>
  );
};

export default Categories;
