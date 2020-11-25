import styled from "styled-components";

export const Wrapper = styled.div<{ open?: boolean }>`
  position: relative;
  display: grid;
  grid-template-columns: ${(props) =>
    props.open
      ? "14.375em 8.4375em 39.6875em"
      : "14.375em 24.0625em 8.4375em 14.375em"};
  grid-template-rows: ${(props) =>
    props.open ? "24.06em 4.6875em 8.4375em" : "4.6875em 8.4375em"};
  grid-template-areas: ${(props) =>
    props.open
      ? `"Image Image Description" "Buttons Price Description" "Buttons Producer Description"`
      : `"Image Description Price Buttons" "Image Description Producer Buttons"`};
  gap: 1.25em 1.25em;

  &:not(:last-child) {
    margin-bottom: 3.75em;
  }

  /* @media (max-width: 720px) {
    grid-template-columns: 58% 38%;
    grid-template-rows: ${(props) =>
    props.open ? "8em 8.4375em 22em 4.6875em" : "8em 8.4375em 12em 4.6875em"};
    grid-template-areas: "Image Price" "Image Producer" "Description Description" "Buttons Buttons";
  } */

  /* Экстрамалые девайсы («телефоны», < 576px) */
  @media (max-width: 575.98px) {
    grid-template-areas: ${(props) =>
      props.open
        ? `
      "	Image	Image	"
      "	Description	Description	"
      "	Price	Buttons	"
      "	Producer	Buttons	"
      `
        : `
      "	Image	Price	"
      "	Image	Producer	"
      "	Description	Description	"
      "	Buttons	Buttons	"
      `};

    grid-template-columns: ${(props) =>
      props.open ? "8.4375em 14.375em" : "14.375em 8.4375em"};

    grid-template-rows: ${(props) =>
      props.open
        ? "24.0625em max-content 4.6875em 8.4375em"
        : "4.6875em 8.4375em 14.375em max-content"};
  }
`;

export const Image = styled.img`
  /* width: 11.875em;
  height: 11.875em;
  border-radius: 8px; */

  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 8px;

  /* @media (max-width: 720px) {
    width: 100%;
    height: 15em;
  } */
`;

export const Title = styled.h3`
  font-size: 1.625rem;
  line-height: 1em;
  font-weight: 400;
  margin-top: -0.384em;
`;

export const Description = styled.p``;

export const Price = styled.span`
  font-size: 1.3125rem;
  line-height: 1.19em;
  color: #009688;
`;

export const Buttons = styled.div<{ open: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  /* @media (max-width: 720px) {
    flex-direction: row;
  } */

  ${(props) =>
    props.open
      ? ""
      : `
      @media (max-width: 575.98px) {
        display: grid;
        grid-template-columns: 1fr 1fr 2fr;
        grid-template-rows: 1fr;
        grid-gap: 1.25em;
      }
  `}/* @media (max-width: 575.98px) {
    display: grid;
    grid-template-columns: 1fr 1fr 2fr;
    grid-template-rows: 1fr;
    grid-gap: 1.25em;
  } */
`;

export const ButtonsIcon = styled.div`
  display: none;

  @media (max-width: 575.98px) {
    display: block;
  }
`;

export const ButtonsText = styled.span`
  display: block;

  @media (max-width: 575.98px) {
    display: none;
  }
`;
