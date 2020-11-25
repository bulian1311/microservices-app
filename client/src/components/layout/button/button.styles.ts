import styled from "styled-components";

export const StyledButton = styled.a<{
  circle?: boolean;
  reverse?: boolean;
  small?: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: var(--bg-color);
  padding: ${(props) => (props.circle || props.small ? "none" : "0.571em")};
  box-shadow: ${(props) =>
    props.reverse
      ? "inset 3px 3px 5px #c6c6c6, inset -3px -3px 5px #ffffff"
      : "3px 3px 5px #c6c6c6, -3px -3px 5px #ffffff"};
  color: inherit;
  font-size: ${(props) => (props.small ? "1rem" : "1.3125rem")};

  border-radius: ${(props) =>
    props.circle ? "50%" : props.small ? "2px" : "8px"};
  width: ${(props) =>
    props.circle ? "1.904em" : props.small ? "1.05em" : "100%"};
  height: ${(props) =>
    props.circle ? "1.904em" : props.small ? "1.05em" : "auto"};

  &:active {
    box-shadow: ${(props) =>
      props.reverse
        ? "3px 3px 5px #c6c6c6, -3px -3px 5px #ffffff"
        : "inset 3px 3px 5px #c6c6c6, inset -3px -3px 5px #ffffff"};
  }

  &:disabled {
    cursor: default;
  }
`;
