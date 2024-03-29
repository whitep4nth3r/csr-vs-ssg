import css from "styled-jsx/css";

export default css.global`
  @import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;700&display=swap");

  :root {
    --color-primary: #ffb626;
    --color-secondary: #82af3a;
    --color-tertiary: #f11012;
    --color-foreground: #0f111a;
    --color-background: #ffffff;
    --color-muted: #666666;

    --grid-unit: 0.5rem;

    --font-weight-light: 300;
    --font-weight-normal: 400;
    --font-weight-bold: 700;

    --font-family-heading: "Work Sans", sans-serif;
    --font-family-body: "Work Sans", sans-serif;
    --font-family-code: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;

    --global-transition-time: 0.2s;

    --wrapper-max-width: 48rem;
    --landing-wrapper-max-width: 72rem;
  }

  html {
    font-size: 100%;
    background-color: var(--color-background);
  }

  body {
    font-size: 1rem;
    font-weight: var(--font-weight-light);
    font-family: var(--font-family-body);
    color: var(--color-foreground);
    margin: 0;
  }

  * {
    margin: 0;
    box-sizing: border-box;
  }
`;
