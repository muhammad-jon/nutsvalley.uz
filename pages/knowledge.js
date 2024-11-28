/** @format */

import Image from "next/image";
import Link from "next/link";
import React from "react";

import SocialMedias from "components/home/SocialMedias";

import Footer from "components/Footer";

import { knowledgeCornerData, messageData } from "data/data";

import { useRouter } from "next/router";
import { Contact } from "components/home/index";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function Knowledge({ data, messageControlData }) {
    const router = useRouter();
    console.log(messageControlData);

    return (
        <>
            <div>
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
                            {data.pageTitle}
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
                            {data.knowledgePageTitle.map((el, i) => {
                                return (
                                    <p key={i}>
                                        <b>{el}</b>
                                    </p>
                                );
                            })}
                        </div>
                        <div className="knowledge-page__informations">
                            {data.informations.map((el, i) => {
                                return (
                                    <div key={i} className="knowledge-page-row">
                                        <div className="knowledge-page-row__image">
                                            <Image
                                                src={
                                                    el.imageSrc
                                                        ? el.imageSrc
                                                        : "/"
                                                }
                                                width="526"
                                                height="351"
                                                layout="intrinsic"
                                                alt={el.title}
                                                priority
                                            />
                                        </div>
                                        <div className="knowledge-page-row__body">
                                            <h4 className="knowledge-page-row__title">
                                                {el.title}
                                            </h4>
                                            <p className="knowledge-page-row__desc">
                                                {el.description}
                                            </p>
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

export async function getServerSideProps({ locale }) {
    const data = knowledgeCornerData[locale];
    const messageControlData = messageData[locale];

    return {
        props: {
            data,
            messageControlData,
            ...(await serverSideTranslations(locale, ["home"])),
        },
    };
}
