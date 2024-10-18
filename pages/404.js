/** @format */

import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment } from "react";
import { useEffect } from "react";
import Footer from "components/Footer";
import Header from "components/header/Header";
import { useGlobalContext } from "context/context";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Loading from "components/Loading";

const NotFound = () => {
    const { errorLoading, setErrorLoading } = useGlobalContext();
    const router = useRouter();

    const { t } = useTranslation("error");

    useEffect(() => {
        if (Cookies.get("language")) {
            router.push("/404", "/404", {
                locale: Cookies.get("language"),
            });
        }

        let t = setTimeout(() => {
            setErrorLoading(true);
        }, 0);

        return () => clearTimeout(t);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {!errorLoading && <Loading />}
            <div className={errorLoading ? "app-show" : "app-hide"}>
                <Fragment>
                    <Header notfound={true} forErrorUp={true} />
                    <section className="notfound" id="scroll-about">
                        <div className="container">
                            <div className="row">
                                <Image
                                    src="/assets/icons/404.svg"
                                    width={709}
                                    height={473}
                                    alt="NotFound"
                                    layout="intrinsic"
                                    priority
                                />
                                <h2 className="notfound__title">
                                    {t("error:title")}
                                </h2>
                                <p className="notfound__text">
                                    {t("error:text")}
                                </p>
                                <Link href="/">
                                    <a className="notfound__btn">
                                        {t("error:gobackBtnName")}
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </section>
                    <Footer forErrorUp={true} />
                </Fragment>
            </div>
        </>
    );
};

export default NotFound;

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["error"])),
        },
    };
}
