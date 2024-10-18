/** @format */

import Image from "next/image";
import { Fragment, useState, useEffect, useRef } from "react";

const SocialMedias = () => {
    const [socialMedia, setSocialMedia] = useState(false);
    const socialMediasRef = useRef(null);
    const socialMediaRef = useRef(null);
    const socialMediasContainerRef = useRef(null);
    const socialMediaContainerRef = useRef(null);

    useEffect(() => {
        if (socialMediasRef.current) {
            if (socialMedia) {
                const height = Math.floor(
                    socialMediasContainerRef.current.getBoundingClientRect()
                        .height
                );

                socialMediasRef.current.style.height = `${height + 2}px`;
                socialMediaRef.current.style.height = "0";
            } else {
                const height = Math.floor(
                    socialMediaContainerRef.current.getBoundingClientRect()
                        .height
                );

                const controlHeight = height !== 0 ? height + 2 : 122;
                socialMediasRef.current.style.height = "0";
                socialMediaRef.current.style.height = `${controlHeight}px`;
            }
        }
    }, [socialMedia]);

    return (
        <Fragment>
            <div ref={socialMediasRef} className="social-medias">
                <div
                    ref={socialMediasContainerRef}
                    className="social-medias__container"
                >
                    <ul className="social-media__list">
                        <li className="social-media__item">
                            <a
                                href="tel:+998940340005"
                                className="social-media__link"
                            >
                                <Image
                                    src="/assets/icons/social-media-call.svg"
                                    width={51}
                                    height={51}
                                    layout="intrinsic"
                                    alt="Social media"
                                    priority
                                />
                            </a>
                        </li>
                        <li className="social-media__item">
                            <a
                                href="https://join.skype.com/invite/MoZIg6MvWNSh"
                                className="social-media__link"
                            >
                                <Image
                                    src="/assets/icons/social-media-skype.svg"
                                    width={51}
                                    height={51}
                                    layout="intrinsic"
                                    alt="Social media"
                                    priority
                                />
                            </a>
                        </li>
                        <li className="social-media__item">
                            <a
                                href="https://tinyurl.com/Nuts-Valley-Viber-account"
                                className="social-media__link"
                            >
                                <Image
                                    src="/assets/icons/social-media-viber.svg"
                                    width={51}
                                    height={51}
                                    layout="intrinsic"
                                    alt="Social media"
                                    priority
                                />
                            </a>
                        </li>
                        <li className="social-media__item">
                            <a
                                href="https://weixin://dl/chat?nutsvalleyuz"
                                className="social-media__link"
                            >
                                <Image
                                    src="/assets/icons/social-media-wechat.svg"
                                    width={51}
                                    height={51}
                                    layout="intrinsic"
                                    alt="Social media"
                                    priority
                                />
                            </a>
                        </li>
                        <li className="social-media__item">
                            <a
                                href="https://t.me/nutsvalleyuz"
                                className="social-media__link"
                            >
                                <Image
                                    src="/assets/icons/social-media-telegram.svg"
                                    width={51}
                                    height={51}
                                    layout="intrinsic"
                                    alt="Social media"
                                    priority
                                />
                            </a>
                        </li>
                        <li className="social-media__item">
                            <a
                                href="https://wa.me/998940340005"
                                className="social-media__link"
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
                        </li>
                    </ul>
                    <div
                        onClick={() => setSocialMedia((prev) => !prev)}
                        className="social-media__close"
                    >
                        <span className="ic ic__times"></span>
                    </div>
                </div>
            </div>
            <div ref={socialMediaRef} className="social-media">
                <div
                    ref={socialMediaContainerRef}
                    className="social-media__container"
                >
                    <button className="social-media__btn">
                        <span
                            onClick={() => setSocialMedia((prev) => !prev)}
                            className="social-media__btn-bg"
                        >
                            <span className="ic ic__subtract"></span>
                        </span>
                    </button>
                </div>
            </div>
        </Fragment>
    );
};
export default SocialMedias;
