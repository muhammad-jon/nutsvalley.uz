import { useEffect, useCallback } from "react";
import Cookies from "js-cookie";

function useRememberScroll() {
    const saveScrollPosition = useCallback(() => {
        Cookies.set("page-scroll", Math.floor(window.scrollY), { expires: 1 });
    }, []);

    useEffect(() => {
        const savedScrollPosition = Cookies.get("page-scroll");
        if (savedScrollPosition) {
            const scrollToPosition = parseInt(savedScrollPosition, 10) || 0;

            const timer = setTimeout(() => {
                window.scrollTo(0, scrollToPosition);
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", saveScrollPosition);

        return () => {
            window.removeEventListener("scroll", saveScrollPosition);
        };
    }, [saveScrollPosition]);
}

export default useRememberScroll;
