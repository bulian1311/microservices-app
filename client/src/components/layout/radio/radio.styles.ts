import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const Label = styled.label`
  position: absolute;
  top: 0;
  left: 0.25em;
  width: 2.5em;
  height: 2.5em;
  border-radius: 50%;
  background: #e9e9e9;
  box-shadow: 3px 3px 10px #c6c6c6, -3px -3px 10px #ffffff;
`;

export const Input = styled.input`
  font-family: inherit;
  padding: 0;
  opacity: 0;
  z-index: 1;
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  &:hover {
    cursor: pointer;
  }
  &:checked + ${Label} {
    background: #e9e9e9;
    box-shadow: inset 3px 3px 10px #c6c6c6, inset -3px -3px 10px #ffffff;
  }
`;

export const Span = styled.span`
  cursor: pointer;
  margin-left: 0.571em;
  font-size: 1.3125rem;
  line-height: 1.19em;
  font-weight: 400;
`;
