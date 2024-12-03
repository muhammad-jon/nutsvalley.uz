/** @format */

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useEffect } from "react";
import { NextSeo } from "next-seo";
import SocialMedias from "components/home/SocialMedias";
import WeOffer from "components/offer/WeOffer";
import Footer from "components/Footer";
import Loading from "components/Loading";
import { productsData, productsMetaSEO } from "data/data";
import { useGlobalContext } from "context/context";
import Script from "next/script";
import Markdown from "markdown-to-jsx";

function Index({
    id,
    metaSEO,
    goBackBtnName,
    homepageName,
    offerProductsTitle,
    productsRowNames,
    data,
}) {
    const { pageTitle, products, offerProducts, headerText, additionalInfo } =
        data;
    const { loadingProducts, setLoadingProducts } = useGlobalContext();

    const basicSeo = metaSEO.productsType.filter(
        (item) => item.content === id
    )[0];
    const seoMetas = metaSEO.productsType.filter(
        (item) => item.content === id
    )[0].metas;

    useEffect(() => {
        let t = setTimeout(() => {
            setLoadingProducts(true);
        }, 0);

        return () => clearTimeout(t);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    return (
        <>
            <div>
                <NextSeo
                    title={basicSeo?.title}
                    description={basicSeo?.description}
                    additionalMetaTags={seoMetas}
                />
                <SocialMedias />
                <section className="products-page" id="products-page">
                    <div className="products-page-top">
                        <Link href="/">
                            <a className="products-page-back__link">
                                <span className="ic ic__arrow-left"></span>
                                {goBackBtnName}
                            </a>
                        </Link>
                        <h1 className="products-page__title">{pageTitle}</h1>
                        <p className="products-page__link">
                            <Link href="/">
                                <a className="products-page__link">
                                    {homepageName}
                                </a>
                            </Link>
                            <span>»</span>
                            {pageTitle}
                        </p>
                        <div className="products-page-top__bg">
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
                                    alt="products page Image"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="products-page-top-text">
                            {headerText &&
                                headerText.map((el, i) => {
                                    return <p key={i}>{el}</p>;
                                })}
                        </div>
                    </div>
                    <div className="container">
                        {products?.map((product, i) => (
                            <div className="products-page-row" key={i}>
                                <div className="products-page-row__image">
                                    <Image
                                        src={`/assets/products_Images/${product.imageSrc}`}
                                        width="526"
                                        height="351"
                                        layout="intrinsic"
                                        alt="products Image"
                                        priority
                                    />
                                </div>
                                <div className="products-page-row__body">
                                    <h3 className="products-page-row__title">
                                        {product.title}
                                    </h3>
                                    <p className="products-page-row__desc">
                                        <span>
                                            {productsRowNames.descriptionName}
                                        </span>
                                        {product.description}
                                    </p>
                                    <section className="products-page-row__infos">
                                        {product.type && (
                                            <div className="products-page-row__box">
                                                <p className="products-page-row__type">
                                                    {productsRowNames.typeName}
                                                </p>
                                                <p className="products-page-row__sort">
                                                    {product.type}
                                                </p>
                                            </div>
                                        )}
                                        {product.packaging && (
                                            <div className="products-page-row__box">
                                                <p className="products-page-row__type">
                                                    {
                                                        productsRowNames.packagingName
                                                    }
                                                </p>
                                                <p className="products-page-row__sort">
                                                    {product.packaging}
                                                </p>
                                            </div>
                                        )}
                                        {product.caliber && (
                                            <div className="products-page-row__box">
                                                <p className="products-page-row__type">
                                                    {
                                                        productsRowNames.caliberName
                                                    }
                                                </p>
                                                <p className="products-page-row__sort">
                                                    {product.caliber}
                                                </p>
                                            </div>
                                        )}
                                        {product.humidity && (
                                            <div className="products-page-row__box">
                                                <p className="products-page-row__type">
                                                    {
                                                        productsRowNames.humidityName
                                                    }
                                                </p>
                                                <p className="products-page-row__sort">
                                                    {product.humidity}
                                                </p>
                                            </div>
                                        )}
                                        {product.pcsPer100gr && (
                                            <div className="products-page-row__box">
                                                <p className="products-page-row__type">
                                                    {
                                                        productsRowNames.pcsPer100grName
                                                    }
                                                </p>
                                                <p className="products-page-row__sort">
                                                    {product.pcsPer100gr}
                                                </p>
                                            </div>
                                        )}
                                        {product.typeOfDrying && (
                                            <div className="products-page-row__box">
                                                <p className="products-page-row__type">
                                                    {
                                                        productsRowNames.typeOfDryingName
                                                    }
                                                </p>
                                                <p className="products-page-row__sort">
                                                    {product.typeOfDrying}
                                                </p>
                                            </div>
                                        )}
                                    </section>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="container">
                        <div className="products-page-additional-info">
                            <Markdown>{additionalInfo.text}</Markdown>
                            {additionalInfo.cards && (
                                <div className="additional-info-cards">
                                    {additionalInfo.cards?.map((el, i) => {
                                        return (
                                            <div
                                                className="additional-info-card"
                                                key={i}
                                            >
                                                <h3>
                                                    {i + 1}. {el.title}
                                                </h3>
                                                <Markdown>{el.body}</Markdown>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    </div>
                    <WeOffer offerProducts={offerProducts} />
                </section>
                <Footer buttonUpCt={true} />
            </div>
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

export default Index;

export async function getServerSideProps({ locale, query }) {
    const { id } = query;
    const metaSEO = productsMetaSEO[locale];
    const products = productsData[locale];
    let data = {};

    products.products.forEach((product) => {
        if (product.content === id) {
            data = product;
        }
    });

    return {
        props: {
            id,
            metaSEO,
            data,
            goBackBtnName: products.goBackBtnName,
            homepageName: products.homepageName,
            offerProductsTitle: products.offerProductsTitle,
            productsRowNames: products.productsRowNames,
        },
    };
}
