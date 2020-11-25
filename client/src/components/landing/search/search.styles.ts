import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 5em;
`;

export const InputWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25em;
`;

export const StyledInput = styled.input`
  width: 100%;
  background: var(--bg-color);
  box-shadow: inset 5px 5px 15px #c6c6c6, inset -5px -5px 15px #ffffff;
  border-radius: 8px;
  padding: 0.612em 2.258em;
  font-family: Roboto;
  font-weight: 300;
  font-size: 1.9375rem;
  color: inherit;
  margin-right: 1em;

  &::placeholder {
    color: var(--text-color-light);
  }

  /* @media (max-width: 720px) {
    margin: 0;
  } */
`;

export const Logo = styled.h2`
  font-weight: bold;
  font-size: 3.3125em;
  line-height: 1.1698em;
  text-transform: uppercase;
  color: #4c80a4;

  /* @media (max-width: 720px) {
    display: none;
  } */
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 1.75em;
  left: 1.75em;
  height: 1.56em;

  /* @media (max-width: 720px) {
    top: 1.75em;
    left: 2.25em;
  } */
`;

export const IconCross = styled.div`
  position: absolute;
  top: 1.75em;
  right: 18em;
  width: 1.1em;
  cursor: pointer;
`;

export const ExampleText = styled.div`
  display: flex;
  font-size: 0.9375rem;
  line-height: 1.2em;
`;

export const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  margin: 0 0.666em;
  padding: 0;
  border-bottom: 1px solid var(--text-color-light);
`;

export const StyledLi = styled.li`
  margin-right: 0.25em;
  cursor: pointer;
`;

export const StyledHidenLi = styled(StyledLi)`
  /* @media (max-width: 720px) {
    display: none;
  } */
`;
