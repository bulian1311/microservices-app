import React from "react";
import { observer } from "mobx-react-lite";
import useStore from "../../../hooks/use-store.hook";

import Icon from "../../layout/icon/icon.component";

import {
  Wrapper,
  InputWrapper,
  StyledInput,
  Logo,
  IconWrapper,
  ExampleText,
  StyledUl,
  StyledLi,
  StyledHidenLi,
  IconCross,
} from "./search.styles";

const Search = () => {
  const store = useStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    store.filterStore.setSearchQuery(e.currentTarget.value);
    store.productStore.fetchProducts(false);
  };

  const handleChangeExample = (example: string) => {
    store.filterStore.setSearchQuery(example);
    store.productStore.fetchProducts(false);
  };

  const handleCrossClick = () => {
    store.filterStore.setSearchQuery("");
    store.productStore.fetchProducts(false);
  };

  return (
    <Wrapper>
      <InputWrapper>
        <IconWrapper>
          <Icon
            type={store.productStore.isFetching ? "preloader-dark" : "search"}
            width={1.56}
          />
        </IconWrapper>
        {store.filterStore.searchQuery && (
          <IconCross data-testid="cross-icon" onClick={handleCrossClick}>
            <Icon type="cross" width={1.1} />
          </IconCross>
        )}
        <StyledInput
          data-testid="search-input"
          value={store.filterStore.searchQuery}
          onChange={handleChange}
          placeholder="Что вы хотите найти?"
        />
        <Logo>Magmer</Logo>
      </InputWrapper>
      <ExampleText>
        например:
        <StyledUl data-testid="example-ul">
          <StyledHidenLi
            onClick={() => handleChangeExample("детские аттракционы")}
          >
            детские аттракционы;
          </StyledHidenLi>
          <StyledLi onClick={() => handleChangeExample("пейнтбол")}>
            пейнтбол;
          </StyledLi>
          <StyledLi onClick={() => handleChangeExample("силомер")}>
            силомер;
          </StyledLi>
          <StyledLi onClick={() => handleChangeExample("батут")}>
            батут
          </StyledLi>
        </StyledUl>
      </ExampleText>
    </Wrapper>
  );
};

export default observer(Search);
