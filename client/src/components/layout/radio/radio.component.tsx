import React from "react";
import { Wrapper, Input, Label, Span } from "./radio.styles";

export type RadioButtonProps = {
  label: string;
  id?: string;
  value: string;
  name?: string;
  checked: boolean;
  testId?: string;
  handleSelectChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Radio = ({
  label,
  id,
  value,
  name,
  checked,
  handleSelectChange,
  testId,
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
        data-testid={testId}
      />
      <Label />
      <Span>{label}</Span>
    </Wrapper>
  );
};

export default Radio;
