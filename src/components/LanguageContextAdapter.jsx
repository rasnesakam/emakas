"use client"

import {createContext, useContext, useState} from "react";


const LanguageContext = createContext();

const supportedLanguages = {
    English: {lang:"ENGLISH", label:"English", slug: "en"},
    Turkish: {lang: "TURKISH", label:"Türkçe", slug: "tr"}
}

const LanguageContextAdapter = ({children}) => {

    const [lang, setLang] = useState(supportedLanguages.English)
    return <>
            <LanguageContext.Provider value={{language:lang, setLanguage: setLang}}>
                {children}
            </LanguageContext.Provider>
        </>
}

function useLanguageContext() {
    return useContext(LanguageContext);
}

export {supportedLanguages, LanguageContext, LanguageContextAdapter, useLanguageContext}
