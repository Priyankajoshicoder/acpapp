import React from "react";
import { StoreProvider } from "easy-peasy";
import Script from 'next/script';
import withReduxStore from "../lib/with-redux-store";
import Layout from "../components/Layout";
import "../styles/bootstrap.min.css";
import "../styles/style.css";

function MyApp({ Component, pageProps, reduxStore }) {
  return (
    <StoreProvider store={reduxStore}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Script
        src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        strategy="afterInteractive"
      />
    </StoreProvider>
  );
}

export default withReduxStore(MyApp);