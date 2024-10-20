/** @format */
import Image from "next/image";
import React, { Fragment, memo } from "react";
import { useGlobalContext } from "context/context";
import { useForm } from "react-hook-form";
import * as Scroll from "react-scroll";
import { phoneNumberControl } from "../../../custom/hooks";
import parse from "html-react-parser";
import { useTranslation } from "next-i18next";

const Hero = () => {
    const { setForm } = useGlobalContext();
    const AnchorLink = Scroll.Link;

    const { t } = useTranslation("home");

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const formHandel = async (values) => {
        let data = {
            name: values.name,
            email: values.email,
            phone: values.tel,
        };

        try {
            const response = await fetch("/api/hero/", {
                method: "POST",
                headers: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                reset({
                    name: "",
                    tel: "",
                    email: "",
                });
                setForm({ control: true, data: props.success, isUccess: true });
            } else {
                setForm({
                    control: true,
                    data: props.notSuccessSent,
                    isUccess: false,
                });
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Fragment>
            <section className="hero">
                <div className="container">
                    <div className="row justify-lg-between align-center">
                        <div className="hero__left">
                            <h1 className="hero__title">
                                {t("hero.heroTitle")}
                            </h1>
                            <p className="hero__text">{t("hero.heroText")}</p>
                            <div className="hero__links">
                                <AnchorLink
                                    className="hero__link"
                                    to="about"
                                    offset={-150}
                                >
                                    {t("hero.heroLink")}
                                </AnchorLink>
                            </div>
                        </div>
                        <section className="hero__right">
                            {t("hero.heroCards", {
                                returnObjects: true,
                            })?.map((item, i) => (
                                <div key={i} className="hero-card">
                                    <div className="hero-card__header">
                                        <span
                                            className={`ic ${item.iconClassName}`}
                                        ></span>
                                    </div>
                                    <p className="hero-card__text">
                                        {parse(item.text)}
                                    </p>
                                </div>
                            ))}
                        </section>
                    </div>
                </div>
            </section>

            <div className="header__bg">
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        position: "relative",
                    }}
                >
                    <Image
                        src="/assets/images/hero_bg.jpg"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        alt="navbar brand Image"
                        priority
                    />
                </div>
            </div>
        </Fragment>
    );
};

export default memo(Hero);
