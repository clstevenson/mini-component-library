/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size = 'small', label = 'Progress: ' }) => {

  let height = 8;
  if (size.toLowerCase() === 'medium') height = 12;
  if (size.toLowerCase() === 'large') height = 16;

  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <VisuallyHidden>{value}</VisuallyHidden>
      <Bar value={value} height={height} />
    </Wrapper>
  )
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: 4px;
  overflow: hidden;
`;

const Bar = styled.div`
  width: ${({ value }) => value + '%'};
  height: ${({ height }) => height + 'px'};
  margin: ${({ height }) => {
    if (height === 16) return 4 + 'px';
    return 0;
  }};
  background-color: ${COLORS.primary};
  border-radius: 4px 0px 0px 4px;
`;

export default ProgressBar;
