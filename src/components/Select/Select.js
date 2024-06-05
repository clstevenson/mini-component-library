import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";
import { Divide } from "react-feather";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <SelectWrapper displayed={displayedValue} value={value} onChange={onChange}>
      {children}
    </SelectWrapper>
  );
};

const SelectWrapper = styled.select`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  /* my attempt at dynamic sizing */
  width: ${({ displayed }) => {
    return displayed.length + "rem";
  }};
  /* appearance: none; */
  position: relative;
  background-color: ${COLORS.transparentGray15};
  border: none;
  padding: 12px;
  border-radius: 8px;

  &:hover {
    font-weight: 700;
  }

  &:focus {
    border: 2px solid ${COLORS.primary};
  }
`;

export default Select;
