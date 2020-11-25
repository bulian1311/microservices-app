import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 72.9375em;
  grid-template-rows: auto;
  grid-template-areas: "Categories";
  margin: 2em 0;

  /* @media (max-width: 720px) {
    grid-template-columns: 100%;
    grid-template-rows: 100%;
  } */
`;

export const Container = styled.div`
  width: 63.75em;

  /* @media (max-width: 720px) {
    width: auto;
  } */
`;

export const FirstChar = styled.div`
  font-size: 1.625rem;
  font-weight: 400;
  text-transform: uppercase;
  text-decoration: underline;
  margin: 0.5em 0;
`;

export const CategoryItem = styled.div`
  font-size: 1.25em;
  font-weight: 400;
  cursor: pointer;

  &:hover {
    opacity: 80%;
  }

  &::first-letter {
    text-transform: uppercase;
  }
`;
