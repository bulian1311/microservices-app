import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.25em;

  /* @media (max-width: 720px) {
    flex-direction: column;
  } */
`;

export const Img = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 4px;

  &::after {
    content: "";
    height: 3.6875em;
    border-right: 1px solid var(--text-color-light);
  }
`;

export const Title = styled.div`
  position: relative;
  text-align: center;
  font-size: 1.625rem;
  width: 10.769em;
  display: flex;
  justify-content: center;
  align-items: center;

  /* @media (min-width: 720px) {
    &::before {
      content: "";
      position: absolute;
      height: 2.269em;
      border-right: 1px solid var(--text-color-light);
      right: 10.769em;
    }
  } */
`;

export const Counter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Count = styled.div`
  box-shadow: inset 1px 1px 3px #c6c6c6, inset -1px -1px 3px #ffffff;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.875em;
  height: 1.875em;
  margin: 0 0.625em;
`;

export const Price = styled.div`
  font-size: 1.3125rem;
`;

export const Delete = styled.div`
  font-size: 1rem;
  cursor: pointer;
`;

export const CartBlock = styled.div`
  position: relative;
  width: 8.75em;
  display: flex;
  justify-content: center;
  align-items: center;

  /* @media (max-width: 720px) {
    margin-top: 1em;
  }

  @media (min-width: 720px) {
    &::before {
      content: "";
      position: absolute;
      height: 3.6875em;
      border-right: 1px solid var(--text-color-light);
      right: 8.75em;
    }
  } */
`;
