import stringsDefault from "./defaultString"
import stringsTr from "./stringsTr"

import {supportedLanguages} from "@/components/LanguageContextAdapter"

const STRING_FORMATS = {
    LOWER: (str) => str.toLowerCase(),
    UPPER: (str) => str.toUpperCase(),
    CAPITALIZED: (str) => str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(" ")
}
function getString(key, language, format){
    switch (language){
        case supportedLanguages.Turkish:
            if (format !== undefined)
                return format(stringsTr[key]);
            return stringsTr[key];
        default:
            if (format !== undefined)
                return format(stringsDefault[key]);
            return stringsDefault[key];
    }
}

export {getString, STRING_FORMATS}