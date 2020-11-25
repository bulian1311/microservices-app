import styled from "styled-components";

export const Svg = styled.svg<{ color?: string; width?: number }>`
  fill: ${(props) => {
    switch (props.fill) {
      case "white":
        return "white;";
      case "black":
        return "black;";
      case "grey":
        return "var(--text-color-light);";
      case "main":
        return "grey";
    }
  }};
  ${(props) => (props.width ? `width: ${props.width}rem` : ``)};
`;
