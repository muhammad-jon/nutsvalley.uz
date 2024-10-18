/** @format */

import React, { Fragment } from "react";
import { useGlobalContext } from "context/context";
import FormCt from "./home/FormCt";
import { NextSeo } from "next-seo";

const Layout = ({ children }) => {
    const { formCt } = useGlobalContext();

    return (
        <Fragment>
            <NextSeo
                additionalLinkTags={[
                    {
                        rel: "shortcut icon",
                        href: "/assets/icons/head-logo.svg",
                    },
                ]}
            />
            {formCt.control && <FormCt />}
            {children}
        </Fragment>
    );
};

export default Layout;
