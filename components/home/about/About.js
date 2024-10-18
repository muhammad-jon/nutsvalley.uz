/** @format */
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useRef, memo } from "react";
import { useTranslation } from "next-i18next";

const About = () => {
    const lazyRoot = useRef(null);
    const router = useRouter();
    const { locale } = router;
    let aboutTextValue = "";

    const { t } = useTranslation("home");

    const aboutTextCopy = () => {
        navigator.clipboard.writeText(aboutTextValue);
    };

    return (
        <section className="about">
            <div className="container">
                <div className="about__top" id="about-us">
                    {t("about.aboutCards", { returnObjects: true })?.map(
                        (item, i) => (
                            <div
                                className="about-card"
                                data-aos="fade-left"
                                data-aos-duration="2000"
                                data-aos-delay={i === 0 ? 100 : 100 * (i + 3)}
                                key={i}
                            >
                                <div className="about-card__header ic ic__ellipse">
                                    <span
                                        className={`ic ${item.iconClassName}`}
                                    ></span>
                                </div>
                                <h3 className="about-card__title">
                                    {item.title}
                                </h3>
                                <p className="about-card__text">{item.text}</p>
                            </div>
                        )
                    )}
                </div>
                <div className="about__bottom" id="about">
                    <div className="about__left">
                        <div className="about__image" ref={lazyRoot}>
                            <Image
                                src="/assets/images/about__image.png"
                                alt="Our office Image"
                                width="568"
                                height="649"
                                layout="intrinsic"
                                priority
                            />
                        </div>
                    </div>
                    <div className="about__right">
                        {locale !== "en" ? (
                            <span
                                onClick={aboutTextCopy}
                                className="about__text-copy"
                            >
                                копировать
                            </span>
                        ) : (
                            ""
                        )}
                        <div className="about__texts">
                            <h2 className="about__title">{t("about.title")}</h2>
                            {t("about.descriptions", {
                                returnObjects: true,
                            })?.map((item, i) => {
                                aboutTextValue += item.text;
                                return (
                                    <p className="about__text" key={i}>
                                        {item.text}
                                    </p>
                                );
                            })}
                        </div>
                        <a className="about__link">{t("about.linkName")}</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default memo(About);
