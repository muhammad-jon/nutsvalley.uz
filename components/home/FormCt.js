import Image from "next/image";
import React from "react";
import { useGlobalContext } from "context/context";

const FormCt = () => {
    const {
        formCt: { data, isUccess },
        setForm,
    } = useGlobalContext();

    return (
        <section className="form-control">
            <div className="form-control__container">
                <div className="form-control__image">
                    {isUccess ? (
                        <Image
                            src="/assets/icons/checked.svg"
                            alt="Ican modal"
                            width="93"
                            height="93px"
                            layout="intrinsic"
                            priority
                        />
                    ) : (
                        <Image
                            src="/assets/icons/times_icon.svg"
                            alt="Ican modal"
                            width="93"
                            height="93px"
                            layout="intrinsic"
                            priority
                        />
                    )}
                </div>
                <h2 className="form-control__title">{data.title}</h2>
                <p className="form-control__text">{data.text}</p>
                <button
                    className="form-control__btn"
                    onClick={() => setForm({ control: false })}
                >
                    {data.closeName}
                </button>
            </div>
        </section>
    );
};

export default FormCt;
