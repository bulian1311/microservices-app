import React from "react";

import useStore from "../../../hooks/use-store.hook";

import party2go from "../../../resources/images/party2go.png";
import funevents from "../../../resources/images/funevents.png";
import eventomania from "../../../resources/images/eventomania.png";
import batutvarendu from "../../../resources/images/batutvarendu.jpg";
import proInteractive from "../../../resources/images/pro-interactive.png";
import arendaAttrakcionov from "../../../resources/images/arenda-attrakcionov.png";

import { TProducer } from "../../../interfaces/producer.type";

import { ProducerImg, Wrapper } from "./producer.styles";

export type ProducerProps = {
  producer: TProducer;
  onClick?: () => void;
};

const Producer = ({ producer, onClick }: ProducerProps) => {
  const store = useStore();
  let img = "";
  let searchQery: string = "";

  switch (producer) {
    case "party2go":
      img = party2go;
      searchQery = "party2go";
      break;
    case "funevents":
      img = funevents;
      searchQery = "funevents";
      break;
    case "eventomania":
      img = eventomania;
      searchQery = "eventomania";
      break;
    case "batutvarendu":
      img = batutvarendu;
      searchQery = "batutvarendu";
      break;
    case "pro-interactive":
      img = proInteractive;
      searchQery = "pro-interactive";
      break;
    case "arenda-attrakcionov":
      img = arendaAttrakcionov;
      searchQery = "arenda-attrakcionov";
      break;
    default:
      img = "";
  }

  const handleClick = () => {
    store.filterStore.setSearchQuery(searchQery);
    store.productStore.fetchProducts(false);
    window.scrollTo(0, 0);
  };

  return (
    <Wrapper onClick={handleClick}>
      <ProducerImg src={img} onClick={onClick} title={producer} />
    </Wrapper>
  );
};

export default Producer;
