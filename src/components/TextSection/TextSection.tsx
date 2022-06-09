import React from 'react';
import { Colors } from 'src/styles/Color';
import styled, { css } from 'styled-components';

type color = 'light-green' | 'light-red' | 'light-blue';

interface Props {
  smTextColor: color;
  smText: string;
  bigText: string;
  description: string;
}

const TextSection: React.FC<Props> = ({
  smText,
  smTextColor,
  bigText,
  description,
}) => {
  return (
    <>
      <SmTitle color={smTextColor}>{smText}</SmTitle>
      <BigTitle>{bigText}</BigTitle>
      <p>{description}</p>
    </>
  );
};

export default TextSection;

// Small Title
const SmTitle = styled.h2`
  font-family: 'Manrope';
  font-weight: 800;
  font-size: 16px;
  line-height: 100%;

  ${({ color }) =>
    color &&
    css`
      color: ${color === 'light-green'
        ? Colors.font_light_Green
        : color === 'light-red'
        ? Colors.font_light_Red
        : color === 'light-blue'
        ? Colors.font_light_Blue
        : Colors.font_primary_color};
    `}
`;

// Big title
const BigTitle = styled.h1`
  font-family: 'Manrope';
  font-weight: 800;
  font-size: clamp(1em, 6vw, 2em);
  line-height: 48px;
  color: #1b1b1a;
  width: 100%;
  max-width: 200px;
`;
