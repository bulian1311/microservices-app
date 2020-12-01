import React from "react";

import { StyledButton } from "./button.styles";

type TProps = {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  circle?: boolean;
  reverse?: boolean;
  type?: "submit" | "button" | "reset";
  small?: boolean;
  disabled?: boolean;
};

const Button = ({ children, ...otherProps }: TProps) => {
  return <StyledButton {...otherProps}>{children}</StyledButton>;
};

export default Button;
