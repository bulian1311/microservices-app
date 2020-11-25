import React from "react";
import { observer } from "mobx-react-lite";

import useStore from "../../../hooks/use-store.hook";

import Block from "../../layout/block/block.component";
import Button from "../../layout/button/button.component";
import Input from "../../layout/input";
import TextArea from "../../layout/textarea";

import Icon from "../../layout/icon/icon.component";

import {
  Form,
  Title,
  Inputs,
  SubTitle,
  RadioWrapper,
  TextAreaWrapper,
  SecretWrapper,
  SubDescription,
  Text,
  Buttons,
} from "./contacts.styles";

const Contacts = () => {
  const { mailerStore } = useStore();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = e.target;
    mailerStore.setValue(name, value);
  };

  const handlePreferClick = (prefer: "mail" | "phone") => {
    mailerStore.setValue("prefer", prefer);
  };

  const handleTextAreaChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    const { value, name } = e.target;
    mailerStore.setValue(name, value);
  };

  const handleSubmit = (): void => {
    mailerStore.sendMessage();
  };

  return (
    <React.Fragment>
      <Icon type="contacts" width={4} />
      <Title>Появились вопросы</Title>
      <Form>
        <Block gridArea="Inputs">
          <Inputs>
            <SubTitle>Обратная связь</SubTitle>
            <SubDescription>Мы обязательно свяжемся с вами</SubDescription>
            <Input
              autoComplete="off"
              placeholder="Имя"
              name="name"
              value={mailerStore.name}
              onChange={handleInputChange}
            />
            <Input
              autoComplete="off"
              placeholder="+7(999)999-99-99"
              name="phone"
              value={mailerStore.phone}
              onChange={handleInputChange}
            />
            <Input
              autoComplete="off"
              placeholder="Email"
              name="email"
              type="email"
              value={mailerStore.email}
              onChange={handleInputChange}
            />
          </Inputs>
        </Block>

        <Block gridArea="Buttons">
          <Inputs>
            <SubTitle>Обратная связь</SubTitle>
            <SubDescription>Мы обязательно свяжемся с вами</SubDescription>
            <Buttons>
              <RadioWrapper>
                <Button
                  onClick={() => handlePreferClick("phone")}
                  reverse={mailerStore.prefer === "phone"}
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
                  reverse={mailerStore.prefer === "mail"}
                  circle
                  type="button"
                >
                  <Icon type="mail" width={1.2} />
                </Button>
                <Text>Написать</Text>
              </RadioWrapper>
            </Buttons>
            <Button onClick={handleSubmit}>Задать вопрос</Button>
          </Inputs>
        </Block>

        <Block gridArea="TextArea">
          <TextAreaWrapper>
            <TextArea
              placeholder="Ваш вопрос или комментарий"
              value={mailerStore.message}
              onChange={handleTextAreaChange}
              name="message"
            />
          </TextAreaWrapper>
          <SecretWrapper>
            <Icon type="secret" width={8} />
            <span>
              Конфиденциальность
              <p>
                Мы обязуемся не передавать полученную информацию и контактные
                данные третьим лицам.
              </p>
            </span>
          </SecretWrapper>
        </Block>
      </Form>
    </React.Fragment>
  );
};

export default observer(Contacts);
