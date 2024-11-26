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
                        {productsRows?.map((item, i) => {
                            if (i === 0) {
                                return (
                                    <section
                                        className="col-12 products-row"
                                        key={i}
                                    >
                                        <div className="products-row__left">
                                            <h3 className="products-row__title">
                                                {item.title}
                                            </h3>
                                            <p className="products-row__description">
                                                {item.description}
                                            </p>
                                            <Link href={item.path}>
                                                <a
                                                    className="products-row__link"
                                                    onClick={rememberedScroll}
                                                >
                                                    {item.linkName}
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="products-row__right">
                                            <Image
                                                src={item.imageSrc}
                                                width="504"
                                                height="319"
                                                alt={item.title}
                                                layout="intrinsic"
                                                priority
                                            />
                                        </div>
                                    </section>
                                );
                            }
                            if (i === 1) {
                                return (
                                    <section
                                        className="col-12 products-row"
                                        key={i}
                                    >
                                        <div className="products-row__left">
                                            <h3 className="products-row__title">
                                                {item.title}
                                            </h3>
                                            <p className="products-row__description">
                                                {item.description}
                                            </p>
                                            <Link href={item.path}>
                                                <a
                                                    className="products-row__link"
                                                    onClick={rememberedScroll}
                                                >
                                                    {item.linkName}
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="products-row__right">
                                            <Image
                                                src={item.imageSrc}
                                                width="494"
                                                height="272"
                                                alt={item.title}
                                                layout="intrinsic"
                                                priority
                                            />
                                        </div>
                                    </section>
                                );
                            }
                            if (i === 2) {
                                return (
                                    <section
                                        className="col-12 products-row"
                                        key={i}
                                    >
                                        <div className="products-row__left">
                                            <h3 className="products-row__title">
                                                {item.title}
                                            </h3>
                                            <p className="products-row__description">
                                                {item.description}
                                            </p>
                                            <Link href={item.path}>
                                                <a
                                                    className="products-row__link"
                                                    onClick={rememberedScroll}
                                                >
                                                    {item.linkName}
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="products-row__right">
                                            <Image
                                                src={item.imageSrc}
                                                width="503"
                                                height="304"
                                                alt={item.title}
                                                layout="intrinsic"
                                                priority
                                            />
                                        </div>
                                    </section>
                                );
                            }
                        })}
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
