import { TProducer } from "./producer.type";

export interface ICartItem {
  id: string;
  img: string;
  title: string;
  price: number;
  qty: number;
  producer: TProducer;
}
