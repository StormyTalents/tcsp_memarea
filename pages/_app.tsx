import Script from "next/script";
import { GlobalStyle } from "styles/GlobalStyle";
import { StytchProvider, initStytch } from "@stytch/stytch-react";

const stych = initStytch(process.env.NEXT_PUBLIC_STYCH_TOKEN || "");

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        src={"https://js.stytch.com/stytch.js"}
        strategy="beforeInteractive"
      />
      <GlobalStyle />
      <StytchProvider stytch={stych}>
        <Component {...pageProps} />
      </StytchProvider>
    </>
  );
}

export default MyApp;
