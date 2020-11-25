import styled from "styled-components";

export const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  background: var(--bg-color);
  box-shadow: inset 3px 3px 10px #c6c6c6, inset -3px -3px 10px #ffffff;
  border-radius: 4px;
  font-weight: 300;
  font-size: 1.3125rem;
  line-height: 1.190em;
  color: inherit;
  font-family: inherit;
  padding: 0.952em;
  ::placeholder {
    color: var(--text-color-light);
  }
`;
