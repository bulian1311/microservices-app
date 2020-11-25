import styled from "styled-components";

export const StyledForm = styled.form`
  position: relative;
  display: grid;
  grid-template-columns: 24.0625em 39.6875em;
  grid-template-rows: 27em;
  gap: 1.25em 1.25em;
  grid-template-areas: "CartInputs CartBody";
  margin: 2em 0;

  /* @media (max-width: 720px) {
    grid-template-areas: "CartBody" "CartInputs";
    grid-template-columns: 100%;
    grid-template-rows: 27em 27em;
  } */
`;

export const Inputs = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-weight: 300;
`;

export const RadioWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const SubTitle = styled.span`
  font-size: 1.625rem;
  line-height: 1.153em;
  font-weight: 400;
`;

export const FormTitle = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextAreaWrapper = styled.div`
  width: 100%;
  height: 100px;
`;

export const HiddenSpan = styled.span`
  /* @media (max-width: 720px) {
    display: none;
  } */
`;
