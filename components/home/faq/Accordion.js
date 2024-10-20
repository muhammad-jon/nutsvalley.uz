/** @format */

import { useRef, useEffect } from "react";

const Accordion = ({ title, content, id, isActive, accordionControl }) => {
    const accordionItem = useRef(null);
    const accordionContent = useRef(null);

    const accordionContentControl = () => {
        if (isActive) {
            const height =
                accordionContent.current.getBoundingClientRect().height;
            accordionItem.current.style.height = `${height}px`;
        } else {
            accordionItem.current.style.height = 0;
        }
    };

    useEffect(() => {
        accordionContentControl();
        window.addEventListener("load", accordionContentControl);
        window.addEventListener("resize", accordionContentControl);
        return () => {
            window.removeEventListener("load", accordionContentControl);
            window.removeEventListener("resize", accordionContentControl);
        };
    });

    return (
        <div className="accordion">
            <h3
                className={`accordion__title ${isActive ? "active" : ""}`}
                onClick={() => accordionControl(id)}
            >
                {title}
            </h3>
            <div className="accordion__item" ref={accordionItem}>
                <div className="accordion__content" ref={accordionContent}>
                    {content}
                </div>
            </div>
        </div>
    );
};

export default Accordion;
