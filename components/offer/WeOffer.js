import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "context/context";

const WeOffer = ({ offerProducts, title }) => {
    const { locale } = useRouter();
    const weOfferRef = useRef(null);
    const [fixedOffer, setFixedOffer] = useState(false);
    const { setLoadingProducts } = useGlobalContext();

    const offers = () => {
        if (weOfferRef.current) {
            // weOfferRef.current
            if (window.innerWidth > 1800) {
                weOfferRef.current.classList.add("show");
                weOfferRef.current.classList.remove("hide");
            } else {
                weOfferRef.current.classList.remove("show");
                weOfferRef.current.classList.add("hide");
            }
        }
    };

    const removeFixed = () => {
        setFixedOffer(false);
    };

    const scrollFixed = () => {};

    useEffect(() => {
        window.addEventListener("resize", offers);
        window.addEventListener("scroll", removeFixed);
        window.addEventListener("load", scrollFixed);
        window.addEventListener("scroll", scrollFixed);

        return () => {
            window.removeEventListener("resize", offers);
            window.removeEventListener("scroll", removeFixed);
            window.removeEventListener("load", scrollFixed);
            window.removeEventListener("scroll", scrollFixed);
        };
    });

    return (
        <div
            className={`we-offer ${fixedOffer ? "active" : "rm-active"}`}
            ref={weOfferRef}
        >
            <div className="we-offer__title">
                {title
                    ? title
                    : locale === "en"
                    ? "Our products"
                    : "Наши продукты"}
            </div>
            <div className="we-offer__container">
                {offerProducts &&
                    offerProducts.map((item, i) => (
                        <Link href={item.path} key={i}>
                            <a
                                className="we-offer__row"
                                onClick={() => {
                                    setFixedOffer(false);
                                    setLoadingProducts(false);
                                }}
                            >
                                <div className="we-offer__image">
                                    <Image
                                        src={item.imageSrc}
                                        width="227"
                                        height="105"
                                        layout="intrinsic"
                                        alt="Offer Image"
                                        priority
                                    />
                                </div>
                                <p className="we-offer__name">{item.title}</p>
                            </a>
                        </Link>
                    ))}
                <span
                    className="we-offer__show"
                    onClick={() => setFixedOffer(!fixedOffer)}
                >
                    <span className="ic ic__arrow-right"></span>
                </span>
            </div>
        </div>
    );
};

export default WeOffer;
