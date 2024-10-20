/** @format */

import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useGlobalContext } from "context/context";
import { headerData } from "data/data";

const HeaderMb = ({ navbarFixed = false, notfound }) => {
    const { setHomeLoading } = useGlobalContext();
    const router = useRouter();
    const { locale } = router;
    const data = locale === "en" ? headerData.en : headerData.ru;

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
            className={`${
                navbarFixed
                    ? "mobile-navbar mobile-navbar-fixed"
                    : "mobile-navbar"
            }`}
        >
            <div className="container">
                <div className="mobile-navbar__row">
                    <div className="mobile-navbar__brand">
                        {navbarFixed ? (
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
                    </div>
                    <div className="mobile-navbar__call">
                        <a
                            href="https://wa.me/998940340005"
                            className="mobile-navbar__link"
                        >
                            <Image
                                src="/assets/icons/social-media-whatsapp.svg"
                                width={51}
                                height={51}
                                layout="intrinsic"
                                alt="Social media"
                                priority
                            />
                        </a>
                        <div className="mobile-navbar__languages">
                            <Link href="#" locale="en">
                                <a
                                    className={`mobile-navbar__language ${
                                        data.navbarLanguage === "en"
                                            ? "active"
                                            : ""
                                    } `}
                                    onClick={() => changeLanguage("en")}
                                >
                                    Eng
                                </a>
                            </Link>
                            <span className="mobile-navbar__language-mark">
                                /
                            </span>
                            <Link href="#" locale="ru">
                                <a
                                    className={`mobile-navbar__language ${
                                        data.navbarLanguage === "ru"
                                            ? "active"
                                            : ""
                                    } `}
                                    onClick={() => changeLanguage("ru")}
                                >
                                    Ру
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderMb;
