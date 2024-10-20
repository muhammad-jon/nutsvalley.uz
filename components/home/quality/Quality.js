/** @format */
import Image from "next/image";
import { memo } from "react";
import { useTranslation } from "next-i18next";

const Quality = () => {
    const { t } = useTranslation("home");
    const descriptions = t("quality.descriptions", { returnObjects: true });

    return (
        <section className="quality" id="quality">
            <div className="container">
                <div className="row"></div>
                <div className="row justify-lg-between">
                    <div className="quality-descriptions">
                        <div className="col-12">
                            <h2 className="quality__title">
                                {t("quality.title")}
                            </h2>
                            <p className="quality__text">{t("quality.text")}</p>
                        </div>
                        {descriptions?.map((item) => (
                            <div className="quality-description" key={item.id}>
                                <span className="quality-description__number">
                                    <span className="ic ic__quality-ellipse">
                                        {item.id}
                                    </span>
                                </span>
                                <p className="quality-description__text">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="quality-image">
                        <Image
                            src="/assets/images/quality_img.png"
                            alt="Quality Image"
                            width="527"
                            height="711"
                            layout="intrinsic"
                            priority
                        />
                    </div>
                </div>
            </div>
            <div className="quality__bg">
                <div
                    style={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                    }}
                >
                    <Image
                        src="/assets/images/quality_bg.png"
                        alt="Quality baground"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                        priority
                    />
                </div>
            </div>
        </section>
    );
};

export default memo(Quality);
