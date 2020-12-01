import React from "react";

import { Wrapper } from "./block.styles";

type TProps = {
  children: React.ReactNode;
  gridArea?: string;
  padding?: number;
};

const Block = ({ children, gridArea, padding }: TProps) => {
  return (
    <Wrapper gridArea={gridArea} padding={padding}>
      {children}
    </Wrapper>
  );
};

export default Block;
