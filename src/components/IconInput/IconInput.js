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
  label = "Search",
  icon,
  width = 250,
  size = "small",
  placeholder,
  ...delegated
}) => {
  const style = STYLES[size];
  if (!style) {
    throw new Error(`Incorrect size: ${size}`);
  }

  return (
    <Wrapper>
      <label for="icon-input">
        <VisuallyHidden> {label} </VisuallyHidden>
      </label>
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: inline-block;
  width: fit-content;
  position: relative;
`;
const IconWrapper = styled.div`
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
`;

const InputItem = styled.input`
  font-family: "Roboto", sans-serif;
  font-size: ${({ size }) => {
    if (size.toLowerCase() === "large") return 18 / 16 + "rem";
    return "1 rem";
  }};
  width: ${(prop) => prop.width + "px"};
  border: none;
  border-bottom: 1px solid ${COLORS.black};
  padding-left: 32px;
  font-weight: 700;
  color: ${COLORS.gray700};

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }

  &:hover {
    font-weight: 700;
    color: ${COLORS.black};
  }

  &:focus {
    outline: 2px solid ${COLORS.primary};
    outline-offset: 4px;
    -moz-outline-radius: 2px;
  }
`;

export default IconInput;
