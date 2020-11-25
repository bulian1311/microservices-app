import React from "react";
import { observer } from "mobx-react-lite";

import useStore from "../../../hooks/use-store.hook";

import Block from "../../layout/block/block.component";
import Button from "../../layout/button/button.component";
import TextArea from "../../layout/textarea";
import Input from "../../layout/input";
import Radio from "../../layout/radio/radio.component";

import {
  StyledForm,
  Inputs,
  RadioWrapper,
  SubTitle,
  TextAreaWrapper,
  FormTitle,
  HiddenSpan,
} from "./cart-form.styles";

const CartForm = () => {
  const { mailerStore } = useStore();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = e.target;
    mailerStore.setValue(name, value);
  };

  const handleTextAreaChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    const { value, name } = e.target;
    mailerStore.setValue(name, value);
  };

  const handleSubmit = (): void => {
    mailerStore.sendCart();
  };

  return (
    <StyledForm>
      <Block gridArea="CartInputs">
        <Inputs>
          <FormTitle>
            <SubTitle>Контактные данные</SubTitle>
            <HiddenSpan>
              Заполните форму и мы обязательно свяжемся с вами
            </HiddenSpan>
          </FormTitle>
          <Input
            autoComplete="off"
            required
            placeholder="Имя"
            name="name"
            value={mailerStore.name}
            onChange={handleInputChange}
          />
          <Input
            autoComplete="off"
            required
            placeholder="+7(999)999-99-99"
            name="phone"
            value={mailerStore.phone}
            onChange={handleInputChange}
          />
          <Input
            autoComplete="off"
            required
            placeholder="Email"
            name="email"
            type="email"
            value={mailerStore.email}
            onChange={handleInputChange}
          />
          <RadioWrapper>
            <Radio
              label="Написать"
              handleSelectChange={handleInputChange}
              checked={mailerStore.prefer === "email"}
              value="email"
              name="prefer"
            />
            <Radio
              label="Позвонить"
              handleSelectChange={handleInputChange}
              checked={mailerStore.prefer === "phone"}
              value="phone"
              name="prefer"
            />
          </RadioWrapper>
          <Button onClick={handleSubmit}>Сделать заказ</Button>
        </Inputs>
      </Block>
      <Block gridArea="CartBody">
        <Inputs>
          <FormTitle>
            <SubTitle>Информация о мероприятии</SubTitle>
            <HiddenSpan>
              Укажите дату и время, адрес доставки, а также другую информацию о
              предстоящем мероприятии
            </HiddenSpan>
          </FormTitle>
          <Input
            autoComplete="off"
            required
            placeholder="Дата и время"
            name="date"
            value={mailerStore.date}
            onChange={handleInputChange}
          />
          <TextAreaWrapper>
            <TextArea
              value={mailerStore.address}
              onChange={handleTextAreaChange}
              placeholder="Адрес"
              name="address"
            />
          </TextAreaWrapper>
          <TextAreaWrapper>
            <TextArea
              value={mailerStore.message}
              onChange={handleTextAreaChange}
              placeholder="Комментарий"
              name="message"
            />
          </TextAreaWrapper>
        </Inputs>
      </Block>
    </StyledForm>
  );
};

export default observer(CartForm);
