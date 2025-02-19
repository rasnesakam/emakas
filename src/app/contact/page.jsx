"use client"

import {useLanguageContext} from "@/components/LanguageContextAdapter";
import {getString, STRING_FORMATS} from "@/strings";
import {Input, Textarea} from "@nextui-org/input";
import {Button} from "@nextui-org/button";
import {saveContactMessage} from "@/app/lib/actions";

const Contact = () => {
    let language = useLanguageContext();

    return <>
        <div className="py-10">
            <div className="text-xl font-semibold">
                {getString("page-contact-title", language, STRING_FORMATS.UPPER)}
            </div>
            <div className="text-lg">
                {getString("page-contact-description", language)}
            </div>
        </div>
        <form action={saveContactMessage}>
            <div className="grid grid-cols-2 gap-4">
                <Input name="contact-name" label={getString("name", language, STRING_FORMATS.CAPITALIZED)} required/>
                <Input name="contact-mail" label={getString("email", language, STRING_FORMATS.CAPITALIZED)}/>
                <Textarea className="col-span-2" name="contact-content"
                          label={getString("content", language, STRING_FORMATS.CAPITALIZED)}>
                </Textarea>
                <Button type={"submit"} >{getString("form-send", language, STRING_FORMATS.UPPER)}</Button>
            </div>
        </form>
    </>
}

export default Contact;