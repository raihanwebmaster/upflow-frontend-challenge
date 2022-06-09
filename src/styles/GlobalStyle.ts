import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  /* Box sizing rules */
    *,
    *::before,
    *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    /* Remove default margin */
    body,
    h1,
    h2,
    h3,
    h4,
    p,
    figure,
    blockquote,
    dl,
    dd {
      margin: 0;
    }

    h1,h2,h3,h4,h5,h6{
      font-family: 'Inter', sans-serif;
    }

    /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
    ul[role='list'],
    ol[role='list'] {
      list-style: none;
    }

    ul,
    ol {
      padding: 0 !important;
    }

    /* Set core root defaults */
    html:focus-within {
      scroll-behavior: auto;
    }

    /* Set core body defaults */
    body {
      min-height: 100vh;
      text-rendering: optimizeSpeed;
      line-height: 1.5;
      overflow-x: hidden;
      font-family: 'Manrope', sans-serif;
      color: #1B1B1A;
    }

    p {
      font-weight: 400;
      font-size: 1em;
      line-height: 24px;
      font-family: 'Manrope', sans-serif;
    }

    /* A elements that don't have a class get default styles */
    a:not([class]) {
      text-decoration-skip-ink: auto;
    }

    /* removing link underline */
    a {
      text-decoration: none !important;
    }

    a,
    button {
      cursor: pointer;
    }

    /* Make images easier to work with */
    img,
    picture {
      /* max-width: 100%; */
      display: block;
    }

    /* Inherit fonts for inputs and buttons */
    input,
    button,
    textarea,
    select {
      font: inherit;
    }

    button {
      background-color: transparent;
      border: none;
    }

    button:focus-visible,
    button:focus {
      outline: 0;
      box-shadow: none !important;
    }

    /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
    @media (prefers-reduced-motion: reduce) {
      html:focus-within {
        scroll-behavior: auto;
      }

      *,
      *::before,
      *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }
    }
`

export default GlobalStyle;