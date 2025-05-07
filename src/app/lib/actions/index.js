
import {saveMessage} from "@/firebase/MessageRepository";



export async function saveContactMessage(formdata){
  let contactName = formdata.get("contact-name");
  let contactMail = formdata.get("contact-mail");
  let contactContent = formdata.get("contact-content");

  await saveMessage({name: contactName, email: contactMail, content: contactContent});
}