import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";
import { Divide } from "react-feather";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <SelectWrapper value={value} onChange={onChange}>
        {children}
      </SelectWrapper>
      <Presentation>
        {displayedValue}
        <IconWrapper size={24}>
          <Icon id="chevron-down" strokeWidth={1} size={24} />
        </IconWrapper>
      </Presentation>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

// the select element is invisible and taken out of flow
const SelectWrapper = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  /* for older versions of Safari */
  appearance: none;
`;

// this controls what the user actually sees before clicking on the control
const Presentation = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  padding: 12px 16px;
  padding-right: 52px;
  border-radius: 8px;

  /* Need fancier selector here for hover and focus */
  ${SelectWrapper}:hover + & {
    color: ${COLORS.black};
  }

  ${SelectWrapper}:focus + & {
    border: 1px solid ${COLORS.primary};
  }
`;

// put the icon next to the displayed value and make sure it is responsive to clicks
const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  width: ${({ size }) => size + "px"};
  height: ${({ size }) => size + "px"};
  pointer-events: none;
`;

export default Select;
