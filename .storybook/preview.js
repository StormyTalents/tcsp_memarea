import "tailwindcss/base.css";
import React from "react";
import { addDecorator } from "@storybook/react";
import { GlobalStyles } from "twin.macro";
import { Global, css } from "@emotion/react";
import tw from "twin.macro";
import * as NextImage from "next/image";

const OriginalNextImage = NextImage.default;

window.React = React;

addDecorator((style) => (
  <>
    <GlobalStyles />
    {style()}
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
));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => (
    <OriginalNextImage
      {...props}
      unoptimized
      // this is new!
      blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAbEAADAAMBAQAAAAAAAAAAAAABAgMABAURUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECEf/aAAwDAQACEQMRAD8Anz9voy1dCI2mectSE5ioFCqia+KCwJ8HzGMZPqJb1oPEf//Z"
    />
  ),
});
