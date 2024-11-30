/** @format */
import Image from "next/image";
import { useState, useRef, useEffect, memo } from "react";
import { useGlobalContext } from "context/context";
import { useForm } from "react-hook-form";
import { phoneNumberControl } from "../../../custom/hooks";
import { useTranslation } from "next-i18next";

const Contact = ({ sideImage, notSuccessSent, success }) => {
    const { t } = useTranslation("home");
    const themes = t("contact.form.themes", {
        returnObjects: true,
    });

    const contactSelectionTitle = useRef(null);
    const [selectionControl, setSelectionControl] = useState(false);
    const contactSelectionRow = useRef(null);
    const contactSelectionList = useRef(null);
    const [itemValue, setItemValue] = useState(themes?.list?.[0].value);
    const { setForm } = useGlobalContext();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const contactSelectionClick = () => {
        setSelectionControl((prev) => !prev);
    };

    const selectionItemValue = (value) => {
        setItemValue(value);
        setSelectionControl((prev) => !prev);
    };

    const formHandel = async (values) => {
        let data = {
            name: values.name,
            theme: itemValue,
            phone: values.tel,
            message: values.message,
        };

        try {
            const response = await fetch("/api/contact/", {
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
                    message: "",
                });
                setItemValue(themes?.list?.[0].value);
                setForm({ control: true, data: success, isUccess: true });
            } else {
                setForm({
                    control: true,
                    data: notSuccessSent,
                    isUccess: false,
                });
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (contactSelectionRow && contactSelectionList) {
            if (selectionControl) {
                const height = Math.floor(
                    contactSelectionList.current.getBoundingClientRect()
                        .height + 2
                );
                const top = Math.floor(
                    contactSelectionTitle.current.getBoundingClientRect().height
                );
                contactSelectionRow.current.style.height = height + "px";
                contactSelectionRow.current.style.top = top + "px";
            } else {
                contactSelectionRow.current.style.height = 0;
            }
        }
    });

    return (
        <section className="contact" id="contact">
            <div className="container">
                <div className="row justify-between">
                    <form
                        className="contact-form"
                        onSubmit={handleSubmit(formHandel)}
                    >
                        <h2 className="contact-form__title">
                            {t("contact.title")}
                        </h2>
                        <div className="contact-form__inputs">
                            <div className="contact-form__top">
                                <input
                                    type="text"
                                    className="contact-form__input"
                                    placeholder={t("contact.form.name")}
                                    {...register("name", {
                                        required: true,
                                        min: 3,
                                    })}
                                />
                                <input
                                    type="tel"
                                    className="contact-form__input"
                                    placeholder={t("contact.form.tel")}
                                    {...register("tel", {
                                        required: true,
                                        min: 6,
                                    })}
                                    onKeyUp={phoneNumberControl.bind(this)}
                                />
                            </div>
                            <div className="contact-form__bottom">
                                <div className="contact-selection">
                                    <div
                                        className={`${
                                            selectionControl
                                                ? "contact-selection__title active"
                                                : "contact-selection__title"
                                        }`}
                                        onClick={contactSelectionClick}
                                        ref={contactSelectionTitle}
                                    >
                                        {itemValue}
                                    </div>
                                    <div
                                        className="contact-selection__row"
                                        ref={contactSelectionRow}
                                    >
                                        <div
                                            className="contact-selection__list"
                                            ref={contactSelectionList}
                                        >
                                            {themes?.list.map((item, i) => (
                                                <div
                                                    key={i}
                                                    className="contact-selection__item"
                                                    onClick={() =>
                                                        selectionItemValue(
                                                            item.value
                                                        )
                                                    }
                                                >
                                                    {item.value}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <textarea
                                    className="contact-form__textarea"
                                    placeholder={t("contact.form.message")}
                                    {...register("message", {
                                        required: true,
                                        min: 6,
                                    })}
                                />
                                <button
                                    type="submit"
                                    className="contact-form__btn"
                                >
                                    {t("contact.form.send")}
                                </button>
                            </div>
                        </div>
                        <div className="contact__bottom">
                            <div className="contact__our">
                                <span className="contact__icon">
                                    <span className="ic ic__phone"></span>
                                </span>
                                <div className="contact__call">
                                    <span>{t("contact.form.callNumber")}</span>

                                    <a
                                        href="tel:+998940340005"
                                        className="contact__con"
                                    >
                                        +99894 034 00 05
                                    </a>
                                </div>
                            </div>
                            <div className="contact__our">
                                <span className="contact__icon">
                                    <span className="ic ic__mail"></span>
                                </span>
                                <div className="contact__call">
                                    <span>{t("contact.form.email")}</span>
                                    <a
                                        href="mailto:info@mt-food.uz"
                                        className="contact__con"
                                    >
                                        info@mt-food.uz
                                    </a>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="contact-image">
                        <Image
                            src={
                                sideImage || "/assets/images/contact-image.png"
                            }
                            alt="Quality Image"
                            width="558"
                            height="644"
                            layout="intrinsic"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default memo(Contact);
