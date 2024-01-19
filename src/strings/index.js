import stringsDefault from "./defaultString"
import stringsTr from "./stringsTr"

import {supportedLanguages} from "@/components/LanguageContextAdapter"
function getString(key, language){
    switch (language){
        case supportedLanguages.Turkish.lang:
            return stringsTr[key];
        default:
            return stringsDefault[key];
    }
}

export {getString}