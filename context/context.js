/** @format */

import { createContext, useContext, useState } from "react";

const GlobalContext = createContext(null);

const ContainersProvider = ({ children }) => {
    const [errorLoading, setErrorLoading] = useState(false);
    const [homeLoading, setHomeLoading] = useState(false);
    const [loadingProducts, setLoadingProducts] = useState(false);
    const [formCt, setForm] = useState({
        control: false,
        data: null,
        isUccess: false,
    });

    return (
        <GlobalContext.Provider
            value={{
                errorLoading,
                setErrorLoading,
                homeLoading,
                setHomeLoading,
                formCt,
                setForm,
                loadingProducts,
                setLoadingProducts,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

const useGlobalContext = () => {
    return useContext(GlobalContext);
};

export { ContainersProvider, useGlobalContext };
