/** @format */

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useRef } from "react";
import { useGlobalContext } from "context/context";
import { headerData } from "data/data";
import Cookies from "js-cookie";
import * as Scroll from "react-scroll";

const HeaderPc = (props) => {
    const { navbarFixed = false, notfound, forErrorUp } = props;
    const router = useRouter();
    const { locale } = router;

    const data = locale === "en" ? headerData.en : headerData.ru;
    const { setHomeLoading, setErrorLoading } = useGlobalContext();
    const navbarRef = useRef(null);

    const AnchorLink = Scroll.Link;

    const changeLanguage = (lang) => {
        if (!notfound) {
            Cookies.set("page-scroll", Math.floor(window.pageYOffset));
            Cookies.set("language", lang);
            router.push("/", "/", { locale: lang });
            setHomeLoading(false);
        } else {
            setErrorLoading(false);
        }
    };

    return (
        <div
            className={`${navbarFixed ? "navbar navbar-fixed" : "navbar"} ${
                notfound ? "notfound" : ""
            }`}
            id={forErrorUp ? "forErrorUp" : ""}
        >
            <div ref={navbarRef} className="container">
                <div className="navbar__brand">
                    <Link href="/">
                        <a>
                            {notfound ? (
                                <Image
                                    src="/assets/icons/Logo-2.svg"
                                    alt="navbar brand Image"
                                    width="175"
                                    height="58"
                                    layout="intrinsic"
                                    priority
                                />
                            ) : navbarFixed ? (
                                <Image
                                    src="/assets/icons/Logo-2.svg"
                                    alt="navbar brand Image"
                                    width="175"
                                    height="58"
                                    layout="intrinsic"
                                    priority
                                />
                            ) : (
                                <Image
                                    src="/assets/icons/Logo.svg"
                                    alt="navbar brand Image"
                                    width="175"
                                    height="58"
                                    layout="intrinsic"
                                    priority
                                />
                            )}
                        </a>
                    </Link>
                </div>
                <nav className="navbar__nav">
                    <ul className="navbar__list">
                        {data.navbarList.map((item, i) => (
                            <li className="navbar__item" key={i}>
                                <AnchorLink
                                    offset={item.offset}
                                    className="navbar__link"
                                    activeClass="active"
                                    to={item.path}
                                    spy={true}
                                >
                                    {item.link}
                                </AnchorLink>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="navbar__call">
                    <div className="navbar__languages">
                        <Link href="#" locale="en">
                            <a
                                className={`navbar__language ${
                                    data.navbarLanguage === "en" ? "active" : ""
                                } `}
                                onClick={() => changeLanguage("en")}
                            >
                                Eng
                            </a>
                        </Link>
                        <span className="navbar__language-mark">/</span>
                        <Link href="#" locale="ru">
                            <a
                                className={`navbar__language ${
                                    data.navbarLanguage === "ru" ? "active" : ""
                                } `}
                                onClick={() => changeLanguage("ru")}
                            >
                                Ру
                            </a>
                        </Link>
                    </div>
                    <span className="navbar__phone">
                        <span className="ic ic__call"></span>
                        <Link href="tel:+998940340005">
                            <a>+998 94 034 00 05</a>
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default HeaderPc;
