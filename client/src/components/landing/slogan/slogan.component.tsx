import React from "react";

import { StyledH1, SloganMain, SloganSub } from "./slogan.styles";

type TProps = {
  mainText: string;
  subText: string;
};

const Slogan = ({ mainText, subText }: TProps) => {
  return (
    <StyledH1>
      <SloganMain>{mainText}</SloganMain>
      <SloganSub>{subText}</SloganSub>
    </StyledH1>
  );
};

export default Slogan;
