/** @format */
import { useEffect, useState } from "react";
import { About, Contact, Delivery, Faq } from "components/home/index";
import { Hero, NutsValley, Products, Quality } from "components/home/index";
import { useRouter } from "next/router";
import { homeMetaSEO, messageData } from "../data/data";
import { useGlobalContext } from "context/context";
import SocialMedias from "components/home/SocialMedias";
import { NextSeo } from "next-seo";
import Footer from "components/Footer";
import Cookies from "js-cookie";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Sticky from "react-stickynode";
import Header from "components/header/Header";
import Script from "next/script";
import Loading from "components/Loading";
import useRememberScroll from "components/useRememberScroll";

function Home({ seo }) {
    const router = useRouter();
    const { locale } = router;

    const messageControlData =
        locale === "en" ? messageData.en : messageData.ru;

    const { homeLoading, setHomeLoading } = useGlobalContext();
    const [navbarFixedCt, setNavbarFixedCt] = useState(false);

    const handleStateChange = (status) => {
        if (status.status === Sticky.STATUS_FIXED) {
            setNavbarFixedCt(true);
        }
        if (status.status === Sticky.STATUS_ORIGINAL) {
            setNavbarFixedCt(false);
        }
    };

    useEffect(() => {
        // if (Cookies.get("language")) {
        //     router.push("/", "/", {
        //         locale: Cookies.get("language"),
        //     });
        // }

        let t = setTimeout(() => {
            setHomeLoading(true);
        }, 0);

        return () => clearTimeout(t);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useRememberScroll();

    useEffect(() => {
        const handleRouteChange = () => {
            Cookies.set("page-scroll", Math.floor(window.scrollY), {
                expires: 1,
            });
        };

        router.events.on("routeChangeStart", handleRouteChange);

        return () => {
            router.events.off("routeChangeStart", handleRouteChange);
        };
    }, [router.events]);

    return (
        <>
            <Loading />
            <div>
                <NextSeo
                    title={seo?.title}
                    description={seo?.description}
                    additionalMetaTags={seo?.metas}
                />
                <SocialMedias />
                <header className="header" id="button-up">
                    <Sticky innerZ={999} onStateChange={handleStateChange}>
                        <Header navbarFixed={navbarFixedCt} />
                    </Sticky>
                    <Hero
                        success={messageControlData.successSent}
                        notSuccessSent={messageControlData.notSuccessSent}
                    />
                </header>
                <About />
                <Products />
                <NutsValley />
                <Quality />
                <Delivery />
                <Faq />
                <Contact
                    success={messageControlData.successSent}
                    notSuccessSent={messageControlData.notSuccessSent}
                />
                <Footer />
            </div>
            <a
                id="agroserver-ru"
                href="https://agroserver.ru/"
                target="_blank"
                rel="noreferrer"
            ></a>
            <Script id="agroserver" strategy="lazyOnload">
                {`
                var el = document.getElementById("agroserver-ru");
                var r = escape(document.referrer);
                var rd = Math.random();
                var pr = 'https://top.agroserver.ru/ct/';

                var img = document.createElement('img');

                  img.src = pr + '?uid=17786&ref=' + r + '&rd=' + rd;
                  img.width = '88px';
                  img.height = "31";
                  img.border = "0";

                el.append(img)
                `}
            </Script>
        </>
    );
}

export default Home;

export async function getStaticProps({ locale }) {
    const seo = await homeMetaSEO[locale];

    return {
        props: {
            seo,
            ...(await serverSideTranslations(locale, ["home"])),
        },
    };
}
