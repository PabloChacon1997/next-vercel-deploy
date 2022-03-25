import { NextPage } from "next";
import { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import "../styles/globals.css";


type NextPageWidthLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
}


type AppPorpsWidthLayout = AppProps & {
  Component: NextPageWidthLayout
}


function MyApp({ Component, pageProps }: AppPorpsWidthLayout) {
  const getLayout = Component.getLayout || ((page) => page);
  // return <Component {...pageProps} />
  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
