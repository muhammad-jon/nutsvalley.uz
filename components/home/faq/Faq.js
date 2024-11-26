/** @format */
import Image from "next/image";
import { useState, useRef, useEffect, memo } from "react";
import { useTranslation } from "next-i18next";
import Accordion from "./Accordion";

const Faq = () => {
    const { t } = useTranslation("home");
    const accordion = t("faq.accordion", { returnObjects: true });
    const title = t("faq.title");
    const text = t("faq.text");

    const [accordionId, setAccordionId] = useState(1);
    const faqLeftRef = useRef(null);
    const accordionList = useRef(null);

    const accordionControl = (id) => {
        setAccordionId(id);
    };

    const fiteraccordion = accordion.map((item) => {
        return accordionId === item.id
            ? { ...item, isActive: !item.isActive }
            : item;
    });

    const accordionListCt = () => {
        if (faqLeftRef.current) {
            const height = Math.floor(
                accordionList.current.getBoundingClientRect().height
            );

            faqLeftRef.current.style.height = `${height}px`;
        }
    };

    useEffect(() => {
        window.addEventListener("resize", accordionListCt);
        window.addEventListener("load", accordionListCt);

        return () => {
            window.removeEventListener("resize", accordionListCt);
            window.removeEventListener("load", accordionListCt);
        };
    });

    return (
        <section className="faq" id="faq">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="faq__title">{title}</h2>
                        <p className="faq__text">{text}</p>
                    </div>
                </div>
                <div className="row align-center">
                    <div className="faq__left" ref={faqLeftRef}>
                        <div ref={accordionList} className="accordion__list">
                            {fiteraccordion.map((item) => (
                                <Accordion
                                    {...item}
                                    key={item.id}
                                    accordionControl={accordionControl}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="faq__right">
                        <Image
                            src="/assets/images/faq-img.png"
                            width="484"
                            height="596"
                            alt="Faq Image"
                            layout="intrinsic"
                            priority
                        />
                    </div>
                </div>
            </div>
            <div className="faq__bg">
                <div
                    style={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                    }}
                >
                    <Image
                        src="/assets/images/faq_bg.png"
                        alt="FAQ baground"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                        priority
                    />
                </div>
            </div>
        </section>
    );
};

export default memo(Faq);
