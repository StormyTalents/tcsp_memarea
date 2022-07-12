import tw, { GlobalStyles } from "twin.macro";
import { Global, css } from "@emotion/react";

export const GlobalStyle = () => {
  return (
    <>
      <GlobalStyles />
      <Global
        styles={css`
          :root {
            --font-main: "Poppins";
          }

          body {
            ${tw`antialiased font-main`}
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            ${tw`m-0`}
          }

          .hide-scroll {
            -ms-overflow-style: none;
            overflow: -moz-scrollbars-none;
          }

          .hide-scroll::-webkit-scrollbar {
            display: none;
          }
          .stop-scrolling {
            height: 100%;
            overflow: hidden;
          }
        `}
      />
    </>
  );
};
