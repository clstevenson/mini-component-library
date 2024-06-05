import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: 16,
  large: 24,
};

const IconInput = ({
  label,
  icon,
  width = 250,
  size = "small",
  placeholder,
}) => {
  const style = STYLES[size];
  if (!style) {
    throw new Error(`Incorrect size: ${size}`);
  }

  return (
    <>
      <LabelItem for="icon-input">{label}</LabelItem>
      <InputWrapper>
        <IconWrapper>
          <Icon id={icon} size={style} />
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
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
`;

const InputWrapper = styled.div`
  display: inline-block;
  width: fit-content;
  border-bottom: 1px solid black;
  position: relative;
`;

const InputItem = styled.input`
  font-family: "Roboto", sans-serif;
  font-size: ${({ size }) => {
    if (size.toLowerCase() === "large") return 18 / 16 + "rem";
    return "1 rem";
  }};
  width: ${(prop) => prop.width + "px"};
  border: none;
  padding-left: 2em;

  &::placeholder {
    font-weight: 400;
    columns: ${COLORS.gray500};
  }

  &:hover {
    font-weight: 700;
  }

  &:focus {
    outline: 2px solid ${COLORS.primary};
    outline-offset: 4px;
    -moz-outline-radius: 2px;
  }
`;

export default IconInput;
