import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  return (
    <>
      <LabelItem for="icon-input">{label}</LabelItem>
      <InputWrapper>
        <IconWrapper>
          <Icon id="search" size="24" />
        </IconWrapper>
        <InputItem
          type="text"
          id="icon-input"
          width={width}
          placeholder={placeholder}
          size={size}
        />
      </InputWrapper>
    </>
  );
};

const LabelItem = styled.label`
  margin-right: 15px;
`;

const IconWrapper = styled.div`
  display: inline-block;
`;

const InputItem = styled.input`
  font-family: "Roboto", sans-serif;
  font-size: ${({ size }) => {
    if (size.toLowerCase() === "large") return "18px";
    return "16px";
  }};
  width: ${(prop) => prop.width + "px"};
  border: none;
`;

const InputWrapper = styled.div`
  display: inline-block;
  width: fit-content;
  border-bottom: 1px solid black;
`;

export default IconInput;
