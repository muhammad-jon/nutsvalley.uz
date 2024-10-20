/** @format */
import Image from "next/image";
import React, { Fragment, useState, memo } from "react";
import { useTranslation } from "next-i18next";

const NutsValley = () => {
    const { t } = useTranslation("home");

    const title = t("nutsValley.title");
    const text = t("nutsValley.text");
    const tabs = t("nutsValley.tabs", { returnObjects: true });
    const tabImages = t("nutsValley.tabImages", { returnObjects: true });
    console.log(tabImages);

    const tabsBtns = t("nutsValley.tabsBtns", { returnObjects: true });

    const [tabResultCont, setTabResultCont] = useState("dried-Fruits");
    const [activeTab, setActiveTab] = useState(0);

    const [tabResults, setTabResults] = useState(tabs[0].tabResult);

    const filterResultControl = (content) => {
        setTabResultCont(content);
        setTabResults(
            tabs.filter((item) => item.content === content)[0].tabResult
        );
    };

    const fliterResultRow = (id) => {
        setTabResults((prevState) => {
            return prevState.map((item) => {
                const rows = item.rows.map((row) => {
                    return row.id === id ? { ...row, mark: !row.mark } : row;
                });
                return { ...item, rows };
            });
        });
    };

    return (
        <section className="powerNuts">
            <div className="container">
                <div className="row">
                    <div className="col_12">
                        <h2 className="powerNuts__title">{title}</h2>
                        <p className="powerNuts__text">{text}</p>
                    </div>
                </div>
                <div className="powerNuts__row justify-center">
                    {/* <div className="tabs">
                        {tabsBtns?.map((item, i) => (
                            <button
                                className={`${
                                    tabResultCont === item.content
                                        ? "tabs__btn active"
                                        : "tabs__btn"
                                }`}
                                onClick={() =>
                                    filterResultControl(item.content)
                                }
                                key={i}
                            >
                                {item.name}
                            </button>
                        ))}
                    </div> */}
                    <div className="row justify-lg-between tabs__result">
                        {tabResults.map((item, i) => {
                            const { imageSrc, rows = [] } = item;
                            return (
                                <Fragment key={i}>
                                    <div className="tabs-images">
                                        <Image
                                            src={tabImages[activeTab].imageSrc}
                                            width={552}
                                            height={587}
                                            alt={item.title}
                                            layout="intrinsic"
                                            priority
                                        />
                                        <div className="swiper">
                                            <p>{tabImages[activeTab].text}</p>
                                            <div className="swiper-pagination">
                                                {tabImages.map((el, i) => (
                                                    <div
                                                        onClick={() =>
                                                            setActiveTab(i)
                                                        }
                                                        key={i}
                                                        className={`swiper-pagination-bullet ${
                                                            i === activeTab &&
                                                            "swiper-pagination-bullet-active"
                                                        }`}
                                                    ></div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <section className="tabs-infos">
                                        <div className="tabs-infos__top">
                                            <h3 className="tabs-infos__title">
                                                {item.title}
                                            </h3>
                                            <p className="tabs-infos__text">
                                                {item.text}
                                            </p>
                                        </div>
                                        <div className="tabs-infos__center">
                                            {rows.map((row) => (
                                                <div
                                                    className="tabs-row"
                                                    onClick={() =>
                                                        fliterResultRow(row.id)
                                                    }
                                                    key={row.id}
                                                >
                                                    <span
                                                        className={`${
                                                            row.mark
                                                                ? "tabs-row__number active"
                                                                : "tabs-row__number"
                                                        }`}
                                                    >
                                                        {row.id}
                                                    </span>
                                                    <div className="tabs-row__right">
                                                        <h3 className="tabs-row__title">
                                                            {row.title}
                                                        </h3>
                                                        <p className="tabs-row__text">
                                                            {row.text}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>
                                </Fragment>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default memo(NutsValley);
