/** @format */

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { memo } from "react";
import ButtonUp from "./home/ButtonUp";
import { footerData } from "data/data";

const Footer = ({ buttonUpCt, forErrorUp }) => {
    const router = useRouter();
    const { locale } = router;
    const data = locale === "en" ? footerData.en : footerData.ru;
    const { description, address, callNumber, email, producer } = data;

    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-brand">
                    <Image
                        src="/assets/icons/footer-logo.svg"
                        width={471}
                        height={133}
                        layout="intrinsic"
                        alt="Brand Logo"
                        priority
                    />
                </div>
                <div className="footer__links">
                    <Link href="http://Facebook.com/Mtfooduz">
                        <a className="footer__link">
                            <span className="ic ic__footer-facebook"></span>
                        </a>
                    </Link>
                    <Link href="http://Instagram.com/Mtfood.uz">
                        <a className="footer__link">
                            <span className="ic ic__footer-instagram"></span>
                        </a>
                    </Link>
                    <Link href="http://t.me/+998940340005">
                        <a className="footer__link">
                            <span className="ic ic__footer-telegram"></span>
                        </a>
                    </Link>
                    <Link href="http://youtube.com/Mtfooduz">
                        <a className="footer__link">
                            <span className="ic ic__footer-youTube"></span>
                        </a>
                    </Link>
                </div>
            </div>
            <div className="footer-cenetr">
                <p className="footer__address">{address}</p>
                <div className="footer-center__contact">
                    <Link href="tel:+998940340005">
                        <a onClick={"gtag_report_conversion"}>{callNumber}</a>
                    </Link>
                    <Link href="mailto:info@mt-food.uz">
                        <a onClick={"gtag_report_conversion"}>{email}</a>
                    </Link>
                </div>
            </div>
            <p className="footer-bottom">{producer}</p>

            <div className="footer__bg">
                <div
                    style={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                    }}
                >
                    <Image
                        src="/assets/images/footer-bg.png"
                        layout="fill"
                        objectFit="cover"
                        alt="Baground Bg"
                        priority
                    />
                </div>
            </div>
            <ButtonUp buttonUpCt={buttonUpCt} forErrorUp={forErrorUp} />
        </footer>
    );
};

export default memo(Footer);
