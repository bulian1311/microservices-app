import styled from "styled-components";

export const Form = styled.form`
  display: grid;
  grid-template-columns: 24.0625em 39.6875em;
  grid-template-rows: 19.875em 13.75em;
  gap: 1.25em 1.25em;
  grid-template-areas: "Inputs TextArea" "Buttons TextArea";

  /* @media (max-width: 720px) {
    grid-template-areas: "Inputs" "TextArea";
    grid-template-columns: 100%;
    grid-template-rows: 30em;
  } */

  /* Экстрамалые девайсы («телефоны», < 576px) */
  @media (max-width: 575.98px) {
    grid-template-areas: "Inputs" "TextArea" "Buttons";
    grid-template-columns: 24.0625em;
    grid-template-rows: 19.875em 25.4375em 13.75em;
  }
`;

export const Inputs = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.span`
  font-size: 2.5rem;
  line-height: 1.175em;
  margin-top: 0.75em;
  margin-bottom: 3em;
`;

export const SubTitle = styled.span`
  font-size: 1.625rem;
  line-height: 1.153em;
  font-weight: 400;
  margin-bottom: -0.769em;
`;

export const SubDescription = styled.span`
  font-weight: 300;
`;

export const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextAreaWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 1.25em;
`;

export const SecretWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  & span {
    font-size: 1.625rem;
    line-height: 1.153em;
    font-weight: 400;
    color: var(--text-color-light);
    margin-left: 0.769em;
  }

  /* Экстрамалые девайсы («телефоны», < 576px) */
  @media (max-width: 575.98px) {
    & span {
      font-size: 1.3em;
    }
  }

  & p {
    margin-top: 0.25em;
    font-weight: 300;
    font-size: 1rem;
    line-height: 1.1875em;
    color: var(--text-color-light);
  }
`;

export const Buttons = styled.div`
  width: 94%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled.span`
  font-size: 1.3rem;
  margin-left: 0.6rem;
`;
