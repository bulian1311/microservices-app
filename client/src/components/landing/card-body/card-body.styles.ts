import styled from "styled-components";

export const Wrapper = styled.div<{ center?: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.center ? "center" : "space-between")};
  align-items: center;
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Description = styled.div`
  overflow: auto;
  margin-top: 0.6em;
`;

export const Title = styled.h3`
  font-size: 1.625rem;
  line-height: 1em;
  font-weight: 400;
  margin-top: -0.384em;
`;

export const TextAreaWrapper = styled.div<{ height: number }>`
  width: 100%;
  height: ${(props) => `${props.height / 16}em`};
`;

export const Buttons = styled.div`
  width: 88%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Secret = styled.div`
  color: var(--taxe-color-light);
  font-weight: 300;

  h4 {
    font-weight: inherit;
    font-size: 1.3125rem;
    line-height: 1.19em;
  }
  span {
    font-size: 1rem;
    line-height: 1.187em;
  }
`;

export const ButtonWrapper = styled.div`
  width: 190px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.span`
  font-size: 1.3rem;
  margin-left: 0.6rem;
`;

export const ImgIcon = styled.img`
  position: absolute;
  z-index: 9999;
  top: 0.8em;
  left: 0.9em;
`;

export const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
