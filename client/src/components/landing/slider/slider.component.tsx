import React from "react";
import Button from "../../layout/button/button.component";

import Icon from "../../layout/icon/icon.component";

import { Wrapper, MainImg, LeftArrow, RightArrow } from "./slider.styles";

export type ModalImgProps = {
  images: string[];
};

const Slider = ({ images }: ModalImgProps) => {
  const [counter, setCounter] = React.useState<number>(0);

  const counterPlus = () => {
    if (counter === images.length - 1) {
      setCounter(0);
      return;
    }
    setCounter(counter + 1);
  };

  console.log(images);

  const counterMinus = () => {
    if (counter === 0) {
      setCounter(images.length - 1);
      return;
    }
    setCounter(counter - 1);
  };

  return (
    <Wrapper>
      <LeftArrow>
        <Button circle reverse onClick={counterMinus}>
          <Icon type="arrow-left" />
        </Button>
      </LeftArrow>
      <MainImg key={counter} src={images[counter]} />
      <RightArrow>
        <Button circle reverse onClick={counterPlus}>
          <Icon type="arrow-right" />
        </Button>
      </RightArrow>
    </Wrapper>
  );
};

export default Slider;
