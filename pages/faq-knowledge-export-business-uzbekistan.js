/** @format */

import Image from "next/image";
import Link from "next/link";
import React from "react";

import SocialMedias from "components/home/SocialMedias";

import Footer from "components/Footer";

import {
    knowledgeCornerData,
    knowledgeCornerMetaSEO,
    messageData,
} from "data/data";

import { Contact } from "components/home/index";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextSeo } from "next-seo";

function Knowledge({ data, messageControlData, metaSEO }) {
    return (
        <>
            <div>
                <NextSeo
                    title={metaSEO?.title}
                    description={metaSEO?.description}
                    additionalMetaTags={metaSEO?.metas}
                />
                <SocialMedias />
                <section className="knowledge-page" id="knowledge-page">
                    <div className="knowledge-page-top">
                        <Link href="/">
                            <a className="knowledge-page-back__link">
                                <span className="ic ic__arrow-left"></span>
                                {data.goBackBtnName}
                            </a>
                        </Link>
                        <h1 className="knowledge-page__title">
                            {data.pageTitle}
                        </h1>
                        <p className="knowledge-page__link">
                            <Link href="/">
                                <a className="knowledge-page__link">
                                    {data.homepageName}
                                </a>
                            </Link>
                            <span>»</span>
                            {data.pagePath}
                        </p>
                        <div className="knowledge-page-top__bg">
                            <div
                                style={{
                                    position: "relative",
                                    width: "100%",
                                    height: "100%",
                                }}
                            >
                                <Image
                                    src="/assets/images/products-page-bg.png"
                                    layout="fill"
                                    objectFit="cover"
                                    alt="knowledge page Image"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="knowledge-page__informations-title">
                            {data.knowledgePageTitle &&
                                data.knowledgePageTitle.map((el, i) => {
                                    return (
                                        <p key={i}>
                                            <b>{el}</b>
                                        </p>
                                    );
                                })}
                        </div>
                        <div className="knowledge-page__informations">
                            {data.informations &&
                                data.informations.map((el, i) => {
                                    return (
                                        <div
                                            key={i}
                                            className="knowledge-page-row"
                                        >
                                            <div className="knowledge-page-row__image">
                                                <Image
                                                    src={
                                                        el.imageSrc ||
                                                        "/placeholder.png"
                                                    }
                                                    width="526"
                                                    height="351"
                                                    layout="intrinsic"
                                                    alt={el.title || "default"}
                                                    priority
                                                />
                                            </div>
                                            <div className="knowledge-page-row__body">
                                                <h2 className="knowledge-page-row__title">
                                                    {el.title}
                                                </h2>
                                                <h3 className="knowledge-page-row__desc">
                                                    {el.description}
                                                </h3>
                                            </div>
                                        </div>
                                    );
                                })}
                        </div>

                        <Contact
                            sideImage="/assets/images/question-sign.png"
                            success={messageControlData?.successSent}
                            notSuccessSent={messageControlData?.notSuccessSent}
                        />
                    </div>
                </section>
                <Footer buttonUpCt={true} />
            </div>
        </>
    );
}

export default Knowledge;

export async function getStaticProps({ locale }) {
    const data = knowledgeCornerData[locale];
    const messageControlData = messageData[locale];
    const metaSEO = knowledgeCornerMetaSEO[locale];

    return {
        props: {
            data,
            messageControlData,
            metaSEO,
            ...(await serverSideTranslations(locale, ["home"])),
        },
    };
}
