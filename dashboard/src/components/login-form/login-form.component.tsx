import React from "react";

import Block from "../_layout/block/block.component";
import { Input } from "../_layout/input/input.styles";
import Button from "../_layout/button/button.component";

const LoginForm = () => {
  const [state, setState] = React.useState<{ login: string; password: string }>(
    { login: "", password: "" }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [e.currentTarget.name]: e.currentTarget.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <Block>
      <form onSubmit={handleSubmit}>
        <Input
          required
          name="login"
          placeholder="Логин"
          value={state.login}
          onChange={handleChange}
        />
        <Input
          required
          name="password"
          placeholder="Пароль"
          value={state.password}
          type="password"
          onChange={handleChange}
        />
        <Button type="submit">Войти</Button>
      </form>
    </Block>
  );
};

export default LoginForm;
