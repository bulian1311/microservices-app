import React from "react";
import { observer } from "mobx-react-lite";
import useStore from "../../../hooks/use-store.hook";

import Input from "../../layout/input";
import TextArea from "../../layout/textarea";
import Button from "../../layout/button/button.component";

import Icon from "../../layout/icon/icon.component";

import { IProduct } from "../../../interfaces/product.interface";

import {
  Wrapper,
  Description,
  Title,
  TextAreaWrapper,
  Buttons,
  Form,
  Secret,
  ButtonWrapper,
  RadioWrapper,
  Text,
} from "./card-body.styles";

type TProps = {
  body: "desc" | "form" | "";
  product: IProduct;
};

const CardBody = ({ body, product }: TProps) => {
  const store = useStore();
  const { name, phone, email, message, prefer } = store.mailerStore;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = e.target;
    store.mailerStore.setValue(name, value);
  };

  const handlePreferClick = (prefer: "mail" | "phone") => {
    store.mailerStore.setValue("prefer", prefer);
  };

  const handleTextAreaChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    const { value, name } = e.target;
    store.mailerStore.setValue(name, value);
  };

  const handleSubmit = (): void => {
    store.mailerStore.sendMessage();
  };

  switch (body) {
    case "desc":
      return (
        <Wrapper center>
          <Title>{product.title}</Title>
          <Description>{product.description}</Description>
        </Wrapper>
      );
    case "form":
      return (
        <Form>
          <Input
            autoComplete="off"
            required
            value={name}
            onChange={handleChange}
            placeholder="Имя"
            name="name"
          />
          <Input
            autoComplete="off"
            required
            value={phone}
            onChange={handleChange}
            placeholder="+7(999)999-99-99"
            name="phone"
          />
          <Input
            autoComplete="off"
            required
            value={email}
            onChange={handleChange}
            placeholder="Email"
            name="email"
            type="email"
          />
          <TextAreaWrapper height={245}>
            <TextArea
              value={message}
              onChange={handleTextAreaChange}
              placeholder="Ваш вопрос по данному аттракциону"
              name="message"
            />
          </TextAreaWrapper>
          <Secret>
            <h4>Конфиденциальность</h4>
            <span>
              Мы обязуемся не передавать полученную информацию третьим лицам
            </span>
          </Secret>
          <Buttons>
            <ButtonWrapper>
              <Button
                onClick={handleSubmit}
                type="submit"
                disabled={store.mailerStore.isMailSended}
              >
                {store.mailerStore.isMailSended
                  ? "Отправляется..."
                  : "Отправить"}
              </Button>
            </ButtonWrapper>
            <RadioWrapper>
              <Button
                onClick={() => handlePreferClick("phone")}
                reverse={prefer === "phone"}
                circle
                type="button"
              >
                <Icon type="phone" width={1.2} />
              </Button>
              <Text>Позвонить</Text>
            </RadioWrapper>
            <RadioWrapper>
              <Button
                onClick={() => handlePreferClick("mail")}
                reverse={prefer === "mail"}
                circle
                type="button"
              >
                <Icon type="mail" width={1.2} />
              </Button>
              <Text>Написать</Text>
            </RadioWrapper>
          </Buttons>
        </Form>
      );
    default:
      return <div></div>;
  }
};

export default observer(CardBody);
