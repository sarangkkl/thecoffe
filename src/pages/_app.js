import Head from "next/head";
import Router from "next/router";
import * as gtag from "../../config/gtag";
import { useEffect } from "react";
import { Detector } from "react-detect-offline";
import NoInternet from "../components/design/template/NoInternet";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/bundle";

import "../styles/globals.css";

function MyApp({ Component, pageProps, router }) {
  const handleRouteChange = (url) => {
    gtag.pageview(url);
  };

  useEffect(() => {
    Router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [Router.events]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta property="og:site_name" content="thelocalfeet" />
        <meta property="og:type" content="website" />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="150" />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_WEBSITE_LINK}`}
        />
        <link rel="icon" href="/assets/seo/favicon.ico" />
      </Head>

      <Detector
        render={({ online }) => {
          return !online && <NoInternet />;
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
