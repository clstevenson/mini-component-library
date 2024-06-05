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
          <Icon id={icon} size="24" />
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
    if (size.toLowerCase() === "large") return 18 / 16 + "rem";
    return "1 rem";
  }};
  width: ${(prop) => prop.width + "px"};
  border: none;

  &::placeholder {
    font-weight: 400;
    columns: ${COLORS.gray500};
  }

  &:focus {
    outline: none;
  }
`;

const InputWrapper = styled.div`
  display: inline-block;
  width: fit-content;
  border-bottom: 1px solid black;

  /* this doesn't seem to work... */
  ${InputItem}::focus {
    outline: 1px solid black;
  }
`;

export default IconInput;
