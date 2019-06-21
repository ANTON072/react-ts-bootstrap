/**
 * グローバルスタイル
 */
import styled, { createGlobalStyle } from "styled-components"

// デザインカンプの定義幅
const DESIGN_WIDTH = 750
// Retinaのベースフォントサイズ
const DESIGN_BASE_FONT_SIZE = 20
// デザインカンプとフォントサイズの比率
const FONT_RATIO = DESIGN_WIDTH / DESIGN_BASE_FONT_SIZE

/**
 * remのベースフォントサイズを返す
 * @param innerWidth ウインドウ幅
 */
const getBaseFontSize = (innerWidth: number) => {
  return innerWidth / FONT_RATIO
}

/**
 * GlobalStyle
 */
interface GlobalStyleProps {
  windowWidth: number
}
export const GlobalStyle = createGlobalStyle`
  /* Reset margin, padding, border */

  html, body,
  h1, h2, h3, h4, h5, h6,
  a, p, span,
  em, small, strong,
  sub, sup,
  mark, del, ins, strike,
  abbr, dfn,
  blockquote, q, cite,
  code, pre,
  ol, ul, li, dl, dt, dd,
  div, section, article,
  main, aside, nav,
  header, hgroup, footer,
  img, figure, figcaption,
  address, time,
  audio, video,
  canvas, iframe,
  details, summary,
  fieldset, form, label, legend,
  table, caption,
  tbody, tfoot, thead,
  tr, th, td {
    margin: 0;
    padding: 0;
    border: 0;
  }

  /* Typography */

  html {
    font-size: ${(props: GlobalStyleProps) =>
      getBaseFontSize(props.windowWidth)}px
  }

  body {
    font-size: 1.2rem;
    font-family: Verdana, Roboto, "Droid Sans", "メイリオ", Meiryo, "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", "ＭＳ Ｐゴシック", sans-serif;
    line-height: 1.7;
  }

  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }

  /* Layout */

  article,
  aside,
  footer,
  header,
  nav,
  section,
  main {
    display: block;
  }

  * {
    box-sizing: border-box;
  }

  *:before,
  *:after {
    box-sizing: inherit;
  }

  html, body {
    height: 100%;
  }

  /* Elements */

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  ol,
  ul {
    list-style: none;
  }

  img,
  video {
    max-width: 100%;
  }

  img {
    vertical-align: top;
    border-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:after,
  blockquote:before,
  q:after,
  q:before {
    content: "";
    content: none;
  }

  button {
    width: auto;
    margin: 0;
    padding: 0;
    overflow: visible;
    color: inherit;
    font: inherit;
    line-height: normal;
    background: transparent;
    border: none;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    outline: none;
    cursor: pointer;
    appearance: none;
  }

  /* Attributes & states */
  [hidden] {
    display: none !important;
  }

  [disabled] {
    cursor: not-allowed;
  }

  :focus:not(:focus-visible) {
    outline: none;
  }

  &::-moz-focus-inner {
    padding: 0;
    border: 0;
  }

  /* Render block */

  #root {
    height: 100%;
    background: #eee;
  }

`

/**
 * Wrapper
 */
export const Wrapper = styled.main`
  width: ${FONT_RATIO}rem;
  height: 100%;
  margin-right: auto;
  margin-left: auto;
  background: #fff;
`
