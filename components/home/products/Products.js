/** @format */
import Image from "next/image";
import Link from "next/link";
import { memo, Fragment } from "react";
import { useTranslation } from "next-i18next";
import Cookies from "js-cookie";

function Products() {
    const { t } = useTranslation("home");
    const title = t("products.title");
    const text = t("products.text");
    const productsRows = t("products.productsRows", { returnObjects: true });

    function rememberedScroll() {
        Cookies.set("page-scroll", Math.floor(window.pageYOffset));
    }

    return (
        <Fragment>
            <section className="products" id="products">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="products__title">{title}</h2>
                            <p className="products__text">{text}</p>
                        </div>
                        <div className="products__list">
                            {productsRows?.map((item, i) => {
                                return (
                                    <Link key={i} href={item.path}>
                                        <a onClick={rememberedScroll}>
                                            <section className="products-row">
                                                <div className="products-row__image">
                                                    <Image
                                                        src={item.imageSrc}
                                                        width="190"
                                                        height="190"
                                                        alt={item.title}
                                                        layout="intrinsic"
                                                        priority
                                                    />
                                                </div>
                                                <div className="products-row__text">
                                                    <p className="products-row__title">
                                                        {item.title}
                                                    </p>
                                                </div>
                                            </section>
                                        </a>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="products__bg">
                    <div
                        style={{
                            position: "relative",
                            width: "100%",
                            height: "100%",
                        }}
                    >
                        <Image
                            src="/assets/images/products_bg.png"
                            alt="Hero baground"
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                    </div>
                </div>
            </section>
        </Fragment>
    );
}

export default memo(Products);
