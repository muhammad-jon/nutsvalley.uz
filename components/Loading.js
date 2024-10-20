import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Loading = () => {
    const [loader, setLoader] = useState(true);

    const router = useRouter();

    useEffect(() => {
        if (router.isReady) {
            setLoader(false);
        }

        const handleStart = (url) => url !== router.asPath && setLoader(true);
        const handleComplete = (url) => {
            setTimeout(() => {
                setLoader(false);
            }, 500);
        };

        router.events.on("routeChangeStart", handleStart);
        router.events.on("routeChangeComplete", handleComplete);
        router.events.on("routeChangeError", handleComplete);

        return () => {
            router.events.off("routeChangeStart", handleStart);
            router.events.off("routeChangeComplete", handleComplete);
            router.events.off("routeChangeError", handleComplete);
        };
    }, []);

    return loader ? (
        <div className="loader">
            <div className="lds-spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    ) : null;
};

export default Loading;
