import { Colors } from 'src/styles/Color';
import styled, { css } from 'styled-components';

interface BtnProps {
  fullWidth?: boolean;
  bg?: string // background color
  h?: string | number; // btn height: ;
  w?: string | number; // btn width: ;
  font_size?: string | number; // btn font-size: ;
}

export const Button = styled.button<BtnProps>`

  color: ${Colors.btn_primary_color};
  font-weight: 700;
  width: ${({ fullWidth }) => (fullWidth ? `100%` : `fit-content`)};
  font-size: 1em;
  padding: 10px;
  display:flex;
  align-items:center;
  justify-content:center;
  font-family: 'Inter', sans-serif;

  ${({ bg }) => bg && css`
    background-color: ${bg};
    color: ${Colors.btn_secondary_color};
    border-radius: 8px;
  `}

  ${({ h }) => h && css`
    height: ${h}px;
  `}

  ${({ w }) => w && css`
    width: 100%;
    max-width: ${w}px;
  `}

  ${({ font_size }) => font_size && css`
    font-size: ${font_size}px;
  `}
`