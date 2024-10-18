/** @format */
import "../styles/globals.scss";
import { NextSeo } from "next-seo";
import Layout from "components/Layout";
import { ContainersProvider } from "context/context";
import Script from "next/script";
import React from "react";
import { appWithTranslation } from "next-i18next";

function App({ Component, pageProps }) {
    return (
        <React.Fragment>
            <ContainersProvider>
                <Script
                    strategy="lazyOnload"
                    async
                    src={`https://www.googletagmanager.com/gtag/js?id=G-D5T5ZCK8M6`}
                />
                <Script strategy="lazyOnload" id="first_G">
                    {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                
                    gtag('config', 'G-D5T5ZCK8M6');

                `}
                </Script>
                <Script
                    strategy="lazyOnload"
                    async
                    src={`https://www.googletagmanager.com/gtag/js?id=AW-10881962202`}
                />
                <Script strategy="lazyOnload" id="second_AW">
                    {`
                      window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                  
                    gtag('config', 'AW-10881962202');

                `}
                </Script>
                <Script strategy="lazyOnload" id="gtag_event">
                    {`
                    gtag('event', 'conversion', {'send_to': 'AW-10881962202/dpmOCLy4rLEDENqh9sQo'});
                    
                    `}
                </Script>
                <Layout>
                    <NextSeo
                        additionalMetaTags={[
                            {
                                property: "viewport",
                                content:
                                    "width=device-width, initial-scale=1.0",
                            },
                            {
                                httpEquiv: "X-UA-Compatible",
                                content: "IE=edge",
                            },
                            {
                                rel: "preload",
                            },
                        ]}
                    />
                    <Component {...pageProps} />
                </Layout>
            </ContainersProvider>
        </React.Fragment>
    );
}

export default appWithTranslation(App);
