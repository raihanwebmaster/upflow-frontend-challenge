import { Colors } from 'src/styles/Color';
import styled, { css } from "styled-components";

// {Container style}
export const Container = styled.section`
  padding-inline: 2em;
  width: 100%;
  margin-inline: auto;
  height: 100%;

  @media (min-width: 768px) {
    max-width: 45em;
  }

  @media (min-width: 992px) {
    max-width: 53.75rem;
    padding-inline: 0em;
  }

  /* @media (min-width: 1200px) {
    padding-inline: 0em;
    max-width: 60rem;
  } */

  @media (min-width: 1400px) {
    padding-inline: 0em;
    max-width: 70rem;
  }
`

// {Paragraph style}
export const Para = styled.p`
  font-weight: 400;
  font-size: clamp(0.9em, 6vw, 1.25em);
  line-height: 30px;
  color: ${Colors.font_primary_color};
  font-family: 'Inter', sans-serif;
  opacity: 0.8;
`

// {Grid} 
export const Grid = styled.div<{ reverse?: boolean }>`
  display: grid;
  grid-gap: 50px;

  .grid-item {
    width: 100%;
  }

  .text-section{
      h1{
        width: 100%;
        max-width: 100%;
      }
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 15px;
    }


  @media (min-width: 992px) {
    grid-template-columns: minmax(200px, 1fr) 2fr;
    align-items: center;

    .text-section{
      text-align:left;
      justify-content: start;
      align-items:start;
    }

    ${({ reverse }) => reverse && css`
    grid-template-columns: 2fr minmax(200px, 1fr);
      .interactive-section {
        grid-column: 1/2;
        grid-row: 1;
      }
      .text-section{
        grid-column: 2/-1
      }
    `}
  }
`;