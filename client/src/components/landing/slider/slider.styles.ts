import styled from "styled-components";

export const Wrapper = styled.div<any>`
  position: relative;
`;

export const MainImg = styled.img`
  /* width: 21.5625em;
  height: 21.5625em;
  overflow: hidden; */

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

export const LeftArrow = styled.div`
  position: absolute;
  left: -0.75em;
  top: 9.375em;

  /* @media (max-width: 720px) {
    top: 5.6em;
    left: -1em;
  } */
`;

export const RightArrow = styled.div`
  position: absolute;
  right: -0.75em;
  top: 9.375em;

  /* @media (max-width: 720px) {
    top: 5.6em;
    right: -1em;
  } */
`;
