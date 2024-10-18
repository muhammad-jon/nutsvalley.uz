/** @format */

import { useState, Fragment, useEffect } from "react";
import HeaderMb from "./HeaderMb";
import HeaderPc from "./HeaderPc";

const Header = (props) => {
    const [whichHeader, setWhichHeader] = useState(false);

    const navbarselct = () => {
        if (window.outerWidth < 992) {
            setWhichHeader(true);
        } else {
            setWhichHeader(false);
        }
    };

    useEffect(() => {
        navbarselct();
    }, []);

    useEffect(() => {
        window.addEventListener("resize", navbarselct);
        window.addEventListener("load", navbarselct);
        return () => {
            window.removeEventListener("resize", navbarselct);
            window.removeEventListener("load", navbarselct);
        };
    });

    return (
        <Fragment>
            {whichHeader ? <HeaderMb {...props} /> : <HeaderPc {...props} />}
        </Fragment>
    );
};

export default Header;
