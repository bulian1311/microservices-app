import React from "react";
import { Wrapper } from "./footer.styles";

const Footer = () => {
  return (
    <Wrapper>
      Copyright © Magmer 2018 - {new Date().getFullYear()}. All Rights Reserved
    </Wrapper>
  );
};

export default Footer;
