import React from "react";
import { observer } from "mobx-react-lite";
import useStore from "../../../hooks/use-store.hook";

import Icon from "../../layout/icon/icon.component";

import { Wrapper, Text, IconWrapper } from "./sort-bar.styles";

const SortBar = () => {
  const store = useStore();

  return (
    <Wrapper>
      <Text>
        {store.filterStore.searchQuery ? "Найдено" : "Всего"} аттракционов:{" "}
        {store.productStore.count}
      </Text>
      <Text>
        <IconWrapper>
          <Icon type="sort" width={1.5} />
        </IconWrapper>
        сортировать
      </Text>
    </Wrapper>
  );
};

export default observer(SortBar);
