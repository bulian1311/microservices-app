import React from "react";
import { Wrapper, Input, Label, Span } from "./radio.styles";

export type RadioButtonProps = {
  label: string;
  id?: string;
  value: string;
  name?: string;
  checked: boolean;
  handleSelectChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Radio = ({
  label,
  id,
  value,
  name,
  checked,
  handleSelectChange,
}: RadioButtonProps) => {
  return (
    <Wrapper>
      <Input
        checked={checked}
        onChange={handleSelectChange}
        type="radio"
        id={id}
        value={value}
        name={name}
      />
      <Label />
      <Span>{label}</Span>
    </Wrapper>
  );
};

export default Radio;
