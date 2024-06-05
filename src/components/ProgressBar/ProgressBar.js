import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

// properties for the three types of progress bars
const STYLES = {
  small: {
    height: 8,
    padding: 0,
    radius: 4,
  },
  medium: {
    height: 12,
    padding: 0,
    radius: 4,
  },
  large: {
    height: 16,
    padding: 4,
    radius: 7,
  },
};

const ProgressBar = ({ value, size = "small" }) => {
  const styles = STYLES[size];
  // make sure correct value was used
  if (!styles) {
    throw new Error(`Unknown size: ${size}`);
  }

  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      styles={styles}
    >
      <VisuallyHidden>{value}</VisuallyHidden>
      <BarWrapper>
        <Bar value={value} styles={styles} />
      </BarWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: ${({ styles }) => styles.radius + "px"};
  padding: ${({ styles }) => styles.padding};
`;

const BarWrapper = styled.div`
  /* progress bar should be rounded at high values */
  overflow: hidden;
  border-radius: 4px;
`;

const Bar = styled.div`
  width: ${({ value }) => value + "%"};
  height: ${({ styles }) => styles.height + "px"};
  background-color: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
`;

export default ProgressBar;
