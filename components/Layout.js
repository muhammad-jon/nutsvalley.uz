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
                        href: "/assets/images/head-logo.png",
                    },
                ]}
            />
            {formCt.control && <FormCt />}
            {children}
        </Fragment>
    );
};

export default Layout;
