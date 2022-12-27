import styled, { css } from "styled-components";

const convertToRem = (px) => {
  let result = ``;
  const idleRem = 16;
  if (typeof px === "string") {
    result = `${parseInt(px) / idleRem}rem`;
  } else if (typeof px === "number") {
    result = `${px / idleRem}rem`;
  }
  return result;
};

const convertToRem991 = (px) => {
  let result = ``;
  const idleRem = 22;
  if (typeof px === "string") {
    result = `${parseInt(px) / idleRem}rem`;
  } else if (typeof px === "number") {
    result = `${px / idleRem}rem`;
  }
  return result;
};

const convertToRem991LH = (px) => {
  let result = ``;
  const idleRem = 19;
  if (typeof px === "string") {
    result = `${parseInt(px) / idleRem}rem`;
  } else if (typeof px === "number") {
    result = `${px / idleRem}rem`;
  }
  return result;
};

const convertToRem991MR = (px) => {
  let result = ``;
  const idleRem = 24;
  if (typeof px === "string") {
    result = `${parseInt(px) / idleRem}rem`;
  } else if (typeof px === "number") {
    result = `${px / idleRem}rem`;
  }
  return result;
};

function createFontStyles() {
  let styles = ``;
  for (let i = 1; i <= 50; i++) {
    styles =
      styles +
      `.fs-${i}{
            font-size: ${convertToRem(i)}
        };`;
  }

  return css`
    ${styles}
  `;
}

function createMediaStyles991() {
  let styles = ``;
  for (let i = 1; i <= 50; i++) {
    styles =
      styles +
      `.fs-${i}{
            font-size: ${convertToRem991(i)}
        };
        .lh-${i}{
          line-height: ${convertToRem991LH(i)}
        };
        
        .mh-${i}{
          margin-left: ${convertToRem991MR(i)};
          margin-right: ${convertToRem991MR(i)};
          
      };
      .mv-${i}{
          margin-top: ${convertToRem991MR(i)};
          margin-bottom: ${convertToRem991MR(i)};
      };
      .mt-${i}{
          margin-top: ${convertToRem991MR(i)};

      };
      .mb-${i}{
          margin-bottom: ${convertToRem991MR(i)};

      };
      .mr-${i}{
          margin-right: ${convertToRem991MR(i)};

      };
      .ml-${i}{
          margin-left: ${convertToRem991MR(i)};

      };
        `;
  }

  return css`
    ${styles}
  `;
}


function createLineHeights() {
  let styles = ``;
  for (let i = 1; i <= 50; i++) {
    styles =
      styles +
      `.lh-${i}{
          line-height: ${convertToRem(i)}
        };`;
  }

  return css`
    ${styles}
  `;
}
function createFontWeight() {
  let styles = ``;
  for (let i = 100; i <= 800; i = i + 100) {
    styles =
      styles +
      `.fw-${i}{
            font-weight: ${i}}
        };`;
  }

  return css`
    ${styles}
  `;
}

function createColor() {
  let styles = `.graycolor{color: #6D767E}
            .black{color: #000000}
            .white{color: #fffff}
        };`;

  return css`
    ${styles}
  `;
}

function createTextTransform() {
  let styles = `.uppercase{text-transform: uppercase}
            .lowercase{text-transform: lowercase}
            .capitalize{text-transform: capitalize}
        };`;

  return css`
    ${styles}
  `;
}

function createPadding() {
  let styles = ``;
  for (let i = 0; i <= 50; i++) {
    styles =
      styles +
      `.ph-${i}{
            padding-left: ${convertToRem(i)};
            padding-right: ${convertToRem(i)};
            
        };`;
  }
  for (let i = 0; i <= 50; i++) {
    styles =
      styles +
      `.pv-${i}{
            padding-top: ${convertToRem(i)};
            padding-bottom: ${convertToRem(i)};

        };`;
  }
  for (let i = 0; i <= 50; i++) {
    styles =
      styles +
      `.pt-${i}{
            padding-top: ${convertToRem(i)};
        };`;
  }
  for (let i = 0; i <= 50; i++) {
    styles =
      styles +
      `.pb-${i}{
            padding-bottom: ${convertToRem(i)};
        };
        .pl-${i}{
          padding-left: ${convertToRem(i)};
      };
      .pr-${i}{
        padding-right: ${convertToRem(i)};
    };`;
  }

  return css`
    ${styles}
  `;
}
function createMargin() {
  let styles = ``;
  for (let i = 0; i <= 50; i++) {
    styles =
      styles +
      `.mh-${i}{
            margin-left: ${convertToRem(i)};
            margin-right: ${convertToRem(i)};
            
        };
        .mv-${i}{
            margin-top: ${convertToRem(i)};
            margin-bottom: ${convertToRem(i)};

        };
        .mt-${i}{
            margin-top: ${convertToRem(i)};

        };
        .mb-${i}{
            margin-bottom: ${convertToRem(i)};

        };
        .mr-${i}{
            margin-right: ${convertToRem(i)};

        };
        .ml-${i}{
            margin-left: ${convertToRem(i)};

        };
        `;
  }

  return css`
    ${styles}
  `;
}

export const GlobalStylesWrapper = styled.div`
  ${createFontStyles()}
  ${createFontWeight()}
  ${createPadding()}
  ${createMargin()}
  ${createColor()}
  ${createTextTransform()}
  ${createLineHeights()}
  @media screen and (max-width:991px){
    ${createMediaStyles991()}
  }
`;
