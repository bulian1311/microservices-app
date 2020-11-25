import React from "react";

import Button from "../../layout/button/button.component";
import Icon from "../../layout/icon/icon.component";

import { Wrapper } from "./close-button.styles";

type TProps = {
  handleClose: () => void;
};

const CloseButton = ({ handleClose }: TProps) => {
  return (
    <Wrapper>
      <Button circle onClick={handleClose}>
        <Icon type="cross" />
      </Button>
    </Wrapper>
  );
};

export default CloseButton;
