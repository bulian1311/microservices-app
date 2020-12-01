import React from "react";
import useStore from "../../hooks/use-store.hook";

import Column from "../column/column.component";

const ColumnList = () => {
  const { columnStore } = useStore();
  return (
    <>
      {columnStore.columnOrder.map((columnId: any) => {
        return <Column key={columnId} columnId={columnId} />;
      })}
    </>
  );
};

export default ColumnList;
